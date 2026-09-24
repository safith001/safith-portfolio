'use client';

import React from 'react';
import Link from 'next/link';
import { Github, Linkedin, Instagram, Mail, Heart, Code2, ExternalLink, MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/context/LanguageContext';

/**
 * Official Fiverr brand icon SVG (Simple Icons specification)
 */
function FiverrIcon({ className }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('w-5 h-5', className)}
    >
      <title>Fiverr</title>
      <path d="M23.004 15.588a.995.995 0 1 0 .002-1.99.995.995 0 0 0-.002 1.99zm-.996-3.705h-.85c-.546 0-.84.41-.84 1.092v2.466h-1.61v-3.558h-.684c-.547 0-.84.41-.84 1.092v2.466h-1.61v-4.874h1.61v.74c.264-.574.626-.74 1.163-.74h1.972v.74c.264-.574.625-.74 1.162-.74h.527v1.316zm-6.786 1.501h-3.359c.088.546.43.858 1.006.858.43 0 .732-.175.83-.487l1.425.4c-.351.848-1.22 1.364-2.255 1.364-1.748 0-2.549-1.355-2.549-2.515 0-1.14.703-2.505 2.45-2.505 1.856 0 2.471 1.384 2.471 2.408 0 .224-.01.37-.02.477zm-1.562-.945c-.04-.42-.342-.81-.889-.81-.508 0-.81.225-.908.81h1.797zM7.508 15.44h1.416l1.767-4.874h-1.62l-.86 2.837-.878-2.837H5.72l1.787 4.874zm-6.6 0H2.51v-3.558h1.524v3.558h1.591v-4.874H2.51v-.302c0-.332.235-.536.606-.536h.918V8.412H2.85c-1.162 0-1.943.712-1.943 1.755v.4H0v1.316h.908v3.558z" />
    </svg>
  );
}

/**
 * Footer Social Links: verified against CV, GitHub README & Freelance Accounts
 *
 * Public email:   safithscientist@gmail.com (GitHub README)
 * CV email:       safithmuslim@gmail.com    (professional CV)
 * Fiverr profile: https://www.fiverr.com/users/mohammedsafith/
 */
const SOCIAL_LINKS = [
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/safith001',
    icon: Github,
    hoverColor: 'hover:text-white',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mohammed-sarook-mohammed-safith-23aa30247/',
    icon: Linkedin,
    hoverColor: 'hover:text-[#0A66C2]',
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp Business',
    href: 'https://wa.me/message/HNNO2LX3U4IDN1',
    icon: MessageCircle,
    hoverColor: 'hover:text-[#25D366]',
  },
  {
    id: 'fiverr',
    label: 'Fiverr (Freelance Services)',
    href: 'https://www.fiverr.com/users/mohammedsafith/',
    icon: FiverrIcon,
    hoverColor: 'hover:text-[#1DBF73]',
  },
  {
    id: 'instagram',
    label: 'Instagram',
    href: 'https://www.instagram.com/safith_visuals',
    icon: Instagram,
    hoverColor: 'hover:text-[#E4405F]',
  },
  {
    id: 'email',
    label: 'Email',
    href: 'mailto:safithscientist@gmail.com',
    icon: Mail,
    hoverColor: 'hover:text-[var(--accent-primary)]',
  },
] as const;

const NAV_SECTIONS = [
  {
    title: 'Navigate',
    links: [
      { label: 'Home', href: '#hero' },
      { label: 'Projects', href: '#projects' },
      { label: 'Skills', href: '#skills' },
      { label: 'Timeline', href: '#timeline' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  {
    title: 'Projects',
    links: [
      { label: 'PeerConnect', href: 'https://github.com/safith001/peer-connect-node', external: true },
      { label: 'Daily Books', href: 'https://github.com/safith001/-tamil-islamic-books', external: true },
      { label: 'MedExpense', href: 'https://github.com/safith001/expense-tracker', external: true },
      { label: 'Flight Bot', href: 'https://github.com/safith001/flight-bot', external: true },
      { label: 'To-Do List API', href: 'https://github.com/safith001/to-do-list', external: true },
    ],
  },
] as const;

/**
 * Semantic Footer Component
 */
export function Footer({ className }: { className?: string }) {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      className={cn(
        'relative mt-auto border-t border-[var(--border-card)] bg-[var(--bg-secondary)]',
        className
      )}
    >
      {/* Top accent line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--accent-primary)] to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-[var(--accent-primary)] text-white shadow-lg">
                <Code2 className="w-5 h-5" />
              </span>
              <div>
                <div className="font-bold text-[var(--text-primary)] leading-tight">Mohammed Safith</div>
                <div className="text-xs text-[var(--text-muted)]">Project Engineer & Developer</div>
              </div>
            </div>

            <p className="text-sm text-[var(--text-secondary)] leading-relaxed max-w-xs">
              {t.footer.tagline}
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-1">
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.id}
                    href={social.href}
                    target={social.href.startsWith('mailto') ? undefined : '_blank'}
                    rel={social.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                    aria-label={`Visit Mohammed Safith on ${social.label}`}
                    className={cn(
                      'p-2 rounded-lg text-[var(--text-muted)] transition-all duration-200',
                      'hover:bg-[var(--bg-card-hover)] hover:scale-110',
                      social.hoverColor
                    )}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation Columns */}
          {NAV_SECTIONS.map((section) => (
            <div key={section.title} className="space-y-3">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-[var(--text-muted)]">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    {'external' in link && link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-1.5 text-sm text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors duration-150"
                      >
                        {link.label}
                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors duration-150"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-[var(--border-card)] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[var(--text-muted)] flex items-center gap-1.5">
            © {currentYear} Mohammed Sarook Mohammed Safith. Built with
            <Heart className="w-3 h-3 text-[var(--accent-primary)] fill-current inline" />
            using Next.js & Tailwind CSS.
          </p>
          <p className="text-xs text-[var(--text-muted)] font-arabic tracking-wide">
            {t.footer.blessing}
          </p>
        </div>
      </div>
    </footer>
  );
}
