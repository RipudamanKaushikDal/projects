import asyncio
from bs4 import BeautifulSoup

# Indeed.com Scraper
class IndeedScraper ():

    # Run all the async methods and return a list of job openings
    def get_results(self,jobspage):
        soup = BeautifulSoup(jobspage,"html.parser")
        job_soup = soup.find("td",id="resultsCol")
        jobslist = job_soup.find_all("div","jobsearch-SerpJobCard unifiedRow row result")
        loop = asyncio.get_event_loop()
        result=loop.run_until_complete(self.get_jobs(jobslist))
        return result

    # Async methods to get selective data from the sites
    async def get_title(self,job):
        title_elem = job.find('h2',class_='title')
        title = title_elem.text.strip()
        await asyncio.sleep(0.1)
        return title

    async def get_company(self,job):
        company_elem = job.find('span', class_='company')
        company = company_elem.text.strip()
        await asyncio.sleep(0.1)
        return company

    async def get_date(self,job):
        date_elem = job.find('span',class_='date')
        date = date_elem.text.strip()
        await asyncio.sleep(0.1)
        return date

    # For future use
    '''async def get_summary(self,job):
        summary_elem = job.find('div',class_='summary')
        summary= summary_elem.text.lstrip()
        await asyncio.sleep(0.1)
        return summary'''

    async def job_details(self,job):
        jobdetails={}
        jobdetails["Title"]= await self.get_title(job)
        jobdetails["Company Name"]= await self.get_company(job)
        jobdetails["Date"] = await self.get_date(job)
        #jobdetails["Summary"] = await self.get_summary(job)
        return jobdetails

    # Get Selected fields for all the job listings concurrently
    async def get_jobs(self,jobslist):
        jobdata=[]
        for job in jobslist:
            jobdata.append(self.job_details(job))

        indeed_jobs= await asyncio.gather(*jobdata, return_exceptions=True)
        return indeed_jobs


