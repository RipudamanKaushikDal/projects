import sqlite3


conn=sqlite3.connect("appdata.db")

cur = conn.cursor()
words=['dataset','encodings','email']

for word in words:
	cur.execute("SELECT %s FROM info" % word)
	rows = cur.fetchall()
 
	for row in rows:
		print(row[0])
