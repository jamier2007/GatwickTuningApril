# Vehicle Data API

This API provides vehicle information lookup by registration number, including performance data, make/model, and fuel type.

## Features

- Vehicle lookup by registration number
- Performance data including power and torque figures
- Make, model, and variant information
- Engine specifications
- Caching for improved performance

## Installation

### Using Docker (recommended)

1. Ensure Docker is installed on your system
2. Build the Docker image:
   ```
   docker build -t vehicle-api .
   ```
3. Run the container:
   ```
   docker run -p 5000:5000 vehicle-api
   ```

### Manual Setup

1. Create a virtual environment:
   ```
   python3 -m venv venv
   ```
2. Activate the virtual environment:
   - Windows: `venv\Scripts\activate`
   - Unix/MacOS: `source venv/bin/activate`
3. Install dependencies:
   ```
   pip install -r requirements.txt
   ```
4. Run the application:
   ```
   python app.py
   ```

Alternatively, use the provided shell script:
```
chmod +x run.sh
./run.sh
```

## API Endpoints

### GET `/<registration>`

Lookup vehicle data by registration number.

**Example Request:**
```
GET http://localhost:5000/AB12CDE
```

**Example Success Response:**
```json
{
  "status": "success",
  "data": {
    "brand": "BMW",
    "model": "3 Series",
    "variant": "330d",
    "year": "2020",
    "specs": {
      "fuel": "Diesel",
      "engine": "3.0L",
      "ecu": "Bosch"
    },
    "performance_figures": {
      "stage": "Stage 1",
      "original": {
        "power": "265 bhp",
        "torque": "580 lb/ft"
      },
      "modified": {
        "power": "320 bhp",
        "torque": "680 lb/ft" 
      },
      "gains": {
        "power": "55 bhp",
        "torque": "100 lb/ft"
      }
    }
  }
}
```

### GET `/health`

Health check endpoint.

**Example Request:**
```
GET http://localhost:5000/health
```

**Example Response:**
```json
{
  "status": "ok",
  "message": "API is running"
}
```

## Integration with Gatwick Tuning Website

This API is configured to work with the Gatwick Tuning website. The frontend makes requests to `/api-proxy/<registration>` which is then redirected to this API. 