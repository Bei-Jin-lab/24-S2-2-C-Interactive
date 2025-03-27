import pandas as pd

# Load the original CSV file
file_path = "canvas_guides.csv"  
df = pd.read_csv(file_path)

# Remove rows containing "video" in the URL
df_cleaned = df[~df['URL'].str.contains("video", case=False)].copy()

# Define a relevance score based on keywords in the title
def relevance_score(title):
    title_lower = title.lower()
    keywords = [
        "assignment", "submission", "quiz", "grade", "module", "discussion",
        "course navigation", "canvas interface", "announcement", "inbox",
        "speedgrader", "rubric", "peer review", "course settings", "syllabus"
    ]
    return sum(keyword in title_lower for keyword in keywords)

df_cleaned["RelevanceScore"] = df_cleaned["Title"].apply(relevance_score)

# Sort the entries by relevance score in descending order
df_cleaned = df_cleaned.sort_values(by="RelevanceScore", ascending=False).reset_index(drop=True)

# Assign priority labels based on row index
def assign_priority(index):
    if index < 200:
        return "high"
    elif index < 800:  
        return "medium"
    else:
        return "low"

df_cleaned["Priority"] = df_cleaned.index.map(assign_priority)

# Drop the temporary relevance score column
df_cleaned.drop(columns=["RelevanceScore"], inplace=True)

# Export the cleaned and prioritized data to a new CSV file
df_cleaned.to_csv("cleaning_data.csv", index=False)

print("Data cleaning complete. Output saved as 'cleaning_data.csv'.")
