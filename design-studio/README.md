# Design studio: refined flyers

Editable sources and exports for the graphic design work shown in the portfolio gallery.

The **original flyers on the Desktop were not modified**. They were only read, so their text and content could be preserved exactly. **No personal photographs** were used in any redesign.

## How these were made

Each design is a hand-built layout written in HTML/CSS (`redesigns/<name>/<name>.html`) at the exact size of the original format. `render.js` uses the installed Chrome to export two files for each design:

| File | Use |
| --- | --- |
| `export/<name>.png` | High-resolution image (2× the artboard size) for posting and printing previews |
| `export/<name>.pdf` | **Vector PDF**: opens in Adobe Illustrator as editable shapes and text |

Adobe Illustrator and Photoshop were **not** used to produce these files. To edit one in Illustrator, open the PDF and first install the fonts from `fonts/` (Manrope, Inter, Barlow Condensed, all free under the SIL Open Font License). Otherwise Illustrator substitutes other fonts.

To change text or colours, edit the `.html` file in VS Code and run:

```bash
node design-studio/render.js               # all designs
node design-studio/render.js search-smarter  # one design
```

The website uses compressed copies in `public/images/designs/` (`.webp`, about 1000 px wide).

## The designs

| Design | Original file (Desktop) | Format | What changed |
| --- | --- | --- | --- |
| `who-needs-a-website` | `Gallery/Final.jpg` | 1080×1080 post | Removed the stock-style laptop/desk photo and glossy effects. Replaced the photo with a simple drawn website. Editorial grid instead of rounded cards, and tighter type hierarchy. Same headline, audiences and tagline. |
| `five-website-myths` | `Gallery/todays post.jpg` | 1080×1080 post | **Personal photo removed.** The large "5" numeral now leads the layout. The myths list and "The truth" panel are side by side, with a calmer palette and no 3D gradients. All five myths, the truth statement and the closing question are word for word. |
| `websites-every-day` | `Gallery/teach.jpg` | 1080×1080 post | Logo image replaced by a clean text lockup. Card boxes replaced by ruled columns, with stronger heading scale. All copy kept. |
| `pause-check-verify` | `My Flyer Project/october 1st.ai` | 1080×1080 post | Stock photo of people removed. The condensed headline carries the design. The three claims are set as a checklist, and "Pause. Check. Verify." is a three-colour stamp. All copy kept. |
| `search-smarter` | `Gallery/NOVEMBER 5.png` | 1080×1350 post | AI-generated person, Google logos and brush effects removed. The search bar is drawn as a simple interface. Four tips sit in a clean grid. All copy kept. |
| `password-first-defence` | `Gallery/YOUR PASSSSSSSS.png` | 3:2 landscape | **Personal photo removed** and replaced by a flat shield-and-lock graphic. Brush strokes and glow removed. The four habits are set in a 2×2 grid. All copy kept. |
| `build-design-grow` | `My Flyer Project/Junioura_Akwensimbom.ai` | A4 flyer | **Personal photo removed.** Moved to the portfolio's navy and teal identity, and the headline set as a large typographic statement. The email is corrected to `juniouraakwensimbon@gmail.com` (the original had "…simbom"). All other copy kept. |
| `nexinch-services` | `Gallery/new design flier.ai` | A4 flyer | Stock person and decorative swooshes removed. Nexinch blue and red kept. The service list is set as a numbered index, and contact details moved into the blue panel. The Nexinch logo graphic is replaced by a text wordmark, so swap in the official logo if Nexinch provides one. |

## Not selected

These were left out on purpose: practice replicas of other businesses' flyers (Kensky design, Longpie Constructions, Writers Occupy), a birthday flyer featuring a private individual, faith and motivational posts, Shutterstock background images, and all personal photographs.
