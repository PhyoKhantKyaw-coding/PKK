# QWEN.md - Phyo Khant Kyaw Portfolio

## Project Overview

This is a modern, premium developer portfolio website for **Phyo Khant Kyaw**, a Mid-Level .NET Developer. The portfolio showcases his skills, projects, work experience, and provides a contact form. It features a polished UI inspired by Stripe/Linear/Vercel design aesthetics, with smooth animations, dark/light mode support, and full responsiveness.

### Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS (with custom primary/purple color themes)
- **Animations**: Framer Motion
- **Routing**: React Router v6
- **Icons**: Lucide React
- **HTTP Client**: Axios (available but no backend integration currently)
- **Utility Libraries**: clsx, tailwind-merge

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Badge.tsx
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Footer.tsx
│   ├── Layout.tsx
│   ├── LoadingSpinner.tsx
│   ├── Navbar.tsx
│   ├── ScrollToTop.tsx
│   ├── Section.tsx
│   └── SectionTitle.tsx
├── data/                # Static data (projects, experience, skills)
│   ├── experience.ts
│   ├── projects.ts
│   └── skills.ts
├── hooks/               # Custom React hooks
│   ├── useInView.ts
│   ├── useScroll.ts
│   └── useTheme.ts
├── pages/               # Page components
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Experience.tsx
│   ├── Home.tsx
│   ├── Projects.tsx
│   └── Skills.tsx
├── types/               # TypeScript type definitions
│   └── index.ts
├── utils/               # Utility functions
│   └── helpers.ts
├── App.tsx              # Main app component with routing
├── index.css            # Global styles
├── main.tsx             # App entry point
└── vite-env.d.ts        # Vite type definitions
```

## Building and Running

### Development
```bash
npm run dev
```
Starts the Vite development server at `http://localhost:5173`.

### Production Build
```bash
npm run build
```
Runs TypeScript compilation and builds the production bundle to `dist/`.

### Preview Production Build
```bash
npm run preview
```
Preview the production build locally.

### Linting
```bash
npm run lint
```
Run ESLint on `.ts` and `.tsx` files with strict rules (zero warnings allowed).

## Key Features

- 🌓 **Dark/Light Mode** - Toggle with localStorage persistence
- ✨ **Animations** - Framer Motion for page transitions, scroll animations, micro-interactions
- 📱 **Responsive** - Mobile-first design, works on all screen sizes
- 🎨 **Glassmorphism** - Modern glass effects and gradient accents (blue/purple theme)
- ⌨️ **Typing Effect** - Animated typing effect on hero section
- 🔍 **Project Filtering** - Filter projects by category (backend, frontend, fullstack, AI)
- 📝 **Contact Form** - UI-only form with validation (no backend)
- 🔝 **Scroll-to-Top** - Smooth back-to-top button
- 🏷️ **SEO Meta Tags** - Optimized for search engines

## Development Conventions

### TypeScript
- Strict mode enabled (`strict: true`)
- No unused locals or parameters
- Path aliases: `@/*` maps to `./src/*`
- Target: ES2020

### Styling
- **Tailwind CSS** for all styling
- Custom color palettes defined in `tailwind.config.js` (primary blue, purple accent)
- Dark mode via `class` strategy
- Font family: Inter

### Components
- Reusable UI components in `src/components/` (Button, Card, Badge, Section, etc.)
- Static data separated in `src/data/` (easy to update personal info)
- Custom hooks for shared logic (useInView, useScroll, useTheme)

### Routing
- React Router with nested routes under `<Layout />`
- Routes: `/`, `/about`, `/skills`, `/projects`, `/experience`, `/contact`

## Customization Guide

### Update Personal Information
1. **Projects**: Edit `src/data/projects.ts`
2. **Experience**: Edit `src/data/experience.ts`
3. **Skills**: Edit `src/data/skills.ts`
4. **Contact/Social Links**: Update in `src/components/Footer.tsx`, `src/pages/Contact.tsx`, `src/pages/Home.tsx`

### Theme Colors
Modify the color palettes in `tailwind.config.js` under `theme.extend.colors`.

### Deployment
- **Vercel**: `npx vercel` (recommended)
- **Netlify**: Upload `dist/` folder
- **GitHub Pages**: Set `base: '/repo-name/'` in `vite.config.ts`

## Notes

- Contact form is UI-only (no backend integration)
- GitHub and Live Demo links are placeholders (`#`)
- Replace placeholder social links with actual profiles
- Add resume/CV file for the download button
