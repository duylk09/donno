import pandas as pd
import json

# Step 1: Load the Excel file
excel_file_path = '/mnt/data/statistics.xlsx'  # Path to your uploaded file

# Load the specific sheets, skipping the first row
sheets_to_extract = ['Data_Occ_D01', 'Data_Occ_D02']
sheets_dict = pd.read_excel(excel_file_path, sheet_name=sheets_to_extract, skiprows=1)

# Step 2: Convert each DataFrame to a JSON object and store it in a dictionary
json_data = {}
for sheet_name, df in sheets_dict.items():
    json_data[sheet_name] = df.to_json(orient='records')

# Step 3: Save the dictionary of JSON objects to a JSON file
json_file_path = '/mnt/data/output_data.json'  # Desired output file path
with open(json_file_path, 'w') as json_file:
    json.dump(json_data, json_file)

print(f"Data from 'Data_Occ_D01' and 'Data_Occ_D02' have been successfully extracted to {json_file_path}")