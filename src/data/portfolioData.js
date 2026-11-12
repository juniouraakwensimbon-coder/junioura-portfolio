/**
 * src/data/portfolioData.js
 * Single source of truth for all portfolio content.
 *
 * Edit the text here and both the local server (npm run dev) and the
 * static GitHub Pages build (npm run build) will update.
 *
 * Image paths are relative to the /public folder (no leading slash),
 * e.g. 'images/projects/aagyw-cam-home.jpg'.
 */

const owner = {
  name: 'Junioura Akwensimbom',
  firstName: 'Junioura',
  lastName: 'Akwensimbom',
  initials: 'JA',
  roles: ['Web Developer', 'Digital Communications', 'Educator'],
  headline: 'I build and manage websites, create digital content and help people build practical digital skills.',
  location: 'Bamenda, Cameroon',
  email: 'juniouraakwensimbon@gmail.com',
  phone: '+237 679 016 149',
  phoneHref: '+237679016149',
  photo: {
    src: 'images/profile/junioura-akwensimbom.jpg',
    width: 1080,
    height: 719,
    alt: 'Portrait of Junioura Akwensimbom smiling, wearing a red blouse',
  },
  social: [
    { name: 'LinkedIn', handle: 'Junioura Akwensimbom', url: 'https://www.linkedin.com/in/junioura-akwensimbom-156143295/' },
    { name: 'Facebook', handle: 'Junioura Creative WebDev', url: 'https://www.facebook.com/share/18Zyvny6Wi' },
    { name: 'TikTok', handle: '@juniouracreativewebdev', url: 'https://www.tiktok.com/@juniouracreativewebdev' },
  ],
  closing: 'Websites, content and learning that make digital tools easier to understand and use.',
};

const intro = [
  'I am Junioura Akwensimbom, a web developer and educator based in Bamenda, Cameroon.',
  'I create digital content, manage websites, design visual materials, and help people build practical digital skills.',
  'My work connects technology, communication, and learning. Through practical projects and teaching, I make information and digital tools easier to access and understand.',
];

const currently = [
  'Managing the AAGYW-CAM website',
  'Creating digital literacy content for Junioura Creative WebDev',
];

// The connection between the three disciplines, shown in About
const pillars = [
  { title: 'Technology', text: 'Building and managing websites with WordPress, Elementor, HTML, CSS and JavaScript.' },
  { title: 'Communication', text: 'Writing, designing and planning content that people understand at a glance.' },
  { title: 'Learning', text: 'Teaching Biology and digital skills in simple, practical language.' },
];

const facts = [
  { term: 'Based in', detail: 'Bamenda, Cameroon' },
  { term: 'Studied', detail: 'BSc Biochemistry · DIPES II Biology, University of Bamenda' },
  { term: 'Trained', detail: 'Web and Application Development, Nexinch' },
  { term: 'Tools', detail: 'WordPress, Elementor, Canva, Illustrator, Photoshop, Figma' },
];

/**
 * Services — what visitors can ask me for.
 * `subject` pre-fills the contact form when someone clicks "Enquire".
 */
const services = [
  {
    slug: 'websites',
    title: 'Website Development & Management',
    summary: 'Websites built with WordPress, Elementor, HTML, CSS and JavaScript, then kept up to date.',
    value: 'You get a clear, responsive site that people can find their way around, with forms that work and content that stays current.',
    includes: ['Site structure and navigation', 'Responsive layouts', 'Forms and functionality', 'Updates and maintenance', 'Usability improvements'],
    subject: 'Website development or management',
  },
  {
    slug: 'design',
    title: 'Graphic Design & Visual Communication',
    summary: 'Flyers, social media graphics and presentation materials designed in Canva, Illustrator, Photoshop and Figma.',
    value: 'Each design has a clear hierarchy, so the main message is understood before the details are read.',
    includes: ['Promotional flyers', 'Educational flyers', 'Social media graphics', 'Presentation materials'],
    subject: 'Graphic design',
  },
  {
    slug: 'content',
    title: 'Digital Content Creation',
    summary: 'Educational and informative posts written and designed for a specific audience.',
    value: 'Each post explains one useful idea, in language your audience already uses.',
    includes: ['Educational content', 'Caption writing', 'Content writing', 'Post design'],
    subject: 'Digital content creation',
  },
  {
    slug: 'social',
    title: 'Digital Communications & Social Media Management',
    summary: 'Planning, publishing and managing content on social media pages.',
    value: 'Your page stays active and consistent, and the people who engage get a reply.',
    includes: ['Content planning', 'Page management', 'Scheduling and publishing', 'Audience interaction'],
    subject: 'Social media management',
  },
  {
    slug: 'training',
    title: 'Digital Skills Education & Training',
    summary: 'Beginner-friendly teaching on digital tools, digital literacy and web development basics.',
    value: 'The aim is that people can use the tool on their own afterwards, because it was explained simply and practised.',
    includes: ['Digital literacy', 'Web development learning support', 'Lesson planning', 'Presentations', 'Learning materials'],
    subject: 'Digital skills training',
  },
];

