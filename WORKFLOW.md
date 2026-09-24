# Developer Sprint & Execution Workflow (WORKFLOW.md)

> **Project:** Mohammed Safith Portfolio Platform  
> **Brand / Persona:** SAFITH THE VIBE CODER 😂  
> **Methodology:** Socratic Pair-Programming & Story-by-Story Pull Request (PR) Flow  
> **Version:** 1.0.0  
> **Effective Date:** September 2026  

---

## 1. The 4-Stage Project Lifecycle

To ensure deep understanding, eliminate vibe-coding, and make every component defensible in job interviews, this project executes strictly through these 4 sequential stages:

```
  ┌────────────────────────┐      ┌────────────────────────┐
  │ STAGE 1: SPECS (Done)  │ ──►  │ STAGE 2: SPRINT PLANS  │
  │ • PRD.md / PRD.pdf     │      │ • 4 Sequential Sprints │
  │ • TRD.md / TRD.pdf     │      │ • Numbered User Stories│
  └────────────────────────┘      └───────────┬────────────┘
                                              │
  ┌────────────────────────┐      ┌───────────▼────────────┐
  │ STAGE 4: CODE DEFENSE  │ ◄──  │ STAGE 3: PR WORKFLOW   │
  │ • 2 Socratic Questions │      │ • One Story at a Time  │
  │ • Logic verification   │      │ • Explanatory comments │
  │ • Git commit & merge   │      │ • Build verification   │
  └────────────────────────┘      └────────────────────────┘
```

---

## 2. The Pull Request (PR) Workflow: Story-by-Story Protocol

Work proceeds **strictly one User Story at a time**. Never bundle multiple features into a single unreviewed step.

### Step 1: Pre-Flight Concept Briefing
Before writing a single line of code for a story:
1. **The Lead (Assistant)** explains:
   * What problem this specific story solves.
   * Everyday analogy (e.g. how a React hook relates to an automatic kitchen timer).
   * Exact syntax patterns being introduced (e.g. `useEffect` cleanup function or `framer-motion` variants).
2. **The Developer (Safith)** confirms understanding or uses `/btw` to clarify unfamiliar terms.

### Step 2: Implementation Plan (`/plan`)
* The assistant creates or updates `implementation_plan.md` listing the precise files being touched, interfaces created, and manual verification steps.
* Execution pauses until Safith reviews and approves the plan.

### Step 3: Targeted Implementation
* Code is written with detailed explanatory comments.
* Zero unrelated file modifications.
* Code strictly adheres to `RULES.md` (no hardcoded colors, strict types, logical CSS properties).

### Step 4: Verification & Automated Sanity Checks
Before considering the story complete:
1. `npx tsc --noEmit` ➔ 0 type errors.
2. `npm run lint` ➔ 0 lint warnings.
3. Visual browser verification in `localhost:3000` (desktop, mobile, and across themes).

### Step 5: Socratic Code Defense & Knowledge Verification
* The assistant pauses and poses **2 targeted interview questions** about the newly written code:
  * *Question 1:* "Why did we use this specific React hook / data structure here instead of X?"
  * *Question 2:* "What happens to the user interface if this API call fails or this state is empty?"
* Safith explains the flow in his own words. Once verified, the story is approved!

### Step 6: Git Commit & Progression
* Stage and commit using the Conventional Commits format (`feat:`, `fix:`, etc.).
* Advance to the next numbered User Story.

---

## 3. Sprint 1 Breakdown: Foundation & Core Layout (Week 1)

Sprint 1 delivers a fully functional, deployable skeleton hosted on Vercel with the 4-theme system and dynamic Hero section.

```
┌────────────────────────────────────────────────────────────────────────┐
│                        SPRINT 1: USER STORIES                          │
├─────────────┬────────────────────────────────────────────┬─────────────┤
│ Story ID    │ Scope & Deliverable                        │ Est. Time   │
├─────────────┼────────────────────────────────────────────┼─────────────┤
│ Story 1.1   │ Next.js 14+ Project Init & Dependencies    │ 20 minutes  │
│ Story 1.2   │ CSS Custom Property Theme Engine (4 Modes) │ 25 minutes  │
│ Story 1.3   │ Core TypeScript Contracts & Mock Project Data│ 20 minutes  │
│ Story 1.4   │ Responsive Header with Theme & Lang Select │ 30 minutes  │
│ Story 1.5   │ Animated Hero Section with Typed Text      │ 25 minutes  │
│ Story 1.6   │ Semantic Footer & Initial Vercel Deploy    │ 20 minutes  │
└─────────────┴────────────────────────────────────────────┴─────────────┘
```

### Detailed Story Specifications

#### User Story 1.1: Project Setup & Modern Tooling
* **Objective:** Initialize the Next.js 14+ App Router project with TypeScript, Tailwind CSS, and strict linting.
* **Acceptance Criteria:**
  - `package.json` contains `next`, `react`, `typescript`, `tailwindcss`, `framer-motion`, `lucide-react`, `clsx`, `tailwind-merge`.
  - `tsconfig.json` enforces `strict: true`.
  - Project runs locally on `http://localhost:3000` with zero console errors.

