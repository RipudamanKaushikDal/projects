import nltk
from nltk.stem.porter import PorterStemmer
import numpy as np

#nltk.download('punkt')
stemmer = PorterStemmer()


def tokenize(sentence):
    return nltk.word_tokenize(sentence)


def Stem(word):
    forbidden = ["!", "?", ".", ","]
    if word in forbidden:
        return ""
    else:
        return stemmer.stem(word.lower())


def bag_of_words(token_sentence, words):
    token_sentence = [Stem(word) for word in token_sentence]
    bag = np.zeros(len(words), dtype=np.float32)
    for idx, word in enumerate(words):
        if word in words:
            bag[idx] = 1.0

    return bag
