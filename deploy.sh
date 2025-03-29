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

# Install Python and required tools
apt-get install -y python3 python3-pip python3-venv

# Install Node.js if needed for future frontend updates
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

# Create Python virtual environment
echo "Setting up Python environment..."
cd "$APP_DIR"
su - gatwick -c "cd $APP_DIR && python3 -m venv api/venv"
su - gatwick -c "cd $APP_DIR && api/venv/bin/pip install -r api/requirements.txt"

# Create a systemd service file
echo "Creating systemd service..."
cat > /etc/systemd/system/gatwick-tuning.service << 'EOL'
[Unit]
Description=Gatwick Tuning API and Frontend
After=network.target

[Service]
User=gatwick
Group=gatwick
WorkingDirectory=/opt/gatwick-tuning
ExecStart=/opt/gatwick-tuning/api/venv/bin/python3 /opt/gatwick-tuning/api/server.py
Restart=always
RestartSec=5
Environment=PORT=5000
Environment=FLASK_ENV=production

[Install]
WantedBy=multi-user.target
EOL

# Enable and start the service
echo "Starting service..."
systemctl daemon-reload
systemctl enable gatwick-tuning
systemctl start gatwick-tuning

echo "=== Deployment complete! ==="
echo "The application is now running at http://localhost:5000"
echo "Set up your web server (nginx/apache) to proxy requests to this address." 