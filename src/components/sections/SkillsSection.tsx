'use client';

import React, { useState, useMemo } from 'react';
import { SKILLS, DOMAINS, SKILL_CATEGORIES } from '@/data/skills';
import { SkillCategory, ProficiencyLevel } from '@/types';
import {
  Code2,
  Terminal,
  Cpu,
  Database,
  Server,
  Smartphone,
  ShieldCheck,
  CheckCircle2,
  Layers,
  Wrench,
  GitBranch,
  Globe,
  Bug,
  GraduationCap,
  Briefcase,
  FolderGit2,
} from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * Maps iconKey to an appropriate Lucide icon component
 */
function getSkillIcon(iconKey: string): React.ComponentType<{ className?: string }> {
  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    python: Terminal,
    java: Code2,
    javascript: Code2,
    html: Globe,
    database: Database,
    react: Code2,
    nextjs: Globe,
    nodejs: Server,
    express: Server,
    api: Layers,
    flutter: Smartphone,
    dart: Code2,
    sqlite: Database,
    git: GitBranch,
    postman: Wrench,
    ide: Terminal,
    transit: ShieldCheck,
    cpu: Cpu,
    test: CheckCircle2,
    bug: Bug,
  };

  return iconMap[iconKey] || Code2;
}

/**
 * Maps domain iconName to Lucide icon
 */
function getDomainIcon(iconName: string): React.ComponentType<{ className?: string }> {
  const map: Record<string, React.ComponentType<{ className?: string }>> = {
    code: Code2,
    server: Server,
    smartphone: Smartphone,
    database: Database,
    shield: ShieldCheck,
  };
  return map[iconName] || Layers;
}

/**
 * Style mapping for the 3 transparent proficiency tiers
 */
function getTierBadgeStyle(tier: ProficiencyLevel) {
  switch (tier) {
    case 'Industrial Internship':
      return {
        badgeClass: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
        icon: Briefcase,
        label: 'Industrial Internship',
      };
    case 'Applied in Projects':
      return {
        badgeClass: 'bg-amber-500/15 text-amber-400 border-amber-500/30',
        icon: FolderGit2,
        label: 'Applied in Projects',
      };
    case 'Core Foundation':
    default:
      return {
        badgeClass: 'bg-indigo-500/15 text-indigo-300 border-indigo-500/30',
        icon: GraduationCap,
        label: 'Core Foundation',
      };
  }
}

/**
 * SkillsSection Component
 *
 * Senior Engineering Architecture:
 * Grouped into 5 executive Domain Hub Cards rather than 37 unorganized boxes.
 * Replaces deceptive percentage sliders with 100% defensible contextual evidence:
 * - Core Foundation (B.IT Degree & Algorithms)
 * - Applied in Projects (Active GitHub Codebases)
 * - Industrial Internship (Guildford Malaysia on-site transit verification)
 */
