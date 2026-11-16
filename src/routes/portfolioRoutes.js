const express = require('express');
const router = express.Router();
const controller = require('../controllers/portfolioController');
const { contactValidator } = require('../middleware/validators');
const { PAGES } = require('../lib/siteContext');

// The five pages. Express matches "/slug" and "/slug/" alike (non-strict
// routing); the static build writes each page to slug/index.html.
for (const p of PAGES) {
  router.get(p.slug ? `/${p.slug}/` : '/', controller.page(p.id));
}

// Lesson pages of the Beginner HTML and CSS Learning Program
router.get('/education/lessons/:slug/', controller.lesson);

// Older URLs
router.get('/projects', controller.redirectTo('/web-development/'));
router.get('/contact', controller.redirectTo('/#contact'));

// Contact form submission (local Node server only)
router.post('/contact', contactValidator, controller.sendContact);

module.exports = router;
