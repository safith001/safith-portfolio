# Technical Requirements Document (TRD) & System Architecture Specification

> **Project:** Personal Portfolio Platform — Mohammed Sarook Mohammed Safith  
> **Persona / Subtitle:** SAFITH THE VIBE CODER 😂  
> **Document Version:** 1.0.0  
> **Author:** Antigravity Tech Lead & Mohammed Safith  
> **Target Framework:** Next.js 14+ (App Router), TypeScript 5+, Tailwind CSS 3  
> **Deployment Target:** Vercel Edge Network (`safith-portfolio.vercel.app`)  
> **Status:** Approved for Implementation Planning  

---

## 1. System Overview & Technical Mission

### 1.1 Architectural Purpose
The Technical Requirements Document (TRD) translates the functional criteria established in the Product Requirements Document (PRD) into low-level engineering specifications. It defines the exact component hierarchies, data contracts, state lifecycles, CSS custom property mappings, internationalization routing mechanics, and performance budgets.

### 1.2 Core Architectural Principles

```
  ┌────────────────────────────────────────────────────────────────────────┐
  │                           NEXT.JS APP ROUTER                           │
  │                                                                        │
  │   SERVER COMPONENTS (Default)             CLIENT COMPONENTS ('use client')
  │   • Fast initial HTML delivery           • Interactive theme switcher  │
  │   • Zero client JS bundle for data       • Language dropdown toggle    │
  │   • SEO-optimized static metadata        • Framer Motion animations    │
  │   • Static Site Generation (SSG)         • Contact form state/validation
  └────────────────────────────────────────────────────────────────────────┘
```

1. **Server-First by Default:** Maximize the use of React Server Components (RSC) to ship zero client-side JavaScript for static text, badges, and layout scaffolding.
2. **Predictable State Transitions:** Restrict client-side state (`'use client'`) strictly to interactive islands: Theme Toggle, Language Selector, Interactive Project Cards, and the Contact Form.
3. **Zero Layout Shift (CLS = 0):** Enforce strict dimension reservations on images (`next/image`), system font fallbacks via `next/font`, and CSS logical properties.
4. **Interview Defensibility:** Structure code and types so every technical choice can be articulated during engineering interviews.

---

## 2. Directory Architecture & File Map

The codebase strictly follows the Next.js App Router structure with localized dynamic routing:

