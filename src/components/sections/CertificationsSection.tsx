'use client';

import React, { useState, useMemo } from 'react';
import { CERTIFICATIONS } from '@/data/certifications';
import { CertificationCategory, Certification } from '@/types';
import {
  ShieldCheck,
  Award,
  Code2,
  TrainTrack,
  Globe2,
  Users2,
  Calendar,
  Layers,
  FileDown,
  CheckCircle,
} from 'lucide-react';

type FilterType = 'All' | CertificationCategory;

interface FilterTab {
  id: FilterType;
  label: string;
  icon: React.ElementType;
}

const FILTER_TABS: FilterTab[] = [
  { id: 'All', label: 'All Credentials', icon: Layers },
  { id: 'Coding & Algorithms', label: 'Coding & Algorithms', icon: Code2 },
  { id: 'Transit & QA Systems', label: 'Transit & QA', icon: TrainTrack },
  { id: 'Web & Emerging Tech', label: 'Web & Tech', icon: Globe2 },
  { id: 'Leadership & Community', label: 'Leadership', icon: Users2 },
];

export function CertificationsSection() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('All');

  // Compute counts dynamically for tab badges
  const counts = useMemo(() => {
    return {
      All: CERTIFICATIONS.length,
      'Coding & Algorithms': CERTIFICATIONS.filter((c) => c.category === 'Coding & Algorithms').length,
      'Transit & QA Systems': CERTIFICATIONS.filter((c) => c.category === 'Transit & QA Systems').length,
      'Web & Emerging Tech': CERTIFICATIONS.filter((c) => c.category === 'Web & Emerging Tech').length,
      'Leadership & Community': CERTIFICATIONS.filter((c) => c.category === 'Leadership & Community').length,
    };
  }, []);

  // Filter certifications based on selected tab with useMemo caching
  const filteredCerts = useMemo(() => {
    if (activeFilter === 'All') return CERTIFICATIONS;
    return CERTIFICATIONS.filter((c) => c.category === activeFilter);
  }, [activeFilter]);

  // Helper for category styling and icons
  const getCategoryConfig = (category: Certification['category']) => {
    switch (category) {
      case 'Coding & Algorithms':
        return {
          icon: Code2,
          badgeClass: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20',
          dotColor: 'bg-emerald-400',
        };
      case 'Transit & QA Systems':
        return {
          icon: TrainTrack,
          badgeClass: 'bg-amber-500/10 text-amber-500 border-amber-500/20',
          dotColor: 'bg-amber-400',
        };
      case 'Web & Emerging Tech':
        return {
          icon: Globe2,
          badgeClass: 'bg-sky-500/10 text-sky-500 border-sky-500/20',
          dotColor: 'bg-sky-400',
        };
      case 'Leadership & Community':
        return {
          icon: Users2,
          badgeClass: 'bg-purple-500/10 text-purple-500 border-purple-500/20',
          dotColor: 'bg-purple-400',
        };
      default:
        return {
          icon: Award,
          badgeClass: 'bg-primary/10 text-[var(--accent-primary)] border-[var(--accent-primary)]/20',
          dotColor: 'bg-[var(--accent-primary)]',
        };
    }
  };

  return (
    <section id="certifications" className="scroll-mt-24 space-y-8" aria-label="Verified Certifications and Honors">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[var(--border-card)] pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] border border-[var(--accent-primary)]/20 mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-[var(--text-primary)]">
            Certifications, Honors & Leadership
          </h2>
          <p className="text-sm text-[var(--text-muted)] mt-1 max-w-2xl">
            Official proof of technical workshops, competitive hackathon challenges, executive industry letters, and community leadership tenure.
          </p>
        </div>

        {/* Total Count Badge */}
        <div className="hidden md:flex items-center gap-2 px-4 py-2 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-card)] text-xs font-semibold text-[var(--text-muted)]">
          <Award className="w-4 h-4 text-[var(--accent-primary)]" />
          <span>{CERTIFICATIONS.length} Official Credentials</span>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2" role="tablist" aria-label="Filter credentials by category">
        {FILTER_TABS.map((tab) => {
          const TabIcon = tab.icon;
          const isSelected = activeFilter === tab.id;
          const count = counts[tab.id];

          return (
            <button
              key={tab.id}
              role="tab"
              aria-selected={isSelected}
              onClick={() => setActiveFilter(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 ${
                isSelected
                  ? 'bg-[var(--accent-primary)] text-white shadow-md shadow-[var(--accent-primary)]/20 font-semibold'
                  : 'bg-[var(--bg-card)] text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:border-[var(--accent-primary)]/40 border border-[var(--border-card)]'
              }`}
            >
              <TabIcon className="w-3.5 h-3.5" />
              <span>{tab.label}</span>
              <span
                className={`ms-1 px-1.5 py-0.5 rounded-full text-[10px] font-bold ${
                  isSelected
                    ? 'bg-white/20 text-white'
                    : 'bg-[var(--border-card)] text-[var(--text-muted)]'
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Credentials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredCerts.map((cert) => {
          const config = getCategoryConfig(cert.category);
          const CategoryIcon = config.icon;

          return (
            <div
              key={cert.id}
              className="group p-6 rounded-2xl border border-[var(--border-card)] bg-[var(--bg-card)] backdrop-blur-xl hover:border-[var(--accent-primary)]/50 transition-all duration-300 flex flex-col justify-between space-y-4 shadow-sm hover:shadow-md"
            >
              <div className="space-y-3">
                {/* Header: Category Badge & Issue Date */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span
                    className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${config.badgeClass}`}
                  >
                    <CategoryIcon className="w-3 h-3" />
                    <span>{cert.badgeLabel}</span>
                  </span>

                  <span className="inline-flex items-center gap-1 text-[11px] text-[var(--text-muted)] font-medium">
                    <Calendar className="w-3 h-3 text-[var(--accent-primary)]" />
                    <span>{cert.issueDate}</span>
                  </span>
                </div>

                {/* Title & Issuer */}
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-[var(--text-muted)] mt-1">
                    {cert.issuer}
                  </p>
                </div>

                {/* Narrative Description */}
                <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                  {cert.description}
                </p>
              </div>

              {/* Skills Tags & Action Link */}
              <div className="pt-3 border-t border-[var(--border-card)]/50 space-y-3">
                {/* Skills Acquired */}
                <div className="flex flex-wrap gap-1.5">
                  {cert.skillsAcquired.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-semibold bg-[var(--bg-primary)] text-[var(--text-primary)] border border-[var(--border-card)]"
                    >
                      <CheckCircle className="w-2.5 h-2.5 text-[var(--accent-primary)]" />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>

                {/* Credential Link (if available) */}
                {cert.credentialFile && (
                  <div className="pt-1 flex justify-end">
                    <a
                      href={cert.credentialFile}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--accent-primary)] hover:underline"
                    >
                      <FileDown className="w-3.5 h-3.5" />
                      <span>View Recommendation Letter / CV</span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
