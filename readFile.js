const fs = require('fs');

// Use fs.readFile to read the file asynchronously
fs.readFile('sample.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }
  console.log('File content:', data);
});
