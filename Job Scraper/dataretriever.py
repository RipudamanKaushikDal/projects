import asyncio
import aiohttp


class DataRetriever():

    def __init__(self, urlList) -> None:
        self.urlList = urlList

    # Async method to collect binary data from a url
    async def getdata(self, session: aiohttp.ClientSession, url: str) -> bytes:
        try:
            resp = await session.get(url)
            response = await resp.read()
            return response
        except:
            print(f"Error occured fetching {url}")

    # Async method to retrieve data from multiple sites
    async def run(self) -> list:
        async with aiohttp.ClientSession() as session:
            responses = await asyncio.gather(*[self.getdata(session, url) for url in self.urlList], return_exceptions=True)
            return responses
