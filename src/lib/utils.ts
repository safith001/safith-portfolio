import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines conditional class names with clsx and deduplicates
 * conflicting Tailwind CSS utility classes with tailwind-merge.
 *
 * Everyday Analogy: Think of clsx as deciding WHICH ingredients to include,
 * and twMerge as ensuring you don't accidentally put two conflicting
 * salad dressings on the same plate (e.g. `p-4` and `p-6`).
 *
 * @param inputs - Variable number of class values, booleans, or objects
 * @returns Clean, resolved CSS class string
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
