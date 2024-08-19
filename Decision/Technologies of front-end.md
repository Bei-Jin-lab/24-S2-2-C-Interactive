# DECISION LOG 
## Decision Details 
- Date: 18/08/24
- Decision Maker: front-end team made
  
## Background 
After discussing with the client, we sorted out the basic functions that needed to be implemented and some customer features that might need to be implemented. We also learned that we needed to build a website locally first, and then hand it over to ANU to let them consider whether to give me other rights such as the domain name of ANU.
Based on these requirements, we needed to choose between two different front-end technologies (wordpress and react).

## team member
  
  Front-end: BeiJin, Bingkun Li, Jinsong Xin
 

## Decision content

1.Which technologies of front-end should be applied in this project?

2.why we choose this?

Optional technologies
  WordPress
  React



## Decision Rationale 
After comparing, we decided to choose react to realize front-end. the reason as following shows:

1.Security Issues

Since WordPress is the most popular content management system (CMS) in the world, it has become a prime target for hackers. Its large plugin ecosystem increases the attack surface, and each plugin may introduce potential security vulnerabilities.
React is a front-end library that does not contain back-end logic or databases, so its attack surface is relatively small. If paired with a secure back-end service, React applications are generally less likely to become targets.
WordPress core and plugins are updated frequently, but many websites fail to update in time, resulting in known vulnerabilities not being fixed.
React itself has a relatively stable update rhythm and good backward compatibility. As long as dependencies are updated regularly, the security of React projects is relatively easy to maintain.
Since WordPress is based on PHP and MySQL, SQL injection attacks are a common security threat. Third-party plugins and custom code may introduce SQL injection vulnerabilities.
React does not directly handle database interactions, so there is no direct SQL injection risk.

2.Real-time data, data processing, complex API integration

Since this project requires the creation of an embedded AI-chatbox, this involves a lot of data processing. Although WordPress provides a REST API, it may encounter performance bottlenecks for complex data processing scenarios. On the other hand, WordPress does not support WebSocket, which makes it difficult to handle real-time communications such as live chat, notifications, real-time updates, etc.


3.Complex permission management and role control

Because our project needs to create different management permissions according to different roles.

Visitors: view pages, use chatbox
Staff: can publish articles, modify or delete their own articles
Administrators: can delete sections and modify user permissions
..
Because WordPress's user roles and permission mechanisms are relatively fixed and have limited scalability
For very complex role control and permission management (such as dynamic permissions based on custom logic, or enterprise-level permission structures), it is very complicated to implement.


## Follow-up Actions 

After deciding on the technology to be implemented, we need to start developing the front end of the website. We divide the tasks for each page that needs to be created and prioritize them based on importance.

## Conclusion 

Finally, we chose react to implement the front end of the web page. Because it can be connected with the back end, improve the security of the website. It can also realize the setting and management of AI-chatbox and permissions.
