from flask import Flask,jsonify,request,send_file
import cv2
from imutils import paths
from index_images import index
from search import search_images
from flask_cors import CORS,cross_origin


app=Flask(__name__)
CORS(app)

@app.route("/",methods=['GET'])
def home():
    return("Image server is running")

@app.route("/photos",methods=['GET'])
def send_paths():
    imagepaths=list(paths.list_images('dataimages'))
    response=jsonify({'imgpaths':imagepaths})
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response 

@app.route("/photos/<path:path_name>",methods=['GET'])
@cross_origin()
def get_images(path_name):
    return send_file(path_name)

@app.route("/search",methods=['GET','POST'])
@cross_origin()
def searchimage():
    if request.method == 'POST':
        query=request.get_json()
        prog=search_images(query['path'])

    response=jsonify({'searchpaths':prog})
    print(response)
    return response

if __name__ == '__main__':
    app.run(debug=True)
    index()
