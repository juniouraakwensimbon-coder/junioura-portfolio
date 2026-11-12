/**
 * src/middleware/validators.js
 * express-validator rules for the contact form.
 */
const { body } = require('express-validator');

exports.contactValidator = [
  body('name')
    .trim()
    .notEmpty().withMessage('Name is required.')
    .isLength({ min: 2, max: 80 }).withMessage('Name must be 2–80 characters.'),

  body('email')
    .trim()
    .notEmpty().withMessage('Email is required.')
    .isEmail().withMessage('Please enter a valid email address.')
    .normalizeEmail(),

  body('subject')
    .trim()
    .notEmpty().withMessage('Subject is required.')
    .isLength({ min: 3, max: 120 }).withMessage('Subject must be 3–120 characters.'),

  body('message')
    .trim()
    .notEmpty().withMessage('Message is required.')
    .isLength({ min: 10, max: 2000 }).withMessage('Message must be 10–2000 characters.'),
];
