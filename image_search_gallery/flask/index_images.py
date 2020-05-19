from hashing import convert_hash
from hashing import hamming
from hashing import dhash
from imutils import paths
import pickle
import vptree
import cv2
import os


def index():
	# grab the paths to the input images and initialize the dictionary
	# of hashes
	imagePaths = list(paths.list_images('dataimages'))
	hashes = {}
	# loop over the image paths
	for (i, imagePath) in enumerate(imagePaths):
		# load the input image
		print("[INFO] processing image {}/{}".format(i + 1,
			len(imagePaths)))
		image = cv2.imread(imagePath)
		# compute the hash for the image and convert it
		h = dhash(image)
		h = convert_hash(h)
		# update the hashes dictionary
		l = hashes.get(h, [])
		l.append(imagePath)
		hashes[h] = l

	#build the vp-tree
	print("[INFO] Building VP Tree...")
	points=list(hashes.keys())
	tree=vptree.VPTree(points, hamming)

	# serialize the VP-Tree to disk
	print("[INFO] serializing VP-Tree...")
	f = open("tree.pickle", "wb")
	f.write(pickle.dumps(tree))
	f.close()

	# serialize the hashes to dictionary
	print("[INFO] serializing hashes...")
	f = open("hashes.pickle", "wb")
	f.write(pickle.dumps(hashes))
	f.close()

#check if files already exist
path=os.getcwd()
files=os.listdir(path)
for i in files:
	if "hashes.pickle" and "tree.pickle" in i:
		encoded_file=i
print("ALL DONE!")


