/**
 * src/data/portfolioData.js
 * Single source of truth for all portfolio content.
 *
 * Edit the text here and both the local server (npm run dev) and the
 * static GitHub Pages build (npm run build) will update.
 *
 * Image paths are relative to the /public folder (no leading slash).
 * Any `image: null` shows a clearly labelled placeholder until you add
 * the real file and set its path here.
 */

const owner = {
  name: 'Junioura Akwensimbom',
  firstName: 'Junioura',
  lastName: 'Akwensimbom',
  initials: 'JA',
  roles: ['Web Developer', 'Digital Communications', 'Educator'],
  location: 'Bamenda, Cameroon',
  email: 'juniouraakwensimbon@gmail.com',
  phone: '+237 679 016 149',
  phoneHref: '+237679016149',
  // Approved for the hero (unchanged original file)
  photo: {
    src: 'images/profile/junioura-akwensimbom.jpg',
    width: 1080,
    height: 719,
    alt: 'Portrait of Junioura Akwensimbom smiling, wearing a red blouse',
  },
  // About section portrait: null shows a labelled placeholder
  aboutPhoto: null,
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

// Professional highlights — the four areas of work
const highlights = [
  {
    id: 'web', icon: 'browser', title: 'Web Development',
    text: 'Building and managing responsive websites that are clear to navigate and easy to keep up to date.',
    items: ['WordPress', 'Elementor', 'HTML', 'CSS', 'JavaScript', 'Responsive websites', 'Website management and maintenance', 'Forms, navigation and usability'],
  },
  {
    id: 'comms', icon: 'chat', title: 'Digital Communications',
    text: 'Planning, writing and managing content that informs an audience and keeps the conversation going.',
    items: ['Social media content', 'Caption writing', 'Content planning', 'Educational content', 'Page management', 'Audience interaction'],
  },
  {
    id: 'design', icon: 'pen', title: 'Graphic Design',
    text: 'Designing flyers and social media graphics that get the main message across at a glance.',
    items: ['Canva', 'Adobe Illustrator', 'Adobe Photoshop', 'Figma', 'Promotional flyers', 'Educational designs', 'Social media graphics'],
  },
  {
    id: 'edu', icon: 'learn', title: 'Education',
    text: 'Teaching Biology and digital skills in simple language, with lessons and resources that people can use.',
    items: ['Biology teaching', 'Lesson planning', 'Educational presentations', 'Learning resources', 'Digital literacy', 'Web development learning support'],
  },
];

// About — short content blocks (no invented stories)
const aboutBlocks = [
  { title: 'Education and technology', text: 'I studied Biochemistry at the University of Bamenda, trained as a Biology teacher (DIPES II), and then completed a one-year intensive web and application development programme at Nexinch.' },
  { title: 'Making information easier to understand', text: 'Whether I am building a website, designing a flyer or preparing a lesson, the goal is the same: information that people can find, understand and use.' },
  { title: 'How I learn and create', text: 'I learn by doing: practical projects, real websites and content made for a real audience. Teaching keeps me explaining things simply, and that shapes everything I create.' },
];

const facts = [
  { term: 'Based in', detail: 'Bamenda, Cameroon' },
  { term: 'Focus', detail: 'Web development, digital communications, graphic design, education' },
  { term: 'Web tools', detail: 'WordPress, Elementor, HTML, CSS, JavaScript' },
  { term: 'Design tools', detail: 'Canva, Illustrator, Photoshop, Figma' },
];

/**
 * Services. `subject` pre-fills the contact form when someone clicks "Enquire".
 * `image` uses a real design from the gallery where one fits.
 */
const services = [
  {
    slug: 'websites', icon: 'browser',
    title: 'Website Development and Management',
    summary: 'New websites built with WordPress, Elementor, HTML, CSS and JavaScript, and existing websites kept current and working.',
    deliverables: ['A responsive website for phones and computers', 'Clear page structure and navigation', 'Working contact and enquiry forms', 'Content and page updates', 'Ongoing maintenance and usability fixes'],
    subject: 'Website development or management',
  },
  {
    slug: 'design', icon: 'pen',
    title: 'Graphic Design and Visual Communication',
    summary: 'Flyers and visuals with a clear hierarchy, so the main message is understood before the details are read.',
    deliverables: ['Promotional flyers', 'Educational flyers', 'Social media graphics', 'Presentation visuals'],
    image: 'build-design-grow',
    subject: 'Graphic design',
  },
  {
    slug: 'content', icon: 'doc',
    title: 'Digital Content Creation',
    summary: 'Educational posts that explain one useful idea at a time, written and designed for your audience.',
    deliverables: ['Educational post series', 'Captions and short copy', 'Designed post graphics'],
    image: 'search-smarter',
    subject: 'Digital content creation',
  },
  {
    slug: 'social', icon: 'chat',
    title: 'Digital Communications and Social Media Management',
    summary: 'Planning, publishing and managing your page so it stays active and consistent, and people who engage get a reply.',
    deliverables: ['Content plan and posting schedule', 'Page management', 'Publishing posts', 'Replying to comments and messages'],
    subject: 'Social media management',
  },
  {
    slug: 'training', icon: 'learn',
    title: 'Digital Skills Education and Training',
    summary: 'Beginner-friendly sessions on digital tools, digital literacy and web development basics, explained simply and practised.',
    deliverables: ['Digital literacy sessions', 'Web development learning support', 'Lesson plans', 'Presentations and learning materials'],
    subject: 'Digital skills training',
  },
];

/**
 * Selected projects.
 * image: a real screenshot path, or null for a labelled placeholder.
 * links[].show: false hides a link without deleting it.
 */
const projects = [
  {
    slug: 'aagyw-cam',
    title: 'AAGYW-CAM Website',
    category: 'Website development and management',
    organisation: 'Association of Adolescent Girls and Young Women, Cameroon',
    desc: 'The association’s website, which I developed and currently manage.',
    contribution: ['Organised the website content', 'Structured the navigation', 'Set up the forms', 'Responsive presentation on phones and computers', 'Ongoing updates and management'],
    tools: ['WordPress', 'Elementor'],
    image: null, // e.g. 'images/projects/aagyw-cam-home.jpg'
    placeholder: 'Replace with project screenshot: AAGYW-CAM home page',
    links: [
      // Hidden while aagyw-cam.org is serving a hacked page.
      // Change show to true once the association's site is restored.
      { label: 'Visit aagyw-cam.org', url: 'https://aagyw-cam.org/', show: false },
    ],
  },
  {
    slug: 'junioura-creative-webdev',
    title: 'Junioura Creative WebDev',
    category: 'Digital content and communications',
    organisation: 'My personal digital content brand',
    desc: 'An ongoing channel on Facebook and TikTok with digital literacy, online safety and web development content in simple, practical language.',
    contribution: ['Plan the topics and posting schedule', 'Write the posts and captions', 'Design the flyers and graphics', 'Publish and reply to the audience'],
    tools: ['Canva', 'Adobe Illustrator', 'Adobe Photoshop'],
    designs: ['who-needs-a-website', 'pause-check-verify', 'five-website-myths'],
    links: [
      { label: 'Facebook page', url: 'https://www.facebook.com/share/18Zyvny6Wi', show: true },
      { label: 'TikTok', url: 'https://www.tiktok.com/@juniouracreativewebdev', show: true },
    ],
  },
  {
    slug: 'nexinch',
    title: 'Web and Application Development',
    category: 'Training and internship',
    organisation: 'Nexinch · One-year intensive programme, 2025 – 2026',
    desc: 'Hands-on training and internship experience building and maintaining websites.',
    contribution: ['WordPress and Elementor websites', 'HTML, CSS and JavaScript', 'Responsive design', 'Testing', 'Website maintenance'],
    tools: ['WordPress', 'Elementor', 'HTML', 'CSS', 'JavaScript'],
    image: null,
    placeholder: 'Replace with project screenshot: a website from the Nexinch training',
    relatedDesign: 'nexinch-services',
    links: [],
  },
];

/**
 * Graphic design gallery.
 * Web images: public/images/designs/<slug>.webp
 * Editable sources and full-resolution exports: design-studio/redesigns/
 */
const designCategories = [
  { id: 'web', label: 'Web education' },
  { id: 'literacy', label: 'Digital literacy' },
  { id: 'brand', label: 'Brand and print' },
];

const designs = [
  { slug: 'build-design-grow', category: 'brand', width: 1000, height: 1415, title: 'Build. Design. Grow.', client: 'Personal brand', format: 'A4 flyer', desc: 'A personal services flyer in my own navy and teal identity, built around one strong typographic statement.' },
  { slug: 'search-smarter', category: 'literacy', width: 1000, height: 1250, title: 'Search smarter. Get better results.', client: 'Digital literacy series', format: 'Social media post', desc: 'Four practical search tips with examples, built around a simple drawn search bar.' },
  { slug: 'who-needs-a-website', category: 'web', width: 1000, height: 1000, title: 'Who actually needs a website?', client: 'Junioura Creative WebDev', format: 'Social media post', desc: 'Explains who benefits from a website: businesses, professionals, schools and creators. A simple drawn website replaces stock imagery.' },
  { slug: 'password-first-defence', category: 'literacy', width: 1400, height: 933, title: 'Your password is your first line of defence', client: 'Tech & Education · Digital Safety Awareness', format: 'Landscape post', desc: 'Four account-security habits in a calm two-by-two layout, with a flat shield graphic carrying the message.' },
  { slug: 'nexinch-services', category: 'brand', width: 1000, height: 1415, title: 'Nexinch services', client: 'Nexinch', format: 'A4 flyer', desc: 'A services flyer in Nexinch’s blue and red, set as a clear numbered index with contact details in a dedicated panel.' },
  { slug: 'pause-check-verify', category: 'literacy', width: 1000, height: 1000, title: 'Not everything you see online deserves your attention', client: 'Junioura Creative WebDev', format: 'Social media post', desc: 'A typographic piece on misinformation: three claims to question, then one habit to remember: pause, check, verify.' },
  { slug: 'five-website-myths', category: 'web', width: 1000, height: 1000, title: '5 common myths about websites', client: 'Junioura Creative WebDev', format: 'Social media post', desc: 'Five misconceptions set against one clear truth, ending with the question every website owner should ask first.' },
  { slug: 'websites-every-day', category: 'web', width: 1000, height: 1000, title: 'You use websites every day…', client: 'Junioura Creative WebDev', format: 'Social media post', desc: 'A plain-language definition of a website, broken into three jobs a site does: inform, connect and grow.' },
];

/**
 * Experience, most recent first. `type` distinguishes project work,
 * training and internship, volunteering, teaching practice and so on.
 * Leave `date` empty if you have not confirmed it yet.
 */
const experience = [
  {
    date: 'Ongoing', type: 'Project',
    title: 'Website Development and Management', org: 'AAGYW-CAM',
    desc: 'Developed and manage the association’s website.',
    duties: ['Content organisation', 'Navigation structure', 'Forms', 'Responsive presentation', 'Updates and maintenance'],
  },
  {
    date: 'Ongoing', type: 'Personal brand',
    title: 'Creator and Content Designer', org: 'Junioura Creative WebDev',
    desc: 'Digital literacy and web development content for Facebook and TikTok.',
    duties: ['Content planning', 'Caption writing', 'Flyer and graphic design', 'Audience interaction'],
  },
  {
    date: 'Ongoing', type: 'Education',
    title: 'Digital Skills and Web Development Support', org: 'Learners and community',
    desc: 'Helping beginners build practical digital skills and supporting people learning web development.',
    duties: ['Digital literacy', 'Web development learning support', 'Website management guidance'],
  },
  {
    date: '2025 – 2026', type: 'Training and internship',
    title: 'Web and Application Development Trainee', org: 'Nexinch',
    desc: 'One-year intensive training with hands-on internship work.',
    duties: ['WordPress and Elementor', 'HTML, CSS and JavaScript', 'Responsive design', 'Testing', 'Website maintenance'],
  },
  {
    date: '2023 – 2025', type: 'Volunteer',
    title: 'Digital Content and Social Media', org: 'G.B.H.S Bamendakwe',
    desc: 'Created digital content and supported the school’s social media communication.',
    duties: ['Digital content creation', 'Social media communication'],
  },
  {
    date: '2023 – 2025', type: 'Teaching practice (DIPES II)',
    title: 'Biology Teaching', org: 'G.B.H.S Bamendakwe',
    desc: 'Biology teaching as part of the DIPES II teacher training.',
    duties: ['Lesson planning', 'Classroom management', 'Student engagement', 'Instructional delivery'],
  },
  {
    // Dates not yet confirmed: add them here, e.g. date: '2025'
    date: '', type: 'Project',
    title: 'Website Development and Management', org: 'G.B.H.S Bamendakwe',
    desc: 'A website development and management project for the school.',
    duties: [],
  },
];

const otherExperience = [
  { date: 'Ongoing', title: 'Online Sales and Customer Communication', org: 'Trust and Blessed Shopping Mall', desc: 'Online promotion and customer communication for a footwear business through WhatsApp business groups.' },
  { date: '2021 – 2022', title: 'Medical Laboratory Scientist', org: 'ABII Specialist Polyclinic', desc: 'Sample collection, laboratory analysis and careful record-keeping.' },
];

// Skills — grouped, no ratings or percentages
const toolkit = ['WordPress', 'Elementor', 'HTML', 'CSS', 'JavaScript', 'Canva', 'Adobe Illustrator', 'Adobe Photoshop', 'Figma', 'Git', 'GitHub', 'Microsoft Office'];

const skills = [
  { icon: 'browser', category: 'Web Development', note: 'Building responsive websites.', items: ['WordPress', 'Elementor', 'HTML', 'CSS', 'JavaScript', 'Responsive layouts'] },
  { icon: 'layout', category: 'Website Management', note: 'Keeping websites clear and current.', items: ['Website structure and navigation', 'Forms and functionality', 'Content updates', 'Maintenance', 'Usability improvements'] },
  { icon: 'pen', category: 'Graphic Design', note: 'Visuals that communicate clearly.', items: ['Canva', 'Adobe Illustrator', 'Adobe Photoshop', 'Figma', 'Flyers and social media graphics', 'Presentation materials'] },
  { icon: 'chat', category: 'Digital Communications', note: 'Content and audience.', items: ['Social media content creation', 'Caption and content writing', 'Content planning', 'Page management', 'Audience interaction'] },
  { icon: 'learn', category: 'Education', note: 'Making information understandable.', items: ['Biology teaching', 'Lesson planning', 'Educational presentations', 'Learning materials', 'Digital literacy', 'Web development learning support'] },
  { icon: 'tool', category: 'Productivity and Collaboration', note: 'Working and sharing files.', items: ['Git and GitHub', 'Microsoft Office'] },
];

/**
 * Education and certifications, newest first.
 * image: path in public/images/certificates/, or null for a labelled placeholder.
 */
const credentials = [
  { kind: 'Certificate', title: 'Bloom Summit 2026', detail: 'Purpose in Action · “Dare to Create”', org: 'Bamenda', date: 'July 4–5, 2026', image: null },
  { kind: 'Certificate', title: 'Youth Digital Safety and Child Protection Ambassadors Program', detail: '', org: 'AAGYW Cameroon, GLOWA and Community Green Engagement', date: 'June 2026', image: null },
  { kind: 'Training', title: 'Web and Application Development', detail: 'One-year intensive training', org: 'Nexinch', date: '2025 – 2026', image: null },
  { kind: 'Diploma', title: 'DIPES II', detail: 'Biology', org: 'University of Bamenda', date: '2025', image: null },
  { kind: 'Degree', title: 'Bachelor of Science', detail: 'Biochemistry', org: 'University of Bamenda', date: '2023', image: null },
];

// How I work — a real sequence
const process = [
  { icon: 'search', title: 'Understand the requirement', text: 'Ask what the work is for, who it is for, and what it needs to achieve.' },
  { icon: 'layout', title: 'Plan the work', text: 'Decide the structure, content and tools before anything is built or designed.' },
  { icon: 'pen', title: 'Create and develop', text: 'Build the website, design the visual, or prepare the content and lessons.' },
  { icon: 'check', title: 'Review and refine', text: 'Check it on different screens, read it again, and fix what is unclear.' },
  { icon: 'send', title: 'Deliver', text: 'Hand over the finished work, with what you need to use and update it.' },
];

module.exports = {
  owner, intro, highlights, aboutBlocks, facts, services, projects,
  designCategories, designs, experience, otherExperience,
  toolkit, skills, credentials, process,
};
