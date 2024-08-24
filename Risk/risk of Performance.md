# Risk LOG 
## Decision Details 
- Date: 24/08/24
- Author: Bingkun Li
- Decision Maker: front-end team made
  
## Background 
As the ANU CBE website will likely experience varying levels of traffic, especially during peak times such as the beginning of semesters, ensuring optimal performance is crucial for maintaining a smooth user experience. The front-end team conducted a performance analysis to identify potential bottlenecks in the website's architecture. React was selected for its flexibility and efficiency, but without proper optimization, the website may suffer from slow loading times, laggy interactions, and high resource consumption, particularly on less powerful devices or in low-bandwidth environments.

## team member
  
  Front-end: BeiJin, Bingkun Li, Jinsong Xin
 

## Decision content

1.How can we ensure that the website delivers optimal performance, especially during peak usage times?



## Decision Rationale 
1.Code Splitting and Lazy Loading:
React allows for the implementation of code splitting and lazy loading, which can significantly reduce the initial load time of the website by only loading the necessary components for each page. This helps in minimizing the amount of JavaScript that needs to be downloaded and parsed when the page first loads.

2.Performance Testing and Optimization:
Regular performance testing using tools like Lighthouse or WebPageTest will be conducted to identify and address any bottlenecks. Optimizations may include minimizing the use of heavy libraries, optimizing images, and ensuring that React components are efficiently rendered.

3.Caching and CDN Usage:
Implementing caching strategies for static assets and leveraging a Content Delivery Network (CDN) will help reduce server load and improve content delivery speed by serving content from servers geographically closer to the user


## Conclusion 
These strategies will be incorporated into the development process to ensure that the ANU CBE website performs efficiently under all conditions. Regular performance reviews and updates will be conducted to maintain optimal performance as the website evolves.
