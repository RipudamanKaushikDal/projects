import asyncio
import aiohttp
import time


async def getrequest(session,url):
	async with session.get(url) as response:
		resp = await response.json()
		return resp


async def getdata(tags):
	async with aiohttp.ClientSession() as session:
		links=[]
		database_url="http://www.omdbapi.com/?apikey=dfe6d885"
		for tag in tags:
			url=database_url+"&s="+tag
			links.append(getrequest(session,url))

		responses = await asyncio.gather(*links, return_exceptions=True)
		print (responses)
	
loop = asyncio.get_event_loop()
t0=time.time()
loop.run_until_complete(getdata(["batman","express"]))
t1=time.time()
print(1000*(t1-t0))