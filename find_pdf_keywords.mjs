import fs from 'fs';

const buf = fs.readFileSync('public/assets/aistudio/Port_Test_102__3__5ab230d3.pdf');
const str = buf.toString('latin1');

// Split by /Page objects or find /Annots
const pageRegex = /\/Type\s*\/Page\b[\s\S]*?(?=\/Type\s*\/Page\b|\z)/g;
let pIdx = 1;

// Also look for QR code images or image streams
// Let's find all text in parenthesis or TJ
console.log('PDF length:', str.length);

// Let's search for "itch.io", "roblox.com", "github.com", "drive.google", "youtube", "discord", "carrd"
const keywords = ['roblox', 'itch', 'github', 'discord', 'carrd', 'youtube', 'tiktok', 'instagram', 'drive', 'bit.ly', 'linktr', 'http', 'www.'];
keywords.forEach(kw => {
  let idx = 0;
  while ((idx = str.toLowerCase().indexOf(kw, idx)) !== -1) {
    const start = Math.max(0, idx - 80);
    const end = Math.min(str.length, idx + 120);
    console.log(`[KW: ${kw}] ...${str.slice(start, end).replace(/[\r\n]+/g, ' ')}...`);
    idx += kw.length + 10;
  }
});
