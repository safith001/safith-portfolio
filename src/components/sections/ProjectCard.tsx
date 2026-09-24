'use client';

import React, { useState } from 'react';
import { Project } from '@/types';
import { Github, ExternalLink, ShieldCheck, ChevronDown, CheckCircle2, Layers } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  project: Project;
  className?: string;
}

/**
 * ProjectCard Component
 *
 * Socratic Architecture Note for Interview Defence:
 * This component showcases both the user-facing product (title, features, tech stack)
 * and the engineer-facing architectural reasoning (Interview Defense drawer).
 * Recruiter & Hiring Managers can inspect WHY specific technologies and patterns
 * were selected over alternatives.
 */
export function ProjectCard({ project, className }: ProjectCardProps) {
  const [showDefense, setShowDefense] = useState<boolean>(false);

  // Status color mapping for live indicator badge
  const statusColorMap: Record<string, { bg: string; text: string; dot: string }> = {
    emerald: {
      bg: 'bg-emerald-500/10 border-emerald-500/30',
      text: 'text-emerald-400',
      dot: 'bg-emerald-400',
    },
    green: {
      bg: 'bg-green-500/10 border-green-500/30',
      text: 'text-green-400',
      dot: 'bg-green-400',
    },
    sky: {
      bg: 'bg-sky-500/10 border-sky-500/30',
      text: 'text-sky-400',
      dot: 'bg-sky-400',
    },
    amber: {
      bg: 'bg-amber-500/10 border-amber-500/30',
      text: 'text-amber-400',
      dot: 'bg-amber-400',
    },
  };

  const statusStyle = statusColorMap[project.statusColor] || statusColorMap.sky;

  return (
    <div
      className={cn(
        'group relative flex flex-col justify-between rounded-3xl border border-[var(--border-card)]',
        'bg-[var(--bg-card)] backdrop-blur-xl p-6 sm:p-7 transition-all duration-300',
        'hover:border-[var(--border-card-hover)] hover:bg-[var(--bg-card-hover)]',
        'hover:shadow-2xl hover:shadow-[var(--accent-glow)]',
        className
      )}
    >
      {/* Top Header: Category Pill & Status Badge */}
      <div>
        <div className="flex items-center justify-between gap-3 mb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[var(--badge-bg)] text-[var(--accent-primary)] border border-[var(--accent-primary)]/20">
            <Layers className="w-3 h-3" />
            {project.category}
          </span>

          <span
            className={cn(
              'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border',
              statusStyle.bg,
              statusStyle.text
            )}
          >
            <span className={cn('w-1.5 h-1.5 rounded-full animate-pulse', statusStyle.dot)} />
            {project.status}
          </span>
        </div>

        {/* Project Title & Subtitle */}
        <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors duration-200">
          {project.title}
        </h3>
        <p className="text-xs sm:text-sm font-medium text-[var(--accent-primary)] mt-1 mb-3">
          {project.subtitle}
        </p>

        {/* Problem Statement / Description */}
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Key Features Bullet Points */}
        {project.keyFeatures && project.keyFeatures.length > 0 && (
          <div className="space-y-1.5 mb-5 pt-1 border-t border-[var(--border-card)]">
            <div className="text-[11px] uppercase tracking-wider font-semibold text-[var(--text-muted)] mt-3 mb-2">
              Key Engineering Features
            </div>
            {project.keyFeatures.slice(0, 3).map((feat, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent-primary)] shrink-0 mt-0.5" />
                <span className="leading-snug">{feat}</span>
              </div>
            ))}
          </div>
        )}

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2.5 py-1 rounded-lg bg-[var(--bg-secondary)] text-[var(--text-primary)] border border-[var(--border-card)] font-mono text-[11px]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Actions & Interview Defense Drawer */}
      <div className="space-y-3 pt-4 border-t border-[var(--border-card)]">
        {/* Primary Action Buttons: Repository & Live Demo */}
        <div className="flex flex-wrap items-center gap-2.5">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 min-w-[130px] inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-[var(--bg-secondary)] hover:bg-[var(--accent-primary)] text-[var(--text-primary)] hover:text-white border border-[var(--border-card)] hover:border-[var(--accent-primary)] transition-all duration-200 shadow-sm"
            aria-label={`View ${project.title} source code on GitHub`}
          >
            <Github className="w-4 h-4" />
            <span>Source Code</span>
            <ExternalLink className="w-3 h-3 opacity-60" />
          </a>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-w-[130px] inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-[var(--accent-primary)] text-white hover:opacity-90 transition-all duration-200 shadow-lg shadow-[var(--accent-glow)]"
              aria-label={`Open live demonstration for ${project.title}`}
            >
              <span>Live Demo</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>

        {/* Interview Defense Accordion Toggle */}
        {project.interviewDefenseNotes && (
          <div className="pt-1">
            <button
              type="button"
              onClick={() => setShowDefense((prev) => !prev)}
              className={cn(
                'w-full flex items-center justify-between px-3.5 py-2 rounded-xl text-xs font-medium transition-all duration-200 cursor-pointer',
                showDefense
                  ? 'bg-[var(--badge-bg)] text-[var(--accent-primary)] border border-[var(--accent-primary)]/30'
                  : 'bg-[var(--bg-secondary)] text-[var(--text-muted)] hover:text-[var(--text-primary)] border border-transparent'
              )}
              aria-expanded={showDefense}
              aria-label={`Toggle interview defense architecture notes for ${project.title}`}
            >
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[var(--accent-primary)]" />
                <span className="font-semibold">Interview Defense & Architecture</span>
              </span>
              <ChevronDown
                className={cn('w-3.5 h-3.5 transition-transform duration-200', showDefense && 'rotate-180')}
              />
            </button>

            {/* Expandable Defense Content */}
            {showDefense && (
              <div className="mt-2.5 p-3.5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-card)] text-xs space-y-3 animate-in fade-in duration-200">
                <div>
                  <div className="font-bold text-[var(--text-primary)] flex items-center gap-1.5 mb-1">
                    <span className="text-[var(--accent-primary)]">🎯</span> Why This Architecture:
                  </div>
                  <p className="text-[var(--text-secondary)] leading-relaxed pl-5">
                    {project.interviewDefenseNotes.architecturalChoice}
                  </p>
                </div>

                <div>
                  <div className="font-bold text-[var(--text-primary)] flex items-center gap-1.5 mb-1">
                    <span className="text-amber-400">⚖️</span> Tradeoff Considered:
                  </div>
                  <p className="text-[var(--text-secondary)] leading-relaxed pl-5">
                    {project.interviewDefenseNotes.tradeoffConsidered}
                  </p>
                </div>

                <div>
                  <div className="font-bold text-[var(--text-primary)] flex items-center gap-1.5 mb-1">
                    <span className="text-emerald-400">🛡️</span> Failure Recovery:
                  </div>
                  <p className="text-[var(--text-secondary)] leading-relaxed pl-5">
                    {project.interviewDefenseNotes.failureHandling}
                  </p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
