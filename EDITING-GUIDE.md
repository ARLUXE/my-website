# AR Studio — Website Editing Guide

This document explains how to edit your agency website without touching code
everywhere. All editable content lives in a few small files.

## 1. Agency details (name, email, WhatsApp, social links, location)

File: `src/config/agency.ts`

This is the single source of truth for your business information. Update the
fields there and every page on the site updates automatically.

- `name`, `tagline`, `founderName`
- `email`, `whatsapp` (include country code, no `+`, e.g. `918755719882`)
- `social` links (Instagram, Behance, Dribbble, X, LinkedIn — set to `#` until
  you have real URLs)
- `location`

## 2. Services

File: `src/data/services.ts`

Add / edit / remove service cards. Each service has a title, description,
deliverables list, and an enquiry CTA.

## 3. Pricing packages

File: `src/data/pricing.ts`

Three packages are defined with INR starting prices. Prices are marked as
estimates on the site — update the `price` and `note` fields as needed.

## 4. Portfolio projects (the six demo concepts)

File: `src/data/portfolio.ts`

Each project has: id, title, category, description, tags, an accent color,
and a `demoRoute` that points to its standalone demo page. To add a new real
project later, add a new entry and create a page under `src/pages/demo/`.

> The six demo projects are fictional CONCEPT PROJECTS used to showcase design
> capabilities. They are clearly badged as "Concept Project" on the site.

## 5. FAQ

File: `src/data/faq.ts`

Edit the question / answer pairs. These power the FAQ accordion on the
homepage.

## 6. Connecting the enquiry form to a backend

The enquiry form (`src/pages/Contact.tsx`) currently validates input and
shows a success message **without sending anything anywhere** — it does not
pretend to send email. To make it deliver enquiries, choose one:

### Option A — Supabase (recommended)

1. Create a table, e.g. `enquiries`, with RLS allowing inserts for
   `authenticated` / `anon` as appropriate.
2. Set the following env vars in `.env`:
   ```
   VITE_SUPABASE_URL=...
   VITE_SUPABASE_ANON_KEY=...
   ```
3. In `Contact.tsx`, replace the simulated submit with a
   `supabase.from('enquiries').insert(...)` call.

### Option B — Email service (e.g. Resend, Formspree)

1. Create an edge function under `supabase/functions/submit-enquiry/` that
   forwards the payload to your email provider.
2. Set `RESEND_API_KEY` (or equivalent) as an edge function secret.
3. POST the form to the function URL.

## 7. Replacing demo images

Demo project pages use CSS-driven mockups (no external image files to break).
If you want to use real screenshots, drop images into `public/projects/` and
reference them in `src/data/portfolio.ts`.

## 8. Deploying to your own domain

This is a Vite + React app. Build with `npm run build` and deploy the `dist/`
folder to any static host (Vercel, Netlify, Cloudflare Pages). Update the
`canonical` URL and Open Graph URLs in `index.html` to your real domain.

## 9. robots.txt and sitemap

`public/robots.txt` and `public/sitemap.xml` are provided. Update the domain
inside them before going live.
