# Gatwick Tuning Website - Docker Setup

This repository contains the Dockerized version of the Gatwick Tuning website. The setup includes a production-ready Nginx configuration with optimizations for performance and security.

## Prerequisites

- Docker
- Docker Compose

## Quick Start

1. Clone the repository:
```bash
git clone <repository-url>
cd gatwick-tuning-docker
```

2. Build and run the containers:
```bash
docker-compose up -d
```

The website will be available at `http://localhost:80`

## Features

- Production-grade Nginx configuration
- Gzip compression enabled
- Static file caching
- CORS headers configured
- Security headers enabled
- React Router support
- Automatic container restart
- Logging configuration

## Directory Structure

```
.
├── Dockerfile          # Multi-stage build for production
├── docker-compose.yml  # Docker Compose configuration
├── nginx.conf         # Nginx server configuration
├── .dockerignore      # Files to exclude from Docker build
└── src/               # Application source code
```

## Configuration

### Environment Variables

- `NODE_ENV`: Set to 'production' by default

### Ports

- The application runs on port 80 by default
- You can modify the port mapping in `docker-compose.yml`

### Volumes

- Nginx logs are persisted in the `./logs` directory

## Development

To build the Docker image manually:

```bash
docker build -t gatwick-tuning .
```

To run the container manually:

```bash
docker run -p 80:80 gatwick-tuning
```

## Production Deployment

1. Update the `nginx.conf` with your domain name
2. Configure SSL certificates if needed
3. Update security headers in `nginx.conf`
4. Deploy using:
```bash
docker-compose -f docker-compose.yml up -d
```

## Maintenance

### Logs

Nginx logs are available in the `./logs` directory

### Updates

To update the application:

1. Pull the latest code
2. Rebuild the container:
```bash
docker-compose build
```
3. Restart the services:
```bash
docker-compose down
docker-compose up -d
```

## Security

- All security headers are configured in `nginx.conf`
- Regular security updates are recommended
- Monitor Docker security advisories

## Support

For support, please contact the development team. 