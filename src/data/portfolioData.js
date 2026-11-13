/**
 * src/data/portfolioData.js
 * Single source of truth for all portfolio content.
 *
 * The site has five pages: Home, Web Development, Digital Communications,
 * Education and About. Entries carry an `areas` list so each pathway page
 * shows only what belongs to it, and About shows everything.
 *
 * Every fact here comes from Junioura's CV, her documents, the live
 * websites or her written confirmation. Fields left empty are unconfirmed:
 * add them only when confirmed.
 *
 * Image paths are relative to /public (no leading slash).
 */

const owner = {
  name: 'Junioura Akwensimbom',
  initials: 'JA',
  roles: ['Web Developer', 'Digital Communications', 'Educator'],
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
  intro: 'I am Junioura Akwensimbom, a web developer, digital communications professional and educator based in Bamenda, Cameroon. My work brings together technology, communication and learning. I build and manage websites, create digital content and visual materials, and help make information and digital tools easier to understand. I keep learning through practical work and share what I learn in clear, useful ways.',
  // Hero content restored from the version before the five-page restructure
  heroIntro: 'I am Junioura Akwensimbom, a web developer and educator based in Bamenda, Cameroon. I create digital content, manage websites, design visual materials, and help people build practical digital skills.',
  heroAreas: [
    { icon: 'browser', title: 'Web Development' },
    { icon: 'chat', title: 'Digital Communications' },
    { icon: 'pen', title: 'Graphic Design' },
    { icon: 'learn', title: 'Education' },
  ],
  closing: 'Websites, content and learning that make digital tools easier to understand and use.',
};

/* ------------------------------------------------------------------ */
/* The three professional pathways                                     */
/* ------------------------------------------------------------------ */
const pathways = [
  { id: 'web', slug: 'web-development', icon: 'browser', title: 'Web Development', summary: 'Build, manage and improve websites and digital experiences.', cta: 'Explore Web Development' },
  { id: 'comms', slug: 'digital-communications', icon: 'chat', title: 'Digital Communications', summary: 'Create useful content and visual materials that communicate ideas clearly.', cta: 'Explore Digital Communications' },
  { id: 'edu', slug: 'education', icon: 'learn', title: 'Education', summary: 'Teach, support learning and make knowledge accessible.', cta: 'Explore Education' },
];

/* ------------------------------------------------------------------ */
/* Pathway page content                                                */
/* ------------------------------------------------------------------ */
const web = {
  intro: [
    'I build and manage websites with WordPress and Elementor, and use HTML, CSS and JavaScript to customise layouts and interactive elements.',
    'My focus is practical: pages organised so people can find what they need, navigation that makes sense, forms that work, and content that stays current on phones and computers.',
  ],
  skills: [
    { title: 'Website development and management', items: ['WordPress', 'Elementor: page layouts, menus, forms and plugins', 'Website structure and page organisation', 'Website content management', 'Updates and maintenance'] },
    { title: 'Front-end development', items: ['HTML', 'CSS', 'JavaScript', 'Responsive layouts', 'Interface structure and usability'] },
    { title: 'Website functionality and quality', items: ['Forms', 'Navigation', 'Content organisation', 'Testing and troubleshooting', 'Version control with Git and GitHub'] },
  ],
  enquiry: { title: 'Need a website built, updated or managed?', text: 'Tell me about the website and what it needs to do. I am happy to discuss new websites, updates and ongoing management.', subject: 'Website development or management' },
};

const comms = {
  intro: [
    'Through Junioura Creative WebDev, I plan, write and design content that explains digital skills and web development in plain language, then respond to the people who engage with it.',
    'I also create visual materials such as flyers and social media graphics, so that information is easy to take in at a glance.',
  ],
  skills: [
    { title: 'Content development', items: ['Content writing', 'Caption writing', 'Educational content', 'Informational content', 'Content planning'] },
    { title: 'Social media', items: ['Social media content creation', 'Page management', 'Audience interaction'] },
    { title: 'Visual communication', items: ['Flyer design', 'Educational graphics', 'Social media graphics', 'Canva', 'Adobe Illustrator', 'Adobe Photoshop', 'Figma'] },
    { title: 'Digital platforms', items: ['Website content updates in WordPress'] },
  ],
  enquiry: { title: 'Looking for content or social media support?', text: 'I can help plan, write and design content for your audience and keep your page active.', subject: 'Digital communications or content' },
};

