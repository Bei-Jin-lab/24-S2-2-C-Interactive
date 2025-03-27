import pandas as pd

# Load the SharePoint CSV file
file_path = "SharepointCollectionRedord.csv"  
df = pd.read_csv(file_path, encoding="ISO-8859-1")

# Drop rows where 'Name' is NaN or only contains whitespace
df = df[df["Name"].notna()]  # Remove NaN
df = df[df["Name"].astype(str).str.strip() != ""]  # Remove empty/whitespace

# Define keyword-based priority assignment
def assign_priority_by_name(name):
    name_lower = str(name).lower()
    high_keywords = [
        "teaching", "course", "content", "copy", "quiz", "assignment", 
        "speedgrader", "peer review", "rubric", "student view", 
        "discussion", "module", "canvas support", "canvas usage"
    ]
    for keyword in high_keywords:
        if keyword in name_lower:
            return "high"
    return "medium"

# Assign priority
df["Priority"] = df["Name"].apply(assign_priority_by_name)

# Sort by priority: high first
df = df.sort_values(by="Priority", key=lambda x: x.map({"high": 0, "medium": 1}))

# Drop the 'ID' column if it exists
if "ID" in df.columns:
    df.drop(columns=["ID"], inplace=True)

# Save to new CSV
df.to_csv("sorted_with_priority.csv", index=False)

