'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, FileDown, Mail, Sparkles } from 'lucide-react';
import { TypedText } from '@/components/ui/TypedText';
import { useLanguage } from '@/context/LanguageContext';

const ROLES = [
  'Junior Full-Stack Developer',
  'QA & Test Automation Enthusiast',
  'IT Operations Specialist',
];

/**
 * Flagship Hero & Executive About Section
 * Highlights Mohammed Safith's branding, verified degree credentials, and role focus.
 */
export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative pt-12 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden scroll-mt-20">
      {/* Subtle Background Glow Radial */}
      <div
        className="absolute top-1/4 start-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 sm:w-[600px] sm:h-[600px] bg-[var(--accent-glow)] rounded-full blur-3xl opacity-30 pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Profile Avatar with Glowing Ring & Active Status */}
        <div className="relative mb-6 group">
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full p-1.5 ring-4 ring-[var(--accent-primary)] ring-offset-4 ring-offset-[var(--bg-primary)] shadow-2xl transition-transform duration-300 group-hover:scale-105">
            <div className="relative w-full h-full rounded-full overflow-hidden bg-[var(--bg-card)]">
              <Image
                src="/images/avatar.jpg"
                alt="Mohammed Sarook Mohammed Safith"
                fill
                priority
                sizes="(max-width: 640px) 128px, 160px"
                className="object-cover object-top scale-[2.3] origin-[50%_18%]"
              />
            </div>
          </div>

          {/* Active Status Badge */}
          <div className="absolute bottom-1 end-1 sm:bottom-2 sm:end-2 flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[var(--bg-primary)] text-[var(--text-primary)] border border-[var(--border-card)] shadow-lg">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[11px] font-medium hidden sm:inline">{t.hero.statusAvailable}</span>
          </div>
        </div>

        {/* Persona Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-[var(--badge-bg)] text-[var(--badge-text)] border border-[var(--border-card)] mb-4 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
          <span>{t.hero.badge}</span>
        </div>

        {/* Formal Name */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[var(--text-primary)] mb-3">
          {t.hero.title}
        </h1>

        {/* Dynamic Self-Typing Headline */}
        <div className="min-h-[36px] sm:min-h-[44px] flex items-center justify-center text-xl sm:text-2xl font-bold text-[var(--accent-primary)] mb-6">
          <TypedText strings={ROLES} />
        </div>

        {/* Executive Summary & Narrative (Integrated Directly in Hero) */}
        <div className="w-full p-6 sm:p-8 rounded-3xl border border-[var(--border-card)] bg-[var(--bg-card)] backdrop-blur-xl mb-10 shadow-sm space-y-4 text-start sm:text-center text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
          <p>
            I am an Information Technology graduate (<strong className="text-[var(--text-primary)] font-semibold">{t.hero.bioDegree}</strong>) from {t.hero.bioUniversity} with a dual focus on <strong className="text-[var(--text-primary)] font-semibold">{t.hero.bioFocus}</strong>.
          </p>
          <p>
            {t.hero.bioExperience}
          </p>
          <p>
            {t.hero.bioClosing}
          </p>
        </div>

        {/* Primary Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 w-full max-w-md sm:max-w-none">
          <a
            href="#projects"
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold bg-[var(--accent-primary)] text-white shadow-lg hover:opacity-90 hover:shadow-xl transition-all duration-200 cursor-pointer text-sm sm:text-base"
          >
            <span>{t.hero.ctaProjects}</span>
            <ArrowRight className="w-4 h-4 rtl:rotate-180" />
          </a>

          <a
            href="/cv/Mohammed_Safith_CV.pdf"
            download="Mohammed_Safith_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold border border-[var(--border-card)] bg-[var(--bg-card)] hover:bg-[var(--bg-card-hover)] text-[var(--text-primary)] shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer text-sm sm:text-base"
            title="Download Verified Resume"
          >
            <FileDown className="w-4 h-4 text-[var(--accent-primary)]" />
            <span>{t.hero.ctaResume}</span>
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold border border-[var(--border-card)] bg-[var(--bg-card)] hover:bg-[var(--bg-card-hover)] text-[var(--text-secondary)] transition-all duration-200 text-sm sm:text-base"
          >
            <Mail className="w-4 h-4 text-[var(--accent-primary)]" />
            <span>{t.hero.ctaContact}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
