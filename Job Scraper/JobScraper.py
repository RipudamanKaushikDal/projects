import asyncio
from dataretriever import DataRetriever
from indeedparser import IndeedParser
from beaconparser import BeaconParser
from prettytable import PrettyTable

# TODO - Run all the apps here in this event loop


class JobScraper():

    # Initialize scraper with search urls and collect job results
    def __init__(self) -> None:
        # User Input for job postings
        jobsearch = input("Enter the job posting you want to search: ")
        search_indeed = jobsearch.replace(" ", "+")
        search_beacon = jobsearch.replace(" ", "-")
        self.indeed_url = f"https://ca.indeed.com/jobs?q={search_indeed}&l=Halifax%2C%20NS"
        self.beacon_url = f"https://www.careerbeacon.com/en/search/{search_beacon}-jobs-in-Halifax_Nova-Scotia?filter-date=Past+3+days"

    def pprint(self, jobs) -> None:
        if jobs == None:
            return
        for job_detail in jobs:
            if job_detail == [None, None, None]:
                return
            print(job_detail[0], '\t',
                  job_detail[1], '\t', job_detail[2])

    async def generate_output(self):
        scraper = DataRetriever([self.indeed_url, self.beacon_url])
        responses = await scraper.run()
        indeed_parser = IndeedParser(responses[0])
        self.pprint([["Title\t", "Company\t", "Date\t"]])
        indeed_jobs = await indeed_parser.get_jobs()
        self.pprint(indeed_jobs)
        beacon_parser = BeaconParser(responses[1])
        # beacon_jobs = await beacon_parser.get_jobs()
        # self.pprint([["Title\t", "Company\t", "Date\t"]])
        # self.pprint(beacon_jobs)

    def start(self):
        asyncio.run(self.generate_output())


JobScraper().start()
