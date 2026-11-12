const nodemailer = require('nodemailer');
const { validationResult } = require('express-validator');
const { siteContext } = require('../lib/siteContext');

const page = {
  title: 'Junioura Akwensimbom — Web Developer · Digital Communications · Educator',
  metaDesc:
    'Junioura Akwensimbom is a web developer, digital communicator and educator in Bamenda, Cameroon, building websites, creating digital content and teaching practical digital skills.',
};

function renderHome(res, contact, status = 200) {
  const ctx = siteContext({ isHome: true });
  res.status(status).render('pages/home', {
    ...ctx,
    ...page,
    contact: { ...ctx.contact, ...contact },
  });
}

const escapeHtml = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

// GET /
exports.home = (req, res) => renderHome(res, {});

// Old multi-page URLs now point to sections of the single page.
exports.redirectTo = (id) => (req, res) => res.redirect(301, `/#${id}`);

// POST /contact — only available when running the Node server locally.
// The GitHub Pages version uses the visitor's email app instead.
exports.sendContact = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return renderHome(res, { errors: errors.array(), values: req.body }, 422);
  }

  const { name, email, subject, message } = req.body;

  if (!process.env.MAIL_USER || !process.env.MAIL_PASS) {
    console.error('[Mail] MAIL_USER / MAIL_PASS are not set in .env — message not sent.');
    return renderHome(res, { status: 'failed', values: req.body }, 503);
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
    return renderHome(res, { status: 'failed', values: req.body }, 502);
  }

  return renderHome(res, { status: 'sent' });
};
