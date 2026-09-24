'use client';

import React, { useState, useMemo } from 'react';
import { TIMELINE } from '@/data/timeline';
import { TimelineEntry } from '@/types';
import {
  Briefcase,
  GraduationCap,
  Rocket,
  Calendar,
  MapPin,
  FileDown,
  CheckCircle2,
  Sparkles,
  Layers,
} from 'lucide-react';

type FilterCategory = 'All' | 'Internships' | 'Education' | 'Projects';

interface FilterTab {
  id: FilterCategory;
  label: string;
  icon: React.ElementType;
}

const FILTER_TABS: FilterTab[] = [
  { id: 'All', label: 'All Milestones', icon: Layers },
  { id: 'Internships', label: 'Internships', icon: Briefcase },
  { id: 'Education', label: 'Education', icon: GraduationCap },
  { id: 'Projects', label: 'Projects', icon: Rocket },
];

export function TimelineSection() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('All');

  // Compute counts dynamically for filter tab badges
  const counts = useMemo(() => {
    return {
      All: TIMELINE.length,
      Internships: TIMELINE.filter((item) => item.type === 'Internship').length,
      Education: TIMELINE.filter((item) => item.type === 'Education').length,
      Projects: TIMELINE.filter((item) => item.type === 'Project Milestone').length,
    };
  }, []);

  // Filter items based on selected tab using useMemo to avoid re-filtering unnecessarily
  const filteredMilestones = useMemo(() => {
    if (activeFilter === 'All') return TIMELINE;
    if (activeFilter === 'Internships') return TIMELINE.filter((item) => item.type === 'Internship');
    if (activeFilter === 'Education') return TIMELINE.filter((item) => item.type === 'Education');
    if (activeFilter === 'Projects') return TIMELINE.filter((item) => item.type === 'Project Milestone');
    return TIMELINE;
  }, [activeFilter]);

  // Helper to determine node icon and badge styling based on entry type
  const getTypeConfig = (type: TimelineEntry['type']) => {
    switch (type) {
      case 'Internship':
        return {
          icon: Briefcase,
          label: 'Industrial Internship',
          badgeClass: 'bg-amber-500/10 text-amber-500 border-amber-500/20',
          dotColor: 'bg-amber-400',
        };
      case 'Education':
        return {
          icon: GraduationCap,
          label: 'Academic Foundation',
          badgeClass: 'bg-sky-500/10 text-sky-500 border-sky-500/20',
          dotColor: 'bg-sky-400',
        };
      case 'Project Milestone':
        return {
          icon: Rocket,
          label: 'Engineering Milestone',
          badgeClass: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20',
          dotColor: 'bg-emerald-400',
        };
      default:
        return {
          icon: Sparkles,
          label: 'Milestone',
          badgeClass: 'bg-primary/10 text-[var(--accent-primary)] border-[var(--accent-primary)]/20',
          dotColor: 'bg-[var(--accent-primary)]',
        };
    }
  };

  return (
    <section id="timeline" className="scroll-mt-24 space-y-8" aria-label="Career and Academic Timeline">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[var(--border-card)] pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] border border-[var(--accent-primary)]/20 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Proven Journey</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-[var(--text-primary)]">
            Career & Academic Milestones
          </h2>
          <p className="text-sm text-[var(--text-muted)] mt-1 max-w-2xl">
            A chronological timeline of hands-on engineering internships, academic qualifications, and real-world system deployments across Malaysia 🇲🇾 and Sri Lanka 🇱🇰.
          </p>
        </div>

        {/* Total Count Badge */}
        <div className="hidden md:flex items-center gap-2 px-4 py-2 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-card)] text-xs font-semibold text-[var(--text-muted)]">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>{TIMELINE.length} Verified Milestones</span>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2" role="tablist" aria-label="Filter milestones by type">
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

      {/* Vertical Timeline Track */}
      <div className="relative ps-6 sm:ps-8 border-s-2 border-[var(--border-card)] space-y-8 my-4">
        {filteredMilestones.map((item, index) => {
          const typeConfig = getTypeConfig(item.type);
          const NodeIcon = typeConfig.icon;

          return (
            <article
              key={`${item.period}-${item.title}-${index}`}
              className="relative group transition-all duration-300"
            >
              {/* Timeline Pin Node on Track */}
              <div
                className="absolute -start-[31px] sm:-start-[39px] top-1.5 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[var(--bg-primary)] border-2 border-[var(--accent-primary)] flex items-center justify-center shadow-md shadow-[var(--accent-primary)]/20 group-hover:scale-110 transition-transform duration-200"
                aria-hidden="true"
              >
                <NodeIcon className="w-3 h-3 sm:w-4 sm:h-4 text-[var(--accent-primary)]" />
              </div>

              {/* Milestone Card */}
              <div className="p-6 rounded-2xl border border-[var(--border-card)] bg-[var(--bg-card)] backdrop-blur-xl hover:border-[var(--accent-primary)]/50 transition-all duration-200 space-y-4 shadow-sm hover:shadow-md">
                {/* Period & Type Badges */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  {/* Period with Pulse */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[var(--bg-primary)] border border-[var(--border-card)] text-[var(--text-primary)]">
                    <Calendar className="w-3 h-3 text-[var(--accent-primary)]" />
                    <span>{item.period}</span>
                  </div>

                  {/* Type Badge */}
                  <div
                    className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${typeConfig.badgeClass}`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${typeConfig.dotColor}`} />
                    <span>{typeConfig.label}</span>
                  </div>
                </div>

                {/* Title & Organization Header */}
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-y-1 gap-x-3 text-xs sm:text-sm text-[var(--text-muted)] mt-1">
                    <span className="font-semibold text-[var(--text-primary)]">{item.institution}</span>
                    <span className="text-[var(--border-card)]">•</span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[var(--accent-primary)]" />
                      <span>{item.location}</span>
                    </span>
                  </div>
                </div>

                {/* Highlight Points */}
                <ul className="space-y-2 pt-2 border-t border-[var(--border-card)]/50">
                  {item.highlights.map((highlight, hIndex) => (
                    <li
                      key={hIndex}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[var(--accent-primary)] shrink-0 mt-0.5" />
                      <span className="text-[var(--text-primary)]/90">{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Credential Link (if available) */}
                {item.credentialFile && (
                  <div className="pt-2 flex items-center justify-end">
                    <a
                      href={item.credentialFile}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--accent-primary)] hover:underline"
                    >
                      <FileDown className="w-3.5 h-3.5" />
                      <span>View Verified Resume / Credential</span>
                    </a>
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
