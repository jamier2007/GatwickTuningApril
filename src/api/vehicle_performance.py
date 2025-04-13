import aiohttp
import asyncio
from bs4 import BeautifulSoup
import logging
import re
import time
import lxml
from cachetools import TTLCache

# Simple logging setup
logging.basicConfig(filename='api1.log', level=logging.ERROR)

# Create a cache with a 1-hour TTL and maximum size of 100 items
registration_cache = TTLCache(maxsize=100, ttl=3600)

# Custom connection pool limits
conn_limit = 100  # Increase connection limit
conn_limit_per_host = 10  # Increase per-host limit

async def get_performance_data(session, license_plate):
    """
    Fetch performance data for a vehicle from celtictuning.co.uk
    """
    # Check if result is in cache
    if license_plate in registration_cache:
        return registration_cache[license_plate]
    
    base_url = "https://www.celtictuning.co.uk/component/ctvc/search?dvla="
    
    try:
        url = base_url + license_plate
        headers = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
            "Accept-Language": "en-US,en;q=0.5",
            "Accept-Encoding": "gzip, deflate, br",
            "Connection": "keep-alive",
            "Upgrade-Insecure-Requests": "1"
        }
        
        # Shorter timeout for faster failures
        timeout = aiohttp.ClientTimeout(total=5)
        async with session.get(url, headers=headers, timeout=timeout, allow_redirects=True) as response:
            if response.status == 200:
                html = await response.text()
                result = scrape_performance_data(html)
                
                # Cache the result
                if result:
                    registration_cache[license_plate] = result
                
                return result
            else:
                logging.error(f"API 1 error: {response.status}")
                return {"error": f"Failed to retrieve data. Status code: {response.status}"}
            
    except asyncio.TimeoutError:
        logging.error("API 1 timeout")
        return {"error": "Request timed out"}
    except Exception as e:
        logging.error(f"API 1 error: {str(e)}")
        return {"error": str(e)}

def scrape_performance_data(html):
    # Use lxml parser for faster parsing
    soup = BeautifulSoup(html, "lxml")
    vehicle_attributes = soup.find(class_="ctvs_list")
    
    if not vehicle_attributes:
        return None
    
    # Optimize selectors for better performance
    vehicle_list = vehicle_attributes.select("span, p")
    vehicle = [v.get_text(strip=True) for v in vehicle_list if not v.find("strong") and v.get_text(strip=True)]
    
    if len(vehicle) < 8:
        return None

    # Get power and torque values
    power_data = {
        "stage": "Stage 1",
        "original": {
            "power": None,
            "torque": None
        },
        "modified": {
            "power": None,
            "torque": None
        },
        "gains": {
            "power": None,
            "torque": None
        }
    }

    try:
        # Check stage type
        stage_buttons = soup.select('#ctvc_stageButtons > div > div:nth-child(2) > a')
        if stage_buttons and any('active' in btn.get('class', []) and 'Stage 2' in btn.text for btn in stage_buttons):
            power_data["stage"] = "Stage 2"

        # Get the stage content section
        stage_section = soup.select_one('#ctvc_stage')
        if stage_section:
            # Optimize selectors with more direct paths
            power_original = stage_section.select_one('table tbody tr:nth-child(1) td:nth-child(2) div div div div h5').text.strip()
            power_modified = stage_section.select_one('table tbody tr:nth-child(1) td:nth-child(3) div div div div h5').text.strip()
            power_gain = stage_section.select_one('table tbody tr:nth-child(1) td:nth-child(4) div div div div h5').text.strip()

            torque_original = stage_section.select_one('table tbody tr:nth-child(2) td:nth-child(2) div div div div h5').text.strip()
            torque_modified = stage_section.select_one('table tbody tr:nth-child(2) td:nth-child(3) div div div div h5').text.strip()
            torque_gain = stage_section.select_one('table tbody tr:nth-child(2) td:nth-child(4) div div div div h5').text.strip()

            power_data.update({
                "original": {
                    "power": f"{power_original} bhp",
                    "torque": f"{torque_original} lb/ft"
                },
                "modified": {
                    "power": f"{power_modified} bhp",
                    "torque": f"{torque_modified} lb/ft"
                },
                "gains": {
                    "power": f"{power_gain} bhp",
                    "torque": f"{torque_gain} lb/ft"
                }
            })
    except Exception as e:
        logging.error(f"Error getting power/torque data: {str(e)}")
        
    return {
        "brand": vehicle[0],
        "model": vehicle[1],
        "variant": vehicle[3],
        "year": vehicle[4],
        "specs": {
            "fuel": vehicle[5],
            "engine": vehicle[6],
            "ecu": vehicle[7]
        },
        "performance_figures": power_data
    }

if __name__ == "__main__":
    async def test_api():
        reg = "SY65TMV"  # Use the provided registration
        
        # Create a connector with optimised settings
        connector = aiohttp.TCPConnector(
            limit=conn_limit,
            limit_per_host=conn_limit_per_host,
            ssl=False,  # Disable SSL verification for improved speed
            use_dns_cache=True,
            ttl_dns_cache=300  # Cache DNS results for 5 minutes
        )
        
        async with aiohttp.ClientSession(connector=connector) as session:
            # First request
            start_time = time.time()
            result = await get_performance_data(session, reg)
            print(f"First request took {time.time() - start_time:.2f} seconds")
            print(result)
            
            # Second request (should use cache)
            start_time = time.time()
            cached_result = await get_performance_data(session, reg)
            print(f"\nSecond request took {time.time() - start_time:.2f} seconds")
    
    asyncio.run(test_api()) 