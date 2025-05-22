# **Sprint 3 Group Reflection**

### **What Have Been Done?**

In Sprint 3, the team focused on refining core features based on in-depth client discussions, aiming to align both the website and AI chatbot more closely with user needs. This sprint emphasized mobile accessibility fixes, site structure clarification, and chatbot integration enhancements, alongside finalizing delivery and risk management plans.

On the website side, we identified and addressed several client-reported issues. Most notably, the site lacked proper mobile adaptation—menus were not accessible on phones. As per the client’s direction, we will keep the desktop version as-is but plan to revise mobile compatibility in future iterations. Additionally, we received feedback that the footer font was incorrect (not Public Sans) and that navigation behavior needed to meet standard expectations (e.g., clicking the ANU logo should redirect to the ANU homepage; clicking the site title should return to the site’s main page). These changes have been immediate implemented.

The team also added an introductory section explaining the website’s purpose, usage, and rationale, based on client suggestions. This section aims to enhance first-time user understanding and promote intuitive onboarding.

On the chatbot side, we incorporated structural changes requested by the client, such as moving the chatbot to the homepage for better visibility. Additionally, we began integrating FAQ-like guidance into the bot’s responses (e.g., “How to use this website?”). The client also shared their technical support email, which we have added into the chatbot’s intent-response system. We demonstrated how the chatbot is trained and clarified that new content updates do not re-crawl old links—a point the client inquired about.

Furthermore, we delivered a prompt guide, including testing samples, and validated it with the client. As part of risk management, the client reminded us that no credentials or sensitive information should appear in the public GitHub repo, especially considering visibility to their students. Instead, such details should be shared via Microsoft Teams.We also confirmed our final delivery plan, which was reviewed during the sprint. 

### **What Challenges and How Did We Solve Them?**

- **Mobile responsiveness issues**: The absence of menu access on mobile devices posed a usability problem. We have designed the layout again.
- Unclear user guidance on-site and in-chatbot: To address user confusion, we added introductory content to the homepage and began embedding usage-related Q&A in the chatbot.
- **Risk of exposing sensitive information**: Following the client’s advice, we reviewed our GitHub repo settings to ensure no usernames or passwords are publicly visible, and migrated sensitive content to a secure Teams channel.

### **Final Reflections**

As the final sprint concludes, we reflect on key lessons from the project:

- **Early device testing is essential** — Due to the low-code nature of our project, no unit testing framework was implemented, which limited our ability to identify cross-device issues early on. In future projects, incorporating platform-specific testing—even in low-code environments—will be essential.
- **Clarity in client expectations** must be maintained through structured documentation (e.g., annotated screenshots, written change logs).
- **Security practices** in repository management must be strictly followed in all stages of development.

Overall, the project successfully delivered a working prototype with a functional website and integrated chatbot, aligned with client expectations. The collaborative process—through iterative feedback and weekly check-ins—ensured we could adjust flexibly and deliver a usable product.
