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

const facts = [
  { term: 'Based in', detail: 'Bamenda, Cameroon' },
  { term: 'Studied', detail: 'BSc Biochemistry · DIPES II Biology, University of Bamenda' },
  { term: 'Trained', detail: 'Web and Application Development, Nexinch' },
  { term: 'Works with', detail: 'WordPress, Elementor, HTML, CSS, JavaScript, Canva, Adobe, Figma' },
];

// "What I do" — the four areas of work
const services = [
  {
    title: 'Web Development',
    summary: 'Building and looking after websites that are clear, responsive and easy to update.',
    items: [
      'Website development and management',
      'WordPress and Elementor',
      'HTML, CSS and JavaScript',
      'Responsive layouts',
      'Site structure and navigation',
      'Forms, updates and maintenance',
      'Usability improvements',
    ],
  },
  {
    title: 'Digital Communications',
    summary: 'Planning and writing content that informs people and keeps an audience engaged.',
    items: [
      'Digital content creation',
      'Social media management',
      'Content planning and scheduling',
      'Caption writing',
      'Educational and digital literacy posts',
      'Audience interaction',
    ],
  },
  {
    title: 'Visual Design',
    summary: 'Designing flyers, educational graphics and social media visuals that communicate quickly.',
    items: [
      'Flyers and announcements',
      'Educational graphics',
      'Social media designs',
      'Visual communication assets',
      'Canva, Illustrator, Photoshop, Figma',
    ],
  },
  {
    title: 'Education',
    summary: 'Teaching in simple language so that people can understand and use what they learn.',
    items: [
      'Classroom teaching and Biology education',
      'Digital literacy',
      'Beginner-friendly technology education',
      'Web development learning support',
      'Lesson planning, presentations and resources',
    ],
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
    scope: ['Biology teaching', 'Digital skills support', 'Web development learning', 'Website management', 'Figma and design learning', 'Lesson planning', 'Presentations', 'Learning resources'],
    tools: ['Lesson planning', 'Presentations', 'Microsoft Office', 'Canva'],
    panel: 'teach',
    image: null,
    links: [],
  },
];

// Design gallery — real work from the digital literacy series.
// Files live in public/images/designs/. Add more by copying an entry.
const designs = [
  { src: 'images/designs/apps-and-productivity.webp', width: 900, height: 1125, title: 'More apps don’t always mean more productivity', topic: 'Digital wellbeing' },
  { src: 'images/designs/prize-scam-awareness.webp', width: 900, height: 1350, title: 'You won a prize? Which competition did you enter?', topic: 'Online safety' },
  { src: 'images/designs/mobile-data-usage.webp', width: 900, height: 1125, title: 'Who is eating your mobile data?', topic: 'Phone skills' },
  { src: 'images/designs/fake-job-alert.webp', width: 900, height: 1350, title: 'Fake job alert: stop, check, verify', topic: 'Online safety' },
  { src: 'images/designs/windows-screenshot-tip.webp', width: 900, height: 1125, title: 'Still photographing your computer screen?', topic: 'Computer skills' },
  { src: 'images/designs/phone-battery-tips.webp', width: 900, height: 1125, title: 'Your phone battery dies before the day ends?', topic: 'Phone skills' },
];

const designTools = [
  { name: 'Canva', use: 'Social media posts, educational graphics and quick layouts' },
  { name: 'Adobe Illustrator', use: 'Flyers, vector graphics and print-ready layouts' },
  { name: 'Adobe Photoshop', use: 'Photo editing and image composition' },
  { name: 'Figma', use: 'Website and interface layouts — actively learning' },
];

const skills = [
  { category: 'Web Development', tags: ['HTML', 'CSS', 'JavaScript', 'WordPress', 'Elementor', 'Responsive Design', 'Website Management', 'Git and GitHub'] },
  { category: 'Design & Creative Tools', tags: ['Canva', 'Adobe Illustrator', 'Adobe Photoshop', 'Figma'] },
  { category: 'Digital Communications', tags: ['Content Creation', 'Content Writing', 'Social Media Management', 'Content Planning', 'Digital Literacy', 'Audience Interaction'] },
  { category: 'Education', tags: ['Teaching', 'Lesson Planning', 'Educational Content Development', 'Presentations', 'Digital Skills Support'] },
  { category: 'Productivity', tags: ['Microsoft Office'] },
];

const experience = [
  {
    date: 'Ongoing',
    title: 'Website Development & Management',
    org: 'AAGYW-CAM',
    desc: 'Developed and manage the association’s website: content, navigation, forms, responsive presentation and updates.',
  },
  {
    date: 'Ongoing',
    title: 'Creator & Content Designer',
    org: 'Junioura Creative WebDev',
    desc: 'Plan, write and design digital literacy and web development content for Facebook and TikTok.',
  },
  {
    date: '2025 – 2026',
    title: 'Web & Application Development Trainee',
    org: 'Nexinch',
    desc: 'One-year intensive training with hands-on internship work in WordPress, Elementor, HTML, CSS, JavaScript, responsive design, testing and maintenance.',
  },
  {
    date: '2023 – 2025',
    title: 'Biology Teacher',
    org: 'G.B.H.S Bamendakwe',
    desc: 'Lesson planning, classroom management, student engagement and instructional delivery, adapting methods to different learners.',
  },
  {
    date: 'Ongoing',
    title: 'Online Sales & Customer Communication',
    org: 'Trust and Blessed Shopping Mall',
    desc: 'Manage online promotion and customer communication for a footwear business through WhatsApp business groups.',
  },
  {
    date: '2021 – 2022',
    title: 'Medical Laboratory Scientist',
    org: 'ABII Specialist Polyclinic',
    desc: 'Sample collection, laboratory analysis and careful record-keeping.',
  },
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
    title: 'Youth Digital Safety and Child Protection',
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
  facts,
  services,
  projects,
  designs,
  designTools,
  skills,
  experience,
  education,
  certifications,
};
