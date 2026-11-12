const express = require('express');
const router = express.Router();
const controller = require('../controllers/portfolioController');
const { contactValidator } = require('../middleware/validators');

// The portfolio is a single page
router.get('/', controller.home);

// Old page URLs redirect to the matching section
router.get('/about', controller.redirectTo('about'));
router.get('/projects', controller.redirectTo('work'));
router.get('/contact', controller.redirectTo('contact'));

// Contact form submission (local Node server only)
router.post('/contact', contactValidator, controller.sendContact);

module.exports = router;
