import { useState, useEffect } from 'react';
import { Download, Menu, X } from 'lucide-react';
import {
  CONTACT_INFO,
  CV_ASSET_URL,
  CV_DOWNLOAD_FILENAME,
  NAV_ITEMS,
} from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
  activeThemeClass: string;
}

export default function Navbar({
  activeSection,
  activeThemeClass,
}: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace('#', '');
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      className={`${activeThemeClass} fixed top-0 inset-x-0 z-40 transition-colors duration-300 border-b border-[var(--sec-border)] backdrop-blur-md ${
        scrolled
          ? 'bg-[var(--sec-bg)]/95'
          : 'bg-[var(--sec-bg)]/85'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 xl:gap-8 px-4 sm:px-6 lg:px-10">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#home');
          }}
          className="font-display text-base sm:text-lg font-bold tracking-[0.06em] text-[var(--sec-text)] hover:text-[var(--sec-accent-ink)] transition-colors duration-150 whitespace-nowrap shrink-0"
        >
          {CONTACT_INFO.wordmark}
        </a>

        {/* Zone 2: Single-Line Navigation */}
        <nav
          aria-label="Primary Navigation"
          className="hidden lg:flex items-center gap-4 xl:gap-6"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={`relative py-1 text-[13px] xl:text-sm font-medium transition-colors duration-150 whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'text-[var(--sec-accent-ink)] font-semibold'
                    : 'text-[var(--sec-text-muted)] hover:text-[var(--sec-text)]'
                }`}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-0 -bottom-0.5 h-[2px] bg-[var(--sec-accent-ink)] transition-transform duration-200 origin-left ${
                    isActive ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Download CV + Mobile Trigger */}
        <div className="flex items-center gap-2.5 shrink-0">
          <a
            href={CV_ASSET_URL}
            download={CV_DOWNLOAD_FILENAME}
            className="hidden sm:inline-flex min-h-[40px] items-center gap-2 border border-[var(--sec-border-strong)] bg-[var(--sec-primary)] px-4 py-2 text-xs font-semibold tracking-wide text-[var(--sec-primary-fg)] transition-opacity duration-150 hover:opacity-90 whitespace-nowrap shrink-0"
          >
            <Download className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Download CV</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-drawer"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex h-11 w-11 items-center justify-center border border-[var(--sec-border)] bg-[var(--sec-surface)] text-[var(--sec-text)] transition-colors hover:border-[var(--sec-border-strong)] lg:hidden cursor-pointer"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Compact Mobile Navigation Drawer */}
      {mobileOpen && (
        <div
          id="mobile-nav-drawer"
          className="border-t border-[var(--sec-border)] bg-[var(--sec-bg)] px-4 py-5 lg:hidden"
        >
          <nav aria-label="Mobile Navigation" className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`flex min-h-[44px] items-center justify-between border-b border-[var(--sec-border)] px-2 text-base font-medium transition-colors ${
                    isActive
                      ? 'text-[var(--sec-accent-ink)] font-semibold'
                      : 'text-[var(--sec-text)] hover:text-[var(--sec-accent-ink)]'
                  }`}
                >
                  <span>{item.label}</span>
                  <span className="font-mono text-xs text-[var(--sec-text-muted)]">
                    {isActive ? 'Active' : ''}
                  </span>
                </a>
              );
            })}
          </nav>

          <div className="mt-4">
            <a
              href={CV_ASSET_URL}
              download={CV_DOWNLOAD_FILENAME}
              onClick={() => setMobileOpen(false)}
              className="flex min-h-[44px] w-full items-center justify-center gap-2 border border-[var(--sec-border-strong)] bg-[var(--sec-primary)] px-5 py-3 text-sm font-semibold text-[var(--sec-primary-fg)] transition-opacity hover:opacity-90"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              <span>Download CV</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
