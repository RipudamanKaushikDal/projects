#import the necessary packages
import numpy as np
from imutils.video import VideoStream 
import face_recognition
import argparse
import imutils
import pickle 
import time
import cv2

# construct the argument parser and parse the arguments
ap = argparse.ArgumentParser()
ap.add_argument("-e", "--encodings", required=True,
	help="path to serialized db of facial encodings")
ap.add_argument("-y", "--display", type=int, default=1,
	help="whether or not to display output frame to screen")
ap.add_argument("-d", "--detection-method", type=str, default="cnn",
	help="face detection model to use: either `hog` or `cnn`")
args = vars(ap.parse_args())

# load the known faces and embeddings
print("[INFO] loading encodings...")
data = pickle.loads(open(args["encodings"], "rb").read())
names=[]

def capture():
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
		boxes=face_recognition.face_locations(rgb,model=args["detection_method"])
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

		# check to see if we are supposed to display the output frame to
		# the screen
		if args["display"] > 0:
			cv2.imshow("Frame", frame)
			cv2.waitKey(0)
			# do a bit of cleanup
			cv2.destroyAllWindows()
			vs.release()
	return names
while True:
	capture()
	if names !=[]:
		#add name to database
		if len(names)>1:
			for j in names:
				attn=open("records.txt","w+")
				attn.write("%s %s\n%s %s\n"%("Name:",j,"Attendence:","Present"))
				attn.close()
			print("All Done!")
			break
		else:
			attn=open("records.txt","w+")
			attn.write("%s %s\n%s %s\n"%("Name:",names[0],"Attendence:","Present"))
			attn.close()
			print("All Done!")
			break
		
	else:
		print("Face not found")
		pass

 