/**
 * Selected projects.
 * - image: set to a real screenshot path (e.g. 'images/projects/aagyw-cam-home.jpg')
 *   to replace the typographic panel.
 * - links[].show: set to false to hide a link without deleting it.
 */
const projects = [
  {
    slug: 'aagyw-cam',
    title: 'AAGYW-CAM Website',
    category: 'Web development',
    role: 'Website development and management',
    organisation: 'Association of Adolescent Girls and Young Women, Cameroon',
    desc: 'I developed and currently manage the AAGYW-CAM website. I organise the content, structure the navigation, set up the forms, keep the layout working on phones and computers, and publish updates.',
    scope: ['Content organisation', 'Navigation', 'Forms', 'Responsive presentation', 'Website updates', 'Website management'],
    tools: ['WordPress', 'Elementor', 'Responsive design'],
    panel: 'site',
    image: null,
    links: [
      // The live site is temporarily hidden. Change show to true once
      // aagyw-cam.org is serving the association's own website again.
      { label: 'Visit aagyw-cam.org', url: 'https://aagyw-cam.org/', show: false },
    ],
  },
  {
    slug: 'junioura-creative-webdev',
    title: 'Junioura Creative WebDev',
    category: 'Digital communications · Content',
    role: 'Creator, writer and designer',
    organisation: 'Personal digital content and creative brand',
    desc: 'My ongoing content brand on Facebook and TikTok. I plan, write and design posts that explain digital tools, online safety and web development in simple, practical language.',
    scope: ['Digital literacy content', 'Web development content', 'Educational content', 'Flyer design', 'Caption writing', 'Content planning'],
    tools: ['Canva', 'Adobe Illustrator', 'Adobe Photoshop', 'Social media'],
    panel: 'designs',
    panelDesigns: ['who-needs-a-website', 'pause-check-verify', 'five-website-myths'],
    image: null,
    links: [
      { label: 'Facebook', url: 'https://www.facebook.com/share/18Zyvny6Wi', show: true },
      { label: 'TikTok', url: 'https://www.tiktok.com/@juniouracreativewebdev', show: true },
      { label: 'See the designs', url: '#design', show: true, internal: true },
    ],
  },
  {
    slug: 'nexinch',
    title: 'Web & Application Development Training',
    category: 'Training · Internship',
    role: 'Trainee',
    organisation: 'Nexinch · One-year intensive programme',
    desc: 'Hands-on training and internship experience building and maintaining websites. I worked through the full cycle: page structure, styling, interactivity, responsive behaviour, testing and ongoing maintenance.',
    scope: ['WordPress', 'Elementor', 'HTML', 'CSS', 'JavaScript', 'Responsive design', 'Testing', 'Website maintenance'],
    tools: ['WordPress', 'Elementor', 'HTML', 'CSS', 'JavaScript'],
    panel: 'code',
    image: null,
    links: [],
  },
  {
    slug: 'teaching',
    title: 'Teaching & Digital Skills',
    category: 'Education',
    role: 'Teacher and digital skills facilitator',
    organisation: 'Classroom and community learning',
    desc: 'Teaching is where I learned to explain things clearly. I teach Biology, support people learning digital skills and web development, and prepare lessons, presentations and learning resources.',
    scope: ['Biology teaching', 'Digital skills support', 'Web development learning', 'Figma and design learning', 'Lesson planning', 'Presentations', 'Learning resources'],
    tools: ['Lesson planning', 'Presentations', 'Microsoft Office', 'Canva'],
    panel: 'teach',
    image: null,
    links: [],
  },
];

/**
 * Graphic design gallery.
 * Web images live in public/images/designs/; editable sources and
 * full-resolution exports live in design-studio/redesigns/.
 */
