# Bharat Vrindavan

Bharat Vrindavan is an immersive cultural heritage gallery for India's traditional clothing, jewelry, artifacts, musical instruments, paintings, pottery, masks, farming tools, wedding objects, festivals, and stories.

The app presents heritage objects through animated gallery cards, story modals, state-wise browsing, festival outfit mapping, and a lightweight 3D item detail viewer.

## Features

- Explore page with person, region, category, and search filters
- Animated 3D-style heritage cards using Framer Motion
- Story modal with backdrop blur, ESC close, and focus handling
- State-wise browse for all 28 Indian states and 8 union territories
- Festival page with stories and traditional outfit mappings
- Item detail pages with related items, same-state suggestions, and a React Three Fiber viewer
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
```

## Pages

- `/` - Explore gallery
- `/states` - State-wise clothing browse
- `/stories` - Story archive
- `/festivals` - Festival stories and outfit mappings
- `/item/:id` - Full item detail page

## Build

```bash
npm run build
```

The production build is generated in `dist/`.
