#!/usr/bin/env node

/**
 * Image optimization script for production
 * Ensures all images are properly optimized for web delivery
 */

const fs = require('fs');
const path = require('path');

const imageDir = path.join(__dirname, '../public/images');

console.log('🖼️  Checking image optimization...');

// Check if WebP versions exist for all images
const checkWebPVersions = () => {
  const images = fs.readdirSync(imageDir);
  const pngJpgImages = images.filter(img => 
    img.endsWith('.png') || img.endsWith('.jpg') || img.endsWith('.jpeg')
  );
  
  const webpImages = images.filter(img => img.endsWith('.webp'));
  
  console.log(`📊 Found ${pngJpgImages.length} PNG/JPG images`);
  console.log(`📊 Found ${webpImages.length} WebP images`);
  
  const missingWebP = pngJpgImages.filter(img => {
    const baseName = img.replace(/\.(png|jpg|jpeg)$/i, '');
    return !webpImages.some(webp => webp.startsWith(baseName));
  });
  
  if (missingWebP.length > 0) {
    console.log('⚠️  Missing WebP versions for:');
    missingWebP.forEach(img => console.log(`   - ${img}`));
    console.log('\n💡 Consider converting these to WebP for better performance');
  } else {
    console.log('✅ All images have WebP versions');
  }
};

// Check image file sizes
const checkImageSizes = () => {
  const images = fs.readdirSync(imageDir);
  const largeImages = [];
  
  images.forEach(img => {
    const filePath = path.join(imageDir, img);
    const stats = fs.statSync(filePath);
    const sizeKB = Math.round(stats.size / 1024);
    
    if (sizeKB > 500) {
      largeImages.push({ name: img, size: sizeKB });
    }
  });
  
  if (largeImages.length > 0) {
    console.log('\n⚠️  Large images detected (>500KB):');
    largeImages.forEach(img => {
      console.log(`   - ${img.name}: ${img.size}KB`);
    });
    console.log('\n💡 Consider optimizing these images');
  } else {
    console.log('✅ All images are optimally sized');
  }
};

// Run checks
checkWebPVersions();
checkImageSizes();

console.log('\n🚀 Image optimization check complete!');