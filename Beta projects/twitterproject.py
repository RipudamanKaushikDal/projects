from tweepy import Stream
from tweepy.streaming import StreamListener
import tweepy
from tweepy import OAuthHandler
import json

d=dict() 
inverse=dict()

consumer_key ='MKJa3cAkHBvzeVuOcIyca7wy3'
consumer_secret ='OSQDcjX8Nbpret2KTT4NydI14XgmnLUCXnQHtDMzmjd2Mwb0K3'
access_token ='1118519767630004225-UYEAXLNmzSHOQwNSiyPMWzcj8GYW6k'
access_secret ='L8J3rjERZwYDn1VcANLa6mFLQY1g8KHkIPCCF5ROpQ0nT'
 
auth = OAuthHandler(consumer_key, consumer_secret)
auth.set_access_token(access_token, access_secret)
 
api = tweepy.API(auth)

for tweet in tweepy.Cursor(api.user_timeline).items():
    process_or_store(tweet._json)

class MyListener(StreamListener):
 
    def on_data(self, data):
        try:
            with open('python.json', 'w') as f:
                f.write(data)
                return True
        except BaseException as e:
            print("Error on_data: %s" % str(e))
        return True
 
    def on_error(self, status):
        print(status)
        return True
 
twitter_stream = Stream(auth, MyListener())
twitter_stream.filter(track=['#cricket'])

with open('python.json', 'r') as f:
    for line in f:
        tweet = json.loads(line) # load it as Python dict
        tweets=json.dumps(tweet['text']) # dump each tweet as a string
        mylist=tweets.split()
        for words in mylist:
           if words.startswith('#'):
              if words not in d:
                  d[words]=1
              else:
                  d[words]+=1


for key, value in d.items():
    inverse.setdefault(value, list()).append(key)
print(inverse)
    
freqlist=inverse.items()
freqlist.sort(reverse=True)
print('The first 3 most used hashtags are')
for i in range(3):
    print(freqlist[i])
