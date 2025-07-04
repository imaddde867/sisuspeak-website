#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const readdir = promisify(fs.readdir);
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const stat = promisify(fs.stat);

// Words to replace
const replacements = [
  { from: /Finnish/g, to: 'language' },
  { from: /finnish/g, to: 'language' },
  { from: /Finland/g, to: 'our team' },
  { from: /Suomi/g, to: '' },
  { from: /import\s+{\s*useLanguage\s*}\s*from\s*['"]@\/contexts\/LanguageContext['"]\s*;?/g, to: '' },
  { from: /const\s*{\s*t\s*}\s*=\s*useLanguage\(\)\s*;?/g, to: '' },
  { from: /{\s*t\(['"]([\w\.\-\_]+)['"]\)\s*}/g, to: '' } // Remove t() function calls
];

// List of components to skip entirely (we've already fixed these manually)
const skipFiles = [
  'CTASection.tsx',
  'FinalCTASection.tsx',
  'Hero.tsx',
  'layout.tsx',
  'LanguageSwitcher.tsx',
  'LanguageContext.tsx'
];

// Function to check if file should be processed
const shouldProcessFile = async (filePath) => {
  const basename = path.basename(filePath);
  if (skipFiles.includes(basename)) {
    console.log(`Skipping ${basename} as it was already processed manually`);
    return false;
  }
  
  // Only process .tsx, .ts, .js files
  const ext = path.extname(filePath).toLowerCase();
  if (!['.tsx', '.ts', '.js'].includes(ext)) {
    return false;
  }
  
  return true;
};

// Function to process a single file
const processFile = async (filePath) => {
  try {
    if (!await shouldProcessFile(filePath)) {
      return;
    }
    
    const content = await readFile(filePath, 'utf8');
    let newContent = content;
    let changed = false;
    
    // Apply all replacements
    for (const { from, to } of replacements) {
      if (from.test(newContent)) {
        newContent = newContent.replace(from, to);
        changed = true;
      }
    }
    
    // Save file if changes were made
    if (changed) {
      console.log(`Processing file: ${filePath}`);
      await writeFile(filePath, newContent, 'utf8');
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error);
  }
};

// Function to walk the directory
const walkDir = async (dir) => {
  const entries = await readdir(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    
    if (entry.isDirectory()) {
      // Skip node_modules and .git
      if (entry.name !== 'node_modules' && entry.name !== '.git') {
        await walkDir(fullPath);
      }
    } else {
      await processFile(fullPath);
    }
  }
};

// Main function
const main = async () => {
  try {
    const projectRoot = process.cwd();
    console.log(`Processing files in ${projectRoot}`);
    
    // Process the src directory
    await walkDir(path.join(projectRoot, 'src'));
    
    console.log('Finished processing files');
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
};

main();
