'use client';

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface TypedTextProps {
  strings: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  className?: string;
}

/**
 * Self-typing text animation component.
 *
 * Socratic Interview Note:
 * Implemented using pure React hooks (useState + useEffect) and string slicing
 * instead of an external library. This reduces JavaScript bundle size and
 * ensures zero dependency overhead while demonstrating state-machine logic.
 */
export function TypedText({
  strings,
  typingSpeed = 70,
  deletingSpeed = 40,
  pauseDuration = 1800,
  className,
}: TypedTextProps) {
  const [displayedText, setDisplayedText] = useState<string>('');
  const [stringIndex, setStringIndex] = useState<number>(0);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  useEffect(() => {
    if (!strings || strings.length === 0) return;

    const currentTargetString = strings[stringIndex % strings.length];

    let timer: NodeJS.Timeout;

    if (!isDeleting) {
      // TYPING PHASE
      if (displayedText.length < currentTargetString.length) {
        timer = setTimeout(() => {
          setDisplayedText(currentTargetString.slice(0, displayedText.length + 1));
        }, typingSpeed);
      } else {
        // PAUSE AT FULL TEXT
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDuration);
      }
    } else {
      // DELETING PHASE
      if (displayedText.length > 0) {
        timer = setTimeout(() => {
          setDisplayedText(currentTargetString.slice(0, displayedText.length - 1));
        }, deletingSpeed);
      } else {
        // FINISHED DELETING -> MOVE TO NEXT STRING
        setIsDeleting(false);
        setStringIndex((prev) => (prev + 1) % strings.length);
      }
    }

    // Crucial cleanup: clear pending timer on unmount or before next cycle
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, stringIndex, strings, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className={cn('inline-flex items-center font-bold', className)}>
      <span>{displayedText}</span>
      {/* Blinking Cursor Bar */}
      <span
        className="inline-block w-0.5 h-6 sm:h-8 ms-1 bg-[var(--accent-primary)] animate-pulse rounded-full"
        aria-hidden="true"
      />
    </span>
  );
}
