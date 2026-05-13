# Bharat Vrindavan

Bharat Vrindavan is an immersive cultural heritage gallery for India's traditional clothing, jewelry, artifacts, musical instruments, paintings, pottery, masks, farming tools, wedding objects, festivals, and stories.

The app presents heritage objects through animated gallery cards, story modals, state-wise browsing, festival outfit mapping, and a lightweight 3D item detail viewer.

## Features

- Explore page with person, region, category, and search filters
- Animated 3D-style heritage cards using Framer Motion
- Story modal with backdrop blur, ESC close, and focus handling
- State-wise browse for all 28 Indian states and 8 union territories
- Festival page with stories and traditional outfit mappings
- About page explaining the mission, collection, and 3D technology
- Item detail pages with related items, same-state suggestions, and a React Three Fiber viewer
- 3D interaction hints, loading screen, and WebGL error fallback
- Mobile navigation drawer, footer, 404 page, and back-to-top button
- Empty states for filters with no matching artifacts
- SEO metadata, Open Graph preview, Twitter cards, sitemap, robots.txt, and PWA manifest
- Vercel security headers
- Zustand-powered global filter and modal state
- Tailwind CSS design system with warm heritage colors and custom typography

## Tech Stack

- React 18
- Vite
- React Router v6
- Framer Motion
- Three.js, React Three Fiber, and Drei
- Tailwind CSS v3
- Zustand
- Lucide React icons
- Google Fonts: Cinzel, Cinzel Decorative, Cormorant Garamond

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite, usually:

```bash
http://127.0.0.1:5173/
```

## Available Scripts

```bash
npm run dev
npm run build
npm run lint
npm run preview
```

## Project Structure

```text
src/
  components/      Reusable UI components
  data/            Mock heritage, state, and festival data
  hooks/           Filtering hooks
  lib/             Shared utilities and motion variants
  pages/           Route-level pages
  store/           Zustand global state
  styles/          Tailwind globals and design tokens
public/
  manifest.json    PWA manifest
  robots.txt       Search crawler rules
  sitemap.xml      Sitemap for deployment
  og-preview.jpg   Social sharing preview image
```

## Pages

- `/` - Explore gallery
- `/states` - State-wise clothing browse
- `/stories` - Story archive
- `/festivals` - Festival stories and outfit mappings
- `/about` - Project mission and technology overview
- `/item/:id` - Full item detail page
- `*` - Custom 404 page

## Deployment Notes

- The app includes `vercel.json` security headers for Vercel.
- Social previews use `public/og-preview.jpg` at 1200x630.
- PWA metadata is defined in `public/manifest.json`.
- Search engine files are available at `/robots.txt` and `/sitemap.xml`.

## Build

```bash
npm run build
```

The production build is generated in `dist/`.

If a local build runs out of memory on Windows with Vite/Rolldown, use:

```powershell
$env:NODE_OPTIONS='--max-old-space-size=4096'; npm.cmd run build
```
