import { SkillCategory, SkillItem, ProficiencyLevel } from '@/types';

/**
 * Domain Hub Metadata for structured high-level cards
 */
export interface DomainInfo {
  id: SkillCategory;
  title: string;
  subtitle: string;
  iconName: string;
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  'Languages',
  'Web & Backend',
  'Mobile',
  'Databases & Tools',
  'QA & Transit Systems',
];

export const DOMAINS: DomainInfo[] = [
  {
    id: 'Languages',
    title: 'Core Programming & Languages',
    subtitle: 'Algorithmic logic, object-oriented concepts, and strong syntax foundations.',
    iconName: 'code',
  },
  {
    id: 'Web & Backend',
    title: 'Web & API Development',
    subtitle: 'Building responsive clients and RESTful server endpoints with JavaScript & Node.',
    iconName: 'server',
  },
  {
    id: 'Mobile',
    title: 'Cross-Platform Mobile',
    subtitle: 'Developing mobile client interfaces with Flutter and strongly-typed Dart.',
    iconName: 'smartphone',
  },
  {
    id: 'Databases & Tools',
    title: 'Databases & Dev Environment',
    subtitle: 'Embedded relational data, version control workflows, and API debugging.',
    iconName: 'database',
  },
  {
    id: 'QA & Transit Systems',
    title: 'QA & Transit Systems Engineering',
    subtitle: 'Hands-on railway signaling test benches, acceptance protocols, and defect logging.',
    iconName: 'shield',
  },
];

/**
 * Mohammed Safith's Defensible 20-Skill Matrix
 * Categorized with 100% honesty: Core Foundation (Degree) vs. Applied in Projects vs. Industrial Internship.
 */
export const SKILLS: SkillItem[] = [
  // --- Languages (5) ---
  {
    name: 'Python',
    category: 'Languages',
    proficiencyLevel: 'Core Foundation',
    context: 'OOP logic, data structures, and algorithmic scripting from B.IT degree.',
    iconKey: 'python',
  },
  {
    name: 'Java',
    category: 'Languages',
    proficiencyLevel: 'Core Foundation',
    context: 'Classes, inheritance, and object-oriented principles from university labs.',
    iconKey: 'java',
  },
  {
    name: 'JavaScript (ES6+)',
    category: 'Languages',
    proficiencyLevel: 'Applied in Projects',
    context: 'Async/await, DOM operations, and client/server event handling in live apps.',
    iconKey: 'javascript',
  },
  {
    name: 'HTML5 & CSS3',
    category: 'Languages',
    proficiencyLevel: 'Core Foundation',
    context: 'Semantic markup, accessible structure, responsive flexbox, and CSS variables.',
    iconKey: 'html',
  },
  {
    name: 'SQL',
    category: 'Languages',
    proficiencyLevel: 'Core Foundation',
    context: 'Relational schema design, SELECT queries, foreign keys, and table constraints.',
    iconKey: 'database',
  },

  // --- Web & Backend (5) ---
  {
    name: 'React.js',
    category: 'Web & Backend',
    proficiencyLevel: 'Applied in Projects',
    context: 'Component hierarchy, state hooks (useState, useEffect), and reactive UI.',
    iconKey: 'react',
  },
  {
    name: 'Next.js',
    category: 'Web & Backend',
    proficiencyLevel: 'Applied in Projects',
    context: 'App Router architecture, client/server rendering, and static site generation.',
    iconKey: 'nextjs',
  },
  {
    name: 'Node.js',
    category: 'Web & Backend',
    proficiencyLevel: 'Applied in Projects',
    context: 'JavaScript server runtime driving backend logic in PeerConnect and To-Do List.',
    iconKey: 'nodejs',
  },
  {
    name: 'Express.js',
    category: 'Web & Backend',
    proficiencyLevel: 'Applied in Projects',
    context: 'Clean route handling, middleware integration, and JSON API payloads.',
    iconKey: 'express',
  },
  {
    name: 'RESTful APIs',
    category: 'Web & Backend',
    proficiencyLevel: 'Applied in Projects',
    context: 'HTTP request/response lifecycle, status codes, and client-server decoupling.',
    iconKey: 'api',
  },

  // --- Mobile (2) ---
  {
    name: 'Flutter',
    category: 'Mobile',
    proficiencyLevel: 'Applied in Projects',
    context: 'Widget trees, reactive state, and cross-platform UI used in Daily Books.',
    iconKey: 'flutter',
  },
  {
    name: 'Dart',
    category: 'Mobile',
    proficiencyLevel: 'Applied in Projects',
    context: 'Strongly-typed object-oriented language powering Flutter application logic.',
    iconKey: 'dart',
  },

  // --- Databases & Tools (4) ---
  {
    name: 'SQLite',
    category: 'Databases & Tools',
    proficiencyLevel: 'Applied in Projects',
    context: 'Zero-config file-based relational storage used in MedExpense and local backends.',
    iconKey: 'sqlite',
  },
  {
    name: 'Git & GitHub',
    category: 'Databases & Tools',
    proficiencyLevel: 'Core Foundation',
    context: 'Branch management, semantic commits, and repository syncing across 5 live projects.',
    iconKey: 'git',
  },
  {
    name: 'Postman',
    category: 'Databases & Tools',
    proficiencyLevel: 'Applied in Projects',
    context: 'Manual API route verification, HTTP header inspection, and response validation.',
    iconKey: 'postman',
  },
  {
    name: 'VS Code',
    category: 'Databases & Tools',
    proficiencyLevel: 'Core Foundation',
    context: 'Primary engineering IDE with linting, TypeScript checking, and terminal workflows.',
    iconKey: 'ide',
  },

  // --- QA & Transit Systems (4 - Guildford Internship) ---
  {
    name: 'FAT & SAT Acceptance Testing',
    category: 'QA & Transit Systems',
    proficiencyLevel: 'Industrial Internship',
    context: 'Factory & Site Acceptance Testing procedures executed on-site at Guildford Malaysia.',
    iconKey: 'transit',
  },
  {
    name: 'Hardware-In-The-Loop (HIL)',
    category: 'QA & Transit Systems',
    proficiencyLevel: 'Industrial Internship',
    context: 'Simulating train subsystem I/O on physical test benches to validate controller signals.',
    iconKey: 'cpu',
  },
  {
    name: 'Test Case Execution',
    category: 'QA & Transit Systems',
    proficiencyLevel: 'Industrial Internship',
    context: 'Systematic validation against engineering specifications and logging pass/fail records.',
    iconKey: 'test',
  },
  {
    name: 'Defect Lifecycle & Tracking',
    category: 'QA & Transit Systems',
    proficiencyLevel: 'Industrial Internship',
    context: 'Documenting reproducible bugs with step-by-step traces, severity tags, and re-tests.',
    iconKey: 'bug',
  },
];

/**
 * Filter skills by domain category
 */
export function getSkillsByCategory(category: SkillCategory): SkillItem[] {
  return SKILLS.filter((s) => s.category === category);
}
