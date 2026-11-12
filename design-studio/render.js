/**
 * design-studio/render.js
 * Exports every redesign to a high-resolution PNG and a vector PDF
 * using the Chrome or Edge already installed on this computer.
 * No npm packages needed.
 *
 *   node design-studio/render.js              render all designs
 *   node design-studio/render.js five-myths   render one design
 *
 * Each design lives in redesigns/<slug>/<slug>.html and declares its size:
 *   <meta name="artboard" content="1080x1350">
 * Output: redesigns/<slug>/export/<slug>.png (2x) and <slug>.pdf (vector).
 */
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const browsers = [
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
];
const browser = process.env.CHROME_PATH || browsers.find((b) => fs.existsSync(b));
if (!browser) {
  console.error('Chrome or Edge not found. Set CHROME_PATH to its location.');
  process.exit(1);
}

const dir = path.join(__dirname, 'redesigns');
const only = process.argv[2];
const slugs = fs.readdirSync(dir).filter((s) => fs.existsSync(path.join(dir, s, s + '.html')) && (!only || s === only));
const fileUrl = (p) => 'file:///' + p.replace(/\\/g, '/');

for (const slug of slugs) {
  const html = path.join(dir, slug, slug + '.html');
  const src = fs.readFileSync(html, 'utf8');
  const m = src.match(/name="artboard" content="(\d+)x(\d+)"/);
  if (!m) { console.warn(`skip ${slug}: no artboard meta`); continue; }
  const [w, h] = [Number(m[1]), Number(m[2])];
  const out = path.join(dir, slug, 'export');
  fs.mkdirSync(out, { recursive: true });

  const common = ['--headless=new', '--disable-gpu', '--hide-scrollbars', '--allow-file-access-from-files', '--virtual-time-budget=6000'];
  execFileSync(browser, [...common, `--window-size=${w},${h}`, '--force-device-scale-factor=2',
    `--screenshot=${path.join(out, slug + '.png')}`, fileUrl(html)], { stdio: 'pipe' });
  execFileSync(browser, [...common, '--no-pdf-header-footer', '--print-to-pdf-no-header',
    `--print-to-pdf=${path.join(out, slug + '.pdf')}`, fileUrl(html)], { stdio: 'pipe' });

  console.log(`${slug}: ${w}x${h} → export/${slug}.png (2x), export/${slug}.pdf`);
}
