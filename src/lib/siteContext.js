/**
 * src/lib/siteContext.js
 * Builds the variables every template receives. Shared by the Express
 * server (src/app.js) and the static build (scripts/build.js) so both
 * render exactly the same page.
 */
const data = require('../data/portfolioData');
const course = require('../data/lessons');

const escapeHtml = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

/** A code example for the lesson pages: escaped, with an optional label such as "index.html". */
const code = (src, label) =>
  '<figure class="code-block">' + (label ? '<figcaption>' + escapeHtml(label) + '</figcaption>' : '') +
  '<pre tabindex="0"><code>' + escapeHtml(String(src).replace(/^\n+|\s+$/g, '')) + '</code></pre></figure>';

/**
 * What the browser shows for an example. One string per line:
 * "# text" is a large heading, [[text]] a link, **text** bold.
 */
const output = (lines, label = 'What you should see in the browser') =>
  '<figure class="browser-output"><figcaption>' + escapeHtml(label) + '</figcaption><div class="browser-output-page">' +
  lines.map((l) => (l.startsWith('# ')
    ? '<p class="out-h1">' + escapeHtml(l.slice(2)) + '</p>'
    : '<p>' + escapeHtml(l).replace(/\[\[(.+?)\]\]/g, '<span class="out-link">$1</span>').replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>') + '</p>')).join('') +
  '</div></figure>';

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
    description: 'Teaching, digital literacy and the Beginner HTML and CSS Learning Program developed by Junioura Akwensimbom.' },
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
 * @param {boolean} [opts.subpage]      true for pages under another page (lesson pages under Education)
 */
function siteContext({ base = '/', isStatic = false, siteUrl = '', pageId = 'home', subpage = false } = {}) {
  const b = normaliseBase(base);
  const site = normaliseSiteUrl(siteUrl);
  const isHome = pageId === 'home';
  const pageUrl = (id, hash) => {
    const p = PAGES.find((x) => x.id === id);
    if (!p) throw new Error(`Unknown page "${id}"`);
    const path = b + (p.slug ? p.slug + '/' : '');
    // On the page itself a section link is just "#hash"; lesson pages (subpage) always use the full path
    return hash ? (id === pageId && !subpage ? '#' + hash : path + '#' + hash) : path;
  };
  return {
    ...data,
    pages: PAGES,
    course,
    code,
    output,
    /** Link to a lesson page: lessonUrl('lesson-1-understanding-the-computer') */
    lessonUrl: (slug) => b + 'education/lessons/' + slug + '/',
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

/** Locals for one lesson page (title, neighbours, calendar entry), or null if the slug is unknown. */
function lessonView(ctx, slug) {
  const i = course.lessons.findIndex((l) => l.slug === slug);
  if (i < 0) return null;
  const lesson = course.lessons[i];
  return {
    lesson,
    prev: course.lessons[i - 1] || null,
    next: course.lessons[i + 1] || null,
    nextPlanned: course.calendar.find((c) => c.n === lesson.n + 1) || null,
    title: `Lesson ${lesson.n}: ${lesson.title} — Beginner HTML and CSS Learning Program`,
    metaDesc: lesson.summary,
  };
}

module.exports = { siteContext, normaliseBase, PAGES, lessonView };
