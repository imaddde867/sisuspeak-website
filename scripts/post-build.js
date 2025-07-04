#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('Running post-build script...');

// Create a .nojekyll file to prevent GitHub Pages from processing the site with Jekyll
const nojekyllPath = path.join(__dirname, '../out/.nojekyll');
try {
  fs.writeFileSync(nojekyllPath, '');
  console.log('✅ .nojekyll file created');
} catch (error) {
  console.error('❌ Error creating .nojekyll file:', error);
}

console.log('Post-build script completed!');
