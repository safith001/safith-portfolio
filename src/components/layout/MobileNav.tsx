'use client';

import React, { useEffect } from 'react';
import { X, FileDown, ExternalLink } from 'lucide-react';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { LanguageToggle } from '@/components/ui/LanguageToggle';
import { cn } from '@/lib/utils';

interface NavItem {
  label: string;
  href: string;
}

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
}

/**
 * Accessible Slide-Over Drawer Navigation for Mobile Devices
 */
export function MobileNav({ isOpen, onClose, navItems }: MobileNavProps) {
  // Close drawer on Escape key press & prevent background scroll
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose();
      }
    }

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden" role="dialog" aria-modal="true" aria-label="Mobile menu">
      {/* Backdrop blur overlay */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-over panel */}
      <div className="fixed inset-y-0 end-0 w-full max-w-xs border-s border-[var(--border-card)] bg-[var(--bg-primary)] p-6 shadow-2xl flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-200">
        <div>
          {/* Header row with logo and close button */}
          <div className="flex items-center justify-between pb-6 border-b border-[var(--border-card)]">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[var(--accent-primary)] flex items-center justify-center font-bold text-white text-sm shadow-md">
                S
              </div>
              <span className="font-bold tracking-tight text-[var(--text-primary)]">
                SAFITH
              </span>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-xl text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card-hover)] transition-colors cursor-pointer"
              aria-label="Close navigation menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation links */}
          <nav className="py-6 flex flex-col space-y-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={onClose}
                className="px-4 py-3 rounded-xl text-base font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card-hover)] transition-all duration-150"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom Drawer Actions */}
        <div className="pt-6 border-t border-[var(--border-card)] space-y-4">
          {/* Resume Download CTA */}
          <a
            href="/cv/Mohammed_Safith_CV.pdf"
            download="Mohammed_Safith_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold bg-[var(--accent-primary)] hover:opacity-90 text-white shadow-lg transition-all"
          >
            <FileDown className="w-4 h-4" />
            <span>Download Verified CV</span>
          </a>

          {/* Controls row: Theme & Language */}
          <div className="flex items-center justify-between pt-2">
            <LanguageToggle />
            <ThemeToggle />
          </div>

          {/* Status badge */}
          <div className="pt-2 text-center">
            <span className="inline-flex items-center gap-1.5 text-xs text-[var(--text-muted)]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Available for Junior Dev & QA Roles
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
