// This file is used as an entry point for Replit (CommonJS version)
// It will start the Vite preview server

const { execSync } = require('child_process');

console.log('Installing dependencies...');
try {
  execSync('npm install', { stdio: 'inherit' });
  console.log('Dependencies installed successfully.');
} catch (error) {
  console.error('Failed to install dependencies:', error);
  // Continue anyway, as dependencies might already be installed
}

console.log('Building the application...');
try {
  execSync('npx vite build', { stdio: 'inherit' });
  console.log('Build completed successfully.');
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
}

console.log('Starting the preview server...');
try {
  execSync('npx vite preview --host 0.0.0.0 --port 3000', { stdio: 'inherit' });
} catch (error) {
  console.error('Preview server failed to start:', error);
  process.exit(1);
} 