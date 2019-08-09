import time
from selenium import webdriver

driver=webdriver.Firefox()
driver.get("https://psarips.net/")
time.sleep(10)
search=driver.find_element_by_xpath('//*[@class="search"]').send_keys('deadly')
time.sleep(2)
search.send_keys(Keys.ENTER)

