const nodemailer = require('nodemailer');
const { validationResult } = require('express-validator');
const { siteContext, PAGES, lessonView } = require('../lib/siteContext');

function renderPage(res, pageId, extra = {}, status = 200) {
  const page = PAGES.find((p) => p.id === pageId);
  const ctx = siteContext({ pageId });
  res.status(status).render(page.view, {
    ...ctx,
    title: page.title,
    metaDesc: page.description,
    ...extra,
    contact: { ...ctx.contact, ...(extra.contact || {}) },
  });
}

const escapeHtml = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

// GET /, /web-development/, /digital-communications/, /education/, /about/
exports.page = (pageId) => (req, res) => renderPage(res, pageId);

// GET /education/lessons/:slug/
exports.lesson = (req, res, next) => {
  const ctx = siteContext({ pageId: 'edu', subpage: true });
  const view = lessonView(ctx, req.params.slug);
  if (!view) return next(); // falls through to the 404 page
  res.render('pages/lesson', { ...ctx, ...view });
};

// Old URLs from the earlier versions of the site
exports.redirectTo = (target) => (req, res) => res.redirect(301, target);

// POST /contact — only available when running the Node server locally.
// The GitHub Pages version uses the visitor's email app instead.
exports.sendContact = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return renderPage(res, 'home', { contact: { errors: errors.array(), values: req.body } }, 422);
  }

  const { name, email, subject, message } = req.body;

  if (!process.env.MAIL_USER || !process.env.MAIL_PASS) {
    console.error('[Mail] MAIL_USER / MAIL_PASS are not set in .env — message not sent.');
    return renderPage(res, 'home', { contact: { status: 'failed', values: req.body } }, 503);
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST || 'smtp.gmail.com',
      port: Number(process.env.MAIL_PORT) || 587,
      secure: false,
      auth: { user: process.env.MAIL_USER, pass: process.env.MAIL_PASS },
    });

    await transporter.sendMail({
      // Gmail rejects mail "from" other addresses, so send from your own
      // account and set Reply-To to the visitor.
      from: `"Portfolio contact form" <${process.env.MAIL_USER}>`,
      replyTo: `"${name.replace(/"/g, '')}" <${email}>`,
      to: process.env.MAIL_TO || process.env.MAIL_USER,
      subject: `[Portfolio] ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`,
      html: `
        <h2>New message from your portfolio</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
        <hr>
        <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
      `,
    });
  } catch (err) {
    console.error('[Mail error]', err.message);
    return renderPage(res, 'home', { contact: { status: 'failed', values: req.body } }, 502);
  }

  return renderPage(res, 'home', { contact: { status: 'sent' } });
};
