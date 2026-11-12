/**
 * src/data/portfolioData.js
 * Single source of truth for all portfolio content.
 * Swap this out with a database call when scaling up.
 */

const owner = {
  name:       'Junioura AKwensimbom',
  initials:   'JA',
  tagline:    'Developer • Teacher • Entrepreneur',
  statement:  'Bridging Technology, Education, and Entrepreneurship. I build modern digital experiences, simplify learning for the next generation, and create real-world business solutions.',
  email:      'juniouraakwensimbon@mail.com',
  phone:      '+237 6790 161 49',
  location:   'Cameroon',
  photo:      '/images/profile.jpg',
  social: {
    linkedin:  '#',
    github:    '#',
    twitter:   '#',
    instagram: '#',
  },
};

const stats = [
  { number: '1+', label: 'Years Experience in Web Development' },
  { number: '5+', label: 'Web & Business Projects Built' },
  { number: '50+', label: 'Students Taught & Mentored' },
  { number: '1',  label: 'Active Business Managed' },
];

const brandSummary = [
  {
    icon:  'fa-code-branch',
    title: 'What I Do',
    text:  'I design and develop responsive web applications, create structured learning experiences for students, and manage digital business activities including online product marketing and sales operations.',
  },
  {
    icon:  'fa-lightbulb',
    title: 'What Makes Me Unique',
    text:  'My multidisciplinary background in web development, teaching, and entrepreneurship allows me to approach problems with practical technical skills, educational clarity, and real business understanding.',
  },
  {
    icon:  'fa-puzzle-piece',
    title: 'The Problem I Solve',
    text:  'I bridge the gap between technology, education, and business by building solutions that are not only functional, but also easy to understand, user-friendly, and applicable in real-world contexts.',
  },
];

const education = [
  {
    date:     '2025 – 2026',
    title:    'Web Development',
    org:      'NEXINCH',
    desc:     'Focused on both front-end and back-end development.',
  },
  {
    date:     '2023 – 2025',
    title:    'DIPES II (Diploma of Secondary Teacher)',
    org:      'University of BAMENDA',
    desc:     'Pedagogy, instructional methods, classroom management, curriculum development, learner-centred teaching, student assessment and educational psychology.',
  },
  {
    date:     '2020 – 2023',
    title:    'BSc. in Biochemistry',
    org:      'University of BAMENDA',
    desc:     'Focused on Medical Laboratory Technology.',
  },
];

const experience = [
  {
    date:  '2025 – Present',
    title: 'Web Developer',
    org:   'NEXINCH',
    desc:  'Hands-on experience in WordPress, UI/UX design, responsive front-end development, back-end system integration, and website management for e-commerce, portfolios, and business applications.',
  },
  {
    date:  '2023 – 2025',
    title: 'Teacher',
    org:   'G.B.H.S Bamendakwe',
    desc:  'Classroom management, lesson planning, student engagement, and instructional delivery. Adapted teaching methods to diverse learners and created a supportive academic environment.',
  },
  {
    date:  '2021 – 2022',
    title: 'Medical Laboratory Scientist',
    org:   'ABII SPECIALIST POLYCLINIC',
    desc:  'Practical experience in blood testing, sample collection, laboratory analysis, and diagnostic procedures, with precision record-keeping.',
  },
];

const identities = [
  {
    icon:   'fa-laptop-code',
    title:  'Web Developer',
    desc:   'I design and develop responsive websites and web applications that combine clean user interfaces with functional back-end systems.',
    strengths: [
      'Front-end development (HTML, CSS, JavaScript)',
      'Back-end development (Node.js, Express)',
      'UI/UX structure and implementation',
      'Website development and maintenance',
    ],
    impact: 'Building functional and user-friendly web solutions for personal, educational, and business use.',
    impactLabel: 'Focus',
  },
  {
    icon:   'fa-chalkboard-user',
    title:  'Educator',
    desc:   'I teach in a secondary school environment while developing structured approaches to simplify complex concepts into clear, understandable lessons.',
    strengths: [
      'Lesson planning and curriculum structuring',
      'Classroom management and student engagement',
      'Academic mentorship and guidance',
      'Simplifying complex topics for learners',
    ],
    impact: 'Improved student understanding and participation through structured and interactive teaching methods.',
    impactLabel: 'Impact',
  },
  {
    icon:   'fa-chart-line',
    title:  'Entrepreneur',
    desc:   'I manage a footwear business — Trust and Blessed Shopping Mall — handling online marketing, customer engagement, and product sales.',
    strengths: [
      'WhatsApp business group management',
      'Online product marketing and sales',
      'Customer relationship management',
      'Product listing and digital promotion',
    ],
    impact: 'Growing a sustainable online footwear business through digital platforms and customer trust.',
    impactLabel: 'Focus',
  },
];

