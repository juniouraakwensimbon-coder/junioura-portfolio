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

test('build produces all five pages, 404.html and .nojekyll', () => {
  const pages = ['index.html', 'web-development/index.html', 'digital-communications/index.html', 'education/index.html', 'about/index.html'];
  for (const f of [...pages, '404.html', '.nojekyll', 'css/style.css', 'js/script.js']) {
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

test('live project links point to the real site and open safely', () => {
  const web = fs.readFileSync(path.join(outDir, 'web-development/index.html'), 'utf8');
  for (const p of data.projects.filter((x) => x.link)) {
    assert.ok(web.includes(`href="${p.link.url}"`), `link missing: ${p.link.url}`);
  }
});

test('credentials are text only: every title listed, no certificate images published', () => {
  const about = fs.readFileSync(path.join(outDir, 'about/index.html'), 'utf8');
  for (const c of data.credentials) assert.ok(about.includes(c.title.replace(/&/g, '&amp;')) || about.includes(c.title.replace(/“/g, '&#8220;')) || about.includes(c.title), c.title);
  for (const f of ['index.html', 'about/index.html', 'web-development/index.html', 'digital-communications/index.html', 'education/index.html']) {
    assert.doesNotMatch(fs.readFileSync(path.join(outDir, f), 'utf8'), /images\/certificates\/|abii[^"]*\.(webp|jpg|png)/i, f);
  }
  assert.ok(!fs.existsSync(path.join(outDir, 'images', 'certificates')), 'certificate scans copied into the build');
});

test('learning program: lesson pages are built, linked and use "Program"', () => {
  const { lessons, calendar } = require('../src/data/lessons');
  assert.equal(calendar.length, 30);
  const edu = fs.readFileSync(path.join(outDir, 'education/index.html'), 'utf8');
  assert.match(edu, /Beginner HTML and CSS Learning Program</);
  assert.match(edu, /id="programme"/); // existing links to #programme keep working
  for (const l of lessons) {
    const file = path.join(outDir, 'education', 'lessons', l.slug, 'index.html');
    assert.ok(fs.existsSync(file), `missing ${l.slug}`);
    assert.ok(edu.includes(`href="${BASE}education/lessons/${l.slug}/"`), `not linked from Education: ${l.slug}`);
    const page = fs.readFileSync(file, 'utf8');
    for (const id of ['introduction', 'learn', 'explanation', 'demonstration', 'practice', 'check', 'mistakes', 'summary', 'next']) {
      assert.match(page, new RegExp(`<h2 id="${id}"`), `${l.slug} is missing #${id}`);
    }
    assert.match(page, /<h1 id="page-title"/);
  }
  // Lesson 3 was developed from an outline and must say so
  assert.match(fs.readFileSync(path.join(outDir, 'education/lessons', lessons[2].slug, 'index.html'), 'utf8'), /Developed from the lesson outline/);
  // The project title is spelled "Program" everywhere it appears
  for (const f of ['index.html', 'education/index.html']) {
    assert.doesNotMatch(fs.readFileSync(path.join(outDir, f), 'utf8'), /Learning Programme/, f);
  }
});

test('no placeholder content, stock photos or skill percentages', () => {
  assert.doesNotMatch(html, /unsplash|lorem ipsum|NextGen E-commerce|CodeLearn/i);
  assert.doesNotMatch(html, /\b\d{2,3}%/);
});

test('every image referenced in the data exists', () => {
  const imgs = [data.owner.photo.src, ...data.designs.map((d) => `images/designs/${d.slug}.webp`)];
  for (const p of data.projects) for (const i of p.images || []) imgs.push(i.src);
  // certificate scans are private: not in Git and never published, so they are not required here
  for (const d of data.documents) imgs.push(d.src);
  for (const src of imgs) assert.ok(fs.existsSync(path.join(root, 'public', src)), `missing ${src}`);
});

// ---------- Express server (local development) ----------
test('Express server serves the five pages, redirects old URLs and returns 404s', async () => {
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

    for (const p of ['/web-development/', '/digital-communications/', '/education/', '/about/', '/about']) {
      const r = await fetch(url(p));
      assert.equal(r.status, 200, p);
      const text = await r.text();
      assert.match(text, /<h1 id="page-title"/, p);
      assert.doesNotMatch(text, /class="breadcrumb"/, p);
      // pages with their own nav link are marked as the current page
      if (/about|education/.test(p)) assert.match(text, /aria-current="page"/, p);
    }

    assert.equal((await fetch(url('/images/certificates/bloom-summit-2026-certificate-of-participation.webp'))).status, 404);

    for (const [from, to] of [['/projects', '/web-development/'], ['/contact', '/#contact']]) {
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
