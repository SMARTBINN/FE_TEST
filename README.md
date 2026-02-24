# 🌿 BIOLOOP — Intelligent Waste Management Platform

<div align="center">

![BIOLOOP](https://img.shields.io/badge/BIOLOOP-Smart%20Waste%20Management-16a34a?style=for-the-badge&logo=leaf&logoColor=white)

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178c6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-11.5-ff0055?style=flat-square&logo=framer)](https://www.framer.com/motion/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

**Optimize your resources. Reduce your waste. Discover our intelligent solutions.**

[Live Demo](#) · [Report Bug](#) · [Request Feature](#)

</div>

---

## 📋 Table of Contents

- [About the Project](#-about-the-project)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [Available Scripts](#-available-scripts)
- [Internationalization](#-internationalization)
- [Components Overview](#-components-overview)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## 🌍 About the Project

**BIOLOOP** is a modern, responsive landing page for an intelligent waste management SaaS platform. The platform helps businesses optimize their waste collection operations through IoT-connected smart bins, real-time monitoring dashboards, and AI-powered environmental analytics.

The project provides:
- 📦 **Waste Loop** — IoT-connected smart bins that measure fill levels, weight, and transmit real-time data
- 📊 **Waste Link** — A management application for real-time supervision and operational insights
- 📈 **Environmental Reporting** — AI-driven analytics transforming raw waste data into strategic business levers

> Built as a fully bilingual (French 🇫🇷 / Arabic 🇸🇦) single-page application with RTL support and smooth animated transitions.

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🌐 **Bilingual** | Full French / Arabic support with one-click language toggle |
| 🔄 **RTL Support** | Automatic right-to-left layout when switching to Arabic |
| 🎨 **Smooth Animations** | Scroll-triggered fade-in animations powered by Framer Motion |
| 📱 **Fully Responsive** | Mobile-first design across all screen sizes |
| ⚡ **Performance** | Optimized with Next.js App Router and static generation |
| 🎯 **3D Illustrations** | Interactive animated smart bin and dashboard mockup in the Hero section |
| 📬 **Contact Form** | Functional contact form with submission state management |
| 🌙 **Modern UI** | Clean green-themed design with glassmorphism and gradient effects |
| ♿ **Accessible** | Semantic HTML, ARIA labels, and keyboard navigation support |

---

## 🛠 Tech Stack

### Core
- **[Next.js 14](https://nextjs.org/)** — React framework with App Router
- **[React 18](https://react.dev/)** — UI library
- **[TypeScript 5](https://www.typescriptlang.org/)** — Type safety

### Styling
- **[Tailwind CSS 3](https://tailwindcss.com/)** — Utility-first CSS framework
- **[Google Fonts](https://fonts.google.com/)** — Inter (Latin) + Cairo (Arabic)

### Animation
- **[Framer Motion 11](https://www.framer.com/motion/)** — Declarative animations and gestures

### Icons
- **[Lucide React](https://lucide.dev/)** — Clean, consistent icon set

### i18n
- **Custom Context API** — Lightweight bilingual solution (no external library)

---

## 📁 Project Structure

```
bioloop/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout — Navbar, fonts, metadata
│   │   ├── page.tsx            # Home page — assembles all sections
│   │   └── globals.css         # Global styles + Tailwind directives
│   │
│   ├── components/
│   │   ├── ui/                 # Reusable base components
│   │   │   ├── Button.tsx      # Button with variants (primary, outline, ghost...)
│   │   │   ├── Card.tsx        # Card with optional hover effect
│   │   │   └── FadeIn.tsx      # Scroll-triggered animation wrapper
│   │   │
│   │   ├── layout/
│   │   │   └── Navbar.tsx      # Fixed navbar with scroll effect + lang toggle
│   │   │
│   │   └── sections/           # Page sections (top to bottom)
│   │       ├── Hero.tsx                  # Animated hero with 3D bin + laptop
│   │       ├── Services.tsx              # 3-column services overview
│   │       ├── Products.tsx              # Waste Loop & Waste Link product cards
│   │       ├── WasteCollectionSection.tsx # IoT bin features detail
│   │       ├── MonitoringSection.tsx     # Dashboard mockup + feature list
│   │       ├── AnalyseSection.tsx        # Reporting cards + dark CTA banner
│   │       ├── StatsSection.tsx          # 6 environmental impact stats
│   │       ├── ValuesSection.tsx         # Company values grid
│   │       ├── PartnersSection.tsx       # Partner logos
│   │       └── ContactSection.tsx        # Contact info + form
│   │
│   ├── context/
│   │   └── LanguageContext.tsx # Global language state (FR/AR) + RTL toggle
│   │
│   └── translations/
│       ├── fr.ts               # All French strings
│       └── ar.ts               # All Arabic strings
│
├── public/
│   └── images/                 # Static assets
│
├── tailwind.config.js          # Tailwind configuration (CommonJS)
├── postcss.config.js           # PostCSS configuration (CommonJS)
├── next.config.js              # Next.js configuration
├── tsconfig.json               # TypeScript configuration
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js** `>= 18.0.0`
- **npm** `>= 9.0.0` or **yarn** or **pnpm**

Check your versions:
```bash
node --version
npm --version
```

### Installation

**1. Clone the repository**
```bash
git clone https://github.com/your-username/bioloop.git
cd bioloop
```

**2. Install dependencies**
```bash
npm install
```

**3. Run the development server**
```bash
npm run dev
```

**4. Open your browser**
```
http://localhost:3000
```

---

## 🔐 Environment Variables

This project currently has no required environment variables.

For future integrations (e.g. contact form backend, analytics), create a `.env.local` file at the root:

```env
# Example — not currently required
NEXT_PUBLIC_SITE_URL=https://bioloop.com
CONTACT_FORM_API_KEY=your_api_key_here
```

> ⚠️ Never commit `.env.local` to version control. It is already listed in `.gitignore`.

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server at `localhost:3000` |
| `npm run build` | Build the application for production |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint across the project |

---

## 🌐 Internationalization

The project uses a **custom React Context** for bilingual support — no external i18n library required.

### How it works

```
LanguageContext.tsx
├── Stores current language: 'fr' | 'ar'
├── Provides translation object: t.nav.home, t.hero.title1, etc.
├── Exposes toggleLang() function
└── Applies dir="rtl" to <html> element automatically
```

### Adding a new language

**1. Create the translation file** `src/translations/es.ts`:
```typescript
export const es = {
  nav: {
    home: 'Inicio',
    // ...
  },
  // ...
}
```

**2. Register it in `LanguageContext.tsx`:**
```typescript
import { es } from '@/translations/es'

type Lang = 'fr' | 'ar' | 'es'  // add 'es'
const translations = { fr, ar, es }
```

**3. Add the toggle option in `Navbar.tsx`**

### Translation file structure

```typescript
// src/translations/fr.ts
export const fr = {
  nav:        { home, services, about, products, cta },
  hero:       { badge, title1, title2, title3, subtitle, ... },
  services:   { title, subtitle, s1, s2, s3, learn_more },
  products:   { title, subtitle, p1_title, p1_desc, ... },
  waste:      { badge, title, features, benefits, ... },
  monitoring: { badge, title, features, alerts, ... },
  analyse:    { badge, title, cards, benefits, stat, ... },
  stats:      { title, subtitle, s1_val, s1_unit, ... },
  values:     { title, subtitle, v1_title, v1_desc, ... },
  partners:   { title, coming },
  contact:    { title, form fields, success states, ... },
}
```

---

## 🧩 Components Overview

### UI Components

#### `Button`
```tsx
<Button variant="primary" size="lg" isLoading={false}>
  Click me
</Button>
```
| Prop | Type | Default | Options |
|------|------|---------|---------|
| `variant` | string | `'primary'` | `primary` `secondary` `outline` `ghost` |
| `size` | string | `'md'` | `sm` `md` `lg` |
| `isLoading` | boolean | `false` | Shows spinner when true |

#### `Card`
```tsx
<Card hoverEffect className="p-8">
  Content
</Card>
```

#### `FadeIn`
```tsx
<FadeIn direction="up" delay={0.2}>
  Animated content
</FadeIn>
```
| Prop | Type | Default | Options |
|------|------|---------|---------|
| `direction` | string | `'up'` | `up` `down` `left` `right` |
| `delay` | number | `0` | Seconds before animation starts |

### Using Translations in a Component

```tsx
'use client'

import { useLang } from '@/context/LanguageContext'

export function MyComponent() {
  const { t, lang, isRTL, toggleLang } = useLang()

  return (
    <div dir={isRTL ? 'rtl' : 'ltr'}>
      <h1>{t.hero.title1}</h1>
      <button onClick={toggleLang}>
        {lang === 'fr' ? 'عربي' : 'Français'}
      </button>
    </div>
  )
}
```

### `'use client'` Requirement

Components that require the `'use client'` directive:

| Component | Reason |
|-----------|--------|
| `FadeIn.tsx` | Uses `framer-motion` |
| `Navbar.tsx` | Uses `useState` + `useEffect` |
| `Hero.tsx` | Uses `framer-motion` |
| `ContactSection.tsx` | Uses `useState` for form |
| All section components | Use `useLang()` hook |
| `LanguageContext.tsx` | Uses `useState` + `useEffect` |

---

## 🚢 Deployment

### Deploy on Vercel (Recommended)

The easiest way to deploy BIOLOOP is via [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and import your repository
3. Vercel auto-detects Next.js — click **Deploy**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Deploy on Other Platforms

**Build the project:**
```bash
npm run build
npm run start
```

**Docker (optional):**
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

---

## 🤝 Contributing

Contributions are welcome! Here's how to get involved:

1. **Fork** the repository
2. **Create** a feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Commit** your changes:
   ```bash
   git commit -m "feat: add your feature description"
   ```
4. **Push** to your branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. **Open** a Pull Request

### Commit Convention

This project follows [Conventional Commits](https://www.conventionalcommits.org/):

| Prefix | Description |
|--------|-------------|
| `feat:` | New feature |
| `fix:` | Bug fix |
| `docs:` | Documentation changes |
| `style:` | Formatting, no logic change |
| `refactor:` | Code refactor |
| `chore:` | Build process or tooling changes |

---

## 📄 License

Distributed under the **MIT License**. See [`LICENSE`](LICENSE) for more information.

---

## 📬 Contact

**BIOLOOP Team**

- 🌐 Website: [bioloop.com](https://bioloop.com)
- 📧 Email: [contact@bioloop.com](mailto:contact@bioloop.com)
- 📞 Phone: +212 6 00 00 00 00
- 🐦 Twitter: [@bioloop](https://twitter.com/bioloop)
- 💼 LinkedIn: [BIOLOOP](https://linkedin.com/company/bioloop)

---

<div align="center">

Made with ❤️ by the **BIOLOOP** team — Morocco 🇲🇦

*Optimisez vos ressources. Réduisez vos déchets.*

</div>
