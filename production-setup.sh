#!/bin/bash

# Production setup script for Gatwick Tuning website
# This script will configure the frontend for production use

echo "Setting up Gatwick Tuning Production Environment..."

# Create the directory structure
mkdir -p ./dist

# Build the frontend
echo "Building frontend..."
npm install
npm run build

# Create start script
cat > ./start.sh << 'EOL'
#!/bin/bash
npm run preview
EOL

chmod +x ./start.sh

# Create a README file with instructions
cat > ./README.md << 'EOL'
# Gatwick Tuning Website

## Production Setup

This is the production build of the Gatwick Tuning Website.

### Requirements

- Node.js

### Setup

1. Start the server:

```bash
./start.sh
```

The server will start on port 3000 by default. You can change the port by setting the PORT environment variable.

### Rebuilding the Frontend

If you need to rebuild the frontend:

1. Make your changes to the source files
2. Run `npm install` (if you've added new dependencies)
3. Run `npm run build`
4. The built files will be placed in the `dist` directory
EOL

echo "Production setup complete! Use './start.sh' to run the application." 