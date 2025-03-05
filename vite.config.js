import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// Check if running on Replit
const isReplit = process.env.REPL_SLUG !== undefined;

export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    host: '0.0.0.0',
    port: 3000,
    allowedHosts: [
      'localhost',
      '.replit.dev',
      '.repl.co',
      '.repl.run',
      '.kirk.replit.dev',
      'gatwicktuning.replit.app',
      'gatwicktuning.co.uk'
    ],
    proxy: {
      '/api': {
        target: 'https://gatwicktuning-api-jamiewreynolds.replit.app',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ''),
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
          'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
        }
      }
    }
  },
  preview: {
    host: '0.0.0.0',
    port: 3000,
    allowedHosts: [
      'localhost',
      '.replit.dev',
      '.repl.co',
      '.repl.run',
      '.kirk.replit.dev',
      'gatwicktuning.replit.app',
      'gatwicktuning.co.uk'
    ]
  },
  build: {
    outDir: 'dist',
    sourcemap: isReplit ? false : true, // Disable sourcemaps on Replit to reduce build size
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          ui: ['@headlessui/react', '@heroicons/react']
        }
      }
    },
    // Reduce chunk size for better performance on Replit
    chunkSizeWarningLimit: 1000,
    // Minify for production
    minify: true,
  }
});