const designCategories = [
  { id: 'web', label: 'Web education' },
  { id: 'literacy', label: 'Digital literacy' },
  { id: 'brand', label: 'Brand & print' },
];

const designs = [
  {
    slug: 'who-needs-a-website', category: 'web', width: 1000, height: 1000,
    title: 'Who actually needs a website?',
    client: 'Junioura Creative WebDev', format: 'Social media post',
    desc: 'Explains who benefits from a website: businesses, professionals, schools and creators. A simple drawn website replaces stock imagery.',
  },
  {
    slug: 'five-website-myths', category: 'web', width: 1000, height: 1000,
    title: '5 common myths about websites',
    client: 'Junioura Creative WebDev', format: 'Social media post',
    desc: 'Five misconceptions set against one clear truth, ending with the question every website owner should ask first.',
  },
  {
    slug: 'websites-every-day', category: 'web', width: 1000, height: 1000,
    title: 'You use websites every day…',
    client: 'Junioura Creative WebDev', format: 'Social media post · Digital Knowledge 01',
    desc: 'A plain-language definition of a website, broken into three jobs a site does: inform, connect and grow.',
  },
  {
    slug: 'pause-check-verify', category: 'literacy', width: 1000, height: 1000,
    title: 'Not everything you see online deserves your attention',
    client: 'Junioura Creative WebDev', format: 'Social media post',
    desc: 'A typographic piece on misinformation: three claims to question, then one memorable habit: pause, check, verify.',
  },
  {
    slug: 'search-smarter', category: 'literacy', width: 1000, height: 1250,
    title: 'Search smarter. Get better results.',
    client: 'Digital literacy series', format: 'Social media post',
    desc: 'Four practical search tips with examples, built around a simple drawn search bar.',
  },
  {
    slug: 'password-first-defence', category: 'literacy', width: 1400, height: 933,
    title: 'Your password is your first line of defence',
    client: 'Tech & Education · Digital Safety Awareness', format: 'Landscape post',
    desc: 'Four account-security habits in a calm two-by-two layout, with a flat shield graphic carrying the message.',
  },
  {
    slug: 'build-design-grow', category: 'brand', width: 1000, height: 1415,
    title: 'Build. Design. Grow.',
    client: 'Personal brand', format: 'A4 flyer',
    desc: 'A personal services flyer in my own plum and orange identity, built around one strong typographic statement.',
  },
  {
    slug: 'nexinch-services', category: 'brand', width: 1000, height: 1415,
    title: 'Nexinch services',
    client: 'Nexinch', format: 'A4 flyer',
    desc: 'A services flyer in Nexinch’s blue and red, set as a clear numbered index with contact details in a dedicated panel.',
  },
];

const designTools = [
  { name: 'Canva', use: 'Social media posts, educational graphics and quick layouts' },
  { name: 'Adobe Illustrator', use: 'Flyers, vector graphics and print-ready layouts' },
  { name: 'Adobe Photoshop', use: 'Photo editing and image composition' },
  { name: 'Figma', use: 'Website and interface layouts (actively learning)' },
];

// Digital communications — how the content work is done
const communications = {
  intro: 'Through Junioura Creative WebDev I run an ongoing digital literacy channel on Facebook and TikTok. I handle every step myself, from choosing the topic to responding to the people who read it.',
  process: [
    { step: 'Plan', skill: 'Content planning and scheduling', text: 'Choosing useful topics and organising them into a content calendar so posts go out consistently.' },
    { step: 'Write', skill: 'Caption writing', text: 'Short, clear captions in simple language that explain one practical idea at a time.' },
    { step: 'Design', skill: 'Visual communication', text: 'Flyers and graphics that carry the main message at a glance, even before the caption is read.' },
    { step: 'Publish', skill: 'Social media management', text: 'Posting and managing content across Facebook and TikTok.' },
    { step: 'Engage', skill: 'Audience interaction', text: 'Responding to comments and questions so the content becomes a conversation.' },
  ],
  topics: ['Online safety and scams', 'Phone skills', 'Computer skills', 'Digital wellbeing', 'Web development basics'],
};

