'use client';

import React, { useState, useMemo } from 'react';
import { PROJECTS } from '@/data/projects';
import { ProjectCard } from './ProjectCard';
import { Code2 } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * ProjectsSection Component
 *
 * Socratic Architecture Note for Interview Defence:
 * Implements client-side state filtering with useMemo to guarantee
 * instant UI updates without unnecessary re-renders or backend calls.
 * Category counts are computed dynamically so new projects added to `projects.ts`
 * automatically update the tab badges without hardcoding.
 */
export function ProjectsSection({ className }: { className?: string }) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Compute available categories dynamically from distinct project categories
  const categories = useMemo(() => {
    const counts: Record<string, number> = {
      All: PROJECTS.length,
    };

    PROJECTS.forEach((p) => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });

    const distinct = Array.from(new Set(PROJECTS.map((p) => p.category)));

    return [
      { label: 'All', count: counts['All'] },
      ...distinct.map((cat) => ({
        label: cat,
        count: counts[cat] || 0,
      })),
    ];
  }, []);

  // Filtered projects list based on current active tab
  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') return PROJECTS;
    return PROJECTS.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section
      id="projects"
      className={cn('py-16 sm:py-20 scroll-mt-20', className)}
      aria-label="Featured Engineering Projects"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading & Subtitle */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[var(--badge-bg)] text-[var(--accent-primary)] border border-[var(--accent-primary)]/20 mb-4 shadow-sm">
            <Code2 className="w-3.5 h-3.5" />
            <span>Verified Codebases</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight">
            Featured Engineering Projects
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[var(--text-muted)] leading-relaxed">
            Full-stack architectures, offline-first mobile solutions, and automated background bots,
            each backed by real test suites, clean commits, and interview-defensible tradeoffs.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 sm:mb-12">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.label;
            return (
              <button
                key={cat.label}
                type="button"
                onClick={() => setSelectedCategory(cat.label)}
                className={cn(
                  'inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer shadow-sm',
                  isActive
                    ? 'bg-[var(--accent-primary)] text-white shadow-lg shadow-[var(--accent-glow)] scale-105'
                    : 'bg-[var(--bg-card)] text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card-hover)] border border-[var(--border-card)]'
                )}
                aria-pressed={isActive}
              >
                <span>{cat.label}</span>
                <span
                  className={cn(
                    'text-[10px] px-1.5 py-0.5 rounded-md font-mono',
                    isActive ? 'bg-white/20 text-white' : 'bg-[var(--bg-secondary)] text-[var(--text-muted)]'
                  )}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
