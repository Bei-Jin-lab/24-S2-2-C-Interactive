# AI Chatbot Training Operations Document

## Project Overview
This document outlines the procedure for training the AI chatbot using Chatbase. The chatbot is trained to assist users with questions related to Wattle and Canvas using curated internal resources. The training process involves three key types of data:
- Uploaded files (documents)
- Prioritized links
- Fixed Q&A interactions

The chatbot interface was also customized for improved user experience.

## Training Platform 
| Platform |              URL          |              Purpose              | 
|----------|---------------------------|-----------------------------------|
| Chatbase | https://www.chatbase.co/  | AI chatbot training and deployment|

## Training Process
### Create and Configure Agent
1. Login: Sign in to Chatbase with project credentials
2. Create Agent: Create a new chatbot agent
3. Customize Appearance:
- Name: Set a recognizable name
- Avatar: Upload a suitable avatar
- Font Color: Adjust to match project theme
- Font Size: Customize for readability
- Interface Styling: Ensure clean and professional look

### Upload and Train with Files
1. File Source: Use 32 cleaned and prioritized files from Sprint 1
2. File Upload:
- Navigate to the "Files" section in Chatbase
- Upload all 32 files in supported formats (PDF, DOCX, etc.)
- Ensure correct naming and categorization
3. Training: Let Chatbase process and embed the content for chatbot retrieval

### Train with Prioritized Links
1. Link Source: Use the prioritized list of 228 guidebook links from data collection
2. Upload Process:
- Add links via Chatbase's "Add URLs" interface
- Double-check the relevance and priority level of each link
3. Training: Allow the model to crawl, extract, and embed content from each link

### Train with Q&A
1. Define 2 Fixed Q&A Pairs
2. Client Requirement: If a user’s query contains keywords matching a trained Q&A pair, the chatbot should prioritize the Q&A response over file or link content


### Deployment
1. After training is complete, collaborate with frontend developers to embed the chatbot into the website using the Chatbase-generated iframe or script
2. Confirm the chatbot loads correctly and UI is consistent across browsers

### Quality Assurance
1. Confirm chatbot responds correctly to known questions
2. Test keyword-based Q&A prioritization
3. Verify all links and documents have been successfully ingested
4. Validate chatbot appearance and performance on deployed webpage
5. Record all content versions and chatbot settings for future updates

### Timeline
Initial training and setup: Week 7–8

