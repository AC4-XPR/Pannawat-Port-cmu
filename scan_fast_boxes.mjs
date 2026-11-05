import fs from 'fs';
import { PNG } from 'pngjs';
import jsQR from 'jsqr';

function scanBox(png, x, y, w, h) {
  const codes = new Set();
  for (let sz = 150; sz <= Math.min(w, h); sz += 40) {
    for (let sy = y; sy <= y + h - sz; sy += 30) {
      for (let sx = x; sx <= x + w - sz; sx += 30) {
        const subData = new Uint8ClampedArray(sz * sz * 4);
        for (let r = 0; r < sz; r++) {
          const srcIdx = ((sy + r) * png.width + sx) * 4;
          subData.set(png.data.subarray(srcIdx, srcIdx + sz * 4), r * sz * 4);
        }
        const c = jsQR(subData, sz, sz);
        if (c && c.data) codes.add(c.data);
      }
    }
  }
  return Array.from(codes);
}

// high_page_01: Page 8 (width 1654, height 2340)
// AOT row is y: 900..1300, x: 1200..1654
const p8 = PNG.sync.read(fs.readFileSync('high_page_01.png'));
console.log('Page 8 AOT row:', scanBox(p8, 1300, 900, 350, 400));

// high_page_03: Page 10 (width 1654, height 2340)
// Thera Time Document is top right: y: 400..800, x: 1200..1654
// Siam Demo PV & Game is bottom left: y: 1700..2300, x: 100..800
const p10 = PNG.sync.read(fs.readFileSync('high_page_03.png'));
console.log('Page 10 Thera Time:', scanBox(p10, 1300, 350, 350, 400));
console.log('Page 10 Siam Softpower:', scanBox(p10, 150, 1750, 550, 500));

// high_page_04: Page 11 (width 1654, height 2340)
// GGJ 2026: top right, y: 400..1000, x: 1250..1654
// GuGame: middle right, y: 1200..1700, x: 1200..1654
const p11 = PNG.sync.read(fs.readFileSync('high_page_04.png'));
console.log('Page 11 GGJ 2026:', scanBox(p11, 1300, 450, 350, 600));
console.log('Page 11 GuGame:', scanBox(p11, 1200, 1250, 450, 450));
