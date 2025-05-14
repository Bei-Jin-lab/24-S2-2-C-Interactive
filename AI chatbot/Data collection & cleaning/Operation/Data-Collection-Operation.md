# Data Collection Operations Document

## Project Overview

This document outlines the data collection procedure for our project which involves gathering data from two sources:
1. SharePoint (requiring manual download due to ANU account login)
2. Canvas (using web crawlers)

## Data Sources

| Source | Access Method | Estimated Volume |
|--------|---------------|------------------|
| SharePoint | Manual download (requires ANU login) | ~135 links |
| Canvas | Web crawler | To be determined |

## Collection Process

### SharePoint Data Collection (Manual)

1. **Authentication**: Log in with your ANU account credentials
2. **Navigation**: Access the primary link: `https://anu365.sharepoint.com/sites/DigitalPlanHub/`
3. **Content Assessment**: Check first-level pages for relevance to target keywords
4. **Content Processing**:

| Link Type | Action | Note |
|-----------|--------|------|
| Web page | Save as PDF | Download and record on sheet1 |
| Files | Download | Download and record on worksheet |
| Video/image | Ignore | No action required |
| Others | Discuss in team | Team decision needed |

5. **Documentation**: Record all downloads in the team's OneDrive database

### Canvas Data Collection (Automated)

1. **Web Crawler Setup**: Configure crawler to gather links related to target keywords
2. **Data Extraction**: Extract relevant content from identified Canvas pages
3. **Data Storage**: Save collected data to the team's OneDrive database

## Team Assignments

Each team member is responsible for processing approximately 15 links from the SharePoint source.

| # | Assignee | Due Date | Notes         |
|---|----------|----------|---------------|
| 1 | Bei | March 14, 2025 |               |
| 2 | Yiou Liu | March 14, 2025 |       |
| 3 | Yujing Zhang | March 14, 2025 |       |
| 4 | Yujing Zhang | March 14, 2025 |     |
| 5 | Yunru Chen | March 14, 2025 |               |
| 6 | Yunru Chen | March 14, 2025 |  |
| 7 | Yiou Liu | March 14, 2025 |   |
| 8 | Yiou Liu | March 14, 2025 |  |
| 9 | Jinghan Gao | March 14, 2025 | + Canvas link |

## File Organization

1. **Naming Convention**: `[SourceType]_[KeywordID]_[Date].[extension]`
    - Example: `SharePoint_KW12_20250310.pdf`

2. **Storage Structure**:
   ```
   ProjectData/
   ├── SharePoint/
   │   ├── WebPages/
   │   └── Files/
   └── Canvas/
       └── ExtractedData/
   ```

## Progress Tracking

1. Update the shared worksheet after completing each assigned link
2. Mark links as "Done" once processing is complete
3. Note any special content types (e.g., "all pictures")
4. Discuss any unusual content types in team meetings

## Quality Assurance

1. Verify all relevant content has been downloaded
2. Ensure proper documentation in the tracking sheet
3. Confirm all files are properly named and stored
4. Cross-check collected data against target keywords

## Timeline

- All SharePoint data collection: Due by March 14, 2025
- Canvas data crawling: Week04