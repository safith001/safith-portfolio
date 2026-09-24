import React from 'react';
import { Header } from '@/components/layout/Header';
import { HeroSection } from '@/components/sections/HeroSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { TimelineSection } from '@/components/sections/TimelineSection';
import { CertificationsSection } from '@/components/sections/CertificationsSection';
import { ContactSection } from '@/components/sections/ContactSection';

/**
 * Story 2.4 Page Assembly:
 * Integrates the dynamic TimelineSection and CertificationsSection with interactive category filtering.
 */
export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col justify-between selection:bg-[var(--accent-primary)] selection:text-white">
      {/* Sticky Header with Navigation, CV Button & Theme/Lang Selectors */}
      <Header />

      <main className="flex-1">
        {/* Flagship Dynamic Hero & About Section */}
        <HeroSection />

        {/* Section Anchors for Navigation Verification */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 pb-20">

          {/* Flagship Projects Section */}
          <ProjectsSection />

          {/* Technical Capabilities & Engineering Skills Section */}
          <SkillsSection />

          {/* Career & Academic Timeline Section */}
          <TimelineSection />

          {/* Verified Credentials & Certifications Showcase */}
          <CertificationsSection />

          {/* Interactive Contact & Collaboration Section */}
          <ContactSection />
        </div>
      </main>
    </div>
  );
}
