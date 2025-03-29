#!/bin/bash

# Gatwick Tuning start script
# This script starts the production server

# Check if Python is installed
if ! command -v python3 &> /dev/null; then
    echo "Error: Python 3 is required but not installed."
    exit 1
fi

# Check if the API directory exists
if [ ! -d "./api" ]; then
    echo "Error: API directory not found. Make sure you're in the right directory."
    exit 1
fi

# Change to the API directory
cd api

# Check if the required files are present
if [ ! -f "server.py" ]; then
    echo "Error: server.py not found in the API directory."
    exit 1
fi

# Check if we need to install dependencies
if [ ! -d "./venv" ] && [ -f "requirements.txt" ]; then
    echo "Virtual environment not found. Installing dependencies..."
    
    # Create a virtual environment
    python3 -m venv venv
    
    # Activate the virtual environment
    source venv/bin/activate
    
    # Install dependencies
    pip install -r requirements.txt
    
    echo "Dependencies installed successfully."
else
    # Activate the virtual environment if it exists
    if [ -d "./venv" ]; then
        source venv/bin/activate
    fi
fi

# Set environment variables
export FLASK_APP=server.py
export FLASK_ENV=production

# Start the server
echo "Starting Gatwick Tuning server..."
python3 server.py
