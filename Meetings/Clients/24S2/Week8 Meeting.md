# Week 8 -Clients Meeting 
**Info:**
- Time: 23 Sep, 03:00-04.20pm
- Location: Online
- Scribe: Bingkun Li
- Minutes taker: Jinghan Gao
- Describe: Regular meeting

**Attendees:**
- Henry: Client
- Dale: Client
- Andy: Tutor
- Jinsong Xin
- Bei Jin
- Yujing Zhang
- Bingkun Li
- Yiou Liu
- Yunru Chen
- Jinghan Gao

## Agenda Items
| Number    |        Item                                |
|:---------:|:------------------------------------------:|
| Agenda 1  | Show React demo and different plan         |
| Agenda 2  | Show Wordpress demo and different plan     |
| Agenda 3  | Show Sharepoint demo and different plan    |
| Agenda 4  | Discuss chatbot related issues             |
| Agenda 5  | Final decision and plan for this week      |

## Meeting minutes

### Agenda-1: Show React demo and different plan
Bingkun Li introduced the purpose of the meeting, focusing on the presentation of three demos designed for the project. The demos were created using different platforms: WordPress, SharePoint, and React.
The goal was to showcase these demos and discuss their pros and cons so that the client can help select the most suitable approach for further development.
Bingkun Li share his screen, and introduced the demo of the website use React.
Advantages: React’s dynamic nature allows for high customizability and a modern user experience.
Disadvantages: Frequent updates can create challenges for maintenance, especially for less experienced developers. Integration with the backend can present security risks, such as cross-site scripting.
Then Bei Jin talk about the React plan:
- Plan A: Using ANU Domain and Database
Challenges include a slow setup process of around seven weeks due to ANU’s IT procedures.
Cost Consideration: If ANU allows using its domain and database, it would reduce costs but might face delays and security issues.

- Plan B: Renting a Domain and Hosting
Involves renting a domain and hosting services, which would cost approximately $30 to $100 per month.
Advantages: Full control over domain configuration, DNS management, and database customization.
Disadvantages: No support from ANU and increased responsibility for maintenance, troubleshooting, and security management.

- Plan C: Using Local Code Domain
This plan offers full control but requires renting domain and hosting services, increasing costs and maintenance efforts.

Henry raised concerns about the difficulty of maintaining the React-based website, especially for users without technical expertise.
Bingkun explained that while maintenance could be complex due to the coding requirements, certain functions, like adding upload buttons, could simplify content management for non-technical users.
There was also a discussion on how to make the platform more user-friendly and adaptable for future needs.

### Agenda-2: Show Wordpress demo and different plan
Jinsong present the WordPress demo, with sharing his screen to demonstrate the features of the demo.
The WordPress demo showcased a mini-page of the website with basic features like a search bar, navigation links, and sections displaying articles and contact information.
The demo highlighted the layout with a functional search bar and navigation, intended to reflect a simplified version of an official website.
The current design was minimal, focusing on showcasing core components rather than a full-fledged site. The demo was intended to show basic page functionality and design elements.

Then Yiou Liu talk about the Wordpress plan:
- Plan A: Standard WordPress Plugins
This plan relies on existing WordPress plugins to handle functionalities, such as WP Forms for file uploads, Relevanssi for enhanced search, and Tidio for AI chatbot integration.
Concerns: Security issues due to dependency on third-party plugins, which may introduce vulnerabilities. Management and consistent updates can become challenging for a larger organization like CBE.
Cost: Approximately $400 to 800 per year, making it a cost-effective solution suitable for smaller projects or lower-security websites.

- Plan B: Single Sign-On (SSO) Integration
Involves integrating SSO using the MiniOrange plugin, allowing users to log in through ANU’s existing SSO system, enhancing security and user experience.
Cost: $ 430 to 1,000 per year, with potential additional costs from other plugins.
Concerns: Higher costs and complexities in implementation. ANU IT may have reservations about third-party plugins managing SSO due to data security and long-term maintenance considerations.

- Plan C: Custom API Development
This plan focuses on custom API development for deep integration with ANU’s systems while still using plugins for some functionalities.

And she think Plan A offers a fast and cost-effective solution for quick deployment, while Plan B brings stronger security and a more seamless user experience through SSO.

Henry raised the idea of modifying the existing ANU website rather than creating a new one, citing ease of use and existing infrastructure.
Jinsong noted that using the current ANU WordPress setup is not feasible due to security concerns and IT policies that restrict access to existing domains and accounts. They emphasized that ANU IT typically does not provide permissions to modify the current setup for external projects. And with only one account typically allowed to edit the site at a time, slowing down the update process.
We need to further discussions with ANU IT are needed to clarify permissions and explore whether existing infrastructure can be leveraged.

