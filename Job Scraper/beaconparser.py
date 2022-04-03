from abstractparser import AbstractParser, exception_handler

# CareerBeacon.com Scraper


class BeaconParser (AbstractParser):

    job_bank = "CareerBeacon"

    @exception_handler
    # Run all the methods and return a list of job openings
    def find_jobs(self):
        job_html = self.parse_jobs_page()
        job_soup = job_html.find(
            'table', class_="mybeacon_table fixed_layout job_list")
        jobslist = job_soup.find_all("div", "job_details")
        return list(jobslist)

    @exception_handler
    # Async methods to get selective data from the sites
    def get_title(self, job):
        title_elem = job.find('strong')
        title = title_elem.text.strip()
        return title

    @exception_handler
    def get_company(self, job):
        company_elem = job.find('span', class_='name')
        company = company_elem.text.strip()
        return company

    @exception_handler
    def get_date(self, job):
        date_elem = job.find('div', class_="job_pub_date")
        date = date_elem.text.replace('\t', "")
        date = date.strip()
        return date
