from abc import ABC, abstractmethod
import asyncio
from typing import List
from bs4 import BeautifulSoup


def get_exception_handler():
    def run_func(func):
        def inner(*args):
            try:
                value = func(*args)
                return value
            except:
                return None
        return inner
    return run_func


exception_handler = get_exception_handler()


class AbstractParser(ABC):

    @property
    def job_bank(self) -> str:
        pass

    def __init__(self, htmlPage) -> None:
        super().__init__()
        self.htmlPage = htmlPage
        print(f"\nGetting jobs from {self.job_bank}.com")

    @abstractmethod
    def find_jobs(self) -> list:
        pass

    @abstractmethod
    def get_title(self, job) -> str:
        pass

    @abstractmethod
    def get_company(self, job) -> str:
        pass

    @abstractmethod
    def get_date(self, job) -> str:
        pass

    def parse_jobs_page(self) -> BeautifulSoup:
        soup = BeautifulSoup(self.htmlPage, "html.parser")
        return soup

    async def get_job_detail(self, job) -> List[str]:
        title, company, date = self.get_title(
            job),  self.get_company(job), self.get_date(job)
        job_detail = [title, company, date]
        await asyncio.sleep(0.1)
        return job_detail

    async def get_jobs(self) -> list:
        jobsList = self.find_jobs()
        jobs = await asyncio.gather(*[self.get_job_detail(job) for job in jobsList], return_exceptions=True)
        return jobs