const edu = {
  intro: [
    'My teaching background shapes how I approach technology. I trained as a Biology teacher, and I enjoy taking ideas that seem complicated and explaining them one step at a time.',
    'I bring the same approach to digital skills and web development, creating beginner-friendly lessons and resources that help people understand technology and use it with confidence.',
  ],
  areas: [
    { title: 'Teaching', items: ['Biology teaching', 'Lesson planning', 'Learning support', 'Presentations', 'Learning materials', 'Assignments, assessment and feedback'] },
    { title: 'Digital education', items: ['Digital literacy', 'Beginner-friendly technology explanations', 'Web development learning support', 'Educational digital content'] },
  ],
  philosophy: 'I believe learning becomes meaningful when information is explained clearly and connected to practical examples. I start from what a learner already knows, break difficult ideas into manageable steps, encourage questions, and make room for hands-on practice.',
  enquiry: { title: 'Planning lessons or digital skills training?', text: 'Schools, organisations and learners are welcome to get in touch about teaching, training and digital literacy.', subject: 'Teaching or digital skills training' },
};

/* The Beginner HTML and CSS Learning Programme (developed by Junioura) */
const programme = {
  title: 'Beginner HTML and CSS Learning Programme',
  dates: '13 October – 11 November 2026',
  summary: 'A 30-lesson programme I developed for complete beginners with no assumed computer knowledge. Each lesson lasts two hours. Learners start with essential computer and VS Code skills, build a simple website in HTML, and then learn how CSS changes its appearance.',
  phases: ['Phase 1: Computer confidence and HTML', 'Phase 2: CSS foundations and styling'],
  approach: [
    { title: 'Explain in plain language', text: 'Define every new technical word and connect it to a familiar, real-life example.' },
    { title: 'Demonstrate, then practise', text: 'Model each task in VS Code; learners repeat it and explain what they did.' },
    { title: 'Keep examples short', text: 'Introduce one or two ideas at a time before combining them.' },
    { title: 'Check understanding daily', text: 'Quick oral questions, short exercises and a small practical task.' },
    { title: 'Build in stages', text: 'Finish a simple HTML website before learning how CSS changes it.' },
  ],
  lessonFlow: ['Review and warm-up', 'Explain with real-life examples', 'Teacher demonstration', 'Guided and independent practice', 'Exercise or mini-task', 'Recap and assignment'],
};