### Agenda-3: Show Sharepoint demo and different plan
Yujing introduced the SharePoint solutions and discussed three different plans. However, the first two plans, which involve local development, were not recommended due to logistical and administrative challenges.
- Plan A and Plan B: Local Development
These plans involve setting up tenant accounts for local development, which would require permission from ANU IT. The process is lengthy and involves additional audits, making it impractical for the project's timeline.
Registering for a tenant account independently would also require an Australian Business Number and additional fees for services, further complicating the process.

- Plan C: Using the Online Version of SharePoint
This plan involves using the online version of SharePoint with embedded chatbot services, which has already been partially implemented by the team.
Advantages: This solution is fast, cost-effective, and relies on existing ANU-provided infrastructure, reducing the need for external accounts and domain management. The cost mainly involves the chatbot services, which range from $99 to $200, making it a more straightforward and secure option.

And then Yunru show us the Sharepoint website demo
The SharePoint demo showcased the current implementation, which uses an ANU domain with three main function blocks:
Welcome Section: Provides access to resources and article posting capabilities.
News Section: Allows users to upload and manage articles simply by clicking links, making it user-friendly.
FAQs Section: Designed to address common questions, helping users quickly find the information they need.

Henry questioned the options for chatbots and whether research had been conducted to compare available chatbot solutions.
Yujing explained that the team had researched and chosen the chatbot currently used by CASE because it has already been whitelisted by ANU IT, making it a safer choice in terms of integration and approval.
Henry suggested further research into other chatbot options, emphasizing the importance of comparing functionalities, performance, and suitability for the project. A comparison table was proposed to evaluate the best choice.

### Agenda-4: Discuss chatbot related issues 
Jinghan Gao and Henry Zhu discussed the need to explore various chatbot options without rushing into a decision. Henry emphasized the importance of researching all available possibilities and thoroughly justifying each choice before making a final decision.

Henry Zhu highlighted that there is no immediate rush to finalize or implement the chatbot, suggesting that the chatbot does not need to be operational until the beginning or even the end of the next semester. This relaxed timeline allows the team to take the necessary time to evaluate different solutions carefully.

Jinghan Gao acknowledged the need to continue research and provide justifications for the available chatbot options.
The focus will be on exploring, evaluating, and ensuring that the chosen solution aligns with the project’s needs before any commitments are made.

### Agenda-5: Final decision and plan for this week    
Setting Service Settings and Permissions
Henry Zhu discussed the need to adjust service settings and permissions, emphasizing that tenant accounts might be required for certain configurations. However, it was unclear whether WordPress could handle these settings.

Plan for Next Week: Dual Development on WordPress and SharePoint
Yujing Zhang raised a question about the plan for next week, where both WordPress and SharePoint versions will be further developed. For SharePoint, the team will focus on visual design by adding more pages and creating different layers of navigation since direct iframe insertion may not be possible.
Henry Zhu suggested adding similar content to both WordPress and SharePoint, such as menus and sample documents, to visually compare the two platforms and decide which approach looks better.
Both WordPress and SharePoint will receive identical content additions, such as navigation menus and basic documents, to facilitate a direct comparison of the user interface and functionality.
The team will assess the visual appeal and ease of navigation on both platforms to decide which aligns better with project goals.



## Action Items
|Task                                   | Assigned To |Due Date             |
|:--------------------------------------|:-----------:|:-------------------:|
|Contact the Anu IT department          | LBK         | 29 Sep 2024         |
|Migration homepage, write decision log | XJS         | 29 Sep 2024         |
|Researching WordPress security plugins and having a meeting with Shadow team  | BJ | 29 Sep 2024|
|Research WordPress publishing plugins and write weekly reports| LYO | 29 Sep 2024 |
|Research different AI chatbots and investigate plugin issues | GJH  | 29 Sep 2024 |
| Contact Anu IT for chatbot | GJH CRY  | 29 Sep 2024 |
| Write a team reflection | CRY  | 29 Sep 2024 |
|Supplement Sharepoint content and continue development | ZYJ  | 29 Sep 2024 |
|Meeting minutes                | GJH         | 29 Sep 2024 |


## Next Week
- Group meeting: 
  - Scribe: 
  - Time:N/A
- Client meeting:
  - Scribe:Bingkun Li
  - Minutes taker: Jinghan Gao
  - Time: 30 Sep 0300-0400pm
    
## Outcome
Wordpress update demo
Sharepoint update demo
AI chatbot comparison table

## Other Notes
N/A