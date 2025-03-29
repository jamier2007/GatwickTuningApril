#!/bin/bash

# Gatwick Tuning deployment script
# This script sets up the application on a server

set -e  # Exit on any error

# Check if running as root
if [ "$(id -u)" -ne 0 ]; then
    echo "This script must be run as root or with sudo"
    exit 1
fi

echo "=== Gatwick Tuning Deployment Script ==="
echo "Setting up system dependencies..."

# Update package lists
apt-get update

# Install Node.js for frontend
apt-get install -y nodejs npm

# Create a service user (optional)
echo "Creating service user..."
useradd -m -s /bin/bash gatwick || true

# Create the application directory
APP_DIR="/opt/gatwick-tuning"
mkdir -p "$APP_DIR"

# Copy files to the application directory
echo "Installing application files..."
cp -r . "$APP_DIR"

# Set ownership
chown -R gatwick:gatwick "$APP_DIR"

# Build the application
echo "Building the application..."
cd "$APP_DIR"
su - gatwick -c "cd $APP_DIR && npm install && npm run build"

# Create a systemd service file for the frontend
echo "Creating systemd service..."
cat > /etc/systemd/system/gatwick-tuning.service << 'EOL'
[Unit]
Description=Gatwick Tuning Frontend
After=network.target

[Service]
User=gatwick
Group=gatwick
WorkingDirectory=/opt/gatwick-tuning
ExecStart=/usr/bin/npm run preview
Restart=always
RestartSec=5
Environment=PORT=3000

[Install]
WantedBy=multi-user.target
EOL

# Enable and start the service
echo "Starting service..."
systemctl daemon-reload
systemctl enable gatwick-tuning
systemctl start gatwick-tuning

echo "=== Deployment complete! ==="
echo "The application is now running at http://localhost:3000"
echo "Set up your web server (nginx/apache) to proxy requests to this address." 