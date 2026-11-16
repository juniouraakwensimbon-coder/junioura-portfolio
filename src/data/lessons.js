/**
 * src/data/lessons.js
 * The Beginner HTML and CSS Learning Program: the 30-lesson calendar and the
 * lessons that have full learner pages.
 *
 * Source documents (read only, never modified):
 *   Desktop/HTML LESSONS/HTML_CSS_Lesson_Calendar_October_November_2026.docx
 *   Desktop/HTML LESSONS/LESSON 1.docx … LESSON 5.docx
 *
 * `calendar` repeats the lesson focus and practical goal from the calendar.
 * A lesson with a `slug` has a learner page in src/views/lessons/<slug>.ejs,
 * written from Junioura's lesson notes. Lesson 3's notes are an outline only,
 * so the parts developed from that outline are marked as proposed on its page.
 */

const phases = [
  { id: 1, title: 'Phase 1: Computer confidence and HTML', range: 'Lessons 1–18',
    note: 'Learners become comfortable with the computer, files and VS Code, then build and explain a simple website in HTML.' },
  { id: 2, title: 'Phase 2: CSS foundations and styling', range: 'Lessons 19–30',
    note: 'CSS starts only after learners have practised building and explaining an HTML page.' },
];

const calendar = [
  { n: 1, phase: 1, focus: 'Computer basics and safe handling', goal: 'Identify a computer, monitor, keyboard, mouse/touchpad, and common ports. Practise clicking, double-clicking, typing, and scrolling.' },
  { n: 2, phase: 1, focus: 'Files, folders, and the desktop', goal: 'Understand what a file and folder are. Create a course folder and organise lesson work; learn save, rename, and file location.' },
  { n: 3, phase: 1, focus: 'Getting started with VS Code', goal: 'Understand what a code editor is. Open VS Code, identify the editor, Explorer, tabs, and status bar, and create a project folder.' },
  { n: 4, phase: 1, focus: 'First HTML file and browser', goal: 'Create index.html, save it correctly, open it in a browser, and understand that the browser displays the page.' },
  { n: 5, phase: 1, focus: 'What HTML is; tags and elements', goal: 'Explain HTML as the structure of a web page. Meet opening tags, closing tags, elements, and angle brackets.' },
  { n: 6, phase: 1, focus: 'HTML document structure', goal: 'Build a basic page with <!DOCTYPE html>, html, head, title, and body. Explain each part using a house/building analogy.' },
  { n: 7, phase: 1, focus: 'Headings and paragraphs', goal: 'Use h1–h6 and p. Practise choosing headings by importance and writing readable paragraphs.' },
  { n: 8, phase: 1, focus: 'Text formatting and comments', goal: 'Use strong, em, and comments. Explain why meaning is more important than simply making text look different.' },
  { n: 9, phase: 1, focus: 'Links', goal: 'Create links with a and href. Link to another website and explain link text, destination, and safe checking before clicking.' },
  { n: 10, phase: 1, focus: 'Images and file paths', goal: 'Add an image with img, src, and alt. Understand relative file paths and why descriptive alternative text helps users.' },
  { n: 11, phase: 1, focus: 'Lists', goal: 'Create ordered lists with ol/li and unordered lists with ul/li. Build a shopping list and a numbered set of instructions.' },
  { n: 12, phase: 1, focus: 'Line breaks and horizontal rules', goal: 'Use br and hr appropriately; distinguish a new line from a new paragraph and avoid using spacing tags as layout tools.' },
  { n: 13, phase: 1, focus: 'Tables for tabular information', goal: 'Build a simple table with table, tr, th, and td. Use a class timetable or price list as the example.' },
  { n: 14, phase: 1, focus: 'Forms: first look', goal: 'Introduce form, label, input, and button. Build a simple name/contact form and discuss why labels matter.' },
  { n: 15, phase: 1, focus: 'Semantic HTML and accessibility', goal: 'Meet header, nav, main, section, article, and footer. Organise a page by purpose and discuss clear headings and alt text.' },
  { n: 16, phase: 1, focus: 'HTML review and mini-project', goal: 'Plan and build a small personal profile or school-club page using headings, paragraphs, links, images, lists, and semantic sections.' },
  { n: 17, phase: 1, focus: 'HTML practice and correction day', goal: 'Review common mistakes: missing closing tags, incorrect nesting, misspelled filenames, missing alt text, and broken links.' },
  { n: 18, phase: 1, focus: 'HTML assessment and project presentation', goal: 'Students independently build a small multi-section HTML page, explain key tags, and receive feedback before CSS begins.' },
  { n: 19, phase: 2, focus: 'CSS begins: what it is and how it works', goal: 'Explain CSS as the presentation/design of a web page. Connect HTML structure to a house and CSS to paint and decoration.' },
  { n: 20, phase: 2, focus: 'CSS rules, selectors, and declarations', goal: 'Learn selector, property, value, and declaration. Add CSS using a simple rule and explain each part.' },
  { n: 21, phase: 2, focus: 'Three ways to add CSS', goal: 'Compare inline, internal, and external CSS. Create style.css and connect it to HTML with link.' },
  { n: 22, phase: 2, focus: 'Colours and backgrounds', goal: 'Use color, background-color, and simple background styling. Check contrast so text stays easy to read.' },
  { n: 23, phase: 2, focus: 'Fonts and readable text', goal: 'Use font-family, font-size, font-weight, line-height, and text-align. Practise accessible text sizes and readable spacing.' },
  { n: 24, phase: 2, focus: 'Margins, padding, and borders', goal: 'Explain the box model using a parcel or picture frame. Adjust margin, padding, border, and width.' },
  { n: 25, phase: 2, focus: 'CSS selectors and classes', goal: 'Use element, class, and ID selectors. Apply a reusable class to multiple elements and discuss naming clearly.' },
  { n: 26, phase: 2, focus: 'Width, height, and basic sizing', goal: 'Control element size with width, max-width, and height. Make a simple content panel fit the page.' },
  { n: 27, phase: 2, focus: 'Display and simple layout', goal: 'Introduce block and inline behaviour, then flexbox basics for arranging items in a row or column.' },
  { n: 28, phase: 2, focus: 'Responsive design and mobile screens', goal: 'Explain responsive design and the viewport. Add a simple media query and test the page at different window sizes.' },
  { n: 29, phase: 2, focus: 'Styling links, buttons, and images', goal: 'Style links and buttons, use hover states carefully, and make images fit their containers without distortion.' },
  { n: 30, phase: 2, focus: 'HTML + CSS final project and review', goal: 'Style the earlier HTML project, test links and layout, check readability, and present the finished beginner website.' },
];

