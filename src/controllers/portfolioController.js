
const nodemailer = require('nodemailer');
const { validationResult } = require('express-validator');
const data = require('../data/portfolioData');

const base = {
  owner:  data.owner,
  year:   new Date().getFullYear(),
};

// GET /
exports.home = (req, res) => {
  res.render('pages/home', {
    ...base,
    title:          `${data.owner.name} — Developer, Teacher, Entrepreneur`,
    metaDesc:       'Portfolio of Junioura AKwensimbom. Web Developer, Educator, and Entrepreneur based in Cameroon.',
    stats:          data.stats,
    brandSummary:   data.brandSummary,
    education:      data.education,
    experience:     data.experience,
    identities:     data.identities,
    skills:         data.skills,
    projects:       data.projects,
    certifications: data.certifications,
    business:       data.business,
  });
};

// GET /about
exports.about = (req, res) => {
  res.render('pages/about', {
    ...base,
    title:      'About — Junioura AKwensimbom',
    metaDesc:   'Learn more about Junioura AKwensimbom\'s journey, mission, and professional identity.',
    identities: data.identities,
    stats:      data.stats,
    education:  data.education,
    experience: data.experience,
  });
};

// GET /projects
exports.projects = (req, res) => {
  const { category } = req.query;
  const filtered = category && category !== 'all'
    ? data.projects.filter(p => p.category === category)
    : data.projects;

  res.render('pages/projects', {
    ...base,
    title:    'Projects — Junioura AKwensimbom',
    metaDesc: 'Explore web development, education, and business projects by Junioura AKwensimbom.',
    projects: filtered,
    active:   category || 'all',
  });
};

// GET /contact
exports.contactPage = (req, res) => {
  res.render('pages/contact', {
    ...base,
    title:    'Contact — Junioura AKwensimbom',
    metaDesc: 'Get in touch with Junioura AKwensimbom for collaboration, development, or business enquiries.',
    errors:   [],
    values:   {},
    success:  false,
  });
};

// POST /contact
exports.sendContact = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).render('pages/contact', {
      ...base,
      title:   'Contact — Junioura AKwensimbom',
      metaDesc:'Get in touch with Junioura AKwensimbom.',
      errors:  errors.array(),
      values:  req.body,
      success: false,
    });
  }

  const { name, email, subject, message } = req.body;

  try {
    // ── Configure transporter from .env ─────────────────────────────────
    const transporter = nodemailer.createTransport({
      host:   process.env.MAIL_HOST   || 'smtp.gmail.com',
      port:   process.env.MAIL_PORT   || 587,
      secure: false,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    await transporter.sendMail({
      from:    `"${name}" <${email}>`,
      to:      process.env.MAIL_TO || data.owner.email,
      subject: `[Portfolio] ${subject}`,
      html: `
        <h2>New message from your portfolio</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <hr/>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });
  } catch (err) {
    // Silently log — don't expose mail config errors to visitors
    console.error('[Mail error]', err.message);
  }

  res.render('pages/contact', {
    ...base,
    title:   'Contact — Junioura AKwensimbom',
    metaDesc:'Get in touch with Junioura AKwensimbom.',
    errors:  [],
    values:  {},
    success: true,
  });
};
