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

/**
 * @param {object} opts
 * @param {string} [opts.base='/']      URL prefix where the site is served
 * @param {boolean} [opts.isStatic]     true for the GitHub Pages build
 * @param {string} [opts.siteUrl]       absolute public URL, used for social previews
 * @param {boolean} [opts.isHome=true]  in-page anchors (#about) vs. base-prefixed (/repo/#about)
 */
function siteContext({ base = '/', isStatic = false, siteUrl = '', isHome = true } = {}) {
  const b = normaliseBase(base);
  const site = normaliseSiteUrl(siteUrl);
  return {
    ...data,
    base: b,
    isStatic,
    isHome,
    siteUrl: site,
    year: new Date().getFullYear(),
    /** Path to a file in /public, e.g. asset('css/style.css') */
    asset: (p) => b + String(p).replace(/^\/+/, ''),
    /** Link to a section of the home page, e.g. section('about') */
    section: (id) => (isHome ? '#' + id : b + '#' + id),
    /** Absolute URL for social preview tags (falls back to a relative path) */
    absolute: (p) => (site ? site + String(p).replace(/^\/+/, '') : b + String(p).replace(/^\/+/, '')),
    contact: { errors: [], values: {}, status: null },
  };
}

module.exports = { siteContext, normaliseBase };
