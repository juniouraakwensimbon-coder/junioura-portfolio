/**
 * src/app.js — Application bootstrap
 * Configures Express middleware, templating engine, and routes.
 */
const express   = require('express');
const path      = require('path');
const helmet    = require('helmet');
const morgan    = require('morgan');
const expressLayouts = require('express-ejs-layouts');
const portfolioRoutes = require('./routes/portfolioRoutes');
const errorHandler    = require('./middleware/errorHandler');
const app = express();
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc:  ["'self'"],
        styleSrc:    ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com', 'https://cdnjs.cloudflare.com'],
        fontSrc:     ["'self'", 'https://fonts.gstatic.com', 'https://cdnjs.cloudflare.com'],
        scriptSrc:   ["'self'", "'unsafe-inline'"],
        imgSrc:      ["'self'", 'data:', 'https://images.unsplash.com'],
        connectSrc:  ["'self'"],
      },
    },
  })
);

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.set('layout', 'layouts/main');
app.use('/', portfolioRoutes);
app.use((req, res) => {
  res.status(404).render('404', { title: '404 — Page Not Found' });
});
app.use(errorHandler);
module.exports = app;