```
portfolio/
├── .eslintrc.json                       # Code quality and accessibility lint rules
├── .gitignore                           # Git exclusion rules
├── next.config.mjs                      # Next.js compiler & next-intl plugin config
├── package.json                         # Dependencies & npm scripts
├── postcss.config.mjs                   # PostCSS processor for Tailwind
├── tailwind.config.ts                   # Tailwind theme tokens & CSS variable mappings
├── tsconfig.json                        # Strict TypeScript compiler options
├── messages/                            # i18n translation dictionaries
│   ├── en.json                          # English dictionary (Base)
│   ├── ta.json                          # Tamil dictionary
│   └── ur.json                          # Urdu dictionary (RTL)
├── public/                              # Static public assets
│   ├── cv/
│   │   └── Mohammed_Safith_CV.pdf       # Verified ATS Curriculum Vitae
│   ├── images/
│   │   ├── projects/                    # Project showcase preview mockups
│   │   │   ├── peerconnect-mockup.png
│   │   │   ├── dailybooks-mockup.png
│   │   │   ├── medexpense-mockup.png
│   │   │   └── liquidtodo-mockup.png
│   │   └── avatar.png                   # Profile picture / avatar
│   └── favicon.ico                      # Site favicon
└── src/
    ├── middleware.ts                    # next-intl locale detection & routing guard
    ├── app/
    │   ├── [locale]/
    │   │   ├── layout.tsx               # Root localized layout (HTML, fonts, providers)
    │   │   ├── page.tsx                 # Single-page home view (all main sections)
    │   │   ├── not-found.tsx            # Custom 404 page
    │   │   └── projects/
    │   │       └── [slug]/
    │   │           └── page.tsx         # Deep-dive project case study page
    │   └── globals.css                  # CSS custom properties for all 4 themes
    ├── components/
    │   ├── layout/
    │   │   ├── Header.tsx               # Sticky navbar with nav links & toggles
    │   │   ├── Footer.tsx               # Footer with links, copyright & status indicator
    │   │   ├── MobileNav.tsx            # Slide-over navigation drawer for mobile screens
    │   │   └── ScrollToTop.tsx          # Floating jump-to-top button
    │   ├── sections/
    │   │   ├── HeroSection.tsx          # Name, persona badge, typed text cycler, CTAs
    │   │   ├── AboutSection.tsx         # Bio, academic metrics grid, core philosophy
    │   │   ├── ProjectsSection.tsx      # 4-card project grid with interactive hovers
    │   │   ├── SkillsSection.tsx        # Categorized tech badges with category filters
    │   │   ├── TimelineSection.tsx      # Chronological academic & internship timeline
    │   │   ├── ContactSection.tsx       # Contact form + direct mailto/social links
    │   │   └── ReferencesSection.tsx    # Note on verified letters & degree credentials
    │   ├── ui/
    │   │   ├── ThemeToggle.tsx          # Dropdown/switch for 4 design themes
    │   │   ├── LanguageToggle.tsx       # Locale selector (EN / TA / UR)
    │   │   ├── TypedText.tsx            # Self-typing dynamic text headline component
    │   │   ├── ProjectCard.tsx          # Single project showcase card
    │   │   ├── SkillBadge.tsx           # Stylized skill pill with SVG icon
    │   │   ├── TimelineItem.tsx         # Chronological vertical node component
    │   │   └── ContactForm.tsx          # Validated client form connecting to Formspree
    │   └── motion/
    │       ├── ScrollReveal.tsx         # Framer Motion intersection-observer wrapper
    │       └── ParallaxContainer.tsx    # Subtle scroll-depth container
    ├── data/
    │   ├── projects.ts                  # Static metadata for the 4 projects
    │   ├── skills.ts                    # Grouped technical skill definitions
    │   └── timeline.ts                  # Academic & work history records
    ├── hooks/
    │   ├── useTheme.ts                  # Theme switching & localStorage persistence
    │   └── useScrollSpy.ts              # Tracks active viewport section for nav links
    ├── lib/
    │   ├── themes.ts                    # Theme keys, display labels, and color definitions
    │   └── utils.ts                     # Tailwind class merging utility (clsx + twMerge)
    └── types/
        └── index.ts                     # Strict TypeScript interface contracts
```

---

## 3. Data Models & TypeScript Type Contracts

All components consume strongly-typed interfaces declared in `src/types/index.ts`. No `any` types are permitted.

```typescript
// src/types/index.ts

/**
 * 4 Supported Design Themes
 */
export type ThemeMode = 'glassmorphism' | 'minimal' | 'warm' | 'terminal';

/**
 * Supported Locales & Directionality
 */
export type Locale = 'en' | 'ta' | 'ur';
export type TextDirection = 'ltr' | 'rtl';

/**
 * Showcase Project Interface
 */
export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  category: 'Full-Stack Web' | 'Mobile / Cross-Platform' | 'QA & Backend';
  featured: boolean;
  status: 'Live on Vercel' | 'Play Store Bundle' | 'Production Ready' | 'Testing Suite';
  statusColor: 'emerald' | 'indigo' | 'amber' | 'blue';
  description: string;
  problemStatement: string;
  architectureDetails: string[];
  keyFeatures: string[];
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  mockupImage: string;
  interviewDefenseNotes: {
    architecturalChoice: string;
    tradeoffConsidered: string;
    failureHandling: string;
  };
}

/**
 * Technical Skill Categorization
 */
export type SkillCategory = 
  | 'Languages'
  | 'Frontend'
  | 'Backend & APIs'
  | 'Mobile'
  | 'Databases & Cloud'
  | 'QA & DevOps';

export interface SkillItem {
  name: string;
  category: SkillCategory;
  proficiencyLevel: 'Proficient' | 'Familiar' | 'Academic';
  iconKey: string;
}

/**
 * Career / Academic Timeline Milestone
 */
export interface TimelineEntry {
  period: string;
  title: string;
  institution: string;
  location: string;
  type: 'Education' | 'Internship' | 'Project Milestone';
  highlights: string[];
  credentialFile?: string;
}

/**
 * Contact Submission Payload
 */
export interface ContactFormData {
  fullName: string;
  email: string;
  subject?: string;
  message: string;
}

export interface FormSubmissionState {
  status: 'idle' | 'submitting' | 'success' | 'error';
  errorMessage?: string;
}
```