/* ------------------------------------------------------------------ */
/* Projects                                                            */
/* ------------------------------------------------------------------ */
const projects = [
  {
    slug: 'aagyw-cam', area: 'web',
    title: 'AAGYW Cameroon Website',
    label: 'Website Development and Management Project',
    date: '2026 – Present',
    organisation: 'Association of Adolescent Girls and Young Women Cameroon',
    purpose: 'The association’s public website. It presents the organisation’s purpose and work, shares insights, and gives visitors ways to get involved, donate, contact the team and join its mailing list.',
    role: 'I developed the website and continue to manage it.',
    work: ['Organise the website pages and content', 'Maintain the navigation and forms', 'Update the website’s information', 'Use WordPress and Elementor to support presentation, functionality and responsive use on phones and computers'],
    tools: ['WordPress', 'Elementor'],
    images: [
      { src: 'images/projects/aagyw-cam/aagyw-cam-homepage.webp', width: 1600, height: 1000, alt: 'AAGYW Cameroon homepage: navigation, hero with the headline “Born from a generation that refused to be defined by crisis.” and the Our Purpose section' },
      { src: 'images/projects/aagyw-cam/aagyw-cam-why-we-exist.webp', width: 1600, height: 1333, alt: 'AAGYW Cameroon homepage, Why We Exist section with three illustrated cards and a statement panel' },
    ],
    link: { label: 'Visit Live Website', url: 'https://aagyw-cam.org/' },
  },
  {
    slug: 'nexinch', area: 'web',
    title: 'Web Development Training and Internship',
    label: 'Nexinch',
    date: 'September 2025 – 2026',
    organisation: 'Nexinch · One-year intensive Web and Application Development training',
    purpose: 'Hands-on training and internship work building and maintaining websites.',
    role: 'Web Development Intern / Trainee',
    work: ['Built and customised WordPress websites and page layouts using Elementor', 'Organised sections, navigation, content and forms', 'Used HTML, CSS and JavaScript for interface customisation and interactive elements, including responsive presentation', 'Updated and maintained content, tested pages and functionality, and troubleshot issues', 'Used Git and GitHub for version control'],
    tools: ['WordPress', 'Elementor', 'HTML', 'CSS', 'JavaScript', 'Git', 'GitHub'],
    images: [],
    placeholder: 'Replace with project screenshot: a website from the Nexinch training',
  },
  {
    slug: 'gbhs-website', area: 'web',
    title: 'G.B.H.S Bamendakwe Website',
    label: 'Website development and management project',
    date: '', // not yet confirmed
    organisation: 'G.B.H.S Bamendakwe',
    purpose: 'Website development and management for the school, carried out separately from my teaching role.',
    role: '',
    work: [], // specific responsibilities not yet confirmed
    tools: [],
    images: [],
  },
];

/* ------------------------------------------------------------------ */
/* Graphic design and content samples (Digital Communications)         */
/* ------------------------------------------------------------------ */
const designCategories = [
  { id: 'web', label: 'Web education' },
  { id: 'literacy', label: 'Digital literacy' },
  { id: 'brand', label: 'Brand and print' },
];

const designs = [
  { slug: 'build-design-grow', category: 'brand', width: 1000, height: 1415, title: 'Build. Design. Grow.', purpose: 'Introduce my web and design services', format: 'A4 flyer', platform: 'Personal brand', contribution: 'Content and design' },
  { slug: 'search-smarter', category: 'literacy', width: 1000, height: 1250, title: 'Search smarter. Get better results.', purpose: 'Share four practical tips for finding reliable information online', format: 'Social media post', platform: 'Digital literacy series', contribution: 'Design' },
  { slug: 'who-needs-a-website', category: 'web', width: 1000, height: 1000, title: 'Who actually needs a website?', purpose: 'Explain who benefits from having a website', format: 'Social media post', platform: 'Junioura Creative WebDev', contribution: 'Content and design' },
  { slug: 'password-first-defence', category: 'literacy', width: 1400, height: 933, title: 'Your password is your first line of defence', purpose: 'Encourage four habits that keep online accounts secure', format: 'Landscape post', platform: 'Tech & Education · Digital Safety Awareness', contribution: 'Design' },
  { slug: 'nexinch-services', category: 'brand', width: 1000, height: 1415, title: 'Nexinch services', purpose: 'Present Nexinch’s services and contact details', format: 'A4 flyer', platform: 'Nexinch', contribution: 'Design' },
  { slug: 'pause-check-verify', category: 'literacy', width: 1000, height: 1000, title: 'Not everything you see online deserves your attention', purpose: 'Encourage people to pause, check and verify before trusting online content', format: 'Social media post', platform: 'Junioura Creative WebDev', contribution: 'Content and design' },
  { slug: 'five-website-myths', category: 'web', width: 1000, height: 1000, title: '5 common myths about websites', purpose: 'Correct common misconceptions about websites', format: 'Social media post', platform: 'Junioura Creative WebDev', contribution: 'Content and design' },
  { slug: 'websites-every-day', category: 'web', width: 1000, height: 1000, title: 'You use websites every day…', purpose: 'Explain what a website is and what it does, in plain language', format: 'Social media post', platform: 'Junioura Creative WebDev', contribution: 'Content and design' },
];

