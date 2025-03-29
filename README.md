# Gatwick Tuning Website - Production Build

This is the production build of the Gatwick Tuning Website, which includes a frontend built with React/Vite that connects to an external API.

## Overview

This application provides a vehicle registration lookup service that:
1. Allows users to enter their vehicle registration plate
2. Retrieves vehicle performance data from an external API
3. Displays original and tuned performance figures

## Directory Structure

- `/dist` - Contains the built frontend application
- `/src` - Source code for the frontend (used only if rebuilding)

## Requirements

- Node.js and npm

## Installation

### Quick Start

1. Simply run the start script:

```bash
./start.sh
```

The script will start the server on port 3000.

### Manual Setup

If you prefer to set things up manually:

1. Start the server:

```bash
npm run preview
```

## Configuration

- The server runs on port 3000 by default. Change this by setting the `PORT` environment variable.
- The external API endpoint is accessed via a local proxy at `/api-proxy/{REGISTRATION_NUMBER}` to avoid CORS issues
- The actual external API is at `http://data.tcserver.co.uk:5001/{REGISTRATION_NUMBER}` but should not be called directly from the browser

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

- **Server won't start**: Make sure port 3000 isn't in use by another application
- **API errors**: Check the browser console for details
- **CORS issues**: This application uses a local proxy to avoid CORS issues. If you're still experiencing problems, make sure the proxy is properly configured in `vite.config.js`

## External API Response Format

The external API returns JSON data in this format:

```json
{
  "status": "success",
  "timestamp": "2025-03-29T22:04:12Z",
  "data": {
    "brand": "BMW1 Series",
    "model": "BMW",
    "variant": "116d (2.0) 114 bhp",
    "year": "2013",
    "specs": {
      "fuel": "Diesel",
      "engine": "1995 ccm",
      "ecu": "Bosch EDC17_C56"
    },
    "performance_figures": {
      "stage": "Stage 1",
      "original": {
        "power": "114 bhp",
        "torque": "260 Nm"
      },
      "modified": {
        "power": "150 bhp",
        "torque": "320 Nm"
      },
      "gains": {
        "power": "+36 bhp",
        "torque": "+60 Nm"
      }
    }
  },
  "errors": []
}
```

## License

This project is proprietary and confidential. Unauthorized copying, distribution, or use is strictly prohibited.
