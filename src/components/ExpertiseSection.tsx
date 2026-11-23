import { useState } from 'react';
import { motion } from 'motion/react';
import {
  TECH_CATEGORIES,
  TECH_ITEMS,
  type TechCategoryId,
  type TechItem,
} from '../data/portfolioData';
import SectionSeoHelmet from './SectionSeoHelmet';

interface ExpertiseSectionProps {
  isSeoActive?: boolean;
}

function BentoArtMotif({
  motif,
  isDarkSurface = false,
}: {
  motif: TechItem['motif'];
  isDarkSurface?: boolean;
}) {
  const strokeMain = isDarkSurface ? 'stroke-[#D8CFF0]' : 'stroke-[var(--sec-primary)]';
  const strokeSoft = isDarkSurface ? 'stroke-white/30' : 'stroke-[var(--sec-border-strong)]';

  switch (motif) {
    case 'react':
      return (
        <svg viewBox="0 0 180 120" className="h-24 w-36 transition-transform duration-500 group-hover:scale-105 group-hover:rotate-6" fill="none">
          <ellipse cx="90" cy="60" rx="64" ry="22" className={strokeSoft} strokeWidth="1.5" />
          <ellipse cx="90" cy="60" rx="64" ry="22" transform="rotate(60 90 60)" className="stroke-[var(--sec-accent)]" strokeWidth="2" />
          <ellipse cx="90" cy="60" rx="64" ry="22" transform="rotate(120 90 60)" className={strokeSoft} strokeWidth="1.5" />
          <circle cx="90" cy="60" r="9" className="fill-[var(--sec-accent)] stroke-[var(--sec-text)]" strokeWidth="1.5" />
        </svg>
      );
    case 'react-native':
      return (
        <div className="flex items-center gap-2 transition-transform duration-300 group-hover:-translate-y-0.5">
          <div className="h-12 w-8 border border-[var(--sec-primary)] bg-[var(--sec-surface)] p-1.5 flex flex-col justify-between">
            <div className="h-1.5 w-full bg-[var(--sec-accent)]" />
            <div className="h-4 w-full border border-[var(--sec-border-strong)]" />
          </div>
          <div className="h-10 w-7 border border-[var(--sec-primary)] bg-[var(--sec-secondary)] p-1 flex flex-col justify-between translate-y-1">
            <div className="h-1 w-3 bg-[var(--sec-primary)]" />
            <div className="h-3 w-full bg-[var(--sec-surface)]" />
          </div>
        </div>
      );
    case 'flutterflow':
      return (
        <div className="flex items-center gap-1.5">
          <span className="h-4 w-4 border border-[var(--sec-primary)] bg-[var(--sec-accent)]" />
          <span className="h-px w-5 bg-[var(--sec-primary)]/40" />
          <span className="h-4 w-4 rotate-45 border border-[var(--sec-primary)] bg-[var(--sec-surface)]" />
          <span className="h-px w-5 bg-[var(--sec-primary)]/40" />
          <span className="h-4 w-4 bg-[var(--sec-primary)]" />
        </div>
      );
    case 'supabase':
      return (
        <div className="flex flex-col items-center gap-2 py-2 transition-transform duration-300 group-hover:-translate-y-1">
          <div className="h-4 w-24 rounded-full border border-[var(--sec-primary)] bg-[var(--sec-accent)]" />
          <div className="h-4 w-24 rounded-full border border-[var(--sec-primary)] bg-[var(--sec-surface)]" />
          <div className="h-4 w-24 rounded-full border border-[var(--sec-border-strong)] bg-[var(--sec-surface)]" />
          <div className="mt-1 flex items-center gap-1.5">
            <span className="h-2 w-2 bg-[var(--sec-primary)]" />
            <span className="h-px w-12 bg-[var(--sec-primary)]/50" />
          </div>
        </div>
      );
    case 'figma':
      return (
        <svg viewBox="0 0 120 120" className="h-24 w-24 transition-transform duration-300 group-hover:scale-105" fill="none">
          <path d="M22 92 C 42 22, 82 98, 98 28" className={strokeMain} strokeWidth="2" />
          <line x1="22" y1="92" x2="54" y2="28" className={strokeSoft} strokeDasharray="3 3" />
          <rect x="17" y="87" width="10" height="10" className="fill-[var(--sec-accent)] stroke-[var(--sec-text)]" strokeWidth="1.5" />
          <circle cx="54" cy="28" r="5" className="fill-[var(--sec-surface)] stroke-[var(--sec-primary)]" strokeWidth="1.75" />
          <rect x="93" y="23" width="10" height="10" className="fill-[var(--sec-primary)] stroke-[var(--sec-text)]" strokeWidth="1.2" />
        </svg>
      );
    case 'stitch':
      return (
        <div className="grid grid-cols-3 gap-1.5 transition-transform duration-300 group-hover:scale-105">
          <div className="h-4 w-4 border border-[var(--sec-primary)]/40 bg-[var(--sec-surface)]" />
          <div className="h-4 w-4 border border-[var(--sec-primary)] bg-[var(--sec-accent)]" />
          <div className="h-4 w-4 border border-[var(--sec-primary)]/40 bg-[var(--sec-surface)]" />
          <div className="h-4 w-4 border border-[var(--sec-primary)] bg-[var(--sec-primary)]" />
          <div className="h-4 w-4 border border-[var(--sec-primary)]/40 bg-[var(--sec-surface)]" />
          <div className="h-4 w-4 border border-[var(--sec-primary)] bg-[var(--sec-accent)]" />
        </div>
      );
    case 'github':
      return (
        <svg viewBox="0 0 110 48" className="h-10 w-24" fill="none">
          <path d="M12 24 H96" className={strokeSoft} strokeWidth="1.75" />
          <path d="M32 24 C44 24, 46 10, 60 10 H80" className={strokeMain} strokeWidth="1.75" />
          <circle cx="12" cy="24" r="4" className="fill-[var(--sec-primary)]" />
          <circle cx="32" cy="24" r="4.5" className="fill-[var(--sec-accent)] stroke-[var(--sec-text)]" strokeWidth="1.2" />
          <circle cx="80" cy="10" r="4" className="fill-[var(--sec-primary)]" />
          <circle cx="96" cy="24" r="4" className="fill-[var(--sec-border-strong)]" />
        </svg>
      );
    case 'photoshop':
      return (
        <div className="relative flex h-11 w-14 items-center justify-center border border-[var(--sec-primary)] bg-[var(--sec-surface)]">
          <span className="absolute -top-1 -left-1 h-2.5 w-2.5 border-t-2 border-l-2 border-[var(--sec-primary)]" />
          <span className="absolute -bottom-1 -right-1 h-2.5 w-2.5 border-b-2 border-r-2 border-[var(--sec-primary)]" />
          <span className="font-mono text-xs font-bold text-[var(--sec-primary)]">Ps</span>
        </div>
      );
    case 'office':
      return (
        <div className="flex flex-col gap-1.5 w-14">
          <div className="h-1.5 w-full bg-[var(--sec-primary)]" />
          <div className="h-1.5 w-4/5 bg-[var(--sec-accent)] border border-[var(--sec-text)]/30" />
          <div className="h-1.5 w-3/5 bg-[var(--sec-border-strong)]" />
        </div>
      );
  }
}

