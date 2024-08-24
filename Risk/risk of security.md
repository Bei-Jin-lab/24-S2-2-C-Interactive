# Risk LOG 
## Decision Details 
- Date: 24/08/24
- Author: Bingkun Li
- Decision Maker: front-end team made
  
## Background 
Given the sensitive nature of the data that the ANU CBE website will handle, ensuring robust security is paramount. The front-end team analyzed various technologies to identify the most secure option for building the website. After evaluating both WordPress and traditional coding approaches like React, it was evident that WordPress, while popular, is often a target for hackers due to its widespread use and extensive plugin ecosystem. In contrast, React, being a front-end library without direct back-end integration, presents a smaller attack surface and offers more control over security.

## team member
  
  Front-end: BeiJin, Bingkun Li, Jinsong Xin
 

## Decision content

1.How can we ensure that the website remains secure against potential cyber threats?



## Decision Rationale 
1.Use React for Front-end Development:
React was chosen for its reduced attack surface compared to WordPress. It does not come with the built-in vulnerabilities associated with content management systems, as it does not handle back-end processes or store data directly. This minimizes the risk of common web attacks like SQL injection and XSS (Cross-Site Scripting).
2.Implement Security Best Practices:
Adopting secure coding practices is essential. This includes sanitizing inputs, avoiding inline scripts, and using HTTPS for secure communication. Furthermore, integrating security tools like Content Security Policy (CSP) and Subresource Integrity (SRI) can add additional layers of protection against attacks.
3.Regularly Update Dependencies and Conduct Security Audits:
React and its associated libraries must be kept up-to-date to prevent vulnerabilities. Regular security audits should be performed to identify and address potential security issues early. Dependency checking tools like npm audit can be used to monitor for known vulnerabilities.React 


## Conclusion 
These strategies will be closely examined and implemented throughout the development process to ensure that the ANU CBE website is secure. Regular reviews and updates will be conducted to adapt to any new security challenges that may arise.
