import aiohttp
import asyncio
import os
import sys

# Add the current directory to the path to resolve imports
sys.path.append(os.path.dirname(os.path.abspath(__file__)))
from vehicle_performance import get_performance_data

# Create a connector with optimised settings
conn_limit = 100  # Increase connection limit
conn_limit_per_host = 10  # Increase per-host limit

async def lookup_vehicle(registration):
    """
    Main function to look up vehicle performance data
    """
    # Create a connector with optimised settings
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

# For testing
if __name__ == "__main__":
    import sys
    reg = sys.argv[1] if len(sys.argv) > 1 else "WO15CZY"
    result = get_vehicle_data(reg)
    print(result) 