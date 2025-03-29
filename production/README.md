# Gatwick Tuning - Production Build

This is the production build of the Gatwick Tuning website, containing both the frontend static files and a server script to serve them.

## Deployment

1. Copy all files in this directory to your web server
2. Install the required Python dependencies:

```bash
pip install flask flask-cors aiohttp beautifulsoup4 lxml cachetools
```

3. Start the server:

```bash
python server.py
```

The server will start on port 5000 by default. You can change this by setting the PORT environment variable.

## Features

- Static site built with React/Vite
- Vehicle registration lookup API using web scraping
- Real-time performance data for vehicles

## Production Deployment Options

### Using Nginx and Gunicorn

For a more robust deployment, you can use Nginx as a reverse proxy and Gunicorn to run the Python application:

1. Install Gunicorn:

```bash
pip install gunicorn
```

2. Start the application with Gunicorn:

```bash
gunicorn -w 4 -b 127.0.0.1:5000 server:app
```

3. Configure Nginx to proxy requests to Gunicorn (example configuration):

```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://127.0.0.1:5000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

### Using Docker

You can also containerize the application using Docker:

```dockerfile
FROM python:3.9-slim

WORKDIR /app

COPY . /app/

RUN pip install flask flask-cors aiohttp beautifulsoup4 lxml cachetools gunicorn

EXPOSE 5000

CMD ["gunicorn", "-w", "4", "-b", "0.0.0.0:5000", "server:app"]
```

Build and run the Docker container:

```bash
docker build -t gatwick-tuning .
docker run -p 80:5000 gatwick-tuning
``` 