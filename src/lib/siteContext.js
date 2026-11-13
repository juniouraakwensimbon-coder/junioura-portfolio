/**
 * src/lib/siteContext.js
 * Builds the variables every template receives. Shared by the Express
 * server (src/app.js) and the static build (scripts/build.js) so both
 * render exactly the same page.
 */
const data = require('../data/portfolioData');

/** Ensure a base path looks like "/" or "/repo-name/". */
function normaliseBase(base) {
  if (!base || base === '/') return '/';
  if (/^[A-Za-z]:|\\/.test(base)) {
    // Git Bash turns "/repo/" into "C:/Program Files/Git/repo/"
    throw new Error(
      `BASE_PATH "${base}" looks like a Windows folder path. ` +
      'Write it without the leading slash, e.g. BASE_PATH=junioura-akwensimbom-portfolio'
    );
  }
  return '/' + String(base).replace(/^\/+|\/+$/g, '') + '/';
}

/** Ensure an absolute site URL ends with a single "/". */
function normaliseSiteUrl(url) {
  if (!url) return '';
  return String(url).replace(/\/+$/, '') + '/';
}

/** The five pages of the site. `slug` '' is the home page. */
const PAGES = [
  { id: 'home', slug: '', label: 'Home', view: 'pages/home',
    title: 'Junioura Akwensimbom — Web Developer · Digital Communications · Educator',
    description: 'Junioura Akwensimbom is a web developer, digital communications professional and educator in Bamenda, Cameroon.' },
  { id: 'web', slug: 'web-development', label: 'Web Development', view: 'pages/web-development',
    title: 'Web Development — Junioura Akwensimbom',
    description: 'Website development and management with WordPress, Elementor, HTML, CSS and JavaScript, including the AAGYW Cameroon website.' },
  { id: 'comms', slug: 'digital-communications', label: 'Digital Communications', view: 'pages/digital-communications',
    title: 'Digital Communications — Junioura Akwensimbom',
    description: 'Digital content, social media and visual communication by Junioura Akwensimbom, including Junioura Creative WebDev.' },
  { id: 'edu', slug: 'education', label: 'Education', view: 'pages/education',
    title: 'Education — Junioura Akwensimbom',
    description: 'Teaching, digital literacy and the Beginner HTML and CSS Learning Programme developed by Junioura Akwensimbom.' },
  { id: 'about', slug: 'about', label: 'About', view: 'pages/about',
    title: 'About — Junioura Akwensimbom',
    description: 'The professional journey, experience and credentials of Junioura Akwensimbom.' },
];

/**
 * @param {object} opts
 * @param {string} [opts.base='/']      URL prefix where the site is served
 * @param {boolean} [opts.isStatic]     true for the GitHub Pages build
 * @param {string} [opts.siteUrl]       absolute public URL, used for social previews
 * @param {string} [opts.pageId='home'] which page is being rendered
 */
function siteContext({ base = '/', isStatic = false, siteUrl = '', pageId = 'home' } = {}) {
  const b = normaliseBase(base);
  const site = normaliseSiteUrl(siteUrl);
  const isHome = pageId === 'home';
  const pageUrl = (id, hash) => {
    const p = PAGES.find((x) => x.id === id);
    if (!p) throw new Error(`Unknown page "${id}"`);
    const path = b + (p.slug ? p.slug + '/' : '');
    return hash ? (id === pageId ? '#' + hash : path + '#' + hash) : path;
  };
  return {
    ...data,
    pages: PAGES,
    pageId,
    base: b,
    isStatic,
    isHome,
    siteUrl: site,
    year: new Date().getFullYear(),
    /** Path to a file in /public, e.g. asset('css/style.css') */
    asset: (p) => b + String(p).replace(/^\/+/, ''),
    /** Link to a page, optionally to a section on it: pageUrl('web'), pageUrl('home', 'contact') */
    pageUrl,
    /** Link to the contact form, optionally pre-filling the subject */
    contactUrl: (subject) => pageUrl('home') + (subject ? '?subject=' + encodeURIComponent(subject) : '') + '#contact',
    /** Link to a section of the home page (kept for older templates) */
    section: (id) => pageUrl('home', id),
    /** Absolute URL for social preview tags (falls back to a relative path) */
    absolute: (p) => (site ? site + String(p).replace(/^\/+/, '') : b + String(p).replace(/^\/+/, '')),
    contact: { errors: [], values: {}, status: null },
  };
}

module.exports = { siteContext, normaliseBase, PAGES };
