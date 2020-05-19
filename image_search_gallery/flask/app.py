from flask import Flask,jsonify,request
import cv2
from imutils import paths
from index_images import index
from search import search_images

app=Flask(__name__)

@app.route("/",methods=['GET'])
def home():
	return("Image server is running")

@app.route("/images",methods=['GET'])
def get_images():
    imagepaths=list(paths.list_images('dataimages'))
    return jsonify({'imgpaths':imagepaths})

@app.route("/search",methods=['GET','POST'])
def searchimage(query):
    if request.method == 'POST':
        query=request.args['path']
        prog=search_images(query)
    return jsonify({'imgpaths':prog})

if __name__ == '__main__':
    app.run(debug=True,host='0.0.0.0')
    