/* Lessons with a full learner page (titles as in the lesson notes) */
const lessons = [
  { n: 1, slug: 'lesson-1-understanding-the-computer', title: 'Understanding the Computer',
    summary: 'What a computer is, its main parts, input, processing, output and storage, hardware and software, and safe handling.' },
  { n: 2, slug: 'lesson-2-files-folders-and-the-desktop', title: 'Understanding Files, Folders and the Desktop',
    summary: 'Files, folders, file extensions and file paths. You create the course folder you will use for the rest of the program.' },
  { n: 3, slug: 'lesson-3-getting-started-with-vs-code', title: 'Getting Started with Visual Studio Code',
    summary: 'What a code editor is, how it differs from a browser, the main areas of VS Code, and opening your course folder.', developed: true },
  { n: 4, slug: 'lesson-4-your-first-html-file', title: 'Creating Your First HTML File and Viewing It in a Browser',
    summary: 'Websites, webpages and HTML. You write, save and open index.html, then change it and see the update.' },
  { n: 5, slug: 'lesson-5-tags-elements-and-attributes', title: 'HTML Tags, Elements and Attributes',
    summary: 'Opening and closing tags, the difference between a tag and an element, nesting, and attributes such as href.' },
];

/* What learners should be able to do after 30 lessons (from the calendar) */
const outcome = 'By the end of the 30 lessons, learners should be able to organise project files, work in VS Code, create a simple HTML page, explain the main tags they use, connect an external CSS file, apply basic styling, and make a small page more readable on different screen sizes.';

module.exports = { phases, calendar, lessons, outcome };
