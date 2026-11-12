/**
 * scripts/build.js — static production build
 *
 * Renders the same EJS templates the Express server uses into plain HTML
 * in ./dist, so the portfolio can be hosted on any static host
 * (GitHub Pages, Netlify, etc.) without a Node server.
 *
 * Environment variables (all optional):
 *   BASE_PATH  URL prefix the site is served from.
 *              "/" for a custom domain or local preview (default),
 *              "/junioura-akwensimbom-portfolio/" for a GitHub Pages project site.
 *   SITE_URL   Full public URL, used for canonical and social-preview tags,
 *              e.g. https://<username>.github.io/junioura-akwensimbom-portfolio/
 *   OUT_DIR    Output folder (default: dist)
 */
const fs = require('fs');
const path = require('path');
const ejs = require('ejs');
const { siteContext } = require('../src/lib/siteContext');

const root = path.join(__dirname, '..');
const views = path.join(root, 'src', 'views');
const outDir = path.resolve(root, process.env.OUT_DIR || 'dist');

const base = process.env.BASE_PATH || '/';
const siteUrl = process.env.SITE_URL || '';

const home = {
  title: 'Junioura Akwensimbom — Web Developer · Digital Communications · Educator',
  metaDesc:
    'Junioura Akwensimbom is a web developer, digital communicator and educator in Bamenda, Cameroon, building websites, creating digital content and teaching practical digital skills.',
};

async function renderPage(view, locals) {
  const opts = { views: [views] };
  const body = await ejs.renderFile(path.join(views, view + '.ejs'), locals, opts);
  return ejs.renderFile(path.join(views, 'layouts', 'main.ejs'), { ...locals, body }, opts);
}

async function build() {
  fs.rmSync(outDir, { recursive: true, force: true });
  fs.mkdirSync(outDir, { recursive: true });

  // 1. Copy static assets (css, js, images, documents)
  fs.cpSync(path.join(root, 'public'), outDir, { recursive: true });

  // 2. Render pages
  const pages = [
    {
      file: 'index.html',
      view: 'pages/home',
      locals: { ...siteContext({ base, siteUrl, isStatic: true, isHome: true }), ...home },
    },
    {
      // GitHub Pages serves 404.html for unknown URLs
      file: '404.html',
      view: '404',
      locals: {
        ...siteContext({ base, siteUrl, isStatic: true, isHome: false }),
        title: 'Page not found — Junioura Akwensimbom',
        metaDesc: 'This page could not be found.',
        noindex: true,
      },
    },
  ];

  for (const p of pages) {
    const html = await renderPage(p.view, p.locals);
    fs.writeFileSync(path.join(outDir, p.file), html);
  }

  // 3. Tell GitHub Pages not to run Jekyll on the output
  fs.writeFileSync(path.join(outDir, '.nojekyll'), '');

  console.log(`Built ${pages.length} pages into ${path.relative(root, outDir) || '.'} (base path "${siteContext({ base }).base}")`);
}

build().catch((err) => {
  console.error(err);
  process.exit(1);
});
