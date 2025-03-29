from flask import Flask, request, jsonify
from flask_cors import CORS
from src.api.index import get_vehicle_data
import os

app = Flask(__name__)
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

# For local development
if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5001))
    app.run(host='0.0.0.0', port=port, debug=True) 