const skills = [
  {
    icon: 'fa-code',
    category: 'Technical',
    tags: ['JavaScript (ES6+)', 'Node.js', 'Express.js', 'React.js', 'HTML5/CSS3', 'EJS', 'SQL/NoSQL', 'Git & GitHub', 'Python'],
  },
  {
    icon: 'fa-person-chalkboard',
    category: 'Teaching',
    tags: ['Lesson Planning', 'Classroom Management', 'Student Engagement', 'Curriculum Development', 'Assessment & Evaluation', 'Instructional Delivery', 'Educational Mentorship', 'Learner-Centred Teaching'],
  },
  {
    icon: 'fa-building-columns',
    category: 'Business',
    tags: ['E-commerce Sales Management', 'Social Media Promotion', 'Digital Marketing', 'Product Strategy', 'Customer Experience', 'Product Listing & Advertising'],
  },
  {
    icon: 'fa-users',
    category: 'Soft Skills',
    tags: ['Problem Solving', 'Adaptability', 'Leadership', 'Time Management', 'Communication'],
  },
];

const projects = [
  {
    id:       1,
    title:    'NextGen E-commerce',
    category: 'web',
    image:    'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800',
    desc:     'A full-stack e-commerce platform with real-time inventory and Stripe payment integration.',
    stack:    ['React', 'Node.js', 'MongoDB'],
    role:     'Lead Full-stack Developer',
    demo:     '#',
    code:     '#',
  },
  {
    id:       2,
    title:    'CodeLearn LMS',
    category: 'education',
    image:    'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800',
    desc:     'A custom Learning Management System built for local coding bootcamps to track student progress.',
    stack:    ['Vue.js', 'Firebase'],
    role:     'Creator & Curriculum Designer',
    demo:     '#',
    code:     null,
  },
  {
    id:       3,
    title:    'Junioura Footwear Store',
    category: 'business',
    image:    'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800',
    desc:     'The official online storefront for my footwear business, with dynamic filtering and cart management.',
    stack:    ['Shopify', 'Custom CSS/JS'],
    role:     'Founder & Developer',
    demo:     '#',
    code:     null,
  },
];

const certifications = [
  { icon: 'fa-award',       title: 'DIPES II (Diploma of Secondary Teacher)',  period: '2023 – 2025' },
  { icon: 'fa-certificate', title: 'BSc. in Biochemistry',                      period: '2020 – 2023' },
  { icon: 'fa-trophy',      title: 'Web Development (NEXINCH)',                 period: '2025 – Present' },
];

const business = {
  name:   'Trust and Blessed Shopping Mall',
  desc:   'At Trust and Blessed, we provide stylish and comfortable footwear for all ages — from sneakers and sandals to office shoes and heels — with doorstep delivery for your convenience. Every pair is carefully selected, clean, fresh, and well-packaged because we believe your shopping experience should feel special.',
  offerings: [
    { icon: 'fa-gem',       label: 'Premium Quality' },
    { icon: 'fa-truck-fast',label: 'Nationwide Delivery' },
    { icon: 'fa-headset',   label: '24/7 Support' },
  ],
  lessons: [
    'Customer retention is cheaper than acquisition.',
    'A clean UX directly impacts online sales.',
    'Adaptability is the most valuable business asset.',
  ],
};

module.exports = {
  owner,
  stats,
  brandSummary,
  education,
  experience,
  identities,
  skills,
  projects,
  certifications,
  business,
};
