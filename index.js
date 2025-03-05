
// This file is used as an entry point for Replit
// It will start the Vite preview server

import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

async function runCommand(command) {
  try {
    const { stdout, stderr } = await execAsync(command, { stdio: 'inherit' });
    if (stdout) console.log(stdout);
    if (stderr) console.error(stderr);
    return true;
  } catch (error) {
    console.error(`Error executing ${command}:`, error.message);
    return false;
  }
}

async function main() {
  console.log('Building the application...');
  const buildSuccess = await runCommand('npm run build');
  
  if (!buildSuccess) {
    console.error('Build failed. Exiting.');
    process.exit(1);
  }
  
  console.log('Build completed successfully.');
  console.log('Starting the preview server...');
  
  await runCommand('npm run preview');
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
