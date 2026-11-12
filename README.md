# Junioura Akwensimbom — Portfolio

Personal portfolio of **Junioura Akwensimbom**, Web Developer · Digital Communications · Educator, based in Bamenda, Cameroon.

The site presents my web development work (including the AAGYW-CAM website), my digital literacy content and designs for Junioura Creative WebDev, my web and application development training at Nexinch, my teaching, and my education and certifications.

## Technologies

- **Node.js + Express**: local development server
- **EJS** templates with `express-ejs-layouts`
- Plain **HTML, CSS and JavaScript** (no front-end framework)
- **Manrope** and **Inter** fonts from Google Fonts
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
│   ├── data/portfolioData.js    # ← ALL portfolio text lives here
│   ├── lib/siteContext.js       # shared template variables (server + build)
│   ├── controllers/             # page + contact-form handlers
│   ├── middleware/              # form validation, error handler
│   ├── routes/
│   └── views/                   # EJS templates (layout, partials, home page, 404)
├── public/                      # files served as-is
│   ├── css/style.css
│   ├── js/script.js
│   ├── images/
│   │   ├── profile/             # profile photograph
│   │   ├── designs/             # web versions of the graphic design gallery
│   │   ├── projects/            # project screenshots (add here)
│   │   ├── certificates/        # certificate images (add here)
│   │   └── branding/            # favicon / logo
│   └── documents/               # e.g. a CV PDF (add here)
├── scripts/
│   ├── build.js                 # static export → dist/
│   ├── preview.js               # serve dist/ like GitHub Pages
│   └── check.js                 # link and HTML checker
├── design-studio/               # editable flyer sources, PNG + vector PDF exports (see its README)
├── test/site.test.js
└── deployment/github-pages.yml  # prepared GitHub Actions workflow (inactive)
```

## Updating the content

Almost everything is edited in **`src/data/portfolioData.js`**:

- **Projects:** to show a real screenshot instead of the typographic panel, save the image in `public/images/projects/` and set `image: 'images/projects/<file>.jpg'` on that project.
- **AAGYW-CAM link:** this is hidden for now. Set `show: true` on its link once `aagyw-cam.org` is serving the association's own site again.
- **Certificates:** save the image in `public/images/certificates/` and set `image:` on the certificate. A "View certificate" link then appears.
- **Design gallery:** add a web-sized image (about 1000 px wide, `.webp`) named `<slug>.webp` to `public/images/designs/` and add an entry to `designs`. Editable flyer sources are in `design-studio/`.

Run `npm test` after any change to catch broken links or missing images.

## Publishing to GitHub Pages

> Nothing has been published yet. Only do these steps once you have reviewed the site locally and decided to publish.

1. Create an **empty public** repository named `junioura-akwensimbom-portfolio` on GitHub (no README, no .gitignore).
2. Activate the workflow by copying `deployment/github-pages.yml` to `.github/workflows/deploy.yml`, then commit.
3. Connect and push:
   ```bash
   git remote add origin https://github.com/<your-username>/junioura-akwensimbom-portfolio.git
   git push -u origin main
   ```
4. On GitHub, go to **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**.
5. Open the **Actions** tab and wait for "Deploy portfolio to GitHub Pages" to finish. The site will be at
   `https://<your-username>.github.io/junioura-akwensimbom-portfolio/`

To publish later changes, run `git add -A`, then `git commit -m "Describe the change"`, then `git push`. The workflow rebuilds the site automatically.

## Contact

- Email: [juniouraakwensimbon@gmail.com](mailto:juniouraakwensimbon@gmail.com)
- Phone: [+237 679 016 149](tel:+237679016149)
- LinkedIn: [Junioura Akwensimbom](https://www.linkedin.com/in/junioura-akwensimbom-156143295/)
- Facebook: [Junioura Creative WebDev](https://www.facebook.com/share/18Zyvny6Wi)
- TikTok: [@juniouracreativewebdev](https://www.tiktok.com/@juniouracreativewebdev)

## License

Code: MIT. Text, photographs and design work © Junioura Akwensimbom. They are not covered by the code license and may not be reused without permission.
