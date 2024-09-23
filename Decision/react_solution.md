
**React Solution**
<br>Sample website: https://b_3rcpmmo.v0.build/

Advantages: 
<br> Highly flexible, providing a high degree of customization. Using virtual DOM to improve performance, can develop complex and dynamic web applications.

Disadvantages: 
<br>React is updated frequently, and maintainers need to constantly adapt to new features and best practices, which is difficult for novice programmers.
Its usage and integration with the backend may cause some security risks, such as Cross-site scripting (XSS).

<table>
  <tr>
    <th>Plan</th>
    <th>Requirements</th>
    <th>Solution</th>
    <th>Cost</th>
    <th>Benefits</th>
    <th>Risks</th>
    <th>Implement Time</th>
    <th>Scalability</th>
  </tr>
  <tr>
    <td>Plan A: Use ANU domain and database</td>
    <td>ANU domain and database</td>
    <td>Request a domain and access to the ANU database</td>
    <td>Chatbot service (USD 99/M)</td>
    <td>Development with flexible customization. No need to recreate the database</td>
    <td>Due to security issues, the application for ANU domain and database permissions may not be approved</td>
    <td>5-7 weeks + audit time.</td>
    <td>High scalability for adding new features and components.</td>
  </tr>
  <tr>
    <td>Plan B: Use ANU database</td>
    <td>ANU database</td>
    <td>Request to access to the ANU database</td>
    <td>Rent a domain ($10-$20/year). Chatbot service (USD 99/M)</td>
    <td>Development with flexible customization.</td>
    <td>Due to security issues, the application for ANU database permissions may not be approved</td>
    <td>5-7 weeks + audit time.</td>
    <td>High scalability for adding new features and components.</td>
  </tr>
  <tr>
    <td>Plan C: Use local domain + new database</td>
    <td>local domain + create database</td>
    <td>Rent a domain and create the own database</td>
    <td>Rent a domain ($10-$20/year). Chatbot service (USD 99/M)</td>
    <td>1.Higher autonomy and control, fully control the configuration of domain names, subdomain settings, and DNS management.  
      <br>2.Freely choose the database type and customize the database structure according to the needs of the project.</td>
    <td>1. Loss of school brand support <br>2. Increased maintenance difficulty. Need to undertake all technical maintenance tasks, including troubleshooting, performance optimization, and security management.
      <br>3. Increased additional costs. Lease domain name, hosting service, SSL certificate.
      <br>4. Increased time cost, back-end development, database creation, self-management of access control</td>
    <td>5-7 weeks + audit time.</td>
    <td>High scalability for adding new features and components.</td>
  </tr>
</table>





