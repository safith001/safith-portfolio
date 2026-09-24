import type { Metadata } from 'next';
import './globals.css';
import { Footer } from '@/components/layout/Footer';
import { ScrollToTop } from '@/components/layout/ScrollToTop';
import { LanguageProvider } from '@/context/LanguageContext';

export const metadata: Metadata = {
  title: 'Mohammed Safith | Portfolio & Engineering Showcase',
  description:
    'Portfolio of Mohammed Sarook Mohammed Safith: B.IT Graduate, Project Engineer & Full-Stack Developer based in Sri Lanka.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="midnight" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var legacy = localStorage.getItem('safith_portfolio_theme');
                  if (legacy) {
                    localStorage.removeItem('safith_portfolio_theme');
                  }
                  var saved = localStorage.getItem('safith_portfolio_theme_v2');
                  if (saved && ['midnight', 'glassmorphism', 'minimal', 'warm', 'terminal'].indexOf(saved) !== -1) {
                    document.documentElement.setAttribute('data-theme', saved);
                  } else {
                    document.documentElement.setAttribute('data-theme', 'midnight');
                  }
                } catch(e) {
                  document.documentElement.setAttribute('data-theme', 'midnight');
                }
              })();
            `,
          }}
        />
      </head>
      <body className="flex flex-col min-h-screen">
        <LanguageProvider>
          {/* Main page content (Header + sections rendered here) */}
          <main className="flex-1">{children}</main>

          {/* Semantic site footer */}
          <Footer />

          {/* Floating scroll-to-top button: client-side only */}
          <ScrollToTop />
        </LanguageProvider>
      </body>
    </html>
  );
}
