/**
 * scripts/check.js — checks the built site in ./dist
 *
 *   npm run check              internal checks (links, images, anchors, HTML basics)
 *   npm run check -- --external also requests every external link
 *
 * Exits with code 1 if anything is wrong.
 */
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const dist = path.resolve(root, process.env.OUT_DIR || 'dist');
const checkExternal = process.argv.includes('--external');

if (!fs.existsSync(path.join(dist, 'index.html'))) {
  console.error('dist/index.html not found — run "npm run build" first.');
  process.exit(1);
}

// Work out the base path the site was built with from the stylesheet link
const indexHtml = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
const cssHref = (indexHtml.match(/href="([^"]*)css\/style\.css"/) || [])[1] || '/';
const base = cssHref;

const problems = [];
const external = new Set();
const idsByFile = {};

const htmlFiles = fs.readdirSync(dist).filter((f) => f.endsWith('.html'));
for (const f of htmlFiles) {
  const html = fs.readFileSync(path.join(dist, f), 'utf8');
  idsByFile[f] = new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]));
}

const attr = (tag, name) => {
  const m = tag.match(new RegExp('\\s' + name + '="([^"]*)"'));
  return m ? m[1] : null;
};

for (const file of htmlFiles) {
  const html = fs.readFileSync(path.join(dist, file), 'utf8');
  const report = (msg) => problems.push(`${file}: ${msg}`);

  // HTML basics
  const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]);
  const dupes = ids.filter((id, i) => ids.indexOf(id) !== i);
  if (dupes.length) report(`duplicate id(s): ${[...new Set(dupes)].join(', ')}`);

  const h1s = (html.match(/<h1[\s>]/g) || []).length;
  if (h1s !== 1) report(`expected exactly one <h1>, found ${h1s}`);
  if (!/<html lang="/.test(html)) report('missing <html lang>');
  if (!/<title>[^<]+<\/title>/.test(html)) report('missing <title>');

  for (const [img] of html.matchAll(/<img\b[^>]*>/g)) {
    if (attr(img, 'alt') === null) report(`<img> without alt: ${img.slice(0, 80)}`);
  }

  for (const [a] of html.matchAll(/<a\b[^>]*>/g)) {
    if (attr(a, 'target') === '_blank' && !/noopener/.test(attr(a, 'rel') || '')) {
      report(`target=_blank without rel=noopener: ${attr(a, 'href')}`);
    }
  }

  // Forbidden leftovers
  if (/href="#"/.test(html)) report('placeholder link href="#"');
  if (/unsplash\.com/.test(html)) report('stock image from unsplash.com');
  if (/localhost|127\.0\.0\.1/.test(html)) report('reference to localhost');
  if (/[A-Z]:\\\\|[A-Z]:\/Users/.test(html)) report('hard-coded local file path');

  // Links and sources
  const refs = [...html.matchAll(/\s(?:href|src|data-full)="([^"]+)"/g)].map((m) => m[1]);
  for (const ref of refs) {
    if (/^(mailto:|tel:)/.test(ref)) {
      if (/^mailto:$/.test(ref) || /^tel:$/.test(ref)) report(`empty ${ref} link`);
      continue;
    }
    if (/^https?:\/\//.test(ref)) {
      if (!/fonts\.(googleapis|gstatic)\.com/.test(ref)) external.add(ref);
      continue;
    }
    if (ref.startsWith('#')) {
      if (ref.length > 1 && !idsByFile[file].has(ref.slice(1))) report(`anchor ${ref} has no matching id`);
      continue;
    }
    if (!ref.startsWith(base)) {
      report(`link "${ref}" does not start with the base path "${base}"`);
      continue;
    }
    const [p, hash] = ref.slice(base.length).split('#');
    const target = p === '' ? 'index.html' : decodeURIComponent(p);
    const fsPath = path.join(dist, target);
    if (!fs.existsSync(fsPath)) report(`missing file for "${ref}"`);
    else if (hash && target.endsWith('.html') && !idsByFile[target].has(hash)) {
      report(`anchor "${ref}" has no matching id in ${target}`);
    }
  }
}

async function checkLinks() {
  for (const url of external) {
    try {
      const res = await fetch(url, {
        method: 'GET',
        redirect: 'follow',
        headers: { 'User-Agent': 'Mozilla/5.0 (portfolio link check)' },
        signal: AbortSignal.timeout(15000),
      });
      const ok = res.status < 400 || [403, 429, 999].includes(res.status); // social sites often block bots
      console.log(`${ok ? 'ok ' : 'BAD'} ${res.status} ${url}`);
      if (!ok) problems.push(`external link returned ${res.status}: ${url}`);
    } catch (e) {
      console.log(`ERR ${url} (${e.cause ? e.cause.code || e.cause.message : e.message})`);
      problems.push(`external link failed: ${url}`);
    }
  }
}

(async () => {
  if (checkExternal) await checkLinks();
  console.log(`Checked ${htmlFiles.length} HTML files (base path "${base}"), ${external.size} external links${checkExternal ? '' : ' (not requested; use --external)'}.`);
  if (problems.length) {
    console.error(`\n${problems.length} problem(s):\n - ` + problems.join('\n - '));
    process.exit(1);
  }
  console.log('No problems found.');
})();
