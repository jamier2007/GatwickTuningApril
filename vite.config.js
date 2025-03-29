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
      '/api-proxy': {
        target: 'http://data.tcserver.co.uk:5001',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api-proxy/, ''),
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
    ],
    proxy: {
      '/api-proxy': {
        target: 'http://data.tcserver.co.uk:5001',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api-proxy/, ''),
      }
    }
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