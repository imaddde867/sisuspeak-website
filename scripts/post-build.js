const fs = require('fs');
const path = require('path');

// Create a .nojekyll file to prevent GitHub Pages from ignoring files that begin with an underscore
const nojekyllPath = path.join(process.cwd(), 'out', '.nojekyll');
fs.writeFileSync(nojekyllPath, '');
console.log('Created .nojekyll file');

// Log completion
console.log('Post-build processing completed successfully');
