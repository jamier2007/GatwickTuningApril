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
