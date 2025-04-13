#!/bin/bash

# Install dependencies if not already installed
if [ ! -d "venv" ]; then
    echo "Creating virtual environment..."
    python3 -m venv venv
fi

# Activate virtual environment
source venv/bin/activate

# Install or update dependencies
pip install -r requirements.txt

# Run the server
echo "Starting API server on port 5000..."
gunicorn --bind 0.0.0.0:5000 app:app --workers 4 --timeout 60 