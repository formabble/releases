#!/bin/bash

# Set the root directory for samples
SAMPLES_DIR="samples"

# Function to process a directory
process_directory() {
    local dir="$1"

    # Iterate through all files and directories in the current directory
    for item in "$dir"/*; do
        if [[ -d "$item" ]]; then
            # If it's a directory, recursively process it
            process_directory "$item"
        elif [[ "$item" == *.shs ]]; then
            # If it's a .shs file, format it and save the changes
            echo "Formatting: $item"
            # Format the file and save the output to a temporary file
            temp_file=$(mktemp)
            shards format "$item" > "$temp_file"
            # Check if formatting was successful
            if [ $? -eq 0 ]; then
                # Move the temporary file to replace the original
                mv "$temp_file" "$item"
                echo "Successfully formatted and saved: $item"
            else
                echo "Error formatting: $item"
                rm "$temp_file"
            fi
        fi
    done
}

# Start processing from the root samples directory
process_directory "$SAMPLES_DIR"

echo "Formatting complete!"