# Week 10 -Tutor Meeting 
**Info:**
- Time: 11 Oct, 10:00-11:00am
- Location: Ian Ross R221
- Scribe: Andy
- Minutes taker: Jinghan Gao
- Describe: Audit 3 presentation

**Attendees:**
- Andy
- Clients
- Shadow team client
- Examinor
- Team
- Shadow Team

## Agenda Items
| Number     | Item                                                               |
|:----------:|:------------------------------------------------------------------:|
| Agenda 1   | Shaodw team presentation for audit 3                               |
| Agenda 2   | Our team presentation for audit 3                                  |


## Meeting minutes
#### Agenda-1: Shaodw team presentation for audit 3 
The Shadow Team presented the progress of their project for the third audit. They demonstrated a basic app with a picture-block coding interface. This interface allows users to drag and drop images to control a virtual character on the screen. The goal is to make learning more interactive and engaging. The team aims to eventually allow users to interact with a robotic dog, although this feature is not yet operational.

Key Features Demonstrated:
- Picture-block coding interface: Users can control a virtual character on the screen through events and actions.
- Implemented blocks: Basic event and action blocks have been implemented, but there are still limitations. The connection was noted as slow, and optimization is needed.
- Feedback mechanisms: The app gives feedback when incorrect actions are taken, such as moving the virtual dog to a restricted area, although more work is needed to refine these warnings.
- Limited functionality: Only the virtual control of the character is working; interaction with the robotic dog is not yet possible.

Completion Rate: The team has completed around 50% of their semester goal, with another 30% in progress. The remaining 20% of the project has yet to be started. The team is working on more complex functions, including event, action, variable, and control blocks. The lack of completed control structures limits the user's ability to create more diverse programs.
Integration with the robotic dog is considered the most difficult part of the project and remains unfinished due to hardware availability delays and the team's inexperience in software-hardware integration.

Challenges Faced
- Incomplete block logic: Initially, the team planned to implement all block logic but found this too ambitious. They focused on high-priority blocks related to movement (up, down, left, right).
- Dynamic logic complexity: Blocks such as if-else and repeat require dynamic length adjustments based on user input, which has been difficult to implement.
- Hardware integration delay: The team underestimated the timeline for integrating the app with the robotic dog, affecting their ability to test the integration.
- Lack of formal testing: Due to time constraints and the focus on frontend development, the team has not conducted formal testing. They rely on collaborative code reviews to identify errors early.

For the future plan, The team will split into two sub-teams to manage the next phase of the project:
Sub-team 1: Will work on enhancing the picture block interface, allowing for more flexibility (e.g., users will be able to input numbers in variable blocks). They will also implement more advanced control blocks such as if-else and repeat.
Sub-team 2: Will focus on the execution logic for the physical dog, ensuring the blocks that relate to the robotic dog work correctly.

They also give some recommendations for our team, The chatbot feature is currently non-functional and irrelevant to the core application, which should be prioritized. It was suggested that the team gathers feedback from users as soon as possible to ensure the product meets their needs.

The Shadow Team has made significant progress but still faces several challenges, especially with hardware integration. Future efforts will focus on completing complex coding blocks, integrating the physical robotic dog, and refining the user experience through feedback and testing.


#### Agenda-2: Our team presentation for audit 3
Our team presented our progress on developing a new educational plan for facilities, aimed at addressing both teaching and administrative challenges. The existing system from CBE Education was cited as tedious, requiring teaching staff to manage scattered resources. To alleviate these issues, our team proposed building a comprehensive, user-friendly, and interactive website.

The project aims to develop an interactive, user-friendly website.
Implement an AI-powered chatbot to assist users with varying technical expertise in navigating policies and administrative tasks.
Ensure ease of management for both WordPress and SharePoint solutions, allowing the client to make a final decision on which platform to adopt.

Then we talk about Team Structure and Responsibilities
- Bei Jin and BingKun Li: React solution development.
- Yujing Zhang and Yunru Chen: SharePoint solution development.
- Jinsong Xin, and Yiou Liu: WordPress solution development.
- Jinghan Gao: AI chatbot setup.

Our team has implemented features such as article editing, posting, and searching. Users can edit sections of the website, and an AI chatbot has been added via Chatbase.
WordPress Limitations: Some functionalities, such as user roles and user authentication, have not been fully realized due to security restrictions and permission issues from ITS.
Dual Development: Our team is simultaneously developing both WordPress and SharePoint solutions to allow the client to choose the best option.

Abandoning React: While React was initially used to build the CPE website, security concerns led to its discontinuation. Our team decided to focus on WordPress and SharePoint due to the client's need for a platform that is easy to maintain without advanced technical skills.
WordPress and SharePoint: Our team highlighted the pros and cons of both platforms. WordPress is flexible, user-friendly, and offers multiple design options. However, it cannot connect directly to the ANU database. SharePoint provides consistency and ease of use but limits access to ANU members only.

Our team developed three primary pages: homepage, main page (with search and browsing functionality), and a chatbot page powered by AI.
Users can view and interact with articles, including commenting on them. The article page design is user-friendly, showing key details such as title, date, author, and category.
The WordPress API was initially unable to recognize the chatbot component, leading to integration challenges. Our team worked around this by embedding the API with inline code to bypass the limitations.
Our team successfully implemented posting functions using PHP and added these to the theme’s functions.php file.

The AI chatbot was designed to support CBE staff during the transition to the Canvas platform, reducing their workload by automating responses to frequently asked questions. The chatbot also enhances the user experience by providing direct answers instead of listing documents.
Our team chose Chatbase due to its ease of maintenance, flexibility, and GDPR compliance. However, they noted that a future upgrade to a premium version is necessary to handle more complex queries and enhance training on FAQs related to Canvas.

SharePoint:
Pros: Standardized design components, ease of use with article templates, and integration with ANU UIDs for login.
Cons: Articles are only accessible to ANU members, and embedding chatbots requires ITS permissions, limiting public access.

For the future plan
- User Guides: Our team plans to create user guides for publishing articles on both WordPress and SharePoint platforms.
- Final Decision: Confirm the final platform choice with the client (WordPress or SharePoint).
Website Design Improvements: Enhance the design and user experience of the website.
- Chatbot Upgrades: Upgrade the chatbot model and ensure it can handle more complex queries effectively.

Our team has made significant progress on both WordPress and SharePoint platforms. Future efforts will focus on finalizing the platform choice, enhancing the website’s design, and upgrading the AI chatbot to meet client needs.

The client raised concerns about the ongoing cost of maintaining the chatbot. Our team clarified that the basic plan costs $20 per month but has limits on the number of messages the chatbot can handle. Our team will work with the client to ensure that these recurring costs are managed effective


## Action Items
| Task                            | Assigned To        |  Due Date  |
|:--------------------------------|:------------------:|:----------:|
| Meeting minutes                 |  GJH               |   21 Oct   |
| Guide book                      |  All members       |   21 Oct   |

    
## Outcome
- Guide book

## Other Notes
N/A