// Skills — grouped by area of work (no ratings or percentages)
const skills = [
  {
    category: 'Web development & website management',
    note: 'Building, structuring and maintaining websites.',
    items: ['WordPress', 'Elementor', 'HTML', 'CSS', 'JavaScript', 'Responsive layouts', 'Website structure and navigation', 'Forms and functionality', 'Updates and maintenance', 'Usability improvements'],
  },
  {
    category: 'Digital communication',
    note: 'Planning, writing and managing content.',
    items: ['Social media content creation', 'Caption writing', 'Educational content', 'Content planning', 'Social media page management', 'Audience interaction'],
  },
  {
    category: 'Graphic design',
    note: 'Designing visuals that communicate clearly.',
    items: ['Canva', 'Adobe Illustrator', 'Adobe Photoshop', 'Figma', 'Promotional and educational flyers', 'Social media graphics', 'Presentation materials'],
  },
  {
    category: 'Education',
    note: 'Making technical information understandable.',
    items: ['Biology teaching', 'Lesson planning', 'Educational presentations', 'Learning materials', 'Digital literacy', 'Web development learning support'],
  },
  {
    category: 'Additional skills',
    note: 'Supporting tools and abilities.',
    items: ['Git and GitHub', 'Microsoft Office', 'Website management', 'Social media management', 'Content writing'],
  },
];

/**
 * Experience. `type` distinguishes employment, volunteering, training,
 * teaching practice and project work.
 */
const experience = [
  {
    date: 'Ongoing',
    type: 'Project work',
    title: 'Website Development & Management',
    org: 'AAGYW-CAM',
    desc: 'Developed and manage the association’s website: content organisation, navigation, forms, responsive presentation and updates.',
  },
  {
    date: 'Ongoing',
    type: 'Personal brand',
    title: 'Creator & Content Designer',
    org: 'Junioura Creative WebDev',
    desc: 'Plan, write and design digital literacy and web development content for Facebook and TikTok.',
  },
  {
    date: '2025 – 2026',
    type: 'Training & internship',
    title: 'Web & Application Development Trainee',
    org: 'Nexinch',
    desc: 'One-year intensive training with hands-on internship work in WordPress, Elementor, HTML, CSS, JavaScript, responsive design, testing and maintenance.',
  },
  {
    date: '2023 – 2025',
    type: 'Teaching practice · DIPES II',
    title: 'Biology Teaching',
    org: 'G.B.H.S Bamendakwe',
    desc: 'Lesson planning, classroom management, student engagement and instructional delivery, adapting methods to different learners.',
  },
  {
    date: '2023 – 2025',
    type: 'Volunteer',
    title: 'Digital Content & Social Media',
    org: 'G.B.H.S Bamendakwe',
    desc: 'Created digital content and supported the school’s social media communication.',
  },
  {
    date: 'Ongoing',
    type: 'Education',
    title: 'Digital Skills & Web Development Support',
    org: 'Learners and community',
    desc: 'Help beginners build practical digital skills and support people learning web development and website management.',
  },
];

const otherExperience = [
  { date: 'Ongoing', title: 'Online Sales & Customer Communication', org: 'Trust and Blessed Shopping Mall', desc: 'Online promotion and customer communication for a footwear business through WhatsApp business groups.' },
  { date: '2021 – 2022', title: 'Medical Laboratory Scientist', org: 'ABII Specialist Polyclinic', desc: 'Sample collection, laboratory analysis and careful record-keeping.' },
];

const education = [
  { title: 'DIPES II', field: 'Biology', org: 'University of Bamenda', date: '2025' },
  { title: 'Bachelor of Science', field: 'Biochemistry', org: 'University of Bamenda', date: '2023' },
  { title: 'Web and Application Development', field: 'One-year intensive training', org: 'Nexinch', date: '2025 – 2026' },
];

/**
 * Certifications.
 * image: set to a certificate image path in public/images/certificates/
 * (e.g. 'images/certificates/youth-digital-safety.jpg') to show a "View certificate" link.
 */
const certifications = [
  {
    title: 'Youth Digital Safety and Child Protection Ambassadors Program',
    org: 'AAGYW Cameroon, GLOWA and Community Green Engagement',
    date: 'June 2026',
    image: null,
  },
  {
    title: 'Bloom Summit 2026',
    org: 'Purpose in Action · “Dare to Create” · Bamenda',
    date: 'July 4–5, 2026',
    image: null,
  },
];

module.exports = {
  owner,
  intro,
  currently,
  pillars,
  facts,
  services,
  projects,
  designCategories,
  designs,
  designTools,
  communications,
  skills,
  experience,
  otherExperience,
  education,
  certifications,
};