export default function ExpertiseSection({
  isSeoActive = false,
}: ExpertiseSectionProps) {
  const [activeCategory, setActiveCategory] = useState<TechCategoryId>('all');

  const visibleItems =
    activeCategory === 'all'
      ? TECH_ITEMS
      : TECH_ITEMS.filter((item) => item.categoryId === activeCategory);

  return (
    <section
      id="skills"
      className="theme-skills relative bg-[var(--sec-bg)] text-[var(--sec-text)] border-b border-[var(--sec-border)] py-24 sm:py-32 lg:py-36"
    >
      <SectionSeoHelmet sectionKey="skills" isActive={isSeoActive} />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Section Header + Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            <p className="font-mono text-xs font-semibold tracking-[0.16em] text-[var(--sec-primary)] uppercase">
              02 / Skills — Bento Art Grid
            </p>
            <h2 className="mt-4 font-display text-3xl sm:text-5xl lg:text-[3.25rem] font-extrabold leading-[1.02] tracking-[-0.025em] text-[var(--sec-text)]">
              MY CREATIVE <span className="text-[var(--sec-primary)]">TOOLKIT.</span>
            </h2>
          </div>

          {/* Interactive Discipline Filters */}
          <div
            role="tablist"
            aria-label="Filter toolkit by discipline"
            className="flex flex-wrap gap-2"
          >
            {TECH_CATEGORIES.map((category) => {
              const isSelected = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveCategory(category.id)}
                  className={`min-h-[40px] border px-4 py-2 text-xs font-semibold transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                    isSelected
                      ? 'border-[var(--sec-text)] bg-[var(--sec-accent)] text-[var(--sec-accent-fg)]'
                      : 'border-[var(--sec-border)] bg-[var(--sec-surface)] text-[var(--sec-text-muted)] hover:border-[var(--sec-primary)] hover:text-[var(--sec-primary)]'
                  }`}
                >
                  {category.label}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Asymmetrical Bento Art Grid */}
        <div
          className={`mt-14 grid gap-4 ${
            activeCategory === 'all'
              ? 'sm:grid-cols-2 lg:grid-cols-6 lg:auto-rows-[168px]'
              : 'sm:grid-cols-2 lg:grid-cols-3'
          }`}
        >
          {visibleItems.map((tool, index) => {
            const isHeroTile = activeCategory === 'all' && tool.name === 'React.js';
            const isTallTile =
              activeCategory === 'all' &&
              (tool.name === 'Supabase' || tool.name === 'Figma');
            const isLilacTile =
              activeCategory === 'all' &&
              (tool.name === 'React Native' ||
                tool.name === 'Stitch');

            return (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.04,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`group relative flex flex-col justify-between overflow-hidden border p-6 sm:p-7 transition-colors duration-200 ${
                  activeCategory === 'all' ? tool.bentoSpan : 'min-h-[190px]'
                } ${
                  isHeroTile
                    ? 'border-[var(--sec-primary)] bg-[var(--sec-primary)] text-white'
                    : isLilacTile
                      ? 'border-[var(--sec-border-strong)] bg-[var(--sec-secondary)] hover:bg-[var(--sec-surface)]'
                      : 'border-[var(--sec-border)] bg-[var(--sec-surface)] hover:border-[var(--sec-primary)] hover:bg-[var(--sec-surface-hover)]'
                }`}
              >
                {/* Top Metadata Row */}
                <div className="flex items-center justify-between gap-3">
                  <span
                    className={`font-mono text-[11px] uppercase tracking-[0.12em] ${
                      isHeroTile ? 'text-[var(--sec-accent)]' : 'text-[var(--sec-text-muted)]'
                    }`}
                  >
                    {tool.categoryLabel}
                  </span>
                  <span
                    aria-hidden="true"
                    className={`h-2.5 w-2.5 border transition-colors duration-150 ${
                      isHeroTile
                        ? 'border-[var(--sec-accent)] bg-[var(--sec-accent)]'
                        : 'border-[var(--sec-primary)]/40 bg-transparent group-hover:bg-[var(--sec-accent)] group-hover:border-[var(--sec-text)]'
                    }`}
                  />
                </div>

                {/* Middle/Right Custom Artwork Motif */}
                <div
                  className={`flex items-center ${
                    isHeroTile || isTallTile ? 'my-auto justify-center py-4' : 'my-3 justify-end'
                  }`}
                >
                  <BentoArtMotif motif={tool.motif} isDarkSurface={isHeroTile} />
                </div>

                {/* Bottom Large Technology Label & Context */}
                <div>
                  <h3
                    className={`font-display font-bold tracking-tight transition-colors duration-150 ${
                      isHeroTile
                        ? 'text-3xl sm:text-4xl text-white'
                        : isTallTile
                          ? 'text-2xl sm:text-3xl text-[var(--sec-text)] group-hover:text-[var(--sec-primary)]'
                          : 'text-xl sm:text-2xl text-[var(--sec-text)] group-hover:text-[var(--sec-primary)]'
                    }`}
                  >
                    {tool.name}
                  </h3>
                  <p
                    className={`mt-1.5 text-xs sm:text-sm leading-relaxed ${
                      isHeroTile ? 'text-white/85' : 'text-[var(--sec-text-muted)]'
                    }`}
                  >
                    {tool.contextNote}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
