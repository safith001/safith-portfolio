'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * ScrollToTop Utility Component
 *
 * Renders a floating action button (FAB) that appears once the user scrolls
 * more than 400px down the page. Clicking it smoothly scrolls back to the top.
 *
 * Interview Defence Note:
 * - Using IntersectionObserver would be more performant for detecting section
 *   visibility, but a simple scroll event listener with a threshold is the
 *   correct choice here: we only need a single boolean (visible/hidden).
 * - We clean up the event listener in the useEffect return function to prevent
 *   memory leaks when this component unmounts.
 */
export function ScrollToTop({ className }: { className?: string }) {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const SCROLL_THRESHOLD = 400; // px from top before button appears

    function handleScroll() {
      setIsVisible(window.scrollY > SCROLL_THRESHOLD);
    }

    // Attach listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup on unmount (prevents memory leaks)
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll back to top of page"
      className={cn(
        // Positioning & size
        'fixed bottom-6 end-6 z-50',
        'p-3 rounded-2xl',
        // Colors from CSS variables
        'bg-[var(--accent-primary)] text-white shadow-lg shadow-[var(--accent-glow)]',
        // Hover
        'hover:opacity-90 hover:scale-110 hover:-translate-y-0.5',
        // Transition
        'transition-all duration-300 ease-out',
        // Visibility toggle: use opacity + pointer-events so the transition is smooth
        isVisible
          ? 'opacity-100 pointer-events-auto translate-y-0'
          : 'opacity-0 pointer-events-none translate-y-4',
        className
      )}
    >
      <ArrowUp className="w-5 h-5" strokeWidth={2.5} />
    </button>
  );
}
