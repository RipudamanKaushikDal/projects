import asyncio
import aiohttp
import time
from indeedscraper import IndeedScraper
from beaconscraper import BeaconScraper
from prettytable import PrettyTable

# User Input for job postings
jobsearch = input("Enter the job posting you want to search: ")

class JobScraper():

    # Initialize scraper with search urls and collect job results
    def __init__(self,searchterm):
        search_indeed  = searchterm.replace(" ","+")
        search_beacon  = searchterm.replace(" ","-")
        indeed_url =f"https://ca.indeed.com/jobs?q={search_indeed}&l=Halifax%2C+NS&fromage=3"
        beacon_url = f"https://www.careerbeacon.com/en/search/{search_beacon}-jobs-in-Halifax_Nova-Scotia?filter-date=Past 3 days"
        loop = asyncio.get_event_loop()
        t0=time.time()
        responses=loop.run_until_complete(self.runscraper(indeed_url,beacon_url))
        self.indeed_data=IndeedScraper().get_results(responses[0])
        self.beacon_data=BeaconScraper().get_results(responses[1])
        t1=time.time()
        self.time=(t1-t0)

    # Pretty Print the data in tabular form
    def __str__(self):
        print("\n\t\t\t\tINDEED\n")
        indeed_headers = self.indeed_data[0].keys()
        indeed_table = PrettyTable(field_names=indeed_headers)
        for jobs in self.indeed_data:
            indeed_table.add_row(list(jobs.values()))
        print(indeed_table)

        print("\n\t\t\t\tCAREER BEACON\n") 
        beacon_headers = self.beacon_data[0].keys()
        beacon_table = PrettyTable(field_names=beacon_headers)
        for jobs in self.beacon_data:
            beacon_table.add_row(list(jobs.values()))
        print(beacon_table)

        return f"\nFound {len(self.indeed_data)} posts from Indeed.com and {len(self.beacon_data)} posts from CareerBeacon.com in {self.time} seconds\n"

        
    # Async method to collect binary data from the urls
    async def getdata (self,session,url):
        async with session.get(url) as response:
            resp = await response.read()
            return resp


    # Async method to retrieve data from multiple sites
    async def runscraper(self,indeedurl,beaconurl):
        async with aiohttp.ClientSession() as session:
            task1 = self.getdata(session,indeedurl)
            task2 = self.getdata(session,beaconurl)
            responses = await asyncio.gather(task1,task2,return_exceptions=True)
            return responses

# Run the Scraper
print(JobScraper(jobsearch))

