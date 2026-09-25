# Portfolio Project — Memory & Roadmap

## What this project is
A multi-page React portfolio for **Ibrahim Khalif Ali** (college assignment). Built with
React 19, React Router, React Bootstrap, Vite. Dark theme throughout. ESLint + Vite build
are the verification commands (`npm run lint`, `npm run build`).

## CURRENT STATE (where we left off)
Everything works and builds clean. Six required pages all routed and reachable
(Home, About Me, Services, Projects, Education, Contact Me) plus extra pages
(Experience, Skills, Exploring, Resume).

- **All content is STATIC in one file:** `src/data/portfolio.js`
  (site info, hero, about, experience, education, skills, services, projects, contact).
- **Resume:** served from `public/Ibrahim-Khalif-Ali-Resume.pdf` (scanned 2-page PDF,
  image-based). Rendered with `react-pdf` on `/resume` (canvas preview + Download CV buttons
  above/below, worker loaded locally via `pdfjs-dist/build/pdf.worker.min.mjs?url`).
- **Profile image:** `src/assets/ibrahim.png`. Logo: `public/ib.png`.
- **Navbar:** frosted-glass dark indigo + cyan/violet gradient accent on active link
  (`src/index.css` `/* Navbar */`). No Résumé link in navbar.
- **Skills/Services/Education pages** use `react-icons` icons.
- **Contact page** has an info panel (Email, GitHub, LinkedIn, Portfolio) + a controlled
  form (firstName, lastName, contactNumber, email, message) that shows a success message
  then redirects home. No backend — form does not actually send.
- **Content tone:** user is sensitive to AI-generated look. NO em dashes (—/–), no curly
  quotes, no cliché filler words. Keep it natural and student-like.
- **Projects:** 5 live projects have `role` + `outcome` fields. **Teno Care has NO
  role/outcome** — pending user input (do NOT invent).
- **Resume facts to keep:** two experience roles (County Revenue & Land Registry System
  Administrator 2020–2026; Freelance/Side Projects 2019–2026), education per the PDF
  (Centennial Software Engineering Technology–AI 2026–2028, INTI MSc IT 2025–2026,
  Murang'a BSc 2014–2018, GPA 3.471). OCR-derived values — verify before quoting widely.

## NEXT STEP (next week) — BACKEND
User will ask to build the backend with **Express + Node + MongoDB**. When that starts:

1. The backend will serve all the content currently in `src/data/portfolio.js`
   (site, experiences, education, skills, services, projects) as REST API endpoints.
2. The frontend will be refactored to **fetch this data from the API** instead of
   importing the static file (e.g. use fetch in components / a small api helper).
3. Keep the existing page structure, routes, dark theme, and design identical —
   only swap the data source.
4. Likely follow-up: the Contact form will POST to the backend instead of redirecting.
5. The resume PDF and images will be served/uploaded from the backend too.

Start by asking for the API contract / endpoint structure before writing code, and
remember the exact current data fields so the API schema matches them.