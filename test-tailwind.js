const path = require('path');
const fs = require('fs');

const tailwindPath = path.join(__dirname, 'node_modules', '.bin', 'tailwindcss');
console.log('Checking if tailwindcss exists at:', tailwindPath);
console.log('File exists:', fs.existsSync(tailwindPath));

// List files in the .bin directory
const binDir = path.join(__dirname, 'node_modules', '.bin');
console.log('Files in .bin directory:');
if (fs.existsSync(binDir)) {
  fs.readdirSync(binDir).forEach(file => {
    console.log(' -', file);
  });
} else {
  console.log('No .bin directory found');
}