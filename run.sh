
#!/bin/bash

# Install dependencies
echo "Installing dependencies..."
npm install

# Build the application
echo "Building the application..."
npx vite build

# Start the application in preview mode
echo "Starting the application..."
npx vite preview --host 0.0.0.0 --port 3000
