from hashing import convert_hash
from hashing import dhash
from imutils import paths
import pickle
import vptree
import time
import cv2


def search_images(querypath):
	#load VP-Tree and hashes dictionary
	print("[INFO] loading VP-Tree and hashes...")
	tree=pickle.loads(open("tree.pickle",'rb').read())
	hashes=pickle.loads(open('hashes.pickle','rb').read())

	#load the input query image
	image=cv2.imread(querypath)

	#compute hash for query image, then convert it
	queryHash=dhash(image) 
	queryHash=convert_hash(queryHash)

	# perform the search
	print("[INFO] performing search...")
	start = time.time()
	results = tree.get_all_in_range(queryHash, 18)
	results = sorted(results)
	end = time.time()
	print("[INFO] search took {} seconds".format(end - start))

	resultpaths=[]

	# loop over the results
	for (d, h) in results:
		# grab all image paths in our dataset with the same hash
		results = hashes.get(h, [])
		print("[INFO] {} total image(s) with d: {}, h: {}".format(
			len(resultpaths), d, h))
		resultpaths.append(results[0])
	print (resultpaths)
	return (resultpaths)
		

