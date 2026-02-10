import sharp from 'sharp';
import { resolve } from 'path';

const logoPath = resolve('public/images/logo.png');

// Generate 32x32 icon for light mode
await sharp(logoPath)
  .resize(32, 32, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
  .png()
  .toFile(resolve('public/icon-light-32x32.png'));
console.log('Generated icon-light-32x32.png');

// Generate 32x32 icon for dark mode
await sharp(logoPath)
  .resize(32, 32, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
  .png()
  .toFile(resolve('public/icon-dark-32x32.png'));
console.log('Generated icon-dark-32x32.png');

// Generate 180x180 apple-icon
await sharp(logoPath)
  .resize(180, 180, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
  .png()
  .toFile(resolve('public/apple-icon.png'));
console.log('Generated apple-icon.png');

console.log('All favicons generated from company logo.');
