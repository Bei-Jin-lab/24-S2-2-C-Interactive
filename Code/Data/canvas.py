import csv
import time
import random
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from webdriver_manager.chrome import ChromeDriverManager
from bs4 import BeautifulSoup

# Configure Selenium
chrome_options = Options()
chrome_options.add_argument("--headless")  # Headless mode
chrome_options.add_argument("--disable-gpu")
chrome_options.add_argument("--window-size=1920x1080")
chrome_options.add_argument("user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36")

# Launch Selenium browser
service = Service(ChromeDriverManager().install())
driver = webdriver.Chrome(service=service, options=chrome_options)
driver.set_page_load_timeout(15)  # Set timeout to prevent freezing

# Visit the Canvas homepage and retrieve all 'tkb-p' category links
BASE_URL = "https://community.canvaslms.com/t5/Canvas/ct-p/canvas"
driver.get(BASE_URL)
time.sleep(random.uniform(2, 5))  # Random wait to prevent blocking

soup = BeautifulSoup(driver.page_source, "html.parser")

# Extract all category URLs (tkb-p pages)
category_links = []
for link in soup.select("a[href^='/t5/'][href*='tkb-p/']"):  # Find all category links containing 'tkb-p/'
    href = link.get("href")
    full_url = "https://community.canvaslms.com" + href
    if full_url not in category_links:
        category_links.append(full_url)

print(f"Found {len(category_links)} guide category pages")

# Step 2: Enter each 'tkb-p' category page and retrieve actual 'ta-p' articles
all_article_links = []

for category_url in category_links:
    try:
        print(f"Entering category page: {category_url}")
        driver.get(category_url)
        time.sleep(random.uniform(3, 6))

        soup = BeautifulSoup(driver.page_source, "html.parser")

        # Extract all article links (ta-p pages) in the current category
        article_links = []
        for guide_link in soup.select("a[href^='/t5/'][href*='/ta-p/']"):
            href = guide_link.get("href")
            title = guide_link.text.strip()
            full_url = "https://community.canvaslms.com" + href

            if full_url not in [a["url"] for a in all_article_links]:  # Remove duplicates
                article_links.append({"title": title, "url": full_url})

        print(f"Category {category_url} scraped successfully, found {len(article_links)} articles")

        all_article_links.extend(article_links)

    except Exception as e:
        print(f"Failed to access category {category_url}: {e}")

# Save the data to a CSV file
csv_filename = "canvas_guides.csv"

with open(csv_filename, "w", newline="", encoding="utf-8") as csvfile:
    csv_writer = csv.writer(csvfile)
    csv_writer.writerow(["Title", "URL"])  # Write header row

    for article in all_article_links:
        csv_writer.writerow([article["title"], article["url"]])

print(f"Scraping completed, data saved to {csv_filename}")

# Close the browser
driver.quit()
