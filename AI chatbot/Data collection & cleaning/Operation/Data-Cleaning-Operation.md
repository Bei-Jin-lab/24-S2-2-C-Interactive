# Data Cleaning Operations Document

## Project Overview

This document outlines the data cleaning procedure for the collected dataset from the following two sources:
1. SharePoint (manually collected and reviewed data)
2. Canvas (links collected via web crawler)

The goal is to clean, prioritize, and prepare data for AI chatbot training using standardized processing methods.

## Data Sources

|   Source   | Input Format  |   Cleaning Method    | Estimated Volume |
|------------|---------------|----------------------|-----------------|
| SharePoint | .csv          |Manual review + script| ~135 links    |
| Canvas     | .csv          |script only           |~1000 links |

## Collection Process

### SharePoint Data Cleaning (Manual + Scripted)

1. **Manual Cross-Check**:
- Four team members conducted cross-checks of each other’s collected entries.
- Ensured that each SharePoint link contains fully expanded content (no collapsed sections).
- Verified files were saved properly (PDF or native file download).
- Saved in onedrive: https://anu365-my.sharepoint.com/my?id=%2Fpersonal%2Fu7264563%5Fanu%5Fedu%5Fau1%2FDocuments%2FData
2. **Scripted Prioritization**:
- The cleaned CSV was loaded using Python pandas.
- Rows with empty or whitespace-only Name fields were dropped.
- A predefined list of teaching-related keywords was used to prioritize each entry: Keywords include: "teaching", "course", "assignment", "quiz", "module", "rubric", etc.
- Each row was assigned a priority.
-The final DataFrame was sorted with high priority entries first.
3. **Output**: Cleaned file saved as: sorted_with_priority.csv
4. **Code Reference**: https://github.com/Bei-Jin-lab/24-S2-2-C-Interactive/blob/main/Code/Data/sort_sharepoint.py

### Canvas Data Cleaning (Automated)

1. **Initial Data Format**: Guidebook links and titles collected into a CSV file: canvas_guides.csv
2. **Cleaning Actions**: 
- Removed all rows where URL contained "video" (not useful for training).
- Dropped all rows with empty or whitespace-only Title fields.
- Applied keyword-based relevance scoring using the following Canvas-use keywords: "assignment", "quiz", "module", "discussion", "speedgrader", etc.
- Assigned a priority to each row.
3. **Final Output**: Cleaned file saved as: cleaning_data.csv
4. **Code Reference**:https://github.com/Bei-Jin-lab/24-S2-2-C-Interactive/blob/main/Code/Data/cleaning.py

### Merge Cleaned Data (Automated)
After individual cleaning steps for SharePoint and Canvas data were completed, the cleaned datasets were merged into a single table for chatbot training.
1. **Source Tagging**: Each dataset was tagged with a "Source" column: Sharepoint or Canvas
2. **Column Normalization**: All files were aligned to have consistent columns: Title, Priority, and Source.
3. **Priority Assignment**: All entries from comparison.csv were assigned Priority = high.
4. **Merge Process**:
- All three datasets were concatenated.
- Any rows with blank or missing titles were removed.
- Sorting was applied: Sharepoint sources appear first, regardless of priority, Canvas entries appear later, sorted by Priority.
5. **Final Output**: The merged dataset was exported as merged_priority_table.csv.
6. **Code Reference**:https://github.com/Bei-Jin-lab/24-S2-2-C-Interactive/blob/main/Code/Data/merge.py



## Team Assignments

**Cross-Checking Assignments**

|           Pair          |        Task       |    Due Date    | 
|-------------------------|-------------------|----------------|
| Yunru Chen ↔ Bei Jin    | Mutual cross-check| March 21, 2025 |           
| Yiou Liu ↔ Yujing Zhang | Mutual cross-check| March 21, 2025 |      

**Data Cleaning & Merge Tasks**

|             Task           | Responsible|    Due Date    | 
|----------------------------|------------|----------------|
| SharePoint Data Cleaning   | Jinghan Gao| March 26, 2025 |           
|  Canvas Data Cleaning      | Jinghan Gao| March 26, 2025 |      
|  Data Merge                | Jinghan Gao| March 28, 2025 |   



## File Organization
**Storage Structure**:
   ```
   ProjectData/
    ├── Cleaned/
    │   ├── SharePoint/
    │   │   └── sorted_with_priority.csv
    │   ├── Canvas/
    │   │   └── cleaning_data.csv
    │   └── Merged/
    │       └── merged_priority_table.csv


   ```

## Quality Assurance

1. All rows with empty or invalid fields were removed.
2. Manual cross-checking ensured that SharePoint content was not missing.
3. Files were tagged and sorted consistently.
4. Final files were reviewed by multiple team members before use in training.

## Timeline

- All SharePoint data cross-cheking: Due by March 21, 2025
- SharePoint Cleaning: March 26, 2025
- Canvas guide link Cleaning: March 26, 2025
- Final files: March 28, 2025