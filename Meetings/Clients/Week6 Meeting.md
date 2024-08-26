# Week 6 -Clients Meeting 
**Info:**
- Time: 26 Aug, 03:00-04.00pm
- Location: Online
- Scribe: Bingkun Li
- Minutes taker: Jinghan Gao
- Describe: Regular meeting

**Attendees:**
- Henry: Client
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
| Agenda 1  | Audit Documentation Overview               |
| Agenda 2  | Inviting the Client to the Audit Presentation        |
| Agenda 3  | Leadership to Review the Product's Initial Outcome                 |
| Agenda 4  | Project Features Discussion and Client Confirmation            |
| Agenda 5  | Discussion on AI Chatbot Development            |


## Meeting minutes

### Agenda-1: Audit Documentation Overview
Bingkun Li began the meeting by introducing the primary focus on audit documentation, specifically identifying and assessing risks. He briefly explained that the team’s main task at this stage involves working on documentation and provided a quick preview of some key aspects.

Jinsong Xin took over and shared his screen to showcase the document structure. And described the typical meeting workflow, where discussions are guided by predefined settings, and the outcomes are systematically documented. This includes weekly reflections, task planning, and documenting challenges encountered by the team. Additionally, each team member submits individual reflections starting from week 3, which include completed tasks, challenges, and preparations for the upcoming week. 

The weekly reports summarize our team’s work for that period. Jinsong also mentioned the feedback log, which records client, tutor, shadow feedback and input from the university’s IT department. This log helps track actionable items and ensures alignment with project goals.

The task log tracks the project’s current progress and future deliverables, breaking down larger features into smaller tasks assigned to individual members. The risk management log captures potential risks, including technical challenges, ethical concerns, and personnel changes. This log also outlines mitigation strategies for each identified risk.

Jinsong highlighted the decision log, which documents all decisions made throughout the project, including technical choices and adjustments to project scope. For example, a recent update a table related to different technologies, which was previously discussed for front-end.

Our team discussed the current state of the project landing page, which houses project-related information. Some unused configurations, such as links to Google Drive, are still retained for potential future use. 

### Agenda-2: Inviting the Client to the Audit Presentation <br>
Jinghan Gao started by mentioning that, due to the ongoing audit this week, the team needs to invite Harry to participate in the Friday tutorial meeting. The meeting is scheduled from 10:00 AM to 12:00 PM, but Harry only needs to attend for about 20-25 minutes during that time. The group discussed options for Harry’s participation, confirming that the meeting can be attended online or in-person.

The team clarified that Harry’s role in the meeting is primarily to listen and possibly provide brief feedback. The objective is for Harry to gain an overview of the audit and the current progress of the project.

### Agenda 3: Leadership to Review the Product's Initial Outcome <br>
Henry Zhu suggested inviting senior leadership to review the project around Week 7 to gather early feedback. This would allow the team to address any concerns or add requested features before completing the final product. The team discussed the feasibility of preparing a demonstration with basic functionalities like the homepage and login features by that time.

The team expressed concerns that Week 7 might be too early for a meaningful demonstration, given that the backend functionalities might not be fully integrated by then. Henry proposed pushing the review to Week 8, around September 23, to give the team more time to refine the product. He plans to coordinate with leadership to find a convenient time for the review.

Our team provide both the GitHub link and the landing page link for easier access to the project. The decision was made to prepare a preliminary product demonstration for leadership, focusing on gathering early feedback. Henry will finalize the schedule for the review after consulting with the senior leader.

### Agenda 4: Project Features Discussion and Client Confirmation <br>
Henry Zhu emphasized that while WordPress is a straightforward choice, the team is open to other platforms as long as they meet the key requirements: full functionality and easy maintenance, especially considering that non-technical staff might handle the site in the future. The key concern is that the platform should be simple enough for basic tasks like adding articles or sections without needing advanced technical skills.

Our team discussed user roles and permissions with client:
- Admin: Full access, including user management and content publishing.
- Staff: There were discussions on whether a staff role is necessary. The final decision was Admin handling content management while basic users would interact mainly with the chatbot.
- Basic User: Can browse content without logging in, but must log in to use the chatbot.

Key Features and Functionalities:
- User registration and login (with potential Google integration).
- Role-based access controls.
- Content management (uploading articles, editing, and deleting content).
- Search functionality and integration with the chatbot.
- Draft functionality for saving unpublished work.
- Admin-specific functions like system logs.
- Our team also discussed the importance of supporting multiple file types for content publishing (PDF, Word, etc.).

The homepage design was discussed, with a suggestion to follow the SharePoint layout as a reference. This layout includes clickable images leading to articles, along with a search box for easy navigation.

The main functions of the above projects have been confirmed by the client. However, the functionality of staff is not consistent with our team's vision, and we need to decide whether to revise it or not

### Agenda 5:Summary and Next Steps Planning:<br>
Henry Zhu discussed his recent research on AI chatbot solutions. He noted that there are mature options available, which likely won’t require custom model training. Instead, the approach would involve leveraging existing large language models and feeding specific data into them. The process is straightforward: after generating a model, it typically provides an HTML code that can be embedded into the website. The main challenges identified are selecting the best product for integration and determining how to effectively input the necessary data into the system. Establishing a relevant database for training is crucial. 

Henry proposed focusing the AI chatbot on assisting with the new online learning platform that will replace the current system after the next semester. As this transition might lead to many questions from staff, the chatbot could be trained to address these concerns, thereby reducing the workload on support resources.

Jinghan Gao inquired about the availability of data related to the new platform. Henry responded that the data is not yet available, as the system is still in the testing phase, and even the documentation is yet to be released. Jinghan emphasized that the training process cannot start without this data. If the data is provided soon, a fully functional chatbot could be ready by mid-semester next year.

Given the uncertainty of when the official data will be available, Henry suggested initially training the chatbot with publicly accessible data from the ANU website, such as policies and guidelines. This approach would allow for an initial version of the chatbot, with further training added once the official data is available. Jinghan clarified that adding new data does not replace previous training data but rather supplements it. Therefore, integrating new data would involve additional training rather than starting from scratch.

Jinghan expressed concerns about potentially facing restrictions when crawling ANU’s website for policy data. Henry suggested consulting with the IT department to confirm whether this approach would raise any issues. He guessed that crawling public data like policies should not pose significant concerns, as this information is intended to be accessible.

Henry concluded by noting that once the official training materials for the new platform become available, he will share them with Jinghan. The team will then integrate this data into the chatbot’s training.


## Action Items
|Task                           | Assigned To |Due Date             |
|:------------------------------|:-----------:|:-------------------:|
|Discuss and decide whether to change User Roles | All members | 30 Aug 2024 |
|Research which big data model to use  |    GJH     | 30 Aug 2024 |
|Confirm with Anu IT whether the policy can be crawled  | GJH |30 Aug 2024|


## Next Week
- Group meeting: 
  - Scribe: 
  - Time:N/A
- Client meeting:
  - Scribe:Bingkun Li
  - Minutes taker: Jinghan Gao
  - Time: 16 Sep 0300-0400pm
    
## Outcome
N/A

## Other Notes
Due to the mid break, the client  meeting will have a two-week break.