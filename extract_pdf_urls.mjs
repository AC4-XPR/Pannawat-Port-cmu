import fs from 'fs';

const buf = fs.readFileSync('public/assets/aistudio/Port_Test_102__3__5ab230d3.pdf');
const str = buf.toString('latin1');

const uriRegex = /\/URI\s*\(([^)]+)\)/g;
let match;
const uris = new Set();
while ((match = uriRegex.exec(str)) !== null) {
  uris.add(match[1]);
}
console.log('URIs in PDF annotations:');
uris.forEach(u => console.log(' -', u));

const httpRegex = /https?:\/\/[a-zA-Z0-9.\-_~:/?#[\]@!$&'()*+,;=%]+/g;
const httpMatches = new Set();
while ((match = httpRegex.exec(str)) !== null) {
  httpMatches.add(match[0]);
}
console.log('\nAll HTTP matches:');
httpMatches.forEach(u => console.log(' -', u));
