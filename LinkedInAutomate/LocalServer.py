from flask import Flask, render_template, make_response, request
from flask_restful import Api, Resource
from flask_pymongo import PyMongo
import configparser
from LinkedIn import LinkedInBot
import os


app = Flask(__name__)
api = Api(app)
app.config["MONGO_URI"] = "mongodb+srv://admin:Gu67rlhvXJ27GSl0@cluster0.fap05.mongodb.net/ProjectDB?retryWrites=true&w=majority"
mongo = PyMongo(app)


class DataForm (Resource):

    def get(self):
        headers = {'Content-Type': 'text/html'}
        return make_response(render_template('mainpage.html'), headers)


class CreatePost (Resource):

    def post(self):

        image_data = request.files.getlist("imagepath")
        text_post = request.form.get("posttext")
        post_title = request.form.get("title")
        github_link = request.form.get("github")
        save_data = request.form.get("upload")
        post_online = request.form.get("make_post")
        imagepaths = [os.path.abspath(image.filename) for image in image_data]

        if post_online == "Yes":
            config = configparser.ConfigParser()
            config.read('./config.ini')

            username = config["CREDS"]["USERNAME"]
            password = config["CREDS"]["PASSWORD"]
            bot = LinkedInBot(username, password)
            bot.login()

            if image_data[0].filename == '':
                bot.post_text(text_post, github_link)

            else:
                bot.post_with_image(text_post, github_link, imagepaths)

        if save_data == "Yes":
            imagenames = []
            for image in image_data:
                mongo.save_file(image.filename, image)
                imagenames.append(image.filename)

            post_data = {
                "text": text_post,
                "title": post_title,
                "images": imagenames,
                "Github": github_link
            }

            mongo.db.Projects.insert_one(post_data)

        return "Done!"


api.add_resource(DataForm, "/")
api.add_resource(CreatePost, "/create")


if __name__ == "__main__":
    app.run(debug=True)
