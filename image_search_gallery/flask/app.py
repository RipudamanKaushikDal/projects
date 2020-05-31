#make necessary imports
from flask import Flask,jsonify,request,send_file
import cv2
from imutils import paths
from index_images import index
from search import search_images
from flask_cors import CORS,cross_origin

#set as flask app and allow cross-origin requests
app=Flask(__name__)
CORS(app)

#show message at homepage
@app.route("/",methods=['GET'])
def home():
    return("Image server is running")

#api to return all image locations hosted at server
@app.route("/photos",methods=['GET'])
def send_paths():
    imagepaths=list(paths.list_images('dataimages'))
    response=jsonify({'imgpaths':imagepaths})
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response 

# api to download images using their path location
@app.route("/photos/<path:path_name>",methods=['GET'])
@cross_origin()
def get_images(path_name):
    return send_file(path_name)

# api to return search results 
@app.route("/search",methods=['GET','POST'])
def searchimage():
    if request.method == 'POST':
        query=request.get_json()
        prog=search_images(query['path'])

    response=jsonify({'searchpaths':prog})
    response.headers.add('Access-Control-Allow-Origin', '*')
    print(response)
    return response

# hash images at when program starts
imageindex=index
imageindex()

if __name__ == '__main__':
    app.run(debug=True)
    