export function SkillsSection({ className }: { className?: string }) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Dynamic domain filter list with counts
  const categoryFilters = useMemo(() => {
    const counts: Record<string, number> = { All: SKILLS.length };
    SKILLS.forEach((s) => {
      counts[s.category] = (counts[s.category] || 0) + 1;
    });

    return [
      { id: 'All', label: 'All Domains', count: counts['All'] },
      ...DOMAINS.map((dom) => ({
        id: dom.id,
        label: dom.title.split('&')[0].trim(), // short clean label
        count: counts[dom.id] || 0,
      })),
    ];
  }, []);

  // Filtered domains to display
  const activeDomains = useMemo(() => {
    if (selectedCategory === 'All') return DOMAINS;
    return DOMAINS.filter((d) => d.id === selectedCategory);
  }, [selectedCategory]);

  return (
    <section
      id="skills"
      className={cn('py-16 sm:py-24 scroll-mt-20', className)}
      aria-label="Technical Capabilities and Engineering Domains"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading & Socratic Rationale */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[var(--badge-bg)] text-[var(--accent-primary)] border border-[var(--accent-primary)]/20 mb-4 shadow-sm">
            <Layers className="w-3.5 h-3.5" />
            <span>Verified Technical Capabilities</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight">
            Engineering Domains & Core Skills
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[var(--text-muted)] leading-relaxed">
            Organized by verifiable engineering domains. No arbitrary percentage bars: every skill is
            grounded in university coursework, live open-source repositories, or industrial transit testing.
          </p>
        </div>

        {/* Domain Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 sm:mb-14">
          {categoryFilters.map((tab) => {
            const isActive = selectedCategory === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSelectedCategory(tab.id)}
                className={cn(
                  'inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer shadow-sm',
                  isActive
                    ? 'bg-[var(--accent-primary)] text-white shadow-lg shadow-[var(--accent-glow)] scale-105'
                    : 'bg-[var(--bg-card)] text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card-hover)] border border-[var(--border-card)]'
                )}
                aria-pressed={isActive}
              >
                <span>{tab.label}</span>
                <span
                  className={cn(
                    'text-[10px] px-1.5 py-0.5 rounded-md font-mono',
                    isActive
                      ? 'bg-white/20 text-white'
                      : 'bg-[var(--bg-secondary)] text-[var(--text-muted)]'
                  )}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Stacked Executive Domain Hub Rows */}
        <div className="space-y-6 sm:space-y-8">
          {activeDomains.map((domain) => {
            const DomainIcon = getDomainIcon(domain.iconName);
            const domainSkills = SKILLS.filter((s) => s.category === domain.id);
            const isTransitQA = domain.id === 'QA & Transit Systems';

            return (
              <div
                key={domain.id}
                className={cn(
                  'p-6 sm:p-8 rounded-3xl border border-[var(--border-card)]',
                  'bg-[var(--bg-card)] backdrop-blur-xl transition-all duration-200',
                  'hover:border-[var(--border-card-hover)] hover:bg-[var(--bg-card-hover)] hover:shadow-xl hover:shadow-[var(--accent-glow)]',
                  isTransitQA
                    ? 'ring-1 ring-emerald-500/30 bg-gradient-to-br from-[var(--bg-card)] via-[var(--bg-card)] to-emerald-950/10'
                    : ''
                )}
              >
                {/* Responsive Split Layout: Left Meta / Right Skills Grid */}
                <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-8">
                  {/* Left Column: Domain Branding & Description */}
                  <div className="w-full lg:w-80 shrink-0">
                    <div className="flex items-center gap-3.5 mb-3">
                      <div
                        className={cn(
                          'w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-inner',
                          isTransitQA
                            ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                            : 'bg-[var(--badge-bg)] text-[var(--accent-primary)] border border-[var(--accent-primary)]/20'
                        )}
                      >
                        <DomainIcon className="w-6 h-6" />
                      </div>

                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-[var(--text-primary)] leading-tight">
                          {domain.title}
                        </h3>
                        <span
                          className={cn(
                            'text-xs font-mono font-medium',
                            isTransitQA ? 'text-emerald-400' : 'text-[var(--text-muted)]'
                          )}
                        >
                          {domainSkills.length} Verified Competencies
                        </span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                      {domain.subtitle}
                    </p>
                  </div>

                  {/* Right Column: Skills Grid (Auto 2 columns on desktop) */}
                  <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
                    {domainSkills.map((skill) => {
                      const SkillIcon = getSkillIcon(skill.iconKey);
                      const tierStyle = getTierBadgeStyle(skill.proficiencyLevel);
                      const TierIcon = tierStyle.icon;

                      return (
                        <div
                          key={skill.name}
                          className="group/item flex flex-col justify-between p-4 rounded-2xl bg-[var(--bg-secondary)]/60 border border-[var(--border-card)] hover:border-[var(--border-card-hover)] transition-all duration-200"
                        >
                          <div className="flex items-start justify-between gap-2 mb-2">
                            <div className="flex items-center gap-2.5">
                              <div className="w-8 h-8 rounded-xl bg-[var(--badge-bg)] text-[var(--accent-primary)] flex items-center justify-center shrink-0">
                                <SkillIcon className="w-4 h-4" />
                              </div>
                              <span className="text-xs sm:text-sm font-semibold text-[var(--text-primary)] group-hover/item:text-[var(--accent-primary)] transition-colors">
                                {skill.name}
                              </span>
                            </div>

                            <span
                              className={cn(
                                'inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full font-medium border shrink-0',
                                tierStyle.badgeClass
                              )}
                            >
                              <TierIcon className="w-2.5 h-2.5" />
                              <span>{skill.proficiencyLevel}</span>
                            </span>
                          </div>

                          {/* Context / Practical Origin Note */}
                          <p className="text-[11px] text-[var(--text-muted)] leading-relaxed pl-10">
                            {skill.context}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Transparent Capability Standard Callout */}
        <div className="mt-14 max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl border border-[var(--border-card)] bg-[var(--bg-card)] backdrop-blur-xl shadow-sm">
          <div className="flex flex-col sm:flex-row items-start gap-5">
            <div className="w-12 h-12 rounded-2xl bg-[var(--badge-bg)] text-[var(--accent-primary)] flex items-center justify-center shrink-0 shadow-inner">
              <ShieldCheck className="w-6 h-6" />
            </div>

            <div className="space-y-3">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-[var(--text-primary)]">
                  The Honest Engineering Proficiency Standard
                </h3>
                <p className="text-xs sm:text-sm text-[var(--text-muted)] mt-1 leading-relaxed">
                  Senior engineering managers prefer verified evidence over subjective skill bars (e.g. &quot;90% Java&quot;).
                  Every tool on this portfolio is classified based on where it was actually delivered:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
                {/* Tier 1 */}
                <div className="p-3.5 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-card)]">
                  <div className="flex items-center gap-2 mb-1.5 text-indigo-400 font-semibold text-xs">
                    <GraduationCap className="w-4 h-4" />
                    <span>Core Foundation</span>
                  </div>
                  <p className="text-[11px] text-[var(--text-muted)] leading-relaxed">
                    Mastered through 3 years of Bachelor of Information Technology coursework, OOP labs, and algorithmic theory.
                  </p>
                </div>

                {/* Tier 2 */}
                <div className="p-3.5 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-card)]">
                  <div className="flex items-center gap-2 mb-1.5 text-amber-400 font-semibold text-xs">
                    <FolderGit2 className="w-4 h-4" />
                    <span>Applied in Projects</span>
                  </div>
                  <p className="text-[11px] text-[var(--text-muted)] leading-relaxed">
                    Directly implemented in 5 full-stack and mobile GitHub repositories with working APIs, state, and databases.
                  </p>
                </div>

                {/* Tier 3 */}
                <div className="p-3.5 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-card)]">
                  <div className="flex items-center gap-2 mb-1.5 text-emerald-400 font-semibold text-xs">
                    <Briefcase className="w-4 h-4" />
                    <span>Industrial Internship</span>
                  </div>
                  <p className="text-[11px] text-[var(--text-muted)] leading-relaxed">
                    Executed on physical test benches and acceptance protocols during transit systems engineering at Guildford Malaysia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
