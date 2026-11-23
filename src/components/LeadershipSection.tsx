import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import { ACHIEVEMENTS } from '../data/portfolioData';
import SectionSeoHelmet from './SectionSeoHelmet';

interface LeadershipSectionProps {
  isSeoActive?: boolean;
}

function AchievementArtwork({
  number,
  isDarkTile = false,
}: {
  number: string;
  isDarkTile?: boolean;
}) {
  const strokeMain = isDarkTile ? 'stroke-[var(--sec-secondary)]' : 'stroke-[var(--sec-primary)]';

  switch (number) {
    case '01':
      return (
        <svg viewBox="0 0 140 120" className="h-24 w-28" fill="none">
          <polygon points="70,10 122,40 122,88 70,112 18,88 18,40" className={strokeMain} strokeOpacity="0.45" strokeWidth="1.5" />
          <polygon points="70,26 104,46 104,78 70,96 36,78 36,46" className="stroke-[var(--sec-accent)]" strokeWidth="2" />
          <circle cx="70" cy="61" r="9" className="fill-[var(--sec-accent)] stroke-[var(--sec-primary)]" strokeWidth="1.5" />
        </svg>
      );
    case '02':
      return (
        <div className="hidden sm:flex items-center gap-2 font-mono text-[11px]">
          <span className="border border-[var(--sec-accent)] bg-[var(--sec-accent)] px-2.5 py-1 font-bold text-[var(--sec-accent-fg)]">
            TIMED TEST ENGINE
          </span>
          <span className="h-px w-8 bg-[var(--sec-secondary)]" />
          <span className="h-2.5 w-2.5 bg-[var(--sec-secondary)]" />
        </div>
      );
    case '03':
      return (
        <div className="flex items-end gap-1.5 h-10">
          <div className="w-3 h-5 border border-[var(--sec-primary)]/45 bg-[var(--sec-secondary)]/55" />
          <div className="w-3 h-10 border border-[var(--sec-primary)] bg-[var(--sec-accent)]" />
          <div className="w-3 h-4 border border-[var(--sec-primary)]/35 bg-[var(--sec-bg)]" />
        </div>
      );
    case '04':
      return (
        <div className="grid grid-cols-3 gap-1">
          <span className="h-2.5 w-2.5 bg-[var(--sec-secondary)]" />
          <span className="h-2.5 w-2.5 bg-[var(--sec-accent)]" />
          <span className="h-2.5 w-2.5 bg-[var(--sec-secondary)]" />
          <span className="h-2.5 w-2.5 bg-[var(--sec-accent)]" />
          <span className="h-2.5 w-2.5 bg-[var(--sec-primary)]/30" />
          <span className="h-2.5 w-2.5 bg-[var(--sec-primary)]" />
        </div>
      );
    case '05':
      return (
        <div className="flex items-center gap-1 h-8">
          {[10, 22, 30, 18, 26, 12].map((h, i) => (
            <span
              key={i}
              style={{ height: `${h}px` }}
              className={`w-1.5 ${
                i === 2
                  ? 'bg-[var(--sec-accent)]'
                  : i === 4
                    ? 'bg-[var(--sec-primary)]'
                    : 'bg-[var(--sec-secondary)]'
              }`}
            />
          ))}
        </div>
      );
    default:
      return (
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full border-2 border-[var(--sec-primary)]" />
          <span className="h-px w-6 bg-[var(--sec-primary)]/50" />
          <span className="h-3.5 w-3.5 rounded-full bg-[var(--sec-accent)] border border-[var(--sec-primary)]" />
        </div>
      );
  }
}

export default function LeadershipSection({
  isSeoActive = false,
}: LeadershipSectionProps) {
  return (
    <section
      id="achievements"
      className="theme-achievements relative bg-[var(--sec-bg)] text-[var(--sec-text)] border-b border-[var(--sec-border)] py-24 sm:py-32 lg:py-36"
    >
      <SectionSeoHelmet sectionKey="achievements" isActive={isSeoActive} />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            <p className="font-mono text-xs font-semibold tracking-[0.16em] text-[var(--sec-accent-ink)] uppercase">
              05 / Achievements — Bento Art Grid
            </p>
            <h2 className="mt-4 font-display text-3xl sm:text-5xl lg:text-[3.35rem] font-extrabold leading-[1.0] tracking-[-0.03em] text-[var(--sec-primary)]">
              BEYOND <span className="text-[var(--sec-accent-ink)]">THE CODE.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base leading-relaxed text-[var(--sec-text-muted)]">
            Leadership roles, inter-college event direction, platform engineering, and competitive
            problem-solving.
          </p>
        </motion.div>

        {/* Creative Asymmetric Bento Tiles */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-6 lg:auto-rows-[200px]">
          {ACHIEVEMENTS.map((item, idx) => {
            const isTallLead = item.number === '01';
            const isWideLead = item.number === '02';
            const isGoldenTile = item.number === '04' || item.number === '05';

            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: 0.45,
                  delay: idx * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`group flex flex-col justify-between overflow-hidden border p-6 sm:p-7 transition-colors duration-200 ${item.bentoSpan} ${
                  isWideLead
                    ? 'border-[var(--sec-primary)] bg-[var(--sec-primary)] text-[var(--sec-primary-fg)]'
                    : isGoldenTile
                      ? 'border-[var(--sec-primary)]/35 bg-[var(--sec-surface-alt)] hover:bg-[var(--sec-surface)]'
                      : 'border-[var(--sec-border-strong)] bg-[var(--sec-surface)] hover:border-[var(--sec-primary)] hover:bg-[var(--sec-surface-hover)]'
                }`}
              >
                {/* Top Index + Visual Composition */}
                <div className="flex items-start justify-between gap-4">
                  <span
                    className={`font-display text-3xl sm:text-4xl font-extrabold tabular-nums leading-none transition-colors duration-200 ${
                      isWideLead
                        ? 'text-[var(--sec-accent)]'
                        : 'text-[var(--sec-numeral)] group-hover:text-[var(--sec-accent-ink)]'
                    }`}
                  >
                    {item.number}
                  </span>

                  {!isTallLead && (
                    <AchievementArtwork
                      number={item.number}
                      isDarkTile={isWideLead}
                    />
                  )}
                </div>

                {/* Tall Tile Centerpiece Graphic */}
                {isTallLead && (
                  <div className="my-auto flex items-center justify-center py-4">
                    <AchievementArtwork number={item.number} />
                  </div>
                )}

                {/* Bottom Content */}
                <div>
                  <p
                    className={`font-mono text-[11px] font-semibold uppercase tracking-[0.1em] ${
                      isWideLead ? 'text-[var(--sec-secondary)]' : 'text-[var(--sec-accent-ink)]'
                    }`}
                  >
                    {item.subtitle}
                  </p>
                  <h3
                    className={`mt-1.5 font-display text-lg sm:text-xl font-bold leading-snug tracking-tight ${
                      isWideLead ? 'text-white' : 'text-[var(--sec-primary)]'
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`mt-2 text-xs sm:text-sm leading-relaxed ${
                      isWideLead ? 'text-white/85' : 'text-[var(--sec-text-muted)]'
                    }`}
                  >
                    {item.description}
                  </p>

                  {item.externalUrl && (
                    <a
                      href={item.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`mt-3 inline-flex items-center gap-1.5 font-mono text-xs font-semibold transition-opacity hover:opacity-80 ${
                        isWideLead ? 'text-[var(--sec-accent)]' : 'text-[var(--sec-accent-ink)]'
                      }`}
                    >
                      <span>bugbust.vercel.app</span>
                      <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
