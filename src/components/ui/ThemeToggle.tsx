'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from '@/hooks/useTheme';
import { ThemeMode } from '@/types';
import { Sparkles, Sun, Flame, Terminal, Moon, ChevronDown, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * Maps theme modes to their corresponding Lucide SVG icon components
 */
const THEME_ICONS: Record<ThemeMode, React.ComponentType<{ className?: string }>> = {
  glassmorphism: Sparkles,
  minimal: Sun,
  warm: Flame,
  terminal: Terminal,
  midnight: Moon,
};

/**
 * Interactive Theme Switcher Dropdown
 * Allows visitors to toggle seamlessly between all 5 design modes.
 */
export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme, mounted, themes } = useTheme();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Use mounted theme or fallback gracefully to midnight gold during SSR
  const activeTheme = mounted ? theme : 'midnight';
  const CurrentIcon = THEME_ICONS[activeTheme] || Moon;
  const currentThemeObj = themes.find((t) => t.id === activeTheme) || themes[0];

  return (
    <div className={cn('relative inline-block text-start', className)} ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium border border-[var(--border-card)] bg-[var(--bg-card)] hover:bg-[var(--bg-card-hover)] text-[var(--text-primary)] transition-all duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)] cursor-pointer"
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-label="Change portfolio theme"
        suppressHydrationWarning
      >
        <span className="p-1 rounded-lg bg-[var(--badge-bg)] text-[var(--accent-primary)]">
          <CurrentIcon className="w-4 h-4" />
        </span>
        <span className="font-semibold text-xs sm:text-sm" suppressHydrationWarning>
          {currentThemeObj?.name || 'Midnight Gold'}
        </span>
        <ChevronDown className={cn('w-3.5 h-3.5 text-[var(--text-muted)] transition-transform duration-200', isOpen && 'rotate-180')} />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          role="menu"
          className="absolute end-0 mt-2 w-56 rounded-2xl border border-[var(--border-card)] bg-[var(--bg-primary)] p-1.5 shadow-2xl backdrop-blur-xl z-50 animate-in fade-in zoom-in-95 duration-150"
        >
          <div className="px-3 py-2 text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider border-b border-[var(--border-card)] mb-1">
            Select Design Theme
          </div>

          <div className="space-y-1">
            {themes.map((t) => {
              const Icon = THEME_ICONS[t.id];
              const isSelected = t.id === theme;

              return (
                <button
                  key={t.id}
                  type="button"
                  role="menuitem"
                  onClick={() => {
                    setTheme(t.id);
                    setIsOpen(false);
                  }}
                  className={cn(
                    'w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-start text-sm transition-all duration-150 cursor-pointer',
                    isSelected
                      ? 'bg-[var(--badge-bg)] text-[var(--accent-primary)] font-semibold'
                      : 'text-[var(--text-primary)] hover:bg-[var(--bg-card-hover)]'
                  )}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="p-1.5 rounded-lg text-white"
                      style={{ backgroundColor: t.accentColor }}
                    >
                      <Icon className="w-3.5 h-3.5" />
                    </span>
                    <div>
                      <div className="leading-snug">{t.name}</div>
                      <div className="text-xs text-[var(--text-muted)] font-normal">{t.tagline}</div>
                    </div>
                  </div>

                  {isSelected && <Check className="w-4 h-4 text-[var(--accent-primary)] shrink-0 ms-2" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
