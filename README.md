# Gatwick Tuning Website - Production Build

This is the production build of the Gatwick Tuning Website, which includes both the frontend (built with React/Vite) and the API backend (Python/Flask).

## Overview

This application provides a vehicle registration lookup service that:
1. Allows users to enter their vehicle registration plate
2. Retrieves vehicle performance data using web scraping
3. Displays original and tuned performance figures

## Directory Structure

- `/dist` - Contains the built frontend application
- `/api` - Contains the API server code
  - `/api/api` - Python modules for the API functionality
- `/src` - Source code for the frontend (used only if rebuilding)

## Requirements

- Python 3.9+ with pip
- For rebuilding the frontend: Node.js and npm

## Installation

### Quick Start

1. Simply run the start script:

```bash
./start.sh
```

The script will:
- Check for required dependencies
- Set up a Python virtual environment (if needed)
- Install required Python packages
- Start the server on port 5000

### Manual Setup

If you prefer to set things up manually:

1. Install Python dependencies:

```bash
cd api
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

2. Start the server:

```bash
cd api
python3 server.py
```

## Testing

You can test the API functionality directly without starting the full server:

```bash
./test-api.py WO15CZY
```

Replace `WO15CZY` with any UK vehicle registration you want to test.

## Configuration

- The server runs on port 5000 by default. Change this by setting the `PORT` environment variable.
- The API endpoint is at `/api/vehicle-lookup?reg=REGISTRATION_NUMBER`
- The server serves the built frontend from the `/dist` directory

## Rebuilding the Frontend

If you need to make changes to the frontend:

1. Edit the source files in `/src`
2. Install dependencies:

```bash
npm install
```

3. Build the frontend:

```bash
npm run build
```

The built files will be placed in the `/dist` directory.

## Troubleshooting

- **Server won't start**: Make sure port 5000 isn't in use by another application
- **API errors**: Check the server logs for details
- **CORS issues**: The server has CORS enabled by default for all routes

## API Response Format

The API returns JSON data in the following format:

```json
{
  "brand": "BMW3 Series",
  "model": "BMW",
  "variant": "330d 254 bhp",
  "year": "2015",
  "specs": {
    "fuel": "Diesel",
    "engine": "2993 ccm",
    "ecu": "Bosch EDC17_C50_C56"
  },
  "performance_figures": {
    "stage": "Stage 1",
    "original": {
      "power": "254 bhp",
      "torque": "413 lb/ft"
    },
    "modified": {
      "power": "310 bhp",
      "torque": "472 lb/ft"
    },
    "gains": {
      "power": "+56 bhp",
      "torque": "+59 lb/ft"
    }
  }
}
```

## License

This project is proprietary and confidential. Unauthorized copying, distribution, or use is strictly prohibited.