/* Document previews (first pages only; originals are kept off the site) */
const documents = [
  { slug: 'lesson-calendar', area: 'edu', src: 'images/education/html-css-programme-lesson-calendar.webp', width: 1236, height: 1600, title: 'Lesson calendar', note: '30 daily lessons, course approach and the standard two-hour lesson structure' },
  { slug: 'lesson-1', area: 'edu', src: 'images/education/html-css-programme-lesson-1.webp', width: 1236, height: 1600, title: 'Lesson 1: Understanding the Computer', note: 'Lesson information, learning objectives and introduction' },
  { slug: 'lesson-5', area: 'edu', src: 'images/education/html-css-programme-lesson-5.webp', width: 1236, height: 1600, title: 'Lesson 5: HTML Tags, Elements and Attributes', note: 'Lesson information, objectives and materials' },
  { slug: 'website-lesson', area: 'edu', src: 'images/education/website-lesson-how-a-website-appears.webp', width: 1236, height: 1600, title: 'How does a website appear on your screen?', note: 'A plain-language lesson written for Junioura Creative WebDev' },
  { slug: 'facebook-calendar', area: 'comms', src: 'images/communications/30-day-facebook-content-calendar.webp', width: 1236, height: 1600, title: '30-day Facebook content calendar', note: 'Takes the audience from basic website ideas to practical web development, with a topic, angle, format, goal and engagement question for each day' },
  { slug: 'october-calendar', area: 'comms', src: 'images/communications/october-2026-content-calendar.webp', width: 1236, height: 1600, title: 'October 2026 content calendar', note: 'Theme: “Technology Beyond the Screen”, with daily pillars, topics, formats, platforms and engagement questions' },
];

/* ------------------------------------------------------------------ */
/* Experience, most recent first                                       */
/* Only confirmed dates and responsibilities are shown.                */
/* ------------------------------------------------------------------ */
const experience = [
  {
    areas: ['web'], date: '2026 – Present', type: 'Project',
    title: 'Website Development and Management', org: 'AAGYW Cameroon',
    summary: 'Developed and manage the association’s website, aagyw-cam.org.',
    duties: ['Organise pages and content', 'Maintain navigation and forms', 'Update information', 'Work in WordPress and Elementor'],
  },
  {
    areas: ['comms'], date: 'Ongoing', type: 'Personal brand',
    title: 'Digital Content and Social Media', org: 'Junioura Creative WebDev',
    summary: 'Create and publish digital literacy, web development and educational content on Facebook, LinkedIn and TikTok.',
    duties: ['Plan content', 'Write captions and post copy', 'Prepare visual materials', 'Respond to comments and support community engagement'],
  },
  {
    areas: ['web'], date: 'September 2025 – 2026', type: 'Training and internship',
    title: 'Web Development Intern / Trainee', org: 'Nexinch',
    summary: 'One-year intensive Web and Application Development training with hands-on internship work.',
    duties: ['WordPress and Elementor websites', 'HTML, CSS and JavaScript customisation', 'Testing and troubleshooting', 'Content updates and maintenance', 'Git and GitHub'],
  },
  {
    areas: ['comms'], date: 'From January 2025', type: '', // end date and work type not yet confirmed
    title: 'Digital Content and Social Media', org: 'G.B.H.S Bamendakwe',
    summary: 'Digital content and social media work for the school, separate from my teaching role.',
    duties: [],
  },
  {
    areas: ['edu'], date: 'January 2025 – April 2025', type: '', // work type not yet confirmed
    title: 'Teacher', org: 'G.B.H.S Bamendakwe',
    summary: 'Planned and delivered lessons using practical activities, real-life examples and learner-centred methods.',
    duties: ['Prepared lesson notes, presentations, assignments and assessments', 'Gave feedback and supported learner participation', 'Developed and explained digital skills learning materials, including web development, website management, Figma and design topics'],
  },
  {
    areas: [], date: 'August 2022', type: 'Internship (one month)',
    title: 'Laboratory Technician', org: 'ABII Specialist Polyclinic',
    summary: 'Laboratory support during a one-month internship.',
    duties: [],
  },
];

