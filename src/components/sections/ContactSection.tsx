'use client';

import React, { useState } from 'react';
import {
  Mail,
  Copy,
  Check,
  Send,
  ExternalLink,
  MessageSquare,
  MapPin,
  Clock,
  Sparkles,
  Phone,
  Linkedin,
  Github,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/context/LanguageContext';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const INQUIRY_TYPES = [
  'Full-Time Engineering Role',
  'QA Automation Opportunity',
  'Freelance / Project Collaboration',
  'Technical Discussion',
  'General Inquiry',
];

export function ContactSection({ className }: { className?: string }) {
  const { t } = useLanguage();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: INQUIRY_TYPES[0],
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);
  const [copiedMessage, setCopiedMessage] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const publicEmail = 'safithscientist@gmail.com';

  // Copy email address to clipboard with temporary feedback
  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(publicEmail);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      // Fallback if clipboard API is restricted
      setCopiedEmail(false);
    }
  };

  // Copy prepared message content to clipboard
  const handleCopyMessage = async () => {
    const formatted = `Name: ${formData.name}\nEmail: ${formData.email}\nInquiry: ${formData.subject}\n\nMessage:\n${formData.message}`;
    try {
      await navigator.clipboard.writeText(formatted);
      setCopiedMessage(true);
      setTimeout(() => setCopiedMessage(false), 2000);
    } catch {
      setCopiedMessage(false);
    }
  };

  // Form input change handler
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field-specific error as user types
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  // Form validation before submission
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name';
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address';
    } else if (!emailPattern.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter a message';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Form submission: triggers pre-filled mailto and shows fallback success state
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const emailSubject = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject}: ${formData.name}`);
    const emailBody = encodeURIComponent(
      `Hello Mohammed Safith,\n\n${formData.message}\n\n---\nSender Details:\nName: ${formData.name}\nEmail: ${formData.email}\nInquiry Type: ${formData.subject}`
    );

    // Launch default email client
    window.location.href = `mailto:${publicEmail}?subject=${emailSubject}&body=${emailBody}`;
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      subject: INQUIRY_TYPES[0],
      message: '',
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <section
      id="contact"
      className={cn('py-16 sm:py-24 scroll-mt-20', className)}
      aria-label="Contact and Collaboration Inquiries"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[var(--badge-bg)] text-[var(--accent-primary)] border border-[var(--accent-primary)]/20 mb-4 shadow-sm">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>{t.contact.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight">
            {t.contact.heading}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[var(--text-muted)] leading-relaxed">
            {t.contact.subtitle}
          </p>
        </div>

        {/* Two-Column Split Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Connection Hub (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            {/* Live Availability Card */}
            <div className="p-6 rounded-3xl border border-[var(--border-card)] bg-[var(--bg-card)] backdrop-blur-xl shadow-sm">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  Open to Immediate Roles
                </span>
              </div>
              <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">
                Ready for Full-Stack & QA Engineering
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed mb-4">
                Available for full-time engineering positions, contract roles, and technical collaborations.
              </p>

              <div className="space-y-2.5 pt-3 border-t border-[var(--border-card)] text-xs text-[var(--text-secondary)]">
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-[var(--accent-primary)] shrink-0" />
                  <span>{t.contact.statusAvailable}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-[var(--accent-primary)] shrink-0" />
                  <span>Quick response time within 24 hours</span>
                </div>
              </div>
            </div>

            {/* Email Copy Card */}
            <div className="p-6 rounded-3xl border border-[var(--border-card)] bg-[var(--bg-card)] backdrop-blur-xl shadow-sm">
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[var(--accent-primary)]" />
                  <span className="text-xs font-semibold text-[var(--text-primary)]">Direct Email</span>
                </div>
                <span className="text-[11px] font-mono text-[var(--text-muted)]">Verified</span>
              </div>

              <div className="p-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-card)] mb-3 flex items-center justify-between gap-2">
                <span className="text-xs sm:text-sm font-mono text-[var(--text-primary)] truncate">
                  {publicEmail}
                </span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded-lg bg-[var(--bg-card)] hover:bg-[var(--bg-card-hover)] text-[var(--accent-primary)] border border-[var(--border-card)] transition-colors shrink-0"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className={cn(
                    'flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer shadow-sm',
                    copiedEmail
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                      : 'bg-[var(--accent-primary)] text-white hover:opacity-90'
                  )}
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>{t.contact.copiedNotice}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>{t.contact.copyEmail}</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${publicEmail}`}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold border border-[var(--border-card)] bg-[var(--bg-card)] hover:bg-[var(--bg-card-hover)] text-[var(--text-primary)] transition-colors"
                  title="Open mail application"
                >
                  <span>Open Client</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </div>
            </div>

            {/* Quick Links Card: WhatsApp, LinkedIn, GitHub */}
            <div className="p-6 rounded-3xl border border-[var(--border-card)] bg-[var(--bg-card)] backdrop-blur-xl shadow-sm">
              <div className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-3">
                Professional Networks & Chat
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                {/* WhatsApp Business Quick Link */}
                <a
                  href="https://wa.me/message/HNNO2LX3U4IDN1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/20 transition-all duration-200 group"
                >
                  <Phone className="w-4 h-4 shrink-0 text-emerald-400" />
                  <div className="min-w-0 flex-1">
                    <div className="text-xs font-bold leading-tight">WhatsApp</div>
                    <div className="text-[10px] text-emerald-400/80 truncate">Direct Chat</div>
                  </div>
                  <ExternalLink className="w-3 h-3 opacity-60 group-hover:opacity-100 transition-opacity" />
                </a>

                {/* LinkedIn Profile */}
                <a
                  href="https://www.linkedin.com/in/mohammed-safith/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-[var(--bg-secondary)] hover:bg-[var(--bg-card-hover)] text-[var(--text-primary)] border border-[var(--border-card)] transition-all duration-200 group"
                >
                  <Linkedin className="w-4 h-4 shrink-0 text-[var(--accent-primary)]" />
                  <div className="min-w-0 flex-1">
                    <div className="text-xs font-bold leading-tight">LinkedIn</div>
                    <div className="text-[10px] text-[var(--text-muted)] truncate">Connect</div>
                  </div>
                  <ExternalLink className="w-3 h-3 opacity-60 group-hover:opacity-100 transition-opacity" />
                </a>

                {/* GitHub Codebases */}
                <a
                  href="https://github.com/safith001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-[var(--bg-secondary)] hover:bg-[var(--bg-card-hover)] text-[var(--text-primary)] border border-[var(--border-card)] transition-all duration-200 group"
                >
                  <Github className="w-4 h-4 shrink-0 text-[var(--accent-primary)]" />
                  <div className="min-w-0 flex-1">
                    <div className="text-xs font-bold leading-tight">GitHub</div>
                    <div className="text-[10px] text-[var(--text-muted)] truncate">Repositories</div>
                  </div>
                  <ExternalLink className="w-3 h-3 opacity-60 group-hover:opacity-100 transition-opacity" />
                </a>

                {/* Verified Fiverr Profile */}
                <a
                  href="https://www.fiverr.com/users/mohammedsafith/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-[var(--bg-secondary)] hover:bg-[var(--bg-card-hover)] text-[var(--text-primary)] border border-[var(--border-card)] transition-all duration-200 group"
                >
                  <Sparkles className="w-4 h-4 shrink-0 text-emerald-400" />
                  <div className="min-w-0 flex-1">
                    <div className="text-xs font-bold leading-tight">Fiverr</div>
                    <div className="text-[10px] text-[var(--text-muted)] truncate">Order Gigs</div>
                  </div>
                  <ExternalLink className="w-3 h-3 opacity-60 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Inquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl border border-[var(--border-card)] bg-[var(--bg-card)] backdrop-blur-xl shadow-sm">
              {isSubmitted ? (
                /* Success State Card */
                <div className="text-center py-8 space-y-4 animate-in fade-in duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto shadow-inner">
                    <Check className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--text-primary)]">
                    Inquiry Prepared in Your Mail Client
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--text-muted)] max-w-md mx-auto leading-relaxed">
                    Your email software should open automatically with your pre-filled message. If it did not launch, click below to copy your message text and email me directly.
                  </p>

                  <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
                    <button
                      type="button"
                      onClick={handleCopyMessage}
                      className={cn(
                        'inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 shadow-sm',
                        copiedMessage
                          ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                          : 'bg-[var(--accent-primary)] text-white hover:opacity-90'
                      )}
                    >
                      {copiedMessage ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedMessage ? 'Message Copied!' : 'Copy Formatted Message'}</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleReset}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold border border-[var(--border-card)] bg-[var(--bg-secondary)] hover:bg-[var(--bg-card-hover)] text-[var(--text-primary)] transition-colors"
                    >
                      <span>Send Another Inquiry</span>
                    </button>
                  </div>
                </div>
              ) : (
                /* Active Interactive Form */
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div className="flex items-center justify-between border-b border-[var(--border-card)] pb-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-[var(--text-primary)]">
                        Send a Direct Message
                      </h3>
                      <p className="text-xs text-[var(--text-muted)] mt-0.5">
                        Fill in your details below and click Send Message.
                      </p>
                    </div>
                    <span className="text-xs font-mono text-[var(--accent-primary)] bg-[var(--badge-bg)] px-2.5 py-1 rounded-lg border border-[var(--accent-primary)]/20">
                      Response &lt; 24h
                    </span>
                  </div>

                  {/* Name and Email Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name Field */}
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="block text-xs font-semibold text-[var(--text-primary)]">
                        Your Name <span className="text-rose-400">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Alex Johnson"
                        className={cn(
                          'w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm bg-[var(--bg-secondary)] text-[var(--text-primary)] border placeholder:text-[var(--text-muted)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)] transition-all',
                          errors.name ? 'border-rose-500' : 'border-[var(--border-card)]'
                        )}
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? 'name-error' : undefined}
                      />
                      {errors.name && (
                        <p id="name-error" className="text-[11px] text-rose-400 font-medium">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="block text-xs font-semibold text-[var(--text-primary)]">
                        Your Email Address <span className="text-rose-400">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. alex@company.com"
                        className={cn(
                          'w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm bg-[var(--bg-secondary)] text-[var(--text-primary)] border placeholder:text-[var(--text-muted)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)] transition-all',
                          errors.email ? 'border-rose-500' : 'border-[var(--border-card)]'
                        )}
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                      />
                      {errors.email && (
                        <p id="email-error" className="text-[11px] text-rose-400 font-medium">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Inquiry Type Dropdown */}
                  <div className="space-y-1.5">
                    <label htmlFor="subject" className="block text-xs font-semibold text-[var(--text-primary)]">
                      Inquiry Category
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm bg-[var(--bg-secondary)] text-[var(--text-primary)] border border-[var(--border-card)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)] transition-all cursor-pointer"
                    >
                      {INQUIRY_TYPES.map((type) => (
                        <option key={type} value={type} className="bg-[var(--bg-card)] text-[var(--text-primary)]">
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message Field */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <label htmlFor="message" className="block text-xs font-semibold text-[var(--text-primary)]">
                        Your Message <span className="text-rose-400">*</span>
                      </label>
                      <span className="text-[11px] text-[var(--text-muted)]">
                        {formData.message.length} characters
                      </span>
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share details regarding your team, role opening, project scope, or questions..."
                      className={cn(
                        'w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm bg-[var(--bg-secondary)] text-[var(--text-primary)] border placeholder:text-[var(--text-muted)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)] transition-all resize-y min-h-[110px]',
                        errors.message ? 'border-rose-500' : 'border-[var(--border-card)]'
                      )}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                    />
                    {errors.message && (
                      <p id="message-error" className="text-[11px] text-rose-400 font-medium">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Form Submit Button */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-[11px] text-[var(--text-muted)] text-center sm:text-start order-2 sm:order-1">
                      Zero spam guarantee. Your details will only be used to reply to your inquiry.
                    </p>

                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl font-bold bg-[var(--accent-primary)] text-white hover:opacity-90 shadow-lg shadow-[var(--accent-glow)] transition-all duration-200 cursor-pointer text-xs sm:text-sm order-1 sm:order-2 shrink-0"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
