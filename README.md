# Gatwick Tuning Website

A modern web application for Gatwick Tuning's vehicle performance services.

## Features

- Vehicle registration lookup
- Performance estimation
- Real-time API integration
- Responsive design
- Modern UI/UX

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

## API Integration

The application integrates with the Gatwick Tuning API at `https://gatwicktuning-api-jamiewreynolds.replit.app`. 
Vehicle data can be retrieved by making GET requests to the API endpoint with a registration number.

## Environment Variables

No environment variables are required as the API endpoint is configured in the Vite proxy settings.

## Dependencies

- React
- Vite
- Axios
- React Router DOM
- React Helmet Async
- Lucide React
- Tailwind CSS

## Development

The project uses Vite for development and building. Key commands:

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build

## Proxy Configuration

The development server is configured to proxy API requests through Vite's proxy settings to handle CORS and routing. 