/* ------------------------------------------------------------------ */
/* Credentials, by importance then date                                */
/* `image` set = shown as a view-only preview; null = listed as text.  */
/* University documents are listed as text only to protect private     */
/* details printed on them.                                            */
/* ------------------------------------------------------------------ */
const credentials = [
  {
    slug: 'dipes', group: 'Academic qualifications', areas: ['edu'],
    kind: 'Diploma', title: 'Secondary School Teacher Diploma II (DIPES 2) in Biology',
    org: 'University of Bamenda · Higher Teacher Training College (H.T.T.C.)', date: 'Effective 15 July 2025',
    image: null,
  },
  {
    slug: 'bsc', group: 'Academic qualifications', areas: ['edu'],
    kind: 'Degree', title: 'Bachelor of Science in Biochemistry',
    detail: 'Minor: Medical Laboratory Technology',
    org: 'University of Bamenda · Faculty of Science', date: '28 July 2023',
    image: null,
  },
  {
    slug: 'nexinch-certificate', group: 'Professional training', areas: ['web'],
    kind: 'Certificate of Completion', title: 'Web and Application Development Training',
    detail: 'One year of intensive training',
    org: 'Nexinch', date: 'Training: September 2025 – 2026',
    image: { src: 'images/certificates/nexinch-web-application-development-certificate.webp', width: 1600, height: 1137 },
  },
  {
    slug: 'youth-digital-safety', group: 'Professional development and participation', areas: ['comms'],
    kind: 'Attestation of Participation', title: 'Youth Digital Safety and Child Protection Ambassadors Programme',
    detail: 'In partnership with Brave Movement Cameroon',
    org: 'AAGYW Cameroon, Global Welfare Association (GLOWA) and Community Green Engagement (GCE)', date: '4 June 2026 · Bamenda',
    image: { src: 'images/certificates/youth-digital-safety-ambassadors-attestation.webp', width: 1600, height: 1149 },
  },
  {
    slug: 'bloom-summit', group: 'Professional development and participation', areas: [],
    kind: 'Certificate of Participation', title: 'Bloom Summit 2026, “Dare to Create”',
    detail: 'Nkwen Baptist Conference Hall, Bamenda',
    org: 'Purpose in Action (PIA)', date: '4–5 July 2026',
    image: { src: 'images/certificates/bloom-summit-2026-certificate-of-participation.webp', width: 1600, height: 2094 },
  },
];

/* About page */
const story = [
  'My professional journey brings together education and technology. I studied Biochemistry at the University of Bamenda and then trained as a Biology teacher. Through teaching, I became increasingly interested in how digital tools help people find information, communicate and learn.',
  'That interest led me to a year of intensive web and application development training at Nexinch, where I built practical skills in website development and management. I also create digital content and visual materials through Junioura Creative WebDev.',
  'Today I work across these connected areas: building and managing websites, communicating ideas through content and design, and helping people understand technology. I value practical learning, clear communication and work that makes digital information easier to access.',
];

const facts = [
  { term: 'Based in', detail: 'Bamenda, Cameroon' },
  { term: 'Studied', detail: 'BSc Biochemistry and DIPES 2 in Biology, University of Bamenda' },
  { term: 'Trained', detail: 'Web and Application Development, Nexinch' },
];

const process = [
  { icon: 'search', title: 'Understand the requirement', text: 'Ask what the work is for, who it is for, and what it needs to achieve.' },
  { icon: 'layout', title: 'Plan the work', text: 'Decide the structure, content and tools before anything is built or designed.' },
  { icon: 'pen', title: 'Create and develop', text: 'Build the website, design the visual, or prepare the content and lessons.' },
  { icon: 'check', title: 'Review and refine', text: 'Check it on different screens, read it again, and fix what is unclear.' },
  { icon: 'send', title: 'Deliver', text: 'Hand over the finished work, with what you need to use and update it.' },
];

module.exports = {
  owner, pathways, web, comms, edu, programme, projects,
  designCategories, designs, documents, experience, credentials,
  story, facts, process,
};
