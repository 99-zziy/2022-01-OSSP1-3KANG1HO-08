# selenium & webdriver-manager
from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
import time

# enable to use useful functions
from selenium.webdriver.common.keys import Keys

# exceptions
from selenium.common.exceptions import NoSuchElementException

# parse
from parser import parse_context

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
  # page = browser.find_element_by_xpath("//*[@id='goodsListWrap']/div[4]/div/strong")
  # page = int(page.text)

# get names of books, crawl one by one
books = browser.find_element_by_id("yesSchList")
books = books.find_elements_by_class_name("gd_name")
length = len(books)



for numofbooks in range(2):
  time.sleep(2)
  book = browser.find_element_by_xpath("//*[@id='yesSchList']/li[{}]/div/div[2]/div[2]/a[1]".format(numofbooks+1))
  book.click()
  try:
    time.sleep(2)
    contents = browser.find_element_by_id("infoset_toc")
    contents = contents.find_element_by_class_name("infoWrap_txt")
    contents_list.append([contents.text])
    browser.back()
  except NoSuchElementException:
    browser.back()
  

  # if(page % 10 == 0):
  #   nextPageBtn = browser.find_element_by_xpath("//*[@id='goodsListWrap']/div[4]/div/a[10]")
  #   nextPageBtn.click()
  # else:
  #   nextBtn = browser.find_element_by_xpath("//*[@id='goodsListWrap']/div[4]/div/a[{}]".format(page))
  #   nextBtn.click()
  # time.sleep(2)

# parse contexts by frequency
org_contents = []
for c in contents_list:
  org_contents.append(parse_context(c[0]))

# set keywords
contents = []

for e in org_contents:
  contents += e
print(sorted(contents))

browser.close()

