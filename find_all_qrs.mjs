import fs from 'fs';
import https from 'https';
import { PNG } from 'pngjs';
import jsQR from 'jsqr';

// Resolve URL redirects
function resolveRedirect(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        resolve(res.headers.location);
      } else {
        // Read body to see if there's meta refresh or JS redirect
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => {
          const metaMatch = data.match(/url=(https?:\/\/[^"'>]+)/i) || data.match(/window\.location\.href\s*=\s*['"]([^'"]+)['"]/i);
          if (metaMatch) {
            resolve(metaMatch[1]);
          } else {
            resolve(url);
          }
        });
      }
    }).on('error', () => resolve(url));
  });
}

const pages = [
  { file: 'pdf_page_05.png', name: 'MAS Framework' },
  { file: 'pdf_page_06.png', name: 'SnapCursorX & TCAS' },
  { file: 'pdf_page_07.png', name: 'CyberSec & XPR Corp' },
  { file: 'pdf_page_08.png', name: 'AOT New Hope & Shattered Memories' },
  { file: 'pdf_page_09.png', name: 'FTC 2025' },
  { file: 'pdf_page_10.png', name: 'Thera Time & Softpower Siam' },
  { file: 'pdf_page_11.png', name: 'GGJ 2026, GuGame, RST Game Jam' }
];

const results = [];

for (const { file, name } of pages) {
  if (!fs.existsSync(file)) continue;
  const png = PNG.sync.read(fs.readFileSync(file));
  const { width, height } = png;
  const foundOnPage = new Map();

  // Slide with 160, 220, 280 window size, step 70
  for (const size of [160, 220, 280]) {
    const step = 60;
    for (let y = 0; y <= height - size; y += step) {
      for (let x = 0; x <= width - size; x += step) {
        const subData = new Uint8ClampedArray(size * size * 4);
        for (let row = 0; row < size; row++) {
          const srcIdx = ((y + row) * width + x) * 4;
          subData.set(png.data.subarray(srcIdx, srcIdx + size * 4), row * size * 4);
        }
        const code = jsQR(subData, size, size);
        if (code && code.data && !foundOnPage.has(code.data)) {
          foundOnPage.set(code.data, { x: x + size/2, y: y + size/2 });
        }
      }
    }
  }

  for (const [url, pos] of foundOnPage.entries()) {
    results.push({ page: file, pageName: name, url, x: Math.round(pos.x), y: Math.round(pos.y) });
  }
}

console.log(`Found ${results.length} QR codes in total! Resolving destinations...`);

for (const item of results) {
  const dest = await resolveRedirect(item.url);
  item.destination = dest;
  console.log(`[${item.pageName}] at (${item.x}, ${item.y}): ${item.url} -> ${dest}`);
}

fs.writeFileSync('all_decoded_qrs.json', JSON.stringify(results, null, 2));
