import fs from 'fs';
import { PNG } from 'pngjs';
import jsQR from 'jsqr';

const regions = [
  // Page 5: MAS
  { file: 'pdf_page_05.png', label: 'MAS Handbook/Github', x: 550, y: 850, w: 270, h: 320 },
  { file: 'pdf_page_05.png', label: 'MAS Website', x: 20, y: 700, w: 200, h: 250 },

  // Page 6: TCAS Command Center Prototype
  { file: 'pdf_page_06.png', label: 'TCAS Prototype', x: 650, y: 850, w: 177, h: 300 },

  // Page 8: AOT V3 Game & Shattered Memories
  { file: 'pdf_page_08.png', label: 'AOT V1 Trailer', x: 700, y: 450, w: 127, h: 150 },
  { file: 'pdf_page_08.png', label: 'AOT V3 Game', x: 700, y: 450, w: 127, h: 150 },
  { file: 'pdf_page_08.png', label: 'AOT row', x: 600, y: 420, w: 227, h: 200 },
  { file: 'pdf_page_08.png', label: 'Shattered Memories Game', x: 650, y: 720, w: 177, h: 200 },

  // Page 10: Freedom War of Siam Demo PV & Game
  { file: 'pdf_page_10.png', label: 'Siam Demo PV & Game', x: 80, y: 850, w: 260, h: 200 },

  // Page 11: GGJ 2026 & GuGame
  { file: 'pdf_page_11.png', label: 'GGJ Itch.io', x: 750, y: 220, w: 100, h: 150 },
  { file: 'pdf_page_11.png', label: 'GGJ Slide', x: 750, y: 320, w: 100, h: 150 },
  { file: 'pdf_page_11.png', label: 'GuGame Game', x: 700, y: 620, w: 127, h: 150 },
  { file: 'pdf_page_11.png', label: 'GuGame Present', x: 800, y: 620, w: 100, h: 150 },
  { file: 'pdf_page_11.png', label: 'Page 11 right column', x: 700, y: 200, w: 127, h: 700 }
];

function scanRegion(png, rx, ry, rw, rh) {
  // clamp
  const x0 = Math.max(0, rx);
  const y0 = Math.max(0, ry);
  const x1 = Math.min(png.width, rx + rw);
  const y1 = Math.min(png.height, ry + rh);
  const w = x1 - x0;
  const h = y1 - y0;
  if (w <= 0 || h <= 0) return null;

  // try multiple subcrops inside region
  const found = new Set();
  for (let sz = 80; sz <= Math.min(w, h); sz += 30) {
    for (let sy = y0; sy <= y1 - sz; sy += 25) {
      for (let sx = x0; sx <= x1 - sz; sx += 25) {
        const subData = new Uint8ClampedArray(sz * sz * 4);
        for (let row = 0; row < sz; row++) {
          const srcIdx = ((sy + row) * png.width + sx) * 4;
          subData.set(png.data.subarray(srcIdx, srcIdx + sz * 4), row * sz * 4);
        }
        const code = jsQR(subData, sz, sz);
        if (code && code.data) {
          found.add(code.data);
        }
      }
    }
  }
  return Array.from(found);
}

const allResults = [];
for (const reg of regions) {
  if (!fs.existsSync(reg.file)) continue;
  const png = PNG.sync.read(fs.readFileSync(reg.file));
  const codes = scanRegion(png, reg.x, reg.y, reg.w, reg.h);
  console.log(`[${reg.file} - ${reg.label}]:`, codes);
  for (const c of codes) {
    allResults.push({ file: reg.file, label: reg.label, url: c });
  }
}

fs.writeFileSync('targeted_qrs.json', JSON.stringify(allResults, null, 2));
