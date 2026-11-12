/**
 * scripts/preview.js — serve ./dist the way GitHub Pages will
 *
 *   BASE_PATH=/junioura-akwensimbom-portfolio/ npm run build
 *   BASE_PATH=/junioura-akwensimbom-portfolio/ npm run preview
 *
 * Unknown URLs get dist/404.html with status 404, like GitHub Pages.
 */
const path = require('path');
const express = require('express');
const { normaliseBase } = require('../src/lib/siteContext');

const dist = path.resolve(__dirname, '..', process.env.OUT_DIR || 'dist');
const base = normaliseBase(process.env.BASE_PATH || '/');
const port = Number(process.env.PREVIEW_PORT) || 4173;

const app = express();
if (base !== '/') app.get('/', (req, res) => res.redirect(base));
app.use(base, express.static(dist, { extensions: ['html'] }));
app.use((req, res) => res.status(404).sendFile(path.join(dist, '404.html')));

app.listen(port, () => {
  console.log(`Previewing the static build at http://localhost:${port}${base}`);
});
