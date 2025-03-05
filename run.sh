
#!/bin/bash

# Clean install dependencies
echo "Installing dependencies..."
npm ci || npm install

# Build the application
echo "Building the application..."
npm run build

# Start the application in preview mode
echo "Starting the application..."
npm run preview
