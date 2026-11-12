const express    = require('express');
const router     = express.Router();
const controller = require('../controllers/portfolioController');
const { contactValidator } = require('../middleware/validators');

//  Page routes 
router.get('/',        controller.home);
router.get('/about',   controller.about);
router.get('/projects',controller.projects);
router.get('/contact', controller.contactPage);

// Form submission 
router.post('/contact', contactValidator, controller.sendContact);
module.exports = router;
