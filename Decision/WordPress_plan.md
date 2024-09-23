# WordPress Solution

| **Plan**                         | **Requirements**                                                        | **Solution**                                                                                                                                       | **Cost (AUD)**                                                                                             | **Benefits**                                                                                             | **Risks**                                                                                               | **Implementation Time**       | **Scalability**                                                                                  |
|-----------------------------------|------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|-------------------------------|----------------------------------------------------------------------------------------------------|
| **Plan A: WordPress with Basic Plugins** | Hosting, Domain name, Plugin setup (file upload, chatbot, search)       | Use WordPress plugins like WPForms for file uploads, Tidio for AI Chatbot, Relevanssi for search functionality                                      | Hosting (~$40–$360/year), plugins (~$125/year for forms, ~$1,860/year for AI chatbot)                      | Fast setup, low cost. Supports basic features like file upload and search. AI chatbot integration possible. | Limited security and no direct integration with ANU IT. Plugin compatibility issues may arise. Limited enterprise-level security.         | 2-3 weeks + plugin setup      | Limited scalability; complex features need plugins or custom development.                                     |
| **Plan B: WordPress with ANU IT Integration (SSO)** | Hosting, Domain name, Plugin setup (file upload, chatbot, search, **ANU IT SSO integration**) | Use **miniOrange SSO** plugin for ANU IT single sign-on (SAML), WPForms for file uploads, Relevanssi for search, Tidio for AI Chatbot               | Hosting (~$40–$360/year), plugins (SSO ~$470-$1,000/year, forms ~$125/year, AI chatbot ~$1,860/year)       | Integrates with ANU IT using SSO, plugins provide flexible functionality for file uploads, search, and AI. | High maintenance. SSO configuration requires ANU IT cooperation. Plugin conflicts or updates can break functionality. Security risks with multiple plugins. | 3-5 weeks + ANU IT integration | Moderate scalability, but plugin complexity increases long-term maintenance effort.                            |
| **Plan C: WordPress with Custom Development** | Hosting, Domain name, Plugin setup (file upload, chatbot, search) + custom API integration | Custom API development for ANU IT system integration, combined with plugins for other features (file upload, chatbot, search)                       | Hosting (~$40–$360/year), custom development (~$1,500-$7,500 one-time cost), plugins (~$500+/year total)   | Full control over integration with ANU IT and other custom features. Can implement advanced search, file management, and chatbot features. | High cost for custom development. Long-term maintenance for both plugins and custom code. Requires collaboration with ANU IT for API and security integration. | 6-8 weeks depending on custom features | High scalability, but high maintenance complexity for custom and plugin-based features.                        |

---

### **Detailed Considerations**:

1. **Security**:
   - **Plan A**: Uses WordPress's default security measures, which may not meet **enterprise-grade security requirements**. Plugins may introduce vulnerabilities, as each plugin is developed by third parties and needs regular updates. Limited user authentication options without ANU IT integration.
   - **Plan B**: More secure with **SSO integration** using **miniOrange SSO** plugin, leveraging ANU's existing authentication system. However, plugin management can introduce security risks, and any misconfiguration in SSO could expose the system to breaches.
   - **Plan C**: Custom API integration with ANU IT provides **better control over security**, but at a higher cost. However, combining plugins with custom code still exposes the system to **plugin-related vulnerabilities**.

2. **Maintainability**:
   - **Plan A**: Maintenance is relatively easy, but plugin management becomes a challenge as the number of plugins increases. **Plugin updates** must be monitored to avoid conflicts and performance degradation.
   - **Plan B**: With SSO integration, maintenance complexity increases, as **plugins and ANU IT configurations** must stay synchronized. Frequent updates and security patches for the plugins are required.
   - **Plan C**: Custom development adds long-term complexity, requiring **technical expertise** to maintain both custom code and plugins. Any changes in ANU IT systems may require **custom code adjustments**, adding to maintenance efforts.

3. **Cost**:
   - **Plan A**: Lower initial cost, but the reliance on plugins can lead to **long-term costs** due to necessary paid updates and security concerns. Not ideal for a large organization requiring robust, scalable solutions.
   - **Plan B**: Medium cost, but **SSO integration** adds a **recurring expense** for the plugin, plus potential costs related to ensuring compatibility between WordPress, plugins, and ANU IT systems.
   - **Plan C**: High cost due to **custom development**, but this provides the **highest level of customization**. Long-term maintenance can become expensive as the codebase grows more complex.

4. **Scalability**:
   - **Plan A**: Limited scalability; as more plugins are added, performance can degrade, and it becomes harder to manage them. This is not an ideal solution for **large-scale, long-term projects**.
   - **Plan B**: Moderate scalability, but **plugin dependency** means that every new feature requires a new plugin, which increases the risk of conflicts. Plugin architecture may not scale well for enterprise needs.
   - **Plan C**: High scalability due to custom development, but it requires **more resources** to maintain and expand. While scalable, the custom code adds **long-term complexity**, requiring ongoing support.

---

