import { motion } from 'motion/react';
import { EXPERIENCE_COMPANY } from '../data/portfolioData';
import SectionSeoHelmet from './SectionSeoHelmet';

interface ExperienceSectionProps {
  isSeoActive?: boolean;
}

export default function ExperienceSection({
  isSeoActive = false,
}: ExperienceSectionProps) {
  return (
    <section
      id="experience"
      className="theme-experience relative bg-[var(--sec-bg)] text-[var(--sec-text)] border-b border-[var(--sec-border)] py-24 sm:py-32 lg:py-36"
    >
      <SectionSeoHelmet sectionKey="experience" isActive={isSeoActive} />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Swiss Editorial Top Masthead */}
        <div className="flex items-center justify-between border-b border-[var(--sec-border-strong)] pb-4">
          <p className="font-mono text-xs font-semibold tracking-[0.16em] text-[var(--sec-accent-ink)] uppercase">
            04 / Experience — Swiss Editorial
          </p>
          <span className="font-mono text-xs font-medium text-[var(--sec-secondary)]">
            {EXPERIENCE_COMPANY.company} — {EXPERIENCE_COMPANY.location}
          </span>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-12">
          {/* Left Swiss Title Block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <h2 className="font-display text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold leading-[0.98] tracking-[-0.03em] text-[var(--sec-primary)]">
              THE JOURNEY
              <br />
              <span className="text-[var(--sec-secondary)]">SO FAR.</span>
            </h2>

            <div className="mt-10 border-t border-[var(--sec-border-strong)] pt-6 max-w-sm">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--sec-accent-ink)]">
                Organization
              </p>
              <p className="mt-2 font-display text-2xl font-bold uppercase tracking-tight text-[var(--sec-primary)]">
                {EXPERIENCE_COMPANY.company} — {EXPERIENCE_COMPANY.location}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[var(--sec-text-muted)]">
                Progressive experience spanning internship foundation and full-time software
                development across enterprise, travel, and e-commerce applications.
              </p>
            </div>
          </motion.div>

          {/* Right Structured Swiss Editorial Timeline */}
          <div className="lg:col-span-7">
            <div className="relative pl-8 sm:pl-12">
              {/* Thin Connecting Swiss Spine */}
              <div
                aria-hidden="true"
                className="absolute left-1.5 top-2 bottom-2 w-px bg-[var(--sec-secondary)]/65"
              />

              <div className="divide-y divide-[var(--sec-border)] border-y border-[var(--sec-border-strong)]">
                {EXPERIENCE_COMPANY.roles.map((item, idx) => (
                  <motion.div
                    key={item.role}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.5,
                      delay: idx * 0.1,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="relative py-9 sm:py-11"
                  >
                    {/* Swiss Timeline Marker */}
                    <span
                      aria-hidden="true"
                      className={`absolute -left-[33px] sm:-left-[49px] top-11 h-3 w-3 border ${
                        idx === 0
                          ? 'border-[var(--sec-primary)] bg-[var(--sec-accent)]'
                          : 'border-[var(--sec-primary)] bg-[var(--sec-bg)]'
                      }`}
                    />

                    <div className="grid gap-6 sm:grid-cols-12">
                      {/* Oversized Sequence Indicator */}
                      <div className="sm:col-span-3">
                        <span className="font-display text-5xl font-extrabold tabular-nums leading-none text-[var(--sec-numeral)]">
                          {item.index}
                        </span>
                        <span className="mt-3 block font-mono text-xs font-semibold uppercase tracking-[0.12em] text-[var(--sec-accent-ink)]">
                          Duration: {item.duration}
                        </span>
                      </div>

                      {/* Role & Responsibilities */}
                      <div className="sm:col-span-9">
                        <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[var(--sec-primary)]">
                          {item.role}
                        </h3>
                        <p className="mt-1 font-mono text-xs uppercase tracking-[0.1em] text-[var(--sec-secondary)]">
                          {EXPERIENCE_COMPANY.company} · {EXPERIENCE_COMPANY.location}
                        </p>

                        <ul className="mt-6 space-y-3 border-t border-[var(--sec-border)] pt-5">
                          {item.details.map((detail) => (
                            <li
                              key={detail}
                              className="flex items-start gap-3 text-sm sm:text-base leading-relaxed text-[var(--sec-text-secondary)]"
                            >
                              <span
                                aria-hidden="true"
                                className="mt-2.5 h-[2px] w-3 shrink-0 bg-[var(--sec-accent)]"
                              />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
