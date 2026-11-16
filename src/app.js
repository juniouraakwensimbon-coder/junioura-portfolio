/**
 * src/app.js — Application bootstrap
 * Configures Express middleware, templating engine, and routes.
 * Used for local development (npm run dev / npm start). The public
 * GitHub Pages version is generated from the same templates by
 * scripts/build.js.
 */
const express = require('express');
const path = require('path');
const crypto = require('crypto');
const helmet = require('helmet');
const morgan = require('morgan');
const expressLayouts = require('express-ejs-layouts');
const portfolioRoutes = require('./routes/portfolioRoutes');
const errorHandler = require('./middleware/errorHandler');
const { siteContext } = require('./lib/siteContext');

const app = express();

// Hash of the one-line inline script in layouts/main.ejs, so the
// Content Security Policy can allow it without 'unsafe-inline'.
const inlineScriptHash =
  "'sha256-" +
  crypto.createHash('sha256').update("document.documentElement.classList.add('js');").digest('base64') +
  "'";

app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        styleSrc: ["'self'", 'https://fonts.googleapis.com'],
        fontSrc: ["'self'", 'https://fonts.gstatic.com'],
        scriptSrc: ["'self'", inlineScriptHash],
        imgSrc: ["'self'", 'data:'],
        connectSrc: ["'self'"],
        formAction: ["'self'", 'mailto:'],
      },
    },
  })
);

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Certificate scans stay on disk but are never served publicly
app.use('/images/certificates', (req, res) => res.sendStatus(404));
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.set('layout', 'layouts/main');

app.use('/', portfolioRoutes);

app.use((req, res) => {
  res.status(404).render('404', {
    ...siteContext({ pageId: 'none' }),
    title: 'Page not found — Junioura Akwensimbom',
    metaDesc: 'This page could not be found.',
    noindex: true,
  });
});

app.use(errorHandler);

module.exports = app;
