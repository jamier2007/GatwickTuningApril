#!/usr/bin/env python3
"""
Test script for Gatwick Tuning API
This tests the vehicle performance lookup function directly
"""

import sys
from api.api.index import get_vehicle_data

def main():
    if len(sys.argv) > 1:
        reg = sys.argv[1]
    else:
        reg = "WO15CZY"  # Default test registration
    
    print(f"Testing API with registration: {reg}")
    result = get_vehicle_data(reg)
    print("Results:")
    print(result)
    
    if result and not result.get("error"):
        print("\nTest passed! API is working correctly.")
        return 0
    else:
        print("\nTest failed! API returned an error or no data.")
        return 1

if __name__ == "__main__":
    sys.exit(main()) 