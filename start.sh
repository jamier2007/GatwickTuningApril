#!/bin/bash

# Install dependencies
echo "Installing dependencies..."
npm install

# Build the application
echo "Building the application..."
npm run build

# Start the application in preview mode
echo "Starting the application..."
npm run preview 