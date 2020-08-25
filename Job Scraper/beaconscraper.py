import asyncio
from bs4 import BeautifulSoup

# CareerBeacon.com Scraper
class BeaconScraper ():
            
    # Run all the async methods and return a list of job openings
    def get_results(self,jobspage):
        soup = BeautifulSoup(jobspage,"html.parser")
        job_soup = soup.find('table',class_="mybeacon_table fixed_layout job_list")
        jobslist = job_soup.find_all("div","job_details")
        loop = asyncio.get_event_loop()
        result=loop.run_until_complete(self.get_jobs(jobslist))
        return result

    # Async methods to get selective data from the sites
    async def get_title(self,job):
        title_elem = job.find('strong')
        title = title_elem.text.strip()
        await asyncio.sleep(0.1)
        return title

    async def get_company(self,job):
        company_elem = job.find('span', class_='name')
        company = company_elem.text.strip()
        await asyncio.sleep(0.1)
        return company

    async def get_date(self,job):
        date_elem = job.find('div',class_="job_pub_date")
        date = date_elem.text.replace('\t',"")
        date=date.strip()
        await asyncio.sleep(0.1)
        return date

    async def job_details(self,job):
        jobdetails={}
        jobdetails["Title"]= await self.get_title(job)
        jobdetails["Company Name"]= await self.get_company(job)
        jobdetails["Date"] = await self.get_date(job)
        return jobdetails

    # Get Selected fields for all the job listings concurrently
    async def get_jobs(self,jobslist):
        jobdata=[]
        for job in jobslist:
            jobdata.append(self.job_details(job))

        beacon_jobs = await asyncio.gather(*jobdata, return_exceptions=True)
        return beacon_jobs
    

