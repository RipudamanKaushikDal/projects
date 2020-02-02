# import the necessary packages
from imutils import paths
import face_recognition
import pickle
import cv2
import os
import imutils
import kivy
import sqlite3
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
	email=ObjectProperty(None)
	model=ObjectProperty(None)
	label1=ObjectProperty(None)
	label2=ObjectProperty(None)
	check1=ObjectProperty(None)		

	def cb_active(self,value):
		if value:
			self.model=self.label1.text
		else:
			self.model=self.label2.text

	def Pops(self,*args):
		Pop().open()

	def create_database(self,*args):
		connection=sqlite3.connect("appdata.db")
		cursor=connection.cursor()

		command="""
		CREATE TABLE IF NOT EXISTS info( dataset text,
						encodings text, 
						email text)"""
		entry="""INSERT INTO info(dataset,encodings,email)
			VALUES(?,?,?)"""
		value=(self.dataset.text,self.encodings.text,self.email.text)
		cursor.execute(command)
		cursor.execute(entry,value)
		connection.commit()
		connection.close()

	def update_database(self,*args):
		connection=sqlite3.connect("appdata.db")
		cursor=connection.cursor()
		words=('dataset','encodings','email')
		varis=(self.dataset.text,self.encodings.text,self.email.text)
		for (word,var) in zip(words,varis):
			cursor.execute("SELECT %s FROM info" % word)
			rows=cursor.fetchall()
			for row in rows:
				if var!=row[0] and var!=" ":
					cursor.execute('''UPDATE info
							SET %s=? ''' % (word), (var,))
		connection.commit()
		connection.close()

	def preset_fields(self,*args):
		connection=sqlite3.connect("appdata.db")
		cursor=connection.cursor()
		vals=[]
		words=('dataset','encodings','email')
		for word in words:
			cursor.execute("SELECT %s FROM info" % word)
			rows=cursor.fetchall()
			for row in rows:
				vals.append(row[0])
		connection.commit()
		connection.close()
		self.dataset.text= vals[0]
		self.encodings.text= vals[1]
		self.email.text= vals[2]

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
		if "appdata.db" not in files:
			self.create_database()
		else:
			self.update_database()
		if self.encodings.text in files:
			self.Pops()
		else:
			self.encode(self.dataset.text,self.encodings.text,self.model)


class Pop(Popup):
	pass


class MainWindow(Screen):

	model=ObjectProperty(None)
	label1=ObjectProperty(None)
	label2=ObjectProperty(None)
	check1=ObjectProperty(None)
	

	def cb_active(self,value):
		if value:
			self.model=self.label1.text
		else:
			self.model=self.label2.text

	def find_encodings(self):
		path=os.getcwd()
		files=os.listdir(path)
		for i in files:
			if ".pickle" in i:
				encoded_file=i
		return encoded_file

	def capture(self,encoding_file,detection_method):
		# load the known faces and embeddings
		print("[INFO] loading encodings...")
		data = pickle.loads(open(encoding_file, "rb").read())
		names=[]
		# initialize the video stream and pointer to output video file, then
		# allow the camera sensor to warm up
		print("[INFO] starting video stream...")
		vs = cv2.VideoCapture(0)
		# grab the frame from the threaded video stream
		s,frame = vs.read()
		if s:

			# convert the input frame from BGR to RGB then resize it to have
			# a width of 750px (to speedup processing)
			rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)

			# detect the (x, y)-coordinates of the bounding boxes
			# corresponding to each face in the input frame, then compute
			# the facial embeddings for each face
			boxes=face_recognition.face_locations(rgb,model=detection_method)
			encodings=face_recognition.face_encodings(rgb,boxes)
			
				# loop over the facial embeddings
			for encoding in encodings:
				# attempt to match each face in the input image to our known
				# encodings
				matches = face_recognition.compare_faces(data["encodings"],
					encoding)
				name = "Unknown"
					# check to see if we have found a match
				if True in matches:
					# find the indexes of all matched faces then initialize a
					# dictionary to count the total number of times each face
					# was matched
					matchedIdxs = [i for (i, b) in enumerate(matches) if b]
					counts = {}
		 
					# loop over the matched indexes and maintain a count for
					# each recognized face face
					for i in matchedIdxs:
						name = data["names"][i]
						counts[name] = counts.get(name, 0) + 1
		 
					# determine the recognized face with the largest number
					# of votes (note: in the event of an unlikely tie Python
					# will select first entry in the dictionary)
					name = max(counts, key=counts.get)
				
				# update the list of names
				names.append(name)
			# loop over the recognized faces
			for ((top, right, bottom, left), name) in zip(boxes, names):
				# draw the predicted face name on the image
				cv2.rectangle(frame, (left, top), (right, bottom),
					(0, 255, 0), 2)
				y = top - 15 if top - 15 > 15 else top + 15
				cv2.putText(frame, name, (left, y), cv2.FONT_HERSHEY_SIMPLEX,
					0.75, (0, 255, 0), 2)

			# display output frame on screen
			
			cv2.imshow("Frame", frame)
			cv2.waitKey(0)
			# do a bit of cleanup
			cv2.destroyAllWindows()
			vs.release()
		return names

	def attendance(self):
		#check to see the encodings_file
		encoding_data=self.find_encodings()
		while True:
			person=self.capture(encoding_data,self.model)
			
			if person !=[]:
				#add name to database
				if len(person)>1:
					attn=open("records.txt","w+")
					for j in names:
						attn.write("%s %s\n%s %s\n"%("Name:",j,"Attendence:","Present"))
					print("All Done!")
					attn.close()
					break
				else:
					attn=open("records.txt","w+")
					attn.write("%s %s\n%s %s\n"%("Name:",person[0],"Attendence:","Present"))
					attn.close()
					print("All Done!")
					break
				
			else:
				print("Face not found")
				pass



class WindowManager(ScreenManager):
	pass

kv = Builder.load_file("gui.kv")

sm=WindowManager()
screens= [DataEncode(name="encodes"), MainWindow(name="main")]
for screen in screens:
	sm.add_widget(screen)
sm.current="main"

class MyApp(App):
	def build(self):		
		return sm



if __name__ == "__main__":
    MyApp().run()
