# DECISION LOG 
## Decision Details 
- Date: 19/08/24
- Decision Maker: front-end team made
  
## Background 
Since some functions cannot be implemented with WordPress, we decided to use basic code HTML or React. Based on the customer's concerns about the maintenance of HTML, that is, it cannot be easily maintained by programming novices.


## team member
  
  Front-end: BeiJin, Bingkun Li, Jinsong Xin
 

## Decision content

1.How can we make novice programmers maintain this website easily?

Optional technologies
  Use a content management system (CMS) integrated with React
  Use a low-code/no-code platform
   Provide detailed documentation 



## Detail of risk management
Possible strategies:
1. Use a content management system (CMS) integrated with React
Use a headless CMS like Strapi, Sanity, Contentful, or Netlify CMS to allow non-technical people to manage content through an easy-to-use interface, while React is responsible for the presentation of the content. These CMS provide a graphical backend management interface where users can easily add, edit, and delete content without touching the code.


2. Use a low-code/no-code platform
Low-code platform: Migrate some functions to a low-code platform (such as OutSystems, Bubble), so that even if users have no programming experience, they can achieve simple updates and extensions through drag and drop and configuration.
No-code tool integration: Combine no-code tools such as Zapier or Integromat to integrate React websites with third-party services, allowing users to manage certain functions through these platforms.



3. Provide detailed documentation 
Operation manual: Write a detailed operation manual for users to explain how to use the management interface, update content, deal with common problems, etc. The manual should contain screenshots, video tutorials, and FAQs.


## Conclusion 
These strategies will be carefully analyzed and the most suitable solution will be selected when the preliminary design of the website is completed.

