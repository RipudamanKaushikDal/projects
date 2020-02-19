from pydrive.drive import GoogleDrive
from pydrive.auth import GoogleAuth
import os

gauth = GoogleAuth()
# Creates local webserver and auto handles authentication.
gauth.LocalWebserverAuth()

drive = GoogleDrive(gauth) # Create GoogleDrive instance with authenticated GoogleAuth instance

#List the path to the home directory for datatset
path='/home/ripudaman/Projects/face_recognition/dataset'

# Auto-iterate through all files in the root folder.
index_list = drive.ListFile({'q': "'root' in parents and trashed=false"}).GetList()
for names in index_list:
	if names['title']=='Images':
		parent_id=names["id"]
		fold_list= drive.ListFile({'q': "'{}' in parents and trashed=false".format(parent_id)}).GetList()
		for folds in fold_list:
			os.chdir(path)
			dir=folds["title"]
			if not os.path.exists(dir):
				os.mkdir(dir)
				print("Directory:",dir,"Created")
				os.chdir(dir)
			else:
				print("Directory:",dir,"Already Exists")
				pass
			fold_id=folds["id"]
			file_list = drive.ListFile({'q': "'{}' in parents and trashed=false".format(fold_id)}).GetList()
			for file1 in file_list:
				print('Downloading {} from GDrive ({}/{})'.format(file1['title'],file_list.index(file1)+1, len(file_list)))
				file1.GetContentFile(file1['title'])

