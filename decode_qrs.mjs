import fs from 'fs';
import { PNG } from 'pngjs';
import jsQR from 'jsqr';

const pages = [
  'pdf_page_04.png',
  'pdf_page_05.png',
  'pdf_page_06.png',
  'pdf_page_07.png',
  'pdf_page_08.png',
  'pdf_page_09.png',
  'pdf_page_10.png',
  'pdf_page_11.png',
  'pdf_page_12.png',
  'pdf_page_13.png',
  'pdf_page_14.png'
];

async function scanPage(filename) {
  if (!fs.existsSync(filename)) return;
  const data = fs.readFileSync(filename);
  const png = PNG.sync.read(data);
  const { width, height } = png;

  console.log(`\n=== Scanning ${filename} (${width}x${height}) ===`);

  // Scan full image first
  const fullCode = jsQR(png.data, width, height);
  if (fullCode) {
    console.log(`[FULL PAGE QR] Content: "${fullCode.data}" at (${fullCode.location.topLeftCorner.x}, ${fullCode.location.topLeftCorner.y})`);
  }

  // Scan sliding windows or tiles to detect multiple QR codes on a page!
  const found = new Set();
  if (fullCode) found.add(fullCode.data);

  // Divide into grid of boxes (e.g. 300x300 with step 100)
  const windowSizes = [200, 300, 450];
  for (const size of windowSizes) {
    const step = Math.floor(size / 2);
    for (let y = 0; y <= height - size; y += step) {
      for (let x = 0; x <= width - size; x += step) {
        // extract window data
        const subData = new Uint8ClampedArray(size * size * 4);
        for (let row = 0; row < size; row++) {
          const srcIdx = ((y + row) * width + x) * 4;
          const destIdx = row * size * 4;
          subData.set(png.data.subarray(srcIdx, srcIdx + size * 4), destIdx);
        }
        const code = jsQR(subData, size, size);
        if (code && code.data && !found.has(code.data)) {
          found.add(code.data);
          console.log(`[FOUND QR in ${size}x${size} at (${x},${y})]: "${code.data}"`);
        }
      }
    }
  }

  if (found.size === 0) {
    console.log('No QR codes detected on this page.');
  }
}

for (const p of pages) {
  await scanPage(p);
}
