import json
from nlp import tokenize, Stem, bag_of_words
import numpy as np
import torch
import torch.nn as nn
from torch.utils.data import DataLoader, Dataset
from model import NeuralNet

with open('intents.json', 'r') as file:
    data = json.load(file)

words = []
tags = []
vectors = []


def pre_processing(intent):
    tags.append(intent["tag"])
    for pattern in intent["patterns"]:
        wrds = tokenize(pattern)
        words.extend(wrds)
        vectors.append((wrds, intent["tag"]))


for intent in data["intents"]:
    pre_processing(intent)

stemmed = set(map(Stem, words))
print(stemmed)
words = sorted(stemmed)
tags = sorted(set(tags))

x_train = []
y_train = []

for (token_sentence, tag) in vectors:
    bag = bag_of_words(token_sentence, words)
    x_train.append(bag)
    label = tags.index(tag)
    y_train.append(label)

x_train = np.array(x_train)
y_train = np.array(y_train)


class ChatDataset(Dataset):
    def __init__(self):
        self.n_samples = len(x_train)
        self.x_data = x_train
        self.y_data = y_train

    def __getitem__(self, idx):
        return self.x_data[idx], self.y_data[idx]

    def __len__(self):
        return self.n_samples


# Hyper-parameters
hidden_size = 8
input_size = len(x_train[0])
ouput_size = len(tags)
learning_rate = 0.01
num_epochs = 1000

dataset = ChatDataset()
training_loader = DataLoader(dataset=dataset, batch_size=8, shuffle=True)

device = torch.device('cpu')
model = NeuralNet(input_size, hidden_size, ouput_size).to(device)

# loss and optimizer

criterion = nn.CrossEntropyLoss()
optimizer = torch.optim.Adam(model.parameters(), lr=learning_rate)

for epoch in range(num_epochs):
    for (words, labels) in training_loader:
        words = words.to(device)
        labels = labels.to(device)

        # forward
        output = model(words)
        loss = criterion(output, labels)

        optimizer.zero_grad()
        loss.backward()
        optimizer.step()

    if (epoch + 1) % 100 == 0:
        print(f"epoch {epoch+1}/{num_epochs}, loss = {loss.item():.4f}")

print(f"Final loss = {loss.item():.4f}")
