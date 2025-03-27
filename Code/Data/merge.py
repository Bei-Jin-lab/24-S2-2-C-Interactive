import pandas as pd

# Load CSV files
comparison_df = pd.read_csv("comparison.csv")
cleaning_df = pd.read_csv("cleaning_data.csv")
sharepoint_df = pd.read_csv("sorted_with_priority.csv")

# Add Priority and Source to comparison.csv
comparison_df["Priority"] = "high"
comparison_df["Source"] = "Sharepoint"
comparison_df.rename(columns={"Name": "Title"}, inplace=True)

# Add Source to sorted Sharepoint data
sharepoint_df["Source"] = "Sharepoint"
sharepoint_df.rename(columns={"Name": "Title"}, inplace=True)

# Add Source to Canvas (cleaning) data
cleaning_df["Source"] = "Canvas"

# Keep only necessary columns
comparison_df = comparison_df[["Title", "Priority", "Source"]]
sharepoint_df = sharepoint_df[["Title", "Priority", "Source"]]
cleaning_df = cleaning_df[["Title", "Priority", "Source"]]

# Combine all dataframes
combined_df = pd.concat([comparison_df, sharepoint_df, cleaning_df], ignore_index=True)

# Remove rows where Title is NaN or empty
combined_df = combined_df[combined_df["Title"].notna()]
combined_df = combined_df[combined_df["Title"].astype(str).str.strip() != ""]

# Sort: Sharepoint first, then by priority
priority_order = {"high": 0, "medium": 1, "low": 2}
combined_df["PriorityOrder"] = combined_df["Priority"].map(priority_order)
combined_df["SourceOrder"] = combined_df["Source"].map({"Sharepoint": 0, "Canvas": 1})
combined_df = combined_df.sort_values(by=["SourceOrder", "PriorityOrder"])

# Drop helper sort columns if needed
combined_df = combined_df.drop(columns=["PriorityOrder", "SourceOrder"])

# Save final result to CSV
combined_df.to_csv("merged_priority_table.csv", index=False)

