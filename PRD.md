# Portfolio Website — Product Requirements Document (PRD) & Technical Architecture Spec

> **Owner:** Mohammed Sarook Mohammed Safith  
> **Brand / Tagline:** SAFITH THE VIBE CODER 😂  
> **Target Framework:** Next.js 14+ (React / TypeScript / Tailwind CSS)  
> **Hosting Platform:** Vercel (`safith-portfolio.vercel.app`)  
> **Date:** September 2026  
> **Status:** Specification Document (Ready for Implementation)  

---

## 1. Executive Summary & Product Overview

### 1.1 Purpose & Mission
This project specifies the design, architecture, and phased implementation of a high-performance personal portfolio website for **Mohammed Sarook Mohammed Safith**. Safith is a 25-year-old recent B.IT (Honours) graduate from City University Malaysia (CGPA 3.47 / 4.00) based in Sri Lanka, actively transitioning from foundational programming into professional engineering and technical roles.

The portfolio is engineered to serve three distinct target stakeholders simultaneously:

| Stakeholder Group | Core Objective | Key Deliverables They Seek |
| :--- | :--- | :--- |
| **Technical Recruiters & Hiring Managers** | Evaluating job readiness for Junior Full-Stack Developer, QA Engineer, or IT Operations roles. | Clean code architecture, proven full-stack projects, unit testing evidence, clear live demos, downloadable verified CV. |
| **Freelance Clients** | Assessing capability to deliver end-to-end web & mobile applications. | Visual polish, responsiveness, clear feature breakdowns, fast contact channel, real deployed applications. |
| **Scholarship & Academic Committees** | Reviewing academic background and capacity for structured technical research. | CGPA track record, complex modular projects (e.g. PeerConnect), verified reference letters, bilingual adaptability. |

### 1.2 Core Value Proposition
Rather than serving as a static digital business card, the portfolio itself acts as an **active demonstration of UI engineering skills**. By implementing a dynamic 4-theme engine, multilingual localization with Right-to-Left (RTL) support, fluid scroll choreography, and decoupled project case studies, the codebase proves hands-on mastery over modern web standards.

---

## 2. Personal Identity & Branding Guidelines

