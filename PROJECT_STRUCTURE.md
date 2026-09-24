# Comprehensive Codebase & Project Architecture (PROJECT_STRUCTURE.md)

> **Project:** Mohammed Safith Portfolio Platform  
> **Brand / Persona:** SAFITH THE VIBE CODER 😂  
> **Target Framework:** Next.js 14+ (App Router), TypeScript, Tailwind CSS 3  
> **Architecture Pattern:** Server-First Component Islands with Modular Data Stores  
> **Version:** 1.0.0  
> **Effective Date:** September 2026  

---

## 1. Visual Directory Tree Blueprint

```text
portfolio/
├── 📄 .eslintrc.json                      # Code quality, syntax, and accessibility linting rules
├── 📄 .gitignore                         # Prevents node_modules, build outputs, and env files from Git
├── 📄 next.config.mjs                    # Next.js bundler tuning, image domains & next-intl plugin setup
├── 📄 package.json                       # Project metadata, script commands, and third-party dependencies
├── 📄 postcss.config.mjs                 # PostCSS pipeline enabling Tailwind CSS utility parsing
├── 📄 tailwind.config.ts                 # Design tokens, screen breakpoints, and CSS variable bindings
├── 📄 tsconfig.json                      # Strict TypeScript compiler options & `@/*` path alias mapping
│
├── 📁 messages/                          # Internationalization (i18n) translation dictionaries
│   ├── 📄 en.json                        # English dictionary (Base source of truth)
│   ├── 📄 ta.json                        # Tamil dictionary (Unicode Noto Sans Tamil)
│   └── 📄 ur.json                        # Urdu dictionary (Right-to-Left / Nastaliq typography)
│
├── 📁 public/                            # Static assets served directly at root URL (`/`)
│   ├── 📁 cv/
│   │   └── 📄 Mohammed_Safith_CV.pdf     # Official verified ATS-friendly resume for instant download
│   ├── 📁 images/
│   │   ├── 📁 projects/                  # High-resolution showcase mockups
│   │   │   ├── 📄 peerconnect-mockup.png # PeerConnect Next.js campus platform dashboard
│   │   │   ├── 📄 dailybooks-mockup.png  # Daily Books Tamil Islamic PDF reader interface
│   │   │   ├── 📄 medexpense-mockup.png  # MedExpense MBBS budget tracker with Gemini AI
│   │   │   └── 📄 liquidtodo-mockup.png  # Liquid Todo task management & QA testing suite
│   │   └── 📄 avatar.png                 # Profile picture / personal branding illustration
│   └── 📄 favicon.ico                    # Browser tab icon
│
└── 📁 src/                               # Application source code
    ├── 📄 middleware.ts                  # Edge middleware: intercepts routes for locale prefixes (`/en`)
    │
    ├── 📁 app/                           # Next.js 14+ App Router routing system
    │   ├── 📄 globals.css                # CSS custom properties for all 4 themes & Tailwind directives
    │   └── 📁 [locale]/                  # Dynamic route segment handling language-specific views
    │       ├── 📄 layout.tsx             # Root layout: injects HTML tags, lang/dir, fonts & theme anti-FOUC
    │       ├── 📄 page.tsx               # Primary single-page portfolio view (combines all 7 sections)
    │       ├── 📄 not-found.tsx          # Custom branded 404 error page
    │       └── 📁 projects/
    │           └── 📁 [slug]/
    │               └── 📄 page.tsx       # Dynamic deep-dive technical case study page
    │
    ├── 📁 components/                    # Modular, reusable React UI components
    │   ├── 📁 layout/                    # Global structure & persistent navigation
    │   │   ├── 📄 Header.tsx             # Sticky frosted-glass navbar with active link indicator
    │   │   ├── 📄 Footer.tsx             # Semantic footer with social links & operational status badge
    │   │   ├── 📄 MobileNav.tsx          # Accessible slide-over drawer menu for mobile viewports
    │   │   └── 📄 ScrollToTop.tsx        # Floating button that smoothly scrolls viewport to the top
    │   │
    │   ├── 📁 sections/                  # Discrete page section blocks (Single Responsibility)
    │   │   ├── 📄 HeroSection.tsx        # Full-height landing with name, persona badge & typed headline
    │   │   ├── 📄 AboutSection.tsx       # Biography, City University Malaysia stats & core philosophy
    │   │   ├── 📄 ProjectsSection.tsx    # 4-card project grid with interactive 3D perspective tilt
    │   │   ├── 📄 SkillsSection.tsx      # Categorized skill badges with domain group filters
    │   │   ├── 📄 TimelineSection.tsx    # Chronological education & internship milestone feed
    │   │   ├── 📄 ContactSection.tsx     # Direct email links, social badges & interactive form
    │   │   └── 📄 ReferencesSection.tsx  # Verified note on degree transcripts & director recommendation
    │   │
    │   ├── 📁 ui/                        # Reusable atom-level UI primitives & client widgets
    │   │   ├── 📄 ThemeToggle.tsx        # Interactive dropdown switching between the 4 design themes
    │   │   ├── 📄 LanguageToggle.tsx     # Locale switcher (EN / TA / UR) with router sync
    │   │   ├── 📄 TypedText.tsx          # Self-typing dynamic text cycler component
    │   │   ├── 📄 ProjectCard.tsx        # Single showcase card displaying tags, status & buttons
    │   │   ├── 📄 SkillBadge.tsx         # Pill badge displaying skill name, icon & category color
    │   │   ├── 📄 TimelineItem.tsx       # Individual chronological node with icon & highlight bullets
    │   │   └── 📄 ContactForm.tsx        # Validated form with status states connected to Formspree
    │   │
    │   └── 📁 motion/                    # Framer Motion animation wrappers & presets
    │       ├── 📄 ScrollReveal.tsx       # Viewport intersection observer: smooth fade-in-up animation
    │       └── 📄 variants.ts            # Centralized transition curves, durations & stagger timings
    │
    ├── 📁 data/                          # Decoupled static data stores (Single Source of Truth)
    │   ├── 📄 projects.ts                # Metadata for PeerConnect, Daily Books, MedExpense, Todo
    │   ├── 📄 skills.ts                  # Grouped technical competencies (Languages, Frontend, QA, etc.)
    │   └── 📄 timeline.ts                # Education milestones, degrees, and internship history
    │
    ├── 📁 hooks/                         # Custom React hooks (Encapsulated state logic)
    │   ├── 📄 useTheme.ts                # Reads/writes theme to localStorage & `document.documentElement`
    │   └── 📄 useScrollSpy.ts            # Observes visible section IDs to highlight active navbar links
    │
    ├── 📁 lib/                           # Shared utility helpers & configuration maps
    │   ├── 📄 themes.ts                  # Theme keys, display labels, accent colors & font definitions
    │   └── 📄 utils.ts                   # `cn()` helper function merging `clsx` and `tailwind-merge`
    │
    └── 📁 types/                         # Strict TypeScript contracts (Zero `any` policy)
        └── 📄 index.ts                   # Exported interfaces: Project, SkillItem, TimelineEntry, ThemeMode
```

---

## 2. Server vs. Client Component Boundaries

Next.js 14+ App Router operates on a **Server-First** paradigm. Components run on the server by default (generating zero client-side JavaScript) unless explicitly declared as Client Components using `'use client'`.

```
┌────────────────────────────────────────────────────────────────────────┐
│                        SERVER COMPONENTS (RSC)                         │
│   • Runs during build time (Static Site Generation / SSG)              │
│   • Generates pure, lightweight HTML & CSS                             │
│   • Zero JavaScript bundle sent to the client browser                  │
│                                                                        │
│   Included Files:                                                      │
│   ├── src/app/[locale]/layout.tsx (HTML shell, font setup)             │
│   ├── src/app/[locale]/page.tsx (Static composition of sections)       │
│   ├── src/app/[locale]/projects/[slug]/page.tsx (Case study layout)    │
│   ├── src/components/layout/Footer.tsx (Static links & copyright)      │
│   ├── src/components/sections/AboutSection.tsx (Static bio & stats)    │
│   └── src/components/sections/ReferencesSection.tsx (Static cards)     │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
                                    │ Renders interactive islands
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│                     CLIENT COMPONENTS ('use client')                   │
│   • Runs on both server (SSR) and client (hydration)                   │
│   • Uses React hooks (`useState`, `useEffect`, `useCallback`)          │
│   • Listens to browser events (`onClick`, `onSubmit`, `onScroll`)      │
│                                                                        │
│   Included Files:                                                      │
│   ├── src/components/layout/Header.tsx (Sticky scroll observer)        │
│   ├── src/components/ui/ThemeToggle.tsx (localStorage & data-theme)    │
│   ├── src/components/ui/LanguageToggle.tsx (URL locale navigation)     │
│   ├── src/components/ui/TypedText.tsx (Interval typing animation)      │
│   ├── src/components/ui/ContactForm.tsx (Form validation & fetch POST) │
│   ├── src/components/sections/ProjectsSection.tsx (Card hover tilt)    │
│   └── src/components/motion/ScrollReveal.tsx (Framer Motion inView)    │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 3. Data Flow & Architectural Lifecycles

### 3.1 Unidirectional Data Architecture
Data flows strictly from top to bottom, keeping state management clean and predictable:

```
┌─────────────────────────┐
│     STATIC DATA STORES  │
│  src/data/projects.ts   │
│  src/data/skills.ts     │
│  src/data/timeline.ts   │
└────────────┬────────────┘
             │
             ▼ Strongly Typed Interfaces (src/types/index.ts)
┌─────────────────────────┐
│  PAGE COMPONENT (RSC)   │
│  src/app/[locale]/      │
│  page.tsx               │
└────────────┬────────────┘
             │
             ├──────────────────────┬──────────────────────┐
             ▼                      ▼                      ▼
┌─────────────────────────┐ ┌───────────────┐ ┌─────────────────────────┐
│  <ProjectsSection />    │ │ <Skills... /> │ │ <TimelineSection />     │
│  Props: Project[]       │ │ Props: Skill[]│ │ Props: TimelineEntry[]  │
└────────────┬────────────┘ └───────────────┘ └─────────────────────────┘
             │
             ▼ Iterates over array (`.map()`)
┌─────────────────────────┐
│    <ProjectCard />      │
│  (Interactive Island)   │
└─────────────────────────┘
```

### 3.2 The Everyday Analogy: Why Separate Data from UI?
* **Analogy:** Think of a restaurant. The **Menu** (`src/data/projects.ts`) lists the food items and prices. The **Plates & Tables** (`src/components/ui/ProjectCard.tsx`) are the visual dishes used to present the meal.
* **Why not hardcode text inside components?** If a restaurant changes the price of a burger, they don't buy new plates—they just update the menu! Separating static data into `src/data/` means Safith can update a project link, add a new skill, or fix a typo in **one clean array** without risking breaking the UI design.

---

## 4. Root Configuration Files Explained

| File | Purpose | Everyday Engineering Analogy |
| :--- | :--- | :--- |
| **`package.json`** | Defines project name, version, build scripts (`npm run build`), and lists all external libraries needed. | The **Blueprint & Ingredient List** for the entire project. |
| **`tsconfig.json`** | Configures TypeScript's strict type-checker, JSX transform, and path shortcuts (e.g. `@/components/*`). | The **Strict Grammar Teacher** that stops mistakes before code runs. |
| **`tailwind.config.ts`** | Defines custom design tokens, fonts, responsive breakpoints, and links Tailwind to CSS custom properties. | The **Master Artist's Palette** containing all allowed colors and sizes. |
| **`next.config.mjs`** | Configures Next.js compilation settings, image domains, and bundles the `next-intl` plugin. | The **Engine Control Unit (ECU)** tuning the application for production. |
| **`postcss.config.mjs`** | Runs PostCSS plugins that parse Tailwind utility classes into pure, minified CSS. | The **Refinery** that transforms raw styles into optimized browser code. |
| **`.eslintrc.json`** | Defines automated coding rules (no unused variables, no missing alt tags on images). | The **Quality Inspector** checking every line for defects. |
| **`.gitignore`** | Tells Git which files to never commit (e.g. huge `node_modules/` or private environment files). | The **Security Filter** keeping junk and secrets out of GitHub. |

---

## 5. Detailed Directory Responsibilities

### 5.1 `messages/` (Internationalization Dictionaries)
* **`en.json`**: Source dictionary. Contains nested JSON key-value pairs (e.g. `{"hero": {"title": "Hello, I am Safith"}}`).
* **`ta.json`**: Tamil translations. Preserves identical key hierarchy to ensure 100% string coverage.
* **`ur.json`**: Urdu translations. Paired with Right-to-Left (RTL) styling rules.

### 5.2 `public/` (Static Assets)
* Files in `public/` are served at the root URL.
* For example: `public/cv/Mohammed_Safith_CV.pdf` is accessible directly by web visitors and recruiters at `https://safith-portfolio.vercel.app/cv/Mohammed_Safith_CV.pdf`.
* Images in `public/images/projects/` are optimized at build time by Next.js using WebP compression.

### 5.3 `src/app/` (Routing Engine)
* **`[locale]/layout.tsx`**: Injects the global `<html data-theme="..." dir="...">` attributes. Houses the `<Header />` and `<Footer />` so they persist across page transitions without unmounting.
* **`[locale]/page.tsx`**: Assembles the 7 single-page sections in vertical sequence.
* **`[locale]/projects/[slug]/page.tsx`**: Dynamic case study route. Next.js automatically maps the URL parameter `[slug]` (e.g. `/projects/peerconnect`) to look up the corresponding project data from `src/data/projects.ts`.

### 5.4 `src/components/` (Component Library)
* **`layout/`**: Structural components wrapping the entire viewport.
* **`sections/`**: Self-contained vertical bands of the homepage. Each section handles its own internal layout, headings, and container boundaries.
* **`ui/`**: Atomic building blocks used across sections (buttons, pills, cards, inputs). They receive data via **props** and emit user actions via callbacks.
* **`motion/`**: Reusable Framer Motion wrappers. Rather than writing complex animation logic inside every component, `<ScrollReveal>` provides a clean wrapper:
  ```tsx
  <ScrollReveal delay={0.2}>
    <ProjectCard project={item} />
  </ScrollReveal>
  ```

### 5.5 `src/hooks/` (Custom State Logic)
* **`useTheme.ts`**: Encapsulates all theme switching logic. Reads from `localStorage`, updates the DOM attribute `data-theme`, and provides a clean helper `setTheme('terminal')`.
* **`useScrollSpy.ts`**: Uses the browser's `IntersectionObserver` API to track which section is currently scrolled into view, passing the active ID to `<Header />` to underline the corresponding nav link.

### 5.6 `src/lib/` (Helpers & Configurations)
* **`utils.ts`**: Houses the standard Next.js class merging utility:
  ```typescript
  import { clsx, type ClassValue } from 'clsx';
  import { twMerge } from 'tailwind-merge';

  export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
  }
  ```
  *Defensibility Note:* `clsx` conditionally applies class names based on booleans; `tailwind-merge` intelligently resolves conflicting utility classes (e.g. `p-4` vs `p-6`) without specificity bugs.

---

## 6. How to Extend the Codebase (Scalability Guide)

### How to Add a New Project
1. Open `src/data/projects.ts`.
2. Add a new object conforming to the `Project` interface from `src/types/index.ts`.
3. Add a preview screenshot to `public/images/projects/`.
4. *Result:* The project card automatically renders on the homepage grid, and the deep-dive route `/projects/{new-slug}` is generated at build time with zero component edits!

### How to Add a New Theme
1. Open `src/app/globals.css`.
2. Add a new selector: `html[data-theme="new-theme-name"] { ... }`.
3. Define the required custom property tokens (`--bg-primary`, `--text-primary`, etc.).
4. Add the theme key and label to `src/lib/themes.ts`.
5. *Result:* The new theme immediately appears in the `<ThemeToggle />` dropdown menu.

### How to Add a New Language (e.g. Sinhala or German)
1. Add `si.json` or `de.json` to the `messages/` directory.
2. Register the new locale code in `src/types/index.ts` and `src/middleware.ts`.
3. Add the language display label to `LanguageToggle.tsx`.
4. *Result:* Next.js App Router automatically generates the localized routes (e.g. `/si` or `/de`).