---

## 4. Design System & Theme Engine Specification

### 4.1 CSS Custom Property Tokens
Theme switching is implemented via CSS Custom Properties scoped to `html[data-theme="..."]`. This ensures zero layout shifts, zero Flash of Unstyled Content (FOUC), and instant updates across all nested components.

```
┌─────────────────────────────────────────────────────────────┐
│                       HTML ROOT                             │
│                  <html data-theme="glassmorphism">          │
└──────────────┬──────────────────────────────┬───────────────┘
               │                              │
       ┌───────▼───────┐              ┌───────▼───────┐
       │ --bg-primary  │              │ --text-primary│
       │ --bg-card     │              │ --text-muted  │
       │ --border-card │              │ --accent-main │
       └───────┬───────┘              └───────┬───────┘
               │                              │
               └──────────────┬───────────────┘
                              ▼
               ┌──────────────────────────────┐
               │    Tailwind Utility Classes  │
               │ bg-[var(--bg-card)]          │
               │ text-[var(--text-primary)]   │
               └──────────────────────────────┘
```

#### Token Mapping Specification (`src/app/globals.css`)

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root,
html[data-theme="glassmorphism"] {
  --bg-primary: #030712;         /* slate-950 */
  --bg-secondary: #0f172a;       /* slate-900 */
  --bg-gradient: linear-gradient(135deg, #030712 0%, #1e1b4b 50%, #0f172a 100%);
  --bg-card: rgba(255, 255, 255, 0.05);
  --bg-card-hover: rgba(255, 255, 255, 0.08);
  --border-card: rgba(255, 255, 255, 0.12);
  --border-card-hover: rgba(99, 102, 241, 0.4);
  --backdrop-blur: 16px;
  --text-primary: #f8fafc;       /* slate-50 */
  --text-secondary: #cbd5e1;     /* slate-300 */
  --text-muted: #94a3b8;         /* slate-400 */
  --accent-primary: #6366f1;     /* indigo-500 */
  --accent-secondary: #8b5cf6;   /* violet-500 */
  --accent-glow: rgba(99, 102, 241, 0.25);
  --badge-bg: rgba(99, 102, 241, 0.15);
  --badge-text: #a5b4fc;
  --font-body: 'Plus Jakarta Sans', sans-serif;
  --font-heading: 'Plus Jakarta Sans', sans-serif;
}

html[data-theme="minimal"] {
  --bg-primary: #ffffff;
  --bg-secondary: #f8fafc;
  --bg-gradient: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
  --bg-card: #ffffff;
  --bg-card-hover: #f8fafc;
  --border-card: #e2e8f0;
  --border-card-hover: #94a3b8;
  --backdrop-blur: 0px;
  --text-primary: #0f172a;       /* slate-900 */
  --text-secondary: #334155;     /* slate-700 */
  --text-muted: #64748b;         /* slate-500 */
  --accent-primary: #2563eb;     /* blue-600 */
  --accent-secondary: #4f46e5;   /* indigo-600 */
  --accent-glow: rgba(37, 99, 235, 0.12);
  --badge-bg: #e0e7ff;
  --badge-text: #3730a3;
  --font-body: 'Plus Jakarta Sans', sans-serif;
  --font-heading: 'Plus Jakarta Sans', sans-serif;
}

html[data-theme="warm"] {
  --bg-primary: #faf8f5;         /* warm cream alabaster */
  --bg-secondary: #f4efe8;
  --bg-gradient: linear-gradient(180deg, #faf8f5 0%, #f4efe8 100%);
  --bg-card: #ffffff;
  --bg-card-hover: #fffdfa;
  --border-card: #e7dfd5;
  --border-card-hover: #c2684e;
  --backdrop-blur: 0px;
  --text-primary: #2d3748;       /* deep charcoal */
  --text-secondary: #4a5568;
  --text-muted: #718096;
  --accent-primary: #c2684e;     /* terracotta */
  --accent-secondary: #8da399;   /* sage green */
  --accent-glow: rgba(194, 104, 78, 0.15);
  --badge-bg: #fbeee8;
  --badge-text: #9c4832;
  --font-body: 'Plus Jakarta Sans', sans-serif;
  --font-heading: 'Plus Jakarta Sans', sans-serif;
}

html[data-theme="terminal"] {
  --bg-primary: #050505;         /* true deep terminal black */
  --bg-secondary: #0a0e14;
  --bg-gradient: #050505;
  --bg-card: #0d1117;
  --bg-card-hover: #161b22;
  --border-card: #00ff41;        /* matrix phosphor green */
  --border-card-hover: #39ff14;
  --backdrop-blur: 0px;
  --text-primary: #00ff41;
  --text-secondary: #00cc33;
  --text-muted: #008f11;
  --accent-primary: #00ff41;
  --accent-secondary: #ffb000;   /* amber warning */
  --accent-glow: rgba(0, 255, 65, 0.2);
  --badge-bg: rgba(0, 255, 65, 0.12);
  --badge-text: #00ff41;
  --font-body: 'JetBrains Mono', monospace;
  --font-heading: 'JetBrains Mono', monospace;
}
```

### 4.2 Theme Persistence & Anti-Flicker Architecture
To prevent Flash of Light Theme when loading in Dark mode, an inline script in `<head>` executes prior to DOM hydration:

```html
<script>
  (function() {
    try {
      const savedTheme = localStorage.getItem('safith_portfolio_theme') || 'glassmorphism';
      document.documentElement.setAttribute('data-theme', savedTheme);
    } catch (e) {
      document.documentElement.setAttribute('data-theme', 'glassmorphism');
    }
  })();
</script>
```

---

## 5. Internationalization (i18n) & RTL Engine

### 5.1 Routing Mechanics (`next-intl`)
Next.js middleware intercepts requests and rewrites URLs with locale prefixes:
* `/` → Redirects to `/[defaultLocale]` (i.e. `/en`).
* `/en/projects/peerconnect` → English case study.
* `/ta/projects/peerconnect` → Tamil case study.
* `/ur/projects/peerconnect` → Urdu case study (RTL mirrored).

### 5.2 RTL (Right-to-Left) Layout Rules
For locale `ur`:
1. `<html lang="ur" dir="rtl">` automatically inverts page flow.
2. **CSS Logical Properties Standard:** No physical direction utility classes (`ml-*`, `mr-*`, `left-*`, `right-*`) are used. Instead:
   * Margin Start: `ms-4` (left in LTR, right in RTL).
   * Margin End: `me-4` (right in LTR, left in RTL).
   * Padding Start: `ps-6` (left in LTR, right in RTL).
   * Alignment: `text-start` and `text-end`.
   * Floating Elements: `start-0` / `end-0`.
3. Icon Arrow Direction: Flip navigation arrows using `rtl:rotate-180`.

---

## 6. Motion & Scroll Choreography Specification

All animations use Framer Motion with standard GPU-accelerated transforms (`translate3d`, `opacity`, `scale`).

### 6.1 Standard Motion Variants

```typescript
// src/components/motion/variants.ts
export const fadeInUpVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: (customDelay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: customDelay,
      ease: [0.25, 0.1, 0.25, 1], // Cubic bezier smooth ease-out
    },
  }),
};