| Branding Attribute | Specification |
| :--- | :--- |
| **Full Legal Name** | Mohammed Sarook Mohammed Safith |
| **Display Name** | SAFITH |
| **Tagline / Persona** | SAFITH THE VIBE CODER 😂 |
| **Dynamic Title (Hero)** | Typed text animation cycling through: `Developer` · `QA Engineer` · `IT Operations Specialist` |
| **Primary Location** | Colombo / Trincomalee, Sri Lanka 🇱🇰 |
| **Verified Academic Degree** | B.IT (Honours), City University Malaysia (CGPA: 3.47 / 4.00) |
| **GitHub Profile** | [https://github.com/safith001](https://github.com/safith001) |
| **Flagship Live App** | [https://peer-connect-node.vercel.app/](https://peer-connect-node.vercel.app/) |

---

## 3. Technology Stack & Architectural Decisions

Every dependency in this architecture has been chosen to align with industry standards while maximizing developer interview defensibility:

```
┌─────────────────────────────────────────────────────────────┐
│                       NEXT.JS 14+                           │
│   (App Router, Server & Client Components, Dynamic Routing) │
└──────────────┬──────────────────────────────┬───────────────┘
               │                              │
       ┌───────▼───────┐              ┌───────▼───────┐
       │ Tailwind CSS  │              │ Framer Motion │
       │ (CSS Vars)    │              │ (Animations)  │
       └───────┬───────┘              └───────┬───────┘
               │                              │
       ┌───────▼──────────────────────────────▼───────┐
       │             next-intl (i18n)                 │
       │       English (en) · Tamil (ta) · Urdu (ur)  │
       └──────────────────────┬───────────────────────┘
                              │
                      ┌───────▼───────┐
                      │    Vercel     │
                      │ (Auto Deploy) │
                      └───────────────┘
```

| Technology Layer | Selected Tool | Architectural Justification |
| :--- | :--- | :--- |
| **Web Framework** | **Next.js 14+ (App Router)** | Leverages existing familiarity from the PeerConnect production app. Provides server-side rendering (SSR) for instant SEO indexing, static site generation (SSG) for ultra-fast load times, and native routing. |
| **Styling & Design System** | **Tailwind CSS 3** | Utility-first architecture mapped directly to CSS custom properties (`var(--...)`). Enables instant global theme switching without re-rendering component trees or duplicating stylesheets. |
| **Motion & Transitions** | **Framer Motion** | Declarative layout animation library for React. Delivers hardware-accelerated scroll reveals, interactive card tilts, and smooth theme cross-fades. |
| **Internationalization** | **next-intl** | High-performance type-safe i18n built for Next.js App Router. Enables route-based localization (`/[locale]/...`) and full RTL layout switching. |
| **Typography & Icons** | **Google Fonts + Lucide React** | `Plus Jakarta Sans` / `Inter` paired with `JetBrains Mono` for code blocks. Lucide provides modular, tree-shakable SVG icons. |
| **Form Handling** | **Formspree / EmailJS API** | Headless contact submission. Sends visitor messages directly to Safith's inbox without requiring a stateful database or server maintenance. |
| **Hosting & Deployment** | **Vercel** | Native zero-configuration git integration. Delivers automated preview builds on pull requests, edge CDN caching, and custom domain mapping. |

---

## 4. Multi-Theme Design System Engine

The website features an interactive **Theme Switcher** accessible in the sticky header. All themes utilize identical semantic HTML tags, styling variables through CSS properties declared on the `html[data-theme="..."]` root.

### 4.1 Theme Specifications

```
                     ┌───────────────────────────────┐
                     │     Interactive Theme Engine  │
                     └───────────────┬───────────────┘
         ┌───────────────────┬───────┴───────────┬───────────────────┐
         ▼                   ▼                   ▼                   ▼
┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐
│ 1. GLASSMORPHISM│ │ 2. MINIMAL      │ │ 3. WARM         │ │ 4. TERMINAL     │
│    DARK (Def.)  │ │    LIGHT        │ │    EARTHY       │ │    HACKER       │
│ • Slate-950     │ │ • Pure White    │ │ • Warm Cream    │ │ • Pure Black    │
│ • Frosted Glass │ │ • Crisp Shadows │ │ • Terracotta    │ │ • Matrix Green  │
│ • Indigo Glow   │ │ • Slate Gray    │ │ • Charcoal      │ │ • Monospace     │
└─────────────────┘ └─────────────────┘ └─────────────────┘ └─────────────────┘
```

#### 1. Glassmorphism Dark (Default Theme)
* **Visual Identity:** Sleek, futuristic, high-contrast dark aesthetic that matches PeerConnect.
* **Palette:** Background: `#030712` (Slate-950) to `#1e1b4b` (Indigo-950) gradient; Cards: `rgba(255, 255, 255, 0.05)` with `backdrop-filter: blur(16px)` and `1px solid rgba(255, 255, 255, 0.12)`; Primary Accent: `#6366f1` (Indigo-500) to `#8b5cf6` (Violet-500).
* **Text:** `#f8fafc` (Slate-50) headings, `#94a3b8` (Slate-400) body.

#### 2. Minimal Light Theme
* **Visual Identity:** Clean, airy, corporate-safe aesthetic designed for strict corporate recruiters.
* **Palette:** Background: `#ffffff` with subtle `#f8fafc` section alternations; Cards: `#ffffff` with crisp `0 1px 3px rgba(0,0,0,0.08)` shadows and `1px solid #e2e8f0`; Primary Accent: `#2563eb` (Blue-600) to `#4f46e5` (Indigo-600).
* **Text:** `#0f172a` (Slate-900) headings, `#475569` (Slate-600) body.

#### 3. Warm Earthy Theme
* **Visual Identity:** Organic, approachable, editorial feeling emphasizing craftsmanship.
* **Palette:** Background: `#faf8f5` (Warm Alabaster); Cards: `#ffffff` with `1px solid #e7dfd5`; Primary Accent: `#c2684e` (Terracotta) and `#8da399` (Sage Green).
* **Text:** `#2d3748` (Deep Charcoal) headings, `#5a6a7e` body.

#### 4. Terminal / Hacker Theme
* **Visual Identity:** Cyberpunk CLI experience showcasing coding passion and developer subculture.
* **Palette:** Background: `#050505` (Deep Terminal Black); Cards: `#0d1117` with glowing `1px solid #00ff41` borders; Primary Accent: `#00ff41` (Matrix Phosphor Green) and `#ffb000` (Amber warning).
* **Typography:** `JetBrains Mono` or `Courier New` monospace font applied across all headers and paragraphs.

---

## 5. Website Architecture & Section Blueprint

### 5.1 Hybrid Single-Page + Case Study Routing
To balance instant recruiter scanning with deep project defensibility, the site adopts a **hybrid model**:
* The root route (`/`) serves as a comprehensive single-page summary with smooth anchor links.
* Dedicated sub-routes (`/projects/[slug]`) provide in-depth technical case studies with architecture flowcharts, challenges, and lesson takeaways.

```
/ (Root Layout)
├── [Hero Section]                 # Visual hook, dynamic title, quick CTA
├── [About & Education]            # City University Malaysia degree, background
├── [Featured Projects Showcase]   # 4 cards (PeerConnect, Daily Books, MedExpense, Todo)
├── [Skills & Capabilities Matrix] # Categorized proficiency badges
├── [Career & Academic Timeline]   # Degree, internship, independent projects
├── [Contact & Outreach]           # Formspree email form, social links
└── [Resume / CV Download]         # Instant PDF access
└── /projects/
    ├── /peerconnect               # Deep dive case study (Next.js, Firebase)
    ├── /daily-books               # Deep dive case study (Node.js API, Flutter)
    ├── /medexpense                # Deep dive case study (Flutter, Sheets, Gemini)
    └── /todo-list                 # Deep dive case study (Python Flask, SQLite)
```

### 5.2 Section-by-Section Specifications

#### Section 1: Hero Section
* **Prominent Branding:** `Mohammed Sarook Mohammed Safith` as the formal title; `SAFITH THE VIBE CODER 😂` highlighted as an engaging subtitle badge.
* **Typed Text Animation:** Dynamically cycles through: `"Junior Full-Stack Developer"`, `"QA & Test Automation Enthusiast"`, `"IT Operations Specialist"`.
* **Primary Calls-to-Action (CTAs):**
  1. `"Explore Projects"` (Smooth scroll to `#projects`).
  2. `"Download CV"` (Direct link to verified PDF).
  3. `"Get In Touch"` (Smooth scroll to `#contact`).
* **Header Controls:** Sticky navbar housing navigation anchors, language selector (`EN` / `TA` / `UR`), and the 4-state theme dropdown.

#### Section 2: About Me & Academic Foundations
* **Personal Narrative:** Professional summary contextualizing 4 years of rigorous academic training at City University Malaysia (Honours B.IT, CGPA 3.47/4.00) alongside hands-on AI-assisted software building.
* **Core Philosophy:** Deep understanding over surface-level generation; dedication to code quality, testing, and continuous learning.
* **Quick Stats Grid:** 4 Key Metrics (CGPA: 3.47/4.00, 4+ Production-Grade Apps, 100% English MOI, 58+ Automated Tests Written).

#### Section 3: Projects Showcase (The 4 Flagships)
Each project card displays:
* Project title & category badge (Web, Mobile, Backend).
* High-level 2-sentence impact statement.
* Tech stack chips (`Next.js`, `Firebase`, `Flutter`, `Express`, etc.).
* Action buttons: `Live App ↗`, `GitHub Repo ↗`, `Case Study →`.

#### Section 4: Skills & Competency Matrix
Organized in clear domain groups:
* **Languages:** Python, Java, JavaScript (ES6+), TypeScript, PHP, Dart, HTML5, CSS3/Tailwind, SQL.
* **Frontend Engineering:** React.js, Next.js (App Router), Tailwind CSS, Blade Templates, Responsive Design, CSS Custom Properties.
* **Backend & API Systems:** Node.js, Express REST APIs, Laravel 12 (MVC), Python (Flask), Firebase (Auth & Firestore).
* **Mobile & Cross-Platform:** Flutter, Capacitor, Android SDK (Gradle).
* **Databases & Cloud:** SQLite, Cloud Firestore, MySQL, Cloudinary CDN, Google Sheets API.
* **DevOps, QA & Tools:** Git & GitHub, Postman, Vercel, Pest/PHPUnit, VS Code, Google Antigravity IDE.

#### Section 5: Experience & Education Timeline
Chronological milestone feed:
1. **2021 – 2024:** B.IT (Honours) at City University Malaysia (120 Credits, CGPA 3.47/4.00).
2. **Professional Internship:** Guildford Integrated Systems — Technical Support & Systems Intern. (Includes verified recommendation letter from Director Jonathan Ross).
3. **2025 – Present:** Full-Stack & Cross-Platform Project Engineering (PeerConnect, Daily Books, MedExpense).

#### Section 6: Contact & Direct Inquiries
* Clean 3-field form (Name, Email, Message) connected via Formspree API with client-side validation.
* Alternative communication chips: Direct Email (`mailto:`), LinkedIn profile link, GitHub profile link.

#### Section 7: Verified References & Credentials
* Card referencing official supporting documents available on request:
  - Official Degree Completion Letter & Partial Transcript (City University).
  - Standard Referral CV.
  - English Medium of Instruction (MOI) Certificate.
  - Director Jonathan Ross Recommendation Letter.

---

## 6. Flagship Showcase Project Profiles

### Project 1: PeerConnect (Flagship Web Application)
* **Domain:** University Peer Collaboration & Social Platform.
* **Live Deployment:** [https://peer-connect-node.vercel.app/](https://peer-connect-node.vercel.app/)
* **GitHub Repository:** [safith001/peer-connect-node](https://github.com/safith001/peer-connect-node)
* **Architecture:** Next.js 16 App Router, Firebase Authentication, Cloud Firestore (Real-Time Snapshots), Cloudinary Media Storage, Tailwind CSS, TypeScript.
* **Key Features:** Student email verification guard, peer-to-peer real-time chat with unread counters, academic feed with like/comment streams, lecture slide upload engine.
* **Interview Talking Points:** Firestore security rules, deterministic conversation channel IDs, Next.js server/client component boundary separation.

### Project 2: Daily Books (Tamil Islamic PDF Reader)
* **Domain:** Offline-First Cultural & Educational Mobile Application.
* **Architecture:** Node.js & Express REST API Backend, Capacitor Hybrid Bridge, Flutter/Dart Native App, Gradle Android SDK.
* **Status:** Play Store release bundle (`.aab` and `.apk` v2.1.5 compiled).
* **Key Features:** 100 curated offline PDF books, custom multi-touch pinch-to-zoom engine, 7-day reading habit streak tracker, REST API book metadata catalog.
* **Interview Talking Points:** Offline-first asset bundling, memory optimization during PDF rendering on low-tier mobile hardware, decoupled REST backend vs native local storage.

### Project 3: MedExpense (Smart MBBS Spend Tracker)
* **Domain:** Mobile Personal Finance with Automated Cloud Sync & AI Insights.
* **Architecture:** Flutter/Dart, SQLite Local Ledger, Google Apps Script Webhook (`Code.gs`), Google Gemini AI REST API.
* **Target Persona:** International MBBS student managing monthly living expenses in Belarus.
* **Key Features:** 100% offline transaction tracking via SQLite, background scheduled month-end sync via WorkManager, automatic Google Sheets ledger formatting, Gemini 2.5 AI budget mentoring summary.
* **Interview Talking Points:** Background execution constraints on modern Android, resilient offline-to-cloud synchronization failsafes, LLM prompt engineering for structured financial coaching.

### Project 4: Liquid Todo (Task Manager & Quality Assurance Suite)
* **Domain:** Task Management with Full Automated Test Coverage.
* **Architecture:** Python, Flask REST API, SQLite, Unit Testing Suite (`test_app_integration.py`, `test_database.py`).
* **Key Features:** Priority-based task tracking, completion status toggles, persistent relational storage.
* **Interview Talking Points:** Test-driven development (TDD) principles, edge-case validation, verifying database transactions and schema constraints.

---

## 7. Multilingual Architecture (i18n & RTL)

### 7.1 Language Matrix

| Language | Locale Code | Text Direction | Script | Launch Status |
| :--- | :--- | :--- | :--- | :--- |
| **English** | `en` | Left-to-Right (LTR) | Latin | **Tier 1 (Default Launch)** |
| **Tamil** | `ta` | Left-to-Right (LTR) | Tamil | **Tier 1 (Launch Included)** |
| **Urdu** | `ur` | **Right-to-Left (RTL)** | Arabic / Nastaliq | **Tier 1 (Launch Included)** |
| Sinhala | `si` | LTR | Sinhala | Tier 2 (Future Roadmap) |
| Hindi | `hi` | LTR | Devanagari | Tier 2 (Future Roadmap) |
| German | `de` | LTR | Latin | Tier 2 (Future Roadmap) |
| Turkish | `tr` | LTR | Latin | Tier 2 (Future Roadmap) |
| Russian | `ru` | LTR | Cyrillic | Tier 2 (Future Roadmap) |
| Spanish | `es` | LTR | Latin | Tier 2 (Future Roadmap) |
| Malay | `ms` | LTR | Latin | Tier 2 (Future Roadmap) |
| Arabic | `ar` | RTL | Arabic | Tier 2 (Future Roadmap) |

### 7.2 RTL Implementation Rules
When the `ur` (Urdu) locale is active:
1. Root HTML attribute updates to `<html lang="ur" dir="rtl">`.
2. Tailwind layout classes utilize CSS Logical Properties:
   - Use `ms-4` (margin-inline-start) instead of `ml-4`.
   - Use `me-4` (margin-inline-end) instead of `mr-4`.
   - Use `ps-4` (padding-inline-start) instead of `pl-4`.
   - Use `start-0` / `end-0` instead of `left-0` / `right-0`.
3. Typography applies appropriate font fallbacks (`Noto Nastaliq Urdu` / `Noto Sans Tamil`).

---

## 8. Implementation Roadmap (4 Structured Sprints)

Following standard agile development methodology:

### Sprint 1: Foundation, Design Tokens & Core Layout
* Initialize Next.js 14+ project with TypeScript and Tailwind CSS.
* Configure CSS custom property tokens for all 4 themes in `globals.css`.
* Build responsive `Header` with theme toggle and mobile navigation drawer.
* Build `HeroSection` with dynamic typing animation and action buttons.
* Build semantic `Footer` with legal and copyright metadata.
* Deploy initial skeleton to Vercel to establish continuous integration.

### Sprint 2: Content Modules & Motion Choreography
* Implement `AboutSection` with academic credentials and metrics grid.
* Implement `ProjectsSection` with responsive grid and `ProjectCard` components.
* Implement `SkillsSection` with categorized badge layout.
* Implement `TimelineSection` detailing education and internship milestones.
* Wire Framer Motion scroll reveals (`whileInView`) across all content blocks.

### Sprint 3: Deep-Dive Case Studies & Contact Channels
* Build dynamic route `/projects/[slug]` with shared `ProjectDetail` template.
* Author case study markdown/content for PeerConnect, Daily Books, MedExpense, and Todo List.
* Build `ContactSection` integrated with Formspree headless endpoint.
* Implement direct resume download action linked to verified CV PDF.
* Add active section highlighting via `useScrollSpy` hook.

### Sprint 4: Multilingual Engine, Polish & Production Launch
* Integrate `next-intl` with route-level locale handling (`/[locale]/...`).
* Populate `messages/en.json`, `messages/ta.json`, and `messages/ur.json`.
* Enforce RTL layout rules for Urdu locale.
* Conduct Lighthouse accessibility, SEO, and performance optimization (Target > 90).
* Final production release on Vercel with custom social graph metadata (Open Graph).

---

## 9. Scope Boundaries & Non-Goals (Version 1.0)

To guarantee high-quality execution without scope creep, the following are strictly defined as **Out of Scope** for the initial release:
* ❌ Dynamic database backends for the portfolio itself (static/SSG architecture is strictly enforced for speed and security).
* ❌ Personal CMS or blog publishing engine (deferred to future version).
* ❌ Authentication / login portals on the portfolio.
* ❌ Paid custom domain configuration (initial launch utilizes free Vercel subdomain `*.vercel.app`).
* ❌ Manual translation of the remaining 9 Tier-2 languages.

---

## 10. Quality Assurance & Defensibility Verification

| Verification Vector | Standard / Target |
| :--- | :--- |
| **Build Integrity** | Clean build via `npx next build` with zero TypeScript errors or ESLint warnings. |
| **Performance Benchmark** | Lighthouse score ≥ 90 across Performance, Accessibility, Best Practices, and SEO. |
| **Cross-Device Responsiveness** | Flawless rendering on Mobile (375px+), Tablet (768px+), and Desktop (1280px+). |
| **Theme System Integrity** | All 4 themes transition within 300ms without layout shift or unreadable contrast. |
| **RTL Layout Symmetry** | Text alignment, spacing, and icon orientations mirror correctly in Urdu mode. |
| **Live Form Verification** | Contact inquiries successfully dispatch test notifications to Safith's email. |
