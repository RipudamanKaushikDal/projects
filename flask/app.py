from flask import Flask,jsonify,request
from imutils import paths
from index_images import index
from search import search_images

app=Flask(__name__)

@app.route("/images",methods=['GET'])
def get_images():
    imagepaths=list(paths.list_images('/dataimages'))
    return jsonify({'imgpaths':imagepaths})

def image_hash():
    index()

@app.route("/search",methods=['GET','POST'])
def searchimage(query):
    if request.method == 'POST':
        query=request.args['path']
        prog=search_images(query)
    return jsonify({'imgpaths':prog})

if __name__ == '__main__':
    app.run(debug=True)
    image_hash()