export const staggerContainerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const cardHoverVariant = {
  initial: { y: 0, scale: 1 },
  hover: {
    y: -6,
    scale: 1.015,
    transition: { duration: 0.25, ease: 'easeOut' },
  },
};
```

### 6.2 Accessibility / Reduced Motion Guard
In compliance with WCAG 2.1 Level AA guidelines:
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

## 7. Form Handling & External Integration Layer

### 7.1 Contact Form Submission Lifecycle

```
[User submits Form]
        │
        ▼
[Client-side Validation] (Regex check: Email format, Message length ≥ 15 chars)
        │
        ├── Invalid ──► Display inline red error hints
        │
        ▼ Valid
[Framer Motion Loading Spinner] (Submit button disabled to prevent duplicate POSTs)
        │
        ▼
[HTTP POST to Formspree Endpoint]
  URL: https://formspree.io/f/{FORMSPREE_ID}
  Headers: { "Content-Type": "application/json", "Accept": "application/json" }
  Payload: { "fullName": "...", "email": "...", "message": "..." }
        │
        ├── 200 OK ──────► Display Green Success Alert + Clear form inputs
        │
        └── 4xx / 5xx ───► Display Graceful Error Alert + "Email me directly at safith..."
```

### 7.2 Defensibility Notes: Why Not a Full Database for the Portfolio?
* **Analogy:** Hiring an entire accounting department to accept delivery packages vs. installing a secure mailbox outside the front door.
* **Explanation:** A portfolio is fundamentally a read-heavy presentation site with a single outbound contact stream. A database (PostgreSQL, MongoDB) introduces cold starts, connection pooling overhead, ongoing server costs, and potential SQL injection attack surfaces. A headless serverless endpoint (Formspree) handles anti-spam filtering, captcha verification, and email dispatch with zero server maintenance.

---

## 8. Verification, Testing & QA Matrix

| Verification Check | Target Standard | Command / Validation Procedure |
| :--- | :--- | :--- |
| **Strict Type Safety** | 0 TypeScript errors | `npx tsc --noEmit` |
| **Lint & Style Audit** | 0 ESLint warnings | `npm run lint` |
| **Production Build** | Clean SSG/SSR output | `npm run build` |
| **Lighthouse Performance** | Score ≥ 90 / 100 | Chrome DevTools Lighthouse audit in incognito |
| **Lighthouse Accessibility** | Score ≥ 95 / 100 | Verify all images have `alt` tags and ARIA labels |
| **Lighthouse Best Practices** | Score ≥ 95 / 100 | HTTPS, console log-free, valid DOCTYPE |
| **Lighthouse SEO** | Score ≥ 95 / 100 | Meta description, viewport tag, canonical URL |
| **Theme Integrity** | Clean transitions | Toggle all 4 themes; verify zero contrast errors |
| **RTL Layout Symmetry** | Flawless mirroring | Switch to Urdu (`ur`); verify start/end margins |
| **Form Integrity** | Working email flow | Send test message; verify receipt in Safith's inbox |

---

## 9. Implementation Dependencies (`package.json`)

```json
{
  "name": "safith-portfolio",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "type-check": "tsc --noEmit"
  },
  "dependencies": {
    "clsx": "^2.1.1",
    "framer-motion": "^11.11.0",
    "lucide-react": "^0.453.0",
    "next": "^14.2.15",
    "next-intl": "^3.21.1",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "tailwind-merge": "^2.5.4"
  },
  "devDependencies": {
    "@types/node": "^22.7.5",
    "@types/react": "^18.3.11",
    "@types/react-dom": "^18.3.0",
    "autoprefixer": "^10.4.20",
    "eslint": "^8.57.1",
    "eslint-config-next": "14.2.15",
    "postcss": "^8.4.47",
    "tailwindcss": "^3.4.13",
    "typescript": "^5.6.3"
  }
}
```
