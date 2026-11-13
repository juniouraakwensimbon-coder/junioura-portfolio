/**
 * src/middleware/errorHandler.js
 * Global Express error handler — logs and renders a clean error page.
 */
const { siteContext } = require('../lib/siteContext');

module.exports = (err, req, res, _next) => {
  console.error('[Error]', err.stack || err.message);
  const status = err.status || 500;
  res.status(status).render('error', {
    ...siteContext({ pageId: 'none' }),
    title: `${status} — Something went wrong`,
    metaDesc: 'An error occurred.',
    noindex: true,
    status,
    message:
      process.env.NODE_ENV === 'production'
        ? 'An unexpected error occurred. Please try again later.'
        : err.message,
  });
};
