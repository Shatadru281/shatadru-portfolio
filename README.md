# Shatadru Adhikary — Portfolio

A responsive React portfolio with an editorial visual identity, interactive project case studies, and a downloadable resume. All three animated project previews are explicitly conceptual illustrations. They do not connect to live AI services or require an API key.

## Run locally

Install Node.js 22.12 or later and npm, then open a terminal in this project folder:

```sh
npm install
npm run dev
```

Open the local URL printed by Vite. To build and inspect the production output:

```sh
npm run build
npm run preview
```

The production files are written to `dist/`. The preview server is for local checks; deploy `dist/` using static hosting. With the included lockfile, `npm ci` can be used for reproducible dependency installation.

## Project layout

```text
public/
  resume.pdf                 Public copy of the supplied resume
  project-images/            Add actual project screenshots here
src/
  components/                Shared UI and conceptual project visuals
  data/portfolio.js          Profile, projects, skills, education, links
  sections/                  Portfolio page sections
  hooks/                     Reusable interaction logic
  styles/                    Styling and motion preferences
  App.jsx                    Page composition
  main.jsx                   React entry point
index.html                   Page title and metadata
```

The application uses React, Vite, Tailwind CSS, Motion for React, GSAP ScrollTrigger, and Lucide React. Fonts are bundled locally through Fontsource.

## Update content

Edit `src/data/portfolio.js`. It exports `profile`, `navItems`, `projects`, `skillGroups`, `education`, `certifications`, and `socialLinks`. Keep project IDs stable when updating existing case studies; the IDs select each project's custom visual. Add new data entries and an appropriate presentation component when adding a new project type.

The project `features`, `challenge`, `approach`, and `outcome` fields contain the expanded case-study copy. Technical skills do not use proficiency percentages; Java and Python retain the levels supplied in the brief. Financial-market interests are stored separately in `profile.interests`.

Update the title and description in `index.html` when changing the portfolio's identity or focus. External links should retain `target="_blank"` and `rel="noopener noreferrer"`. Contact uses a direct `mailto:` link, so no mail service or backend is required.

## Add real project screenshots

1. Put a compressed WebP, PNG, or JPEG in `public/project-images/`, for example `medibot.webp`.
2. In the corresponding entry in `src/data/portfolio.js`, set:

```js
screenshot: '/project-images/medibot.webp',
screenshotAlt: 'MediBot conversation interface with retrieved medical information',
```

3. Run the app and check that the screenshot fits on desktop and mobile. Use a descriptive alt text that accurately describes the real screenshot.

Leave `screenshot: null` to display the custom conceptual illustration. The supplied previews are design illustrations, not screenshots or proof of a live application. Prefer landscape images around 1600 pixels wide, compress them before upload, and remove any private content or credentials from captures.

## Replace the resume

The included `public/resume.pdf` is a copy of the supplied resume with its phone number redacted for public download. Its remaining content comes from the original PDF. The original source file is not modified.

To update it, replace `public/resume.pdf` with your current public-facing PDF, preserving the filename. All resume links read `profile.resume`. If you change the filename, also update that field. Keep your phone number out of the public copy unless you intentionally choose to publish it; a downloadable PDF is publicly accessible even when the number does not appear on the page.

## Deploy to Render

This is a static Vite site: no web server, database, AI key, or paid compute instance is needed. The included `render.yaml` declares the complete static-site configuration.

1. Push this project folder to a GitHub, GitLab, or Bitbucket repository.
2. In Render, choose **New → Static Site** and connect that repository.
3. Select the repository's main branch and use these settings:
   - **Build command:** `npm ci --include=dev && npm run build`
   - **Publish directory:** `dist`
   - **Root directory:** leave empty when this folder is the repository root
   - **Node version:** `.node-version` pins Node 22.12.0
4. Deploy and wait for the successful deploy status, then open Render's assigned `onrender.com` URL.

Alternatively, choose **New → Blueprint**, connect the repository, and let Render read `render.yaml`. The Blueprint also sets cache and response headers. No history-route rewrite is needed because navigation uses page anchors. Subsequent pushes to the connected branch automatically deploy updates.

See [Render's static site guide](https://render.com/docs/static-sites). Hosting the site publicly also makes its public resume download accessible.

## Deploy to Vercel

Push the project to a Git repository, import it in Vercel, and select this folder as the project root. Use the **Vite** preset, build command **`npm run build`**, and output directory **`dist`**. Deploy and open the generated URL. No environment variables are required.

## Deploy to Netlify

Import the repository into Netlify. Select this project folder as the base directory, set the build command to **`npm run build`**, and set the publish directory to **`dist`**. Deploy and open the generated URL. You can also build locally and upload the contents of `dist/` through Netlify's manual deployment flow.

Both configurations assume hosting at the domain root. Section navigation uses URL fragments, so this application does not need history-route rewrites. For additional platform options, see [Vite's official static deployment guide](https://vite.dev/guide/static-deploy.html).

## Before publishing updates

Run a production build and check the page at a narrow mobile width and a desktop width. Test the mobile menu, keyboard focus, project case studies, resume download, and contact link. Enable your system's reduced-motion preference to inspect the simplified animation experience. Confirm that all external profiles and certificates remain publicly accessible from a signed-out browser.

No performance scores, link availability guarantees, or completed test results are implied by this checklist.
