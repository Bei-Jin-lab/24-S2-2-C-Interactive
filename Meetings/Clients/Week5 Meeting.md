# Week 5 -Clients Meeting 
**Info:**
- Time: 19 Aug, 03:00-04.00pm
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
| Agenda 1  | Technical Selection Explanation            |
| Agenda 2  | Frontend Web Prototype Presentation        |
| Agenda 3  | Backend Related Discussion                 |
| Agenda 4  | Client Feedback and Discussion             |
| Agenda 5  | Summary and Next Steps Planning            |


## Meeting minutes

### Agenda-1: Technical Selection Explanation
- Frontend Technology Decision
Bei Jin: <br>
The frontend team discussed various technology options, focusing primarily on WordPress and React.
wordpress 和 html（React）
  - WordPress Concerns: <br>
  Security vulnerabilities due to its large ecosystem and frequent updates that may not be timely. <br>
  Limited ability to handle complex real-time interactions and API integrations. <br>
  Backend limitations with managing complex user roles and permissions (visitor, staff, admin).<br>
  - React Benefits: <br>
  Better suited for complex API integrations, real-time data processing (e.g., AI chatbots), and dynamic permission management. <br>
  Smaller attack surface compared to WordPress, making it more secure for this project. <br>
  - Maintenance Strategy for React:(for next team): <br>
  Provide detailed documentation and user manuals.<br>
  Integrate low-code platforms like OutSystems or Bound to enable non-technical users to manage simple tasks.<br>
  Use headless CMS solutions like Sanity or Netlify CMS for easier content management by non-technical users.<br>
- Client and tutor comment discussion(feedback)
  - Henry: <br>
  Requested a comparison table of all considered technologies (e.g., WordPress, React) to clearly display advantages and disadvantages for non-technical stakeholders. <br>
  Emphasized that a simple table comparison would be more effective for communicating the differences and aiding decision-making.<br>
  - Henry and team and Andrew：<br>
  The team discussed the existing WordPress domain, and Henry inquired about the feasibility of migrating content from WordPress to another platform. <br>
  Migration challenges include difficulties in transferring code from WordPress, especially as WordPress exports data in formats like XML rather than direct code. <br>
  Andrew highlighted the importance of considering potential security risks, especially related to attacks on the website.<br>
  - Henry:<br>
  Initial proposal included three user roles: visitor, staff, and admin.<br>
  Suggested keeping the roles simple for now, as initially, only a few people (e.g., Henry and Dale) will be updating content.<br>
  Future consideration for expanding roles and permissions (e.g., convener-specific features) can be explored later if needed.<br>

Adjust the priority of features based on client feedback, focusing first on essential functionality, while also considering security implications.

### Agenda 2: Frontend Web Prototype Presentation <br>
Prototype Introduction by Bingkun Li: <br>
- Presented the pages for the login, registration, and homepage.
  - Login Page: <br>
  Users can log in using either their email or phone number with a password. <br>
  Additional options such as logging in via Gmail API or similar are considered for future implementation.<br>
  - Registration Page:
  Users can create an account by entering a username and password.<br>
  - Password Reset Page:
  Users can reset their password by entering their email, receiving a verification code, and following the reset process.<br>
  - Main Homepage:
  Contains a search bar and highlights sections like education resources, which lead to related pages when clicked.<br>

- Additional Pages Introduction by Jinsong Xin: <br>
  - User Settings Page:
  Two types of user settings: basic user settings and advanced staff/admin settings. Staff and admins have access to system logs, showing user activities like actions taken, timestamps, IP addresses, and modules accessed.<br>
  - Post Management Pages: 
  Users can view, edit, delete, and manage their own posts. Includes the ability to bulk delete posts.<br>
  - Draft Box Page:
  Similar to the post management page but specifically for drafts. Users can edit, publish, or delete drafts.<br>
  - Chatbot (CBE Bot) Page:
  Users can interact with the AI chatbot, with the left side displaying communication history and the right side showing current conversations.<br>
  - Publishing Page:
  Users can create a post with options to save as a draft, publish, or cancel. <br>

- Client and Tutor Feedback
  - Henry:
    - Henry inquired whether the prototype had been shown to the IT department for feedback, emphasizing the importance of early validation to avoid potential redesigns later.
    - Expressed interest in seeing the actual working website within the next 2-3 weeks.
    - Highlighted the need to address potential security concerns early in the process, as issues flagged late by the security team could lead to major rework.
  - Andrew:
    - Andrew suggested waiting until a more mature, functional demo is ready before involving the IT security team, as presenting a solid prototype could make the request for a domain and permissions more compelling.
    - He advised against showing an incomplete prototype, as first impressions with the security team are critical and could impact their confidence in the project.
    - Emphasized the importance of ensuring that the tech stack is robust and well-prepared before reaching out for formal approval.

### Agenda 3: Backend Related Discussion <br>
Backend Team Feedback (Yiou Liu)：<br>
  - Raised concerns about whether it is necessary to develop the login and registration features independently, especially if IT does not grant access for these functionalities on their end. <br>
  
Henry feedback: <br>
  - Henry emphasized that the priority should be getting the main website functionality up and running.
  - Advised delaying the implementation of the login and registration features until later in the project timeline.
  - Stressed that initially, the primary concern is ensuring that only admins have access to edit and maintain the website content.
  - Suggested keeping the user roles and access simple for now, focusing on completing the main website before worrying about additional features like login.

### Agenda 4: Client Feedback and Discussion <br>
Henry: <br>
Henry reiterated that the primary goal is to have a working website that meets the basic requirements, regardless of the platform used.<br>
The key requirements include:
  - The website should be easy to maintain, allowing non-technical users to manage content without needing in-depth knowledge of frontend or backend development.
  - The priority for implementing complex user roles and permissions should be lowered for now, as these are not immediately critical.
  - For the initial phase, the focus should be on getting the website functional, with Henry and his colleague Dale managing content updates. 

Team Response: <br>
The team acknowledged the feedback and agreed to focus on simplifying the project scope initially. The priority will be to develop a stable and user-friendly website with the essential features.  <br>

Andrew:
Andrew complimented the team on their wireframing work and overall progress.  <br>
He mentioned that the team's work is solid and well-structured, especially in comparison to similar projects.

### Agenda 5:Summary and Next Steps Planning:<br>
The team will continue focusing on building out the core website features, ensuring it is simple and accessible.
The plan is to keep the functionality basic for now, with more complex features to be added in later phases as needed.


## Action Items
| Task                                                                                                      | Assigned To   |  Due Date  |
|:---------------------------------------------------------------------------------------------------------:|:-------------:|:----------:|
| Comparison table(frontend).                                                                               |  BJ           | 23 Aug     |
| Investigate whether it is possible to use react to modify a website from a client's existing domain name. |  XJS LBK BJ   | 23 Aug     |
| Continue development with the goal                                                                        |  ALL members  | 30 Aug     |

## Next Week

- Group meeting:
  - Scribe: 
  - Time:N/A
- Client meeting:
  - Scribe:Bingkun Li
  - Minutes taker: Jinghan Gao
  - Time: 26 Aug 0300-0400pm
    
## Outcome
N/A

## Other Notes
N/A