#### User Story 1.2: The 4-Theme CSS Custom Property Engine
* **Objective:** Configure `src/app/globals.css` with tokens for all 4 design modes (*Glassmorphism Dark, Minimal Light, Warm Earthy, Terminal Hacker*).
* **Acceptance Criteria:**
  - Root CSS declares `--bg-primary`, `--bg-card`, `--border-card`, `--text-primary`, `--accent-primary`.
  - Inline anti-FOUC script placed in `<head>` to read `localStorage` and prevent dark mode flashes.
  - Manual toggle test confirms instant visual updates without page reload.

#### User Story 1.3: Core TypeScript Contracts & Static Data Store
* **Objective:** Define interfaces in `src/types/index.ts` and initialize static data for the 4 showcase projects.
* **Acceptance Criteria:**
  - Interfaces for `Project`, `SkillItem`, `TimelineEntry`, and `ThemeMode`.
  - `src/data/projects.ts` populated with complete data for **PeerConnect**, **Daily Books**, **MedExpense**, and **Liquid Todo**.
  - 0 TypeScript compilation errors (`tsc --noEmit`).

#### User Story 1.4: Responsive Sticky Header & Navigation
* **Objective:** Build `Header.tsx` with logo, desktop navigation anchors, mobile slide-over drawer, and theme dropdown.
* **Acceptance Criteria:**
  - Sticky frosted-glass header with smooth backdrop blur.
  - Interactive theme selector cycling through all 4 themes.
  - Language toggle button showing `EN` / `TA` / `UR`.
  - Accessible mobile hamburger menu toggleable via touch or keyboard.

#### User Story 1.5: Hero Section with Dynamic Typed Text
* **Objective:** Build `HeroSection.tsx` featuring the formal name, "Vibe Coder 😂" badge, self-typing role cycler, and primary CTA buttons.
* **Acceptance Criteria:**
  - Typed text cycling smoothly: *"Junior Full-Stack Developer"*, *"QA & Test Automation Enthusiast"*, *"IT Operations Specialist"*.
  - CTAs: "Explore Projects" (scrolls to `#projects`), "Download CV" (PDF link), "Contact Me" (scrolls to `#contact`).
  - Seamless responsive scaling on mobile screens (< 640px).

#### User Story 1.6: Semantic Footer & First Vercel Edge Deployment
* **Objective:** Build `Footer.tsx` with copyright, social links, and live system status; deploy the live build to Vercel.
* **Acceptance Criteria:**
  - Clean footer with GitHub link, email link, and "All Systems Operational" pulse indicator.
  - Repository pushed to `github.com/safith001/portfolio`.
  - Vercel automated CI build passes with live preview URL.

---

## 4. Upcoming Sprints Overview

* **Sprint 2: Content Modules & Motion (Week 2):**
  - Story 2.1: About Me & City University Academic Credentials Card.
  - Story 2.2: 4-Card Interactive Project Grid with 3D Hover Tilt.
  - Story 2.3: Categorized Skills Matrix with Domain Tabs.
  - Story 2.4: Chronological Education & Internship Timeline.
  - Story 2.5: Framer Motion Scroll Reveals (`whileInView`).

* **Sprint 3: Case Studies & Contact Channels (Week 3):**
  - Story 3.1: Dynamic Sub-Routes (`/projects/[slug]`) for In-Depth Case Studies.
  - Story 3.2: Technical Deep Dives for PeerConnect, Daily Books, MedExpense, Todo.
  - Story 3.3: Formspree Contact Form with Client-Side Validation.
  - Story 3.4: Verified PDF Resume Download Center.
  - Story 3.5: Active Viewport Scroll Spy Navigation Highlight.

* **Sprint 4: Multilingual Engine, RTL & Production Launch (Week 4):**
  - Story 4.1: `next-intl` App Router Integration (`/[locale]/...`).
  - Story 4.2: English, Tamil, and Urdu Translation Dictionaries.
  - Story 4.3: Right-to-Left (RTL) Layout Symmetry Enforcement for Urdu.
  - Story 4.4: Lighthouse 90+ Performance, Accessibility, and SEO Audit.
  - Story 4.5: Custom Domain / Production Vercel Release.

---

## 5. Educational Debugging Workflow

When errors occur during development:

```
[Runtime Error / Terminal Bug]
        │
        ▼
[Step 1: Do Not Auto-Patch] ──► Assistant stops and highlights the terminal output.
        │
        ▼
[Step 2: Stack Trace Walkthrough]
  • Which file broke?
  • What line number?
  • What was the JavaScript engine or TypeScript compiler expecting?
        │
        ▼
[Step 3: Socratic Root Cause Explanation]
  • Explain WHY it failed using Python/Java analogies.
        │
        ▼
[Step 4: Collaborative Fix & Prevention Check]
  • Propose the minimal targeted code fix.
  • Explain how to avoid similar regressions in the future.
```
