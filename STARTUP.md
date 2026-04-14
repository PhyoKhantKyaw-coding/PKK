# 🚀 Getting Started

## Installation

Dependencies are already installed. If you need to reinstall:

```bash
npm install
```

## Development

Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## Build

Create a production build:

```bash
npm run build
```

## Preview

Preview the production build locally:

```bash
npm run preview
```

## 📁 Project Structure

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
├── data/               # Static data
│   ├── experience.ts
│   ├── projects.ts
│   └── skills.ts
├── hooks/              # Custom React hooks
│   ├── useInView.ts
│   ├── useScroll.ts
│   └── useTheme.ts
├── pages/              # Page components
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Experience.tsx
│   ├── Home.tsx
│   ├── Projects.tsx
│   └── Skills.tsx
├── types/              # TypeScript type definitions
│   └── index.ts
├── utils/              # Utility functions
│   └── helpers.ts
├── App.tsx            # Main app component with routing
├── index.css          # Global styles
├── main.tsx           # App entry point
└── vite-env.d.ts      # Vite type definitions
```

## ✨ Features Implemented

### Design & UI
- ✅ Modern, premium design (Stripe/Linear/Vercel style)
- ✅ Glassmorphism effects
- ✅ Gradient accents (blue/purple theme)
- ✅ Smooth animations and transitions
- ✅ Micro-interactions on hover and scroll
- ✅ Fully responsive (mobile-first)

### Functionality
- ✅ Dark/Light mode toggle with persistence
- ✅ Smooth scroll animations
- ✅ Page transitions
- ✅ Sticky navbar with scroll effect
- ✅ Back-to-top button
- ✅ Animated typing effect on hero
- ✅ Project filtering by category
- ✅ Contact form with validation
- ✅ SEO meta tags

### Pages & Sections
- ✅ Home/Hero page with animated typing
- ✅ About section with highlights
- ✅ Skills with animated progress bars
- ✅ Projects with filtering
- ✅ Experience timeline
- ✅ Contact form

## 🎨 Customization

### Update Personal Information

1. **Data Files** - Edit these files in `src/data/`:
   - `projects.ts` - Add/edit your projects
   - `experience.ts` - Update work experience
   - `skills.ts` - Modify skills and levels

2. **Contact Info** - Update in:
   - `src/components/Footer.tsx`
   - `src/pages/Contact.tsx`
   - `src/pages/Home.tsx`

3. **Social Links** - Edit in:
   - `src/components/Footer.tsx`
   - `src/pages/Home.tsx`

### Theme Colors

Modify colors in `tailwind.config.js`:
- Primary colors (blue)
- Purple accent colors

### Meta Tags

Update SEO information in `index.html`

## 🛠️ Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Routing**: React Router v6
- **Icons**: Lucide React
- **HTTP Client**: Axios

## 📝 Notes

- The contact form is UI-only (no backend integration)
- GitHub and Live Demo links are placeholders ('#')
- Replace social links with your actual profiles
- Add your resume/CV file for the download button

## 🚢 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload 'dist' folder to Netlify
```

### GitHub Pages
Add to `vite.config.ts`:
```ts
base: '/your-repo-name/'
```

Then:
```bash
npm run build
# Deploy 'dist' folder
```
