import sqlite3

dataset=""
encodings=""
email=""

connection=sqlite3.connect("appdata.db")
cursor=connection.cursor()
words=('dataset','encodings','email')
varis=[dataset,encodings,email]
for (word,i) in zip(words,range(3)):
	cursor.execute("SELECT %s FROM info" % word)
	rows=cursor.fetchall()
	for row in rows:
		varis[i]=row[0]
		print(varis[i])
