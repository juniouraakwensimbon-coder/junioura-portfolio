# Junioura Akwensimbom — Portfolio

Personal portfolio of **Junioura Akwensimbom**, Web Developer · Digital Communications · Educator, based in Bamenda, Cameroon.

The site presents my web development work (including the AAGYW-CAM website), my digital literacy content and designs for Junioura Creative WebDev, my web and application development training at Nexinch, my teaching (including the Beginner HTML and CSS Learning Program and its lesson pages), and my education and certifications.

Pages: **Home**, **Web Development**, **Digital Communications**, **Education** (with five lesson pages under `/education/lessons/`) and **About**.

**Hosting:** the public site is published with **GitHub Pages** only. Netlify is not used for hosting or deployment. (This project contains no Netlify configuration.)

## Technologies

- **Node.js + Express**: local development server
- **EJS** templates with `express-ejs-layouts`
- Plain **HTML, CSS and JavaScript** (no front-end framework)
- **Manrope** and **Inter** fonts from Google Fonts (the site falls back to system fonts if Google Fonts cannot load)
- A small build script that exports the site as static HTML for **GitHub Pages**
- Tests use Node's built-in test runner, so there are no extra testing packages

## Getting started

You need [Node.js](https://nodejs.org/) 18.17 or newer.

```bash
npm install          # install dependencies (first time only)
npm run dev          # start the local server with auto-reload
```

Then open the address printed in the terminal. The port comes from `PORT` in your `.env` file (for example http://localhost:3006/).

To set up `.env`, copy `.env.example` to `.env`. Mail settings are only needed if you want the contact form on the **local server** to send emails. `.env` is ignored by Git, so it is never committed.

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Local server with auto-reload (nodemon) |
| `npm start` | Local server without auto-reload |
| `npm run build` | Builds the static site into `dist/` |
| `npm run preview` | Serves `dist/` the way GitHub Pages will |
| `npm run check` | Checks `dist/` for broken links, missing images, missing anchors and basic HTML problems (`-- --external` also checks outside links) |
| `npm test` | Builds with the GitHub Pages base path and runs all tests |

### Testing the GitHub Pages version locally

GitHub Pages serves a project site from a sub-folder (`/junioura-akwensimbom-portfolio/`), so build and preview with that base path. In Git Bash (leave out the leading slash, because Git Bash would turn it into a Windows folder path):

```bash
BASE_PATH=junioura-akwensimbom-portfolio npm run build
BASE_PATH=junioura-akwensimbom-portfolio npm run preview
```

In PowerShell:

```powershell
$env:BASE_PATH="/junioura-akwensimbom-portfolio/"; npm run build; npm run preview
```

## Project structure

```
├── server.js                    # starts the local Express server
├── src/
│   ├── app.js                   # Express setup, security headers, routes
│   ├── data/portfolioData.js    # ← almost ALL portfolio text lives here
│   ├── data/lessons.js          # learning program: 30-lesson calendar and lesson list
│   ├── lib/siteContext.js       # shared template variables (server + build)
│   ├── controllers/             # page + contact-form handlers
│   ├── middleware/              # form validation, error handler
│   ├── routes/
│   └── views/                   # EJS templates (layout, partials, pages, 404)
│       └── lessons/             # the text of each lesson page (one .ejs file per lesson)
├── public/                      # files served as-is
│   ├── css/style.css
│   ├── js/script.js
│   └── images/
│       ├── profile/             # profile photograph
│       ├── branding/            # JA logo, favicon, hero background
│       ├── designs/             # flyers / graphic design gallery (web versions)
│       ├── communications/      # content calendar pages
│       ├── education/           # lesson plan pages, learning program thumbnail
│       ├── projects/            # project screenshots (AAGYW Cameroon)
│       ├── certificates/        # certificate scans: kept locally, NEVER published (not in Git, not in the build)
│       └── professional-background-bg.png   # Professional Background section background
├── scripts/
│   ├── build.js                 # static export → dist/
│   ├── preview.js               # serve dist/ like GitHub Pages
│   └── check.js                 # link and HTML checker
├── design-studio/               # editable flyer sources, PNG + vector PDF exports (see its README)
│   └── logo/ja-logo-original.png  # full-size original JA logo
├── recovered-backgrounds/       # full-quality copies of the hero and Professional Background images
├── test/site.test.js
└── .github/workflows/deploy.yml # GitHub Actions: test, build and publish to GitHub Pages
```

## Updating the content

Almost everything is edited in **`src/data/portfolioData.js`**. Lesson pages are edited in `src/views/lessons/<lesson>.ejs`, and the lesson list and calendar in `src/data/lessons.js`.

### Where each image lives

| On the website | File |
| --- | --- |
| Logo (navbar and footer) | `public/images/branding/ja-logo.png` (full-size original: `design-studio/logo/ja-logo-original.png`) |
| Hero background | `public/images/branding/hero-background-clean.webp` (set in `public/css/style.css`, `.hero`) |
| Professional Background background | `public/images/professional-background-bg.png` (`.background-section` in the CSS) |
| Profile photograph | `public/images/profile/junioura-akwensimbom.jpg` |
| Selected Work cards (Home) | `projects/aagyw-cam/aagyw-cam-homepage-card.webp`, `designs/who-needs-a-website-design.webp`, `education/html-css-learning-program-card.webp` |
| AAGYW Cameroon screenshots | `public/images/projects/aagyw-cam/` |
| Flyers / design gallery | `public/images/designs/<slug>.webp` (editable sources in `design-studio/`) |
| Content calendars, lesson plan pages | `public/images/communications/`, `public/images/education/` |

To replace an image, save the new file over the old one with the same name (or change the path in the data file, template or CSS), then run `npm test`.

**Certificates** are shown as text only. The scans in `public/images/certificates/` stay on your computer: the build does not copy them and the local server refuses to serve them.

**Nexinch:** no project screenshot yet, so its card shows the details only. To add one, save it in `public/images/projects/` and add it to `images:` on the `nexinch` project.

Other updates:

- **AAGYW Cameroon project:** shows two genuine homepage screenshots in `public/images/projects/aagyw-cam/` (captured 13 Nov 2026) and a **Visit Live Website** button linking to https://aagyw-cam.org/. To refresh them, replace the two `.webp` files with new screenshots of the same names.
- **Experience:** entries are listed most recent first.
- **Design gallery:** add a web-sized image (about 1000 px wide, `.webp`) named `<slug>.webp` to `public/images/designs/` and add an entry to `designs`. Editable flyer sources are in `design-studio/`.

Run `npm test` after any change to catch broken links or missing images.

## Publishing to GitHub Pages

The workflow in `.github/workflows/deploy.yml` runs on every push to `main`: it installs, runs the tests, builds the site with the correct base path, checks it and publishes `dist/` to GitHub Pages.

**First-time setup** (once):

1. On GitHub, create an **empty public** repository named `junioura-akwensimbom-portfolio` (no README, no .gitignore, no licence).
2. Connect this project to it and push:
   ```bash
   git remote add origin https://github.com/<your-username>/junioura-akwensimbom-portfolio.git
   git push -u origin main
   ```
   Windows opens a GitHub sign-in window the first time.
3. In the repository, go to **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**.
4. Open the **Actions** tab and wait for "Deploy portfolio to GitHub Pages" to finish. The site is then at
   `https://<your-username>.github.io/junioura-akwensimbom-portfolio/`

If you name the repository differently, the address changes with it; the workflow adapts automatically.

**Publishing later changes:**

```bash
npm test                              # check everything still works
git add -A
git commit -m "Describe the change"
git push                              # the site updates a minute or two later
```

### What works on GitHub Pages

GitHub Pages hosts static files only. Everything on the site works there, except that the **contact form cannot send email by itself**: on the published site it checks the fields and then opens the visitor's own email app with the message addressed to you. Sending directly from the form only works on the local Node server, with mail settings in `.env`. To send directly from the published site later, a form service (for example Formspree) would be needed.

## Contact

- Email: [juniouraakwensimbon@gmail.com](mailto:juniouraakwensimbon@gmail.com)
- Phone: [+237 679 016 149](tel:+237679016149)
- LinkedIn: [Junioura Akwensimbom](https://www.linkedin.com/in/junioura-akwensimbom-156143295/)
- Facebook: [Junioura Creative WebDev](https://www.facebook.com/share/18Zyvny6Wi)
- TikTok: [@juniouracreativewebdev](https://www.tiktok.com/@juniouracreativewebdev)

## License

Code: MIT. Text, photographs and design work © Junioura Akwensimbom. They are not covered by the code license and may not be reused without permission.
