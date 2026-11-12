/**
 * Run with: npm test
 * Uses Node's built-in test runner — no extra dependencies.
 */
const { test, before, after } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const os = require('os');
const path = require('path');
const { execFileSync } = require('child_process');

const root = path.join(__dirname, '..');
const data = require('../src/data/portfolioData');
const BASE = '/junioura-akwensimbom-portfolio/';

// ---------- Static build (GitHub Pages) ----------
let outDir;
let html;

before(() => {
  outDir = fs.mkdtempSync(path.join(os.tmpdir(), 'portfolio-build-'));
  execFileSync(process.execPath, ['scripts/build.js'], {
    cwd: root,
    env: { ...process.env, BASE_PATH: BASE, SITE_URL: 'https://example.github.io' + BASE, OUT_DIR: outDir },
    stdio: 'pipe',
  });
  html = fs.readFileSync(path.join(outDir, 'index.html'), 'utf8');
});

after(() => fs.rmSync(outDir, { recursive: true, force: true }));

test('build produces index.html, 404.html and .nojekyll', () => {
  for (const f of ['index.html', '404.html', '.nojekyll', 'css/style.css', 'js/script.js']) {
    assert.ok(fs.existsSync(path.join(outDir, f)), `${f} missing`);
  }
});

test('link checker passes on the GitHub Pages build', () => {
  execFileSync(process.execPath, ['scripts/check.js'], { cwd: root, env: { ...process.env, OUT_DIR: outDir }, stdio: 'pipe' });
});

test('assets use the GitHub Pages base path', () => {
  assert.match(html, new RegExp(`href="${BASE}css/style\\.css"`));
  assert.match(html, new RegExp(`src="${BASE}js/script\\.js"`));
  assert.doesNotMatch(html, /(src|href)="\/(css|js|images)\//, 'root-relative asset path would break on GitHub Pages');
});

test('contact details are correct and clickable', () => {
  assert.match(html, /href="mailto:juniouraakwensimbon@gmail\.com"/);
  assert.match(html, /href="tel:\+237679016149"/);
  for (const s of data.owner.social) assert.ok(html.includes(`href="${s.url}"`), `${s.name} link missing`);
});

test('static contact form composes an email instead of posting to a server', () => {
  assert.match(html, /data-mailto="juniouraakwensimbon@gmail\.com"/);
  assert.doesNotMatch(html, /action="[^"]*\/contact"/);
});

test('hidden project links are not rendered', () => {
  for (const p of data.projects) {
    for (const l of p.links.filter((x) => !x.show)) {
      assert.ok(!html.includes(`href="${l.url}"`), `hidden link rendered: ${l.url}`);
    }
  }
});

test('no placeholder content, stock photos or skill percentages', () => {
  assert.doesNotMatch(html, /unsplash|lorem ipsum|NextGen E-commerce|CodeLearn/i);
  assert.doesNotMatch(html, /\b\d{2,3}%/);
});

test('every image referenced in the data exists', () => {
  const imgs = [data.owner.photo.src, ...data.designs.map((d) => d.src)];
  for (const p of data.projects) if (p.image) imgs.push(p.image);
  for (const c of data.certifications) if (c.image) imgs.push(c.image);
  for (const src of imgs) assert.ok(fs.existsSync(path.join(root, 'public', src)), `missing ${src}`);
});

// ---------- Express server (local development) ----------
test('Express server serves the page, redirects old URLs and returns 404s', async () => {
  const app = require('../src/app');
  const server = app.listen(0);
  const { port } = server.address();
  const url = (p) => `http://127.0.0.1:${port}${p}`;
  try {
    const home = await fetch(url('/'));
    assert.equal(home.status, 200);
    const body = await home.text();
    assert.match(body, /Junioura/);
    assert.match(body, /action="\/contact"/);

    for (const [from, to] of [['/about', '/#about'], ['/projects', '/#work'], ['/contact', '/#contact']]) {
      const r = await fetch(url(from), { redirect: 'manual' });
      assert.equal(r.status, 301, from);
      assert.equal(r.headers.get('location'), to);
    }

    const missing = await fetch(url('/does-not-exist'));
    assert.equal(missing.status, 404);

    const css = await fetch(url('/css/style.css'));
    assert.equal(css.status, 200);

    const invalid = await fetch(url('/contact'), {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: 'name=&email=bad&subject=&message=',
    });
    assert.equal(invalid.status, 422);
    assert.match(await invalid.text(), /Please check the form/);
  } finally {
    server.close();
  }
});
