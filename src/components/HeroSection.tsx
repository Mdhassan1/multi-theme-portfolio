import { motion } from 'motion/react';
import { ArrowDown, ArrowUpRight, Download } from 'lucide-react';
import { CV_ASSET_URL, CV_DOWNLOAD_FILENAME } from '../data/portfolioData';
import SectionSeoHelmet from './SectionSeoHelmet';
import HeroInteractive3D from './HeroInteractive3D';

interface HeroSectionProps {
  isSeoActive?: boolean;
}

export default function HeroSection({
  isSeoActive = false,
}: HeroSectionProps) {
  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const scrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      id="home"
      className="theme-hero relative flex min-h-screen flex-col justify-between overflow-hidden bg-[var(--sec-bg)] text-[var(--sec-text)] border-b border-[var(--sec-border)] pt-24 pb-8 sm:pt-28 lg:pt-32"
    >
      {/* Futuristic Midnight Navy Technical Grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="sec-grid-bg sec-grid-animated absolute -inset-16" />
        <div
          className="absolute -top-40 right-0 h-[520px] w-[520px] rounded-full opacity-25 blur-3xl"
          style={{
            background:
              'radial-gradient(circle, rgba(82,113,255,0.45) 0%, rgba(67,229,255,0.12) 45%, transparent 72%)',
          }}
        />
      </div>

      <SectionSeoHelmet sectionKey="home" isActive={isSeoActive} />
      <div className="relative z-10 mx-auto grid w-full max-w-7xl flex-1 items-center gap-8 px-4 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:px-10">
        {/* Left Cinematic Typography Column */}
        <div className="lg:col-span-7 flex flex-col justify-center min-w-0">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="font-mono text-xs sm:text-sm font-medium tracking-[0.14em] text-[var(--sec-accent-ink)] uppercase"
          >
            Software Developer / Digital Builder
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 font-display text-[2.75rem] sm:text-[3.85rem] lg:text-[4.1rem] xl:text-[5rem] font-extrabold leading-[0.94] tracking-[-0.03em] text-[var(--sec-text)]"
          >
            <span className="block">I BUILD</span>
            <span className="inline-block text-[var(--sec-accent)]">
              DIGITAL
            </span>
            <span className="block">EXPERIENCES.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="mt-7 max-w-xl text-base sm:text-lg leading-relaxed text-[var(--sec-text-secondary)]"
          >
            I&apos;m Abdul Rahim, a software developer passionate about building meaningful digital
            products through engineering, creativity and thoughtful design.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 font-mono text-xs sm:text-sm text-[var(--sec-text-muted)]"
          >
            React.js / React Native / FlutterFlow / Supabase / UI/UX.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <button
              type="button"
              onClick={scrollToProjects}
              className="inline-flex min-h-[46px] items-center gap-2.5 border border-[var(--sec-accent)] bg-[var(--sec-primary)] px-6 py-3 text-sm font-semibold text-[var(--sec-primary-fg)] transition-colors duration-150 hover:bg-[var(--sec-accent)] hover:text-[var(--sec-accent-fg)] whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>Explore My Work</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </button>

            <a
              href={CV_ASSET_URL}
              download={CV_DOWNLOAD_FILENAME}
              className="inline-flex min-h-[46px] items-center gap-2.5 border border-[var(--sec-border-strong)] bg-[var(--sec-surface)] px-6 py-3 text-sm font-medium text-[var(--sec-text)] transition-colors duration-150 hover:border-[var(--sec-accent)] hover:text-[var(--sec-accent-ink)] whitespace-nowrap shrink-0"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              <span>Download CV</span>
            </a>
          </motion.div>
        </div>

        {/* Right Interactive Three.js 3D Architecture Object */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative flex items-center justify-center min-w-0 overflow-hidden"
        >
          <HeroInteractive3D />
        </motion.div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="relative z-10 mx-auto mt-10 flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-10">
        <button
          type="button"
          onClick={scrollToAbout}
          className="group inline-flex items-center gap-3 py-2 text-xs font-mono tracking-[0.12em] text-[var(--sec-text-muted)] transition-colors hover:text-[var(--sec-accent-ink)] cursor-pointer"
        >
          <span className="flex h-7 w-7 items-center justify-center border border-[var(--sec-border-strong)] transition-colors group-hover:border-[var(--sec-accent)]">
            <ArrowDown
              className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-y-0.5"
              aria-hidden="true"
            />
          </span>
          <span className="uppercase">Scroll to explore</span>
        </button>

        <span className="hidden sm:inline font-mono text-xs text-[var(--sec-text-muted)]">
          01 — 3D Digital Experience
        </span>
      </div>
    </section>
  );
}
