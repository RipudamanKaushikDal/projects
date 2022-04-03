from abstractparser import AbstractParser, exception_handler


# Indeed.com Scraper


class IndeedParser(AbstractParser):

    job_bank = "Indeed"

    @exception_handler
    # Run all the async methods and return a list of job openings
    def find_jobs(self) -> list:
        job_html = self.parse_jobs_page()
        job_div = job_html.find("div", id="mosaic-provider-jobcards")
        jobslist = job_div.find_all("a")
        return list(jobslist)

    @exception_handler
    # Async methods to get selective data from the sites
    def get_title(self, job) -> str:
        title_elem = job.find('h2', class_='jobTitle')
        title = title_elem.string
        return title

    @exception_handler
    def get_company(self, job) -> str:
        company_elem = job.find('span', class_='companyName')
        company = company_elem.text.strip()
        return company

    @exception_handler
    def get_date(self, job) -> str:
        date_elem = job.find('span', class_='myJobsState')
        date = date_elem.text.strip()
        return date

    # For future use
    '''async def get_summary(self,job):
        summary_elem = job.find('div',class_='summary')
        summary= summary_elem.text.lstrip()
        await asyncio.sleep(0.1)
        return summary'''
