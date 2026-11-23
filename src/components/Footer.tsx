import { ArrowUp } from 'lucide-react';
import { CONTACT_INFO } from '../data/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="theme-contact bg-[var(--sec-bg)] text-[var(--sec-text)] py-10 sm:py-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-10">
        <div>
          <p className="font-display text-base font-bold tracking-[0.06em] text-[var(--sec-text)]">
            {CONTACT_INFO.name.toUpperCase()}
          </p>
          <p className="mt-1 text-sm text-[var(--sec-secondary)]">
            &ldquo;Designed with curiosity. Built with purpose.&rdquo;
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-6 sm:justify-end">
          <p className="font-mono text-xs text-[var(--sec-secondary)] tabular-nums">
            &copy; {currentYear} {CONTACT_INFO.name}
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="inline-flex min-h-[40px] items-center gap-2 border border-[var(--sec-border-strong)] bg-[var(--sec-surface)] px-4 py-2 font-mono text-xs font-semibold uppercase tracking-wider text-[var(--sec-text)] transition-colors hover:border-[var(--sec-primary)] hover:bg-[var(--sec-primary)] hover:text-[var(--sec-primary-fg)] cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
}
