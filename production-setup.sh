#!/bin/bash

# Production setup script for Gatwick Tuning website
# This script will configure both the frontend and backend for production use

echo "Setting up Gatwick Tuning Production Environment..."

# Create the directory structure
mkdir -p ./dist
mkdir -p ./api

# First, build the frontend
echo "Building frontend..."
npm install
npm run build

# Now, setup the API
echo "Setting up API..."
cp -r ./src/api ./api/
cp ./server.py ./api/
cp ./requirements.txt ./api/

# Create a production server script
cat > ./api/server.py << 'EOL'
from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import os
import sys

# Add the current directory to the path to resolve imports
sys.path.append(os.path.dirname(os.path.abspath(__file__)))
from api.index import get_vehicle_data

app = Flask(__name__, static_folder='../dist', static_url_path='')
CORS(app)  # Enable CORS for all routes

@app.route('/api/vehicle-lookup', methods=['GET'])
def vehicle_lookup():
    registration = request.args.get('reg', '')
    if not registration:
        return jsonify({"error": "Registration number is required"}), 400
    
    try:
        result = get_vehicle_data(registration)
        return jsonify(result)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists(app.static_folder + '/' + path):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')

# For production
if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)
EOL

# Create a production index.py for the API
cat > ./api/api/index.py << 'EOL'
import aiohttp
import asyncio
import os
import sys

# Add the current directory to the path to resolve imports
sys.path.append(os.path.dirname(os.path.abspath(__file__)))
from vehicle_performance import get_performance_data

# Create a connector with optimized settings
conn_limit = 100  # Increase connection limit
conn_limit_per_host = 10  # Increase per-host limit

async def lookup_vehicle(registration):
    """
    Main function to look up vehicle performance data
    """
    # Create a connector with optimized settings
    connector = aiohttp.TCPConnector(
        limit=conn_limit,
        limit_per_host=conn_limit_per_host,
        ssl=False,  # Disable SSL verification for improved speed
        use_dns_cache=True,
        ttl_dns_cache=300  # Cache DNS results for 5 minutes
    )
    
    async with aiohttp.ClientSession(connector=connector) as session:
        return await get_performance_data(session, registration)

# Function to be called from the server
def get_vehicle_data(registration):
    """
    Synchronous wrapper for the async function
    """
    loop = asyncio.new_event_loop()
    asyncio.set_event_loop(loop)
    try:
        return loop.run_until_complete(lookup_vehicle(registration))
    finally:
        loop.close()
EOL

# Create start script
cat > ./start.sh << 'EOL'
#!/bin/bash
cd api
python3 server.py
EOL

chmod +x ./start.sh

# Create a README file with instructions
cat > ./README.md << 'EOL'
# Gatwick Tuning Website

## Production Setup

This is the production build of the Gatwick Tuning Website, which includes both the frontend and API backend.

### Requirements

- Python 3.9+ with pip
- Node.js (only needed for rebuilding the frontend)

### Setup

1. Install the Python dependencies:

```bash
cd api
pip install -r requirements.txt
```

2. Start the server:

```bash
./start.sh
```

The server will start on port 5000 by default. You can change the port by setting the PORT environment variable.

### Configuration

- Edit `api/server.py` to change server settings
- The built frontend is in the `dist` directory

### Rebuilding the Frontend

If you need to rebuild the frontend:

1. Make your changes to the source files
2. Run `npm install` (if you've added new dependencies)
3. Run `npm run build`
4. The built files will be placed in the `dist` directory
EOL

echo "Production setup complete! Use './start.sh' to run the application." 