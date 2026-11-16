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
const { siteContext, PAGES, lessonView } = require('../src/lib/siteContext');
const { lessons } = require('../src/data/lessons');

const root = path.join(__dirname, '..');
const views = path.join(root, 'src', 'views');
const outDir = path.resolve(root, process.env.OUT_DIR || 'dist');

const base = process.env.BASE_PATH || '/';
const siteUrl = process.env.SITE_URL || '';

async function renderPage(view, locals) {
  const opts = { views: [views] };
  const body = await ejs.renderFile(path.join(views, view + '.ejs'), locals, opts);
  return ejs.renderFile(path.join(views, 'layouts', 'main.ejs'), { ...locals, body }, opts);
}

async function build() {
  fs.rmSync(outDir, { recursive: true, force: true });
  fs.mkdirSync(outDir, { recursive: true });

  // 1. Copy static assets (css, js, images, documents)
  //    Certificate scans stay in public/images/certificates but are not published.
  const certDir = path.join(root, 'public', 'images', 'certificates');
  fs.cpSync(path.join(root, 'public'), outDir, { recursive: true, filter: (src) => !src.startsWith(certDir) });

  // 2. Render the five pages (each page lives in its own folder so
  //    "/repo/web-development/" works on GitHub Pages and on refresh)
  const pages = PAGES.map((p) => ({
    file: p.slug ? path.join(p.slug, 'index.html') : 'index.html',
    view: p.view,
    locals: { ...siteContext({ base, siteUrl, isStatic: true, pageId: p.id }), title: p.title, metaDesc: p.description },
  }));
  // Lesson pages: education/lessons/<slug>/index.html
  for (const l of lessons) {
    const ctx = siteContext({ base, siteUrl, isStatic: true, pageId: 'edu', subpage: true });
    pages.push({ file: path.join('education', 'lessons', l.slug, 'index.html'), view: 'pages/lesson', locals: { ...ctx, ...lessonView(ctx, l.slug) } });
  }
  // GitHub Pages serves 404.html for unknown URLs
  pages.push({
    file: '404.html',
    view: '404',
    locals: {
      ...siteContext({ base, siteUrl, isStatic: true, pageId: 'none' }),
      title: 'Page not found — Junioura Akwensimbom',
      metaDesc: 'This page could not be found.',
      noindex: true,
    },
  });

  for (const p of pages) {
    const html = await renderPage(p.view, p.locals);
    fs.mkdirSync(path.dirname(path.join(outDir, p.file)), { recursive: true });
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
