import flask

app=flask.Flask(__name__)

@app.route("/",methods=['GET'])
def get_images():
    return ("Hi There!")



if __name__ == '__main__':
    app.run(debug=True,host='0.0.0.0')
