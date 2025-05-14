- Risk LOG

  ## Decision Details

  - Date: 24/08/24
  - Decision Maker: back-end team
  - Author: Yunru Chen

  ## Background

  As we develop the ANU CBE website’s backend architecture, choosing the right technologies is crucial for ensuring scalability, security, and performance. The decision to use Spring Boot in conjunction with Firebase and SQL databases is driven by the need for a safe, flexible, and scalable backend. Spring Boot offers rapid development, a vast ecosystem, and extensive community support. Meanwhile, Firebase provides real-time data synchronization and built-in authentication which are excellent for dynamic content, and SQL databases offer structured data storage and powerful querying capabilities.

  ## Team Member

  Back-end: Yunru Chen, Yiou Liu, Yujing Zhang

  ## Decision Content

  1. How can we manage and mitigate potential risks associated with the backend infrastructure to ensure high performance and reliability?

  ## Decision Rationale

  1. **Integration Complexity and Data Consistency**: Combining Spring Boot with Firebase and SQL databases involves dealing with asynchronous and synchronous operations which can complicate the data flow and consistency. Implementing comprehensive transaction management and data integrity checks will be crucial.
  2. **Security Concerns**: Security is paramount, particularly in handling user data and authentication. Utilizing Firebase's built-in security features alongside Spring Security can help safeguard against common vulnerabilities like SQL injection, CSRF, and XSS.
  3. **Scalability and Load Management**: As user base grows, the backend must efficiently handle increased loads without performance degradation. Implementing scalable structures with Spring Boot and using Firebase's real-time data handling capabilities will be key. Additionally, SQL databases should be optimized for performance with proper indexing and query optimization.
  4. **Continuous Integration and Deployment (CI/CD)**: Setting up CI/CD pipelines using tools like GitHub Actions for automated testing and deployment can enhance the development process and ensure that integration issues are caught early.

  ## Conclusion

  By addressing these considerations, the back-end team will ensure that the infrastructure not only meets the current needs but is also robust enough to handle future expansion and challenges. Regular updates and security audits will be part of the ongoing process to optimize the backend architecture as the website evolves.

- g delivery.