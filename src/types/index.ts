/**
 * Core TypeScript Contracts for Mohammed Safith Portfolio Platform
 * Strict Type Safety: Zero `any` policy enforced.
 */

/**
 * The 4 Supported Design Themes
 */
export type ThemeMode = 'glassmorphism' | 'minimal' | 'warm' | 'terminal' | 'midnight';

export interface ThemeOption {
  id: ThemeMode;
  name: string;
  tagline: string;
  accentColor: string;
  iconName: string;
}

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
  category: 'Full-Stack Web' | 'Mobile / Cross-Platform' | 'QA & Backend' | 'Automation & AI';
  featured: boolean;
  status: 'Live on Vercel' | 'Play Store Bundle' | 'Production Ready' | 'Testing Suite' | 'Active';
  statusColor: 'emerald' | 'indigo' | 'amber' | 'blue' | 'sky';
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
  | 'Web & Backend'
  | 'Mobile'
  | 'Databases & Tools'
  | 'QA & Transit Systems';

export type ProficiencyLevel = 'Core Foundation' | 'Applied in Projects' | 'Industrial Internship';

export interface SkillItem {
  name: string;
  category: SkillCategory;
  proficiencyLevel: ProficiencyLevel;
  context: string;
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
 * Verified Certification & Award Interface
 */
export type CertificationCategory = 
  | 'Coding & Algorithms'
  | 'Transit & QA Systems'
  | 'Web & Emerging Tech'
  | 'Leadership & Community';

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  category: CertificationCategory;
  description: string;
  skillsAcquired: string[];
  credentialFile?: string;
  badgeLabel: string;
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
