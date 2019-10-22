# import the necessary packages
from imutils import paths
import face_recognition
import pickle
import cv2
import os
import imutils
import kivy
from kivy.app import App
from kivy.uix.screenmanager import ScreenManager, Screen
from kivy.uix.label import Label
from kivy.uix.gridlayout import GridLayout
from kivy.uix.widget import Widget
from kivy.properties import ObjectProperty
from kivy.uix.checkbox import CheckBox
from kivy.uix.popup import Popup
from kivy.lang import Builder


class DataEncode(Screen):


	dataset=ObjectProperty(None)
	encodings=ObjectProperty(None)
	model=ObjectProperty(None)
	label1=ObjectProperty(None)
	label2=ObjectProperty(None)
	check1=ObjectProperty(None)
	

	def cb_active(self,cbinstance,value):
		if value:
			self.model=self.label1.text
		else:
			self.model=self.label2.text

	def Pops(self,*args):
		Pop().open()

	def encode(self,dataset,encodings_path,detectionmethod):
		# grab the paths to the input images in our dataset
		print("[INFO] quantifying faces...")
		imagePaths = list(paths.list_images(dataset))

		# initialize the list of known encodings and known names
		knownEncodings = []
		knownNames = []

		# loop over image paths
		for (i,imagePath) in enumerate(imagePaths):
			# extract the person name from the image path
			print("[INFO] processing image {}/{}".format(i+1,len(imagePaths)))
			name= imagePath.split(os.path.sep)[-2]
			
			# load the input image and convert it from BGR (OpenCV ordering)
			# to dlib ordering (RGB) and resize them for fast processing
			image = cv2.imread(imagePath)
			resize=imutils.resize(image,width=720,height=960)
			rgb = cv2.cvtColor(resize, cv2.COLOR_BGR2RGB)
			
			# detect the (x, y)-coordinates of the bounding boxes
			# corresponding to each face in the input image
			boxes = face_recognition.face_locations(rgb,model=detectionmethod)

			# compute the facial embedding for the face
			encodings= face_recognition.face_encodings(rgb,boxes)

				# loop over the encodings
			for encoding in encodings:
				# add each encoding + name to our set of known names and
				# encodings
				knownEncodings.append(encoding)
				knownNames.append(name)
			# dump the facial encodings + names to disk
		print("[INFO] serializing encodings...")
		data = {"encodings": knownEncodings, "names": knownNames}
		f =open(encodings_path, "wb")
		f.write(pickle.dumps(data))
		f.close()
		self.Pops()

	def btn(self):
		path=os.getcwd()
		files=os.listdir(path)
		if self.encodings.text in files:
			self.Pops()
		else:
			self.encode(self.dataset.text,self.encodings.text,self.model)


class Pop(Popup):
	pass


class MainWindow(Screen):
	pass


class WindowManager(ScreenManager):
	pass

kv = Builder.load_file("gui.kv")

sm=WindowManager()
screens= [DataEncode(name="encodes"), MainWindow(name="main")]
for screen in screens:
	sm.add_widget(screen)
sm.current="encodes"

class MyApp(App):
	def build(self):
		return sm



if __name__ == "__main__":
    MyApp().run()
