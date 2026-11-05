import fs from 'fs';
import { PNG } from 'pngjs';
import jsQR from 'jsqr';

const files = [
  { file: 'high_page_01.png', label: 'Page 8 (AOT & Shattered Memories)' },
  { file: 'high_page_02.png', label: 'Page 9 (FTC & Bangmod)' },
  { file: 'high_page_03.png', label: 'Page 10 (Thera Time & Siam Softpower)' },
  { file: 'high_page_04.png', label: 'Page 11 (GGJ, GuGame, RST)' }
];

for (const { file, label } of files) {
  if (!fs.existsSync(file)) continue;
  const png = PNG.sync.read(fs.readFileSync(file));
  const found = new Set();
  const { width, height } = png;

  // step 60, size 200, 300, 400
  for (const sz of [180, 260, 360]) {
    const step = 80;
    for (let y = 0; y <= height - sz; y += step) {
      for (let x = 0; x <= width - sz; x += step) {
        const subData = new Uint8ClampedArray(sz * sz * 4);
        for (let row = 0; row < sz; row++) {
          const srcIdx = ((y + row) * width + x) * 4;
          subData.set(png.data.subarray(srcIdx, srcIdx + sz * 4), row * sz * 4);
        }
        const code = jsQR(subData, sz, sz);
        if (code && code.data) {
          found.add(code.data);
        }
      }
    }
  }

  console.log(`=== ${label} (${file}) ===`);
  for (const u of found) {
    console.log(' -', u);
  }
}
