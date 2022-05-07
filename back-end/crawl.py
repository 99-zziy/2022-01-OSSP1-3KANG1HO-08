# selenium & webdriver-manager
from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
import time

# enable to use useful functions
from selenium.webdriver.common.keys import Keys

# exceptions
from selenium.common.exceptions import NoSuchElementException

browser = webdriver.Chrome(ChromeDriverManager().install())
browser.get("http://www.yes24.com/Main/default.aspx")

# search keyword
search_text = "C언어"
search_bar = browser.find_element_by_id("query")
search_bar.clear()
search_bar.send_keys(search_text)
search_bar.send_keys(Keys.RETURN)

# filter only kor books
filter_kor = browser.find_element_by_xpath("//*[@id='filterWrap']/div/dl/dd/ul/li[1]/a")
filter_kor.click()

# get number of pages
pages = browser.find_element_by_xpath("//*[@id='goodsListWrap']/div[4]/div/a[11]")
pages = pages.get_property("title")
pages = int(pages)

contents_list = []

# # progress by number of pages
# for numofpages in range(pages):
#   # check current page number, go to next page if page % 10 == 0
#   page = browser.find_element_by_xpath("//*[@id='goodsListWrap']/div[4]/div/strong")
#   page = int(page.text)

# get names of books, crawl one by one
books = browser.find_element_by_id("yesSchList")
books = books.find_elements_by_class_name("gd_name")
length = len(books)

for numofbooks in range(length):
  books = browser.find_element_by_id("yesSchList")
  books = books.find_elements_by_class_name("gd_name")

  books[numofbooks].click()
  try:
    contents = browser.find_element_by_id("infoset_toc")
    contents = contents.find_element_by_class_name("infoWrap_txt")
    contents_list.append(contents.text)
    browser.back()
  except NoSuchElementException:
    browser.back()
  time.sleep(2)
  
  # if(page % 10 == 0):
  #   nextPageBtn = browser.find_element_by_xpath("//*[@id='goodsListWrap']/div[4]/div/a[10]")
  #   nextPageBtn.click()
  # else:
  #   nextBtn = browser.find_element_by_xpath("//*[@id='goodsListWrap']/div[4]/div/a[2]")
  #   nextBtn.click()
  # time.sleep(2)

print(contents_list)

browser.close()