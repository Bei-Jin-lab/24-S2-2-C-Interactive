# Week 4 IndividualReflection 
**Name**:  Jinghan Gao

### 1. What have been done? What challenges and how did I solve them?
This week, our main task was to collect data. I wrote a Python web scraper to extract and compile links related to the Canvas guide into a CSV file. Meanwhile, my teammate manually gathered relevant Canvas-related content from SharePoint. We then uploaded all collected data to OneDrive for further processing.
One challenge I encountered was ensuring the scraper functioned efficiently without triggering IP bans. To address this, I implemented a deduplication mechanism to avoid redundant requests and added a randomized delay of 2 to 5 seconds between requests to reduce the risk of being blocked. These improvements enhanced the stability and reliability of the web scraper.


### 2. Reflection: What did I learn or improve?
This week, I gained a deeper understanding of web scraping techniques. I learned how to handle duplicate data effectively and how to incorporate random delays to prevent potential IP bans. These refinements improved my ability to write more robust and efficient scraping scripts. Moving forward, I plan to explore more advanced web scraping strategies and ensure that the collected data is properly structured for integration into our AI chatbot training process.