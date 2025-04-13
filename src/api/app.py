from flask import Flask, jsonify, request
import os
import sys
from index import get_vehicle_data

app = Flask(__name__)

@app.route('/', defaults={'registration': None})
@app.route('/<registration>')
def lookup_vehicle(registration):
    """
    Endpoint to lookup vehicle details by registration number
    """
    # Get registration from URL or query parameter
    if registration is None:
        registration = request.args.get('reg', '')
    
    # Validate registration input
    if not registration or len(registration) < 2:
        return jsonify({
            "status": "error",
            "message": "Please provide a valid registration number"
        }), 400
    
    try:
        # Call the existing vehicle data lookup function
        result = get_vehicle_data(registration.strip().upper())
        
        # Check for errors in the result
        if result and "error" in result:
            return jsonify({
                "status": "error",
                "message": result["error"]
            }), 404
        
        # Return successful response
        return jsonify({
            "status": "success",
            "data": result
        })
    
    except Exception as e:
        # Handle any exceptions
        return jsonify({
            "status": "error",
            "message": str(e)
        }), 500

@app.route('/health')
def health_check():
    """
    Simple health check endpoint
    """
    return jsonify({
        "status": "ok",
        "message": "API is running"
    })

# Enable CORS to allow requests from the frontend
@app.after_request
def add_cors_headers(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    response.headers.add('Access-Control-Allow-Methods', 'GET,POST,OPTIONS')
    return response

if __name__ == '__main__':
    # Get port from environment variable or use default
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=False) 