import { motion } from 'motion/react';
import { ABOUT_PILLARS } from '../data/portfolioData';
import SectionSeoHelmet from './SectionSeoHelmet';

interface AboutSectionProps {
  isSeoActive?: boolean;
}

export default function AboutSection({ isSeoActive = false }: AboutSectionProps) {
  return (
    <section
      id="about"
      className="theme-about relative bg-[var(--sec-bg)] text-[var(--sec-text)] border-b border-[var(--sec-border)] py-24 sm:py-32 lg:py-36"
    >
      <SectionSeoHelmet sectionKey="about" isActive={isSeoActive} />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Swiss Editorial Top Masthead Rule */}
        <div className="flex items-center justify-between border-b border-[var(--sec-border-strong)] pb-4">
          <p className="font-mono text-xs font-semibold tracking-[0.16em] text-[var(--sec-accent-ink)] uppercase">
            01 / About — Swiss Editorial
          </p>
          <span className="font-mono text-xs text-[var(--sec-secondary)]">
            Profile &amp; Philosophy
          </span>
        </div>

        {/* Asymmetric Swiss Grid Composition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-12"
        >
          {/* Left Oversized Swiss Display Headline */}
          <div className="lg:col-span-6">
            <h2 className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold leading-[0.98] tracking-[-0.03em] text-[var(--sec-primary)]">
              CURIOUS BY NATURE.
              <br />
              <span className="text-[var(--sec-accent)]">BUILDER BY CHOICE.</span>
            </h2>

            {/* Swiss Typographic Coordinates */}
            <div className="mt-10 hidden lg:grid grid-cols-2 gap-6 border-t border-[var(--sec-border)] pt-6 max-w-md">
              <div>
                <span className="block font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--sec-secondary)]">
                  Focus
                </span>
                <span className="mt-1 block text-sm font-semibold text-[var(--sec-text)]">
                  Web &amp; Mobile Applications
                </span>
              </div>
              <div>
                <span className="block font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--sec-secondary)]">
                  Experience Base
                </span>
                <span className="mt-1 block text-sm font-semibold text-[var(--sec-text)]">
                  MoonProduct, Bangalore
                </span>
              </div>
            </div>
          </div>

          {/* Right Asymmetric Editorial Prose Columns */}
          <div className="lg:col-span-6 lg:border-l lg:border-[var(--sec-border)] lg:pl-12">
            <div className="space-y-6 text-base sm:text-lg leading-[1.72] text-[var(--sec-text-secondary)]">
              <p className="text-lg sm:text-xl font-semibold leading-[1.6] text-[var(--sec-primary)]">
                I&apos;m Abdul Rahim, a Software Developer with professional development and
                internship experience at MoonProduct, Bangalore.
              </p>

              <div className="border-t border-[var(--sec-border)] pt-6 space-y-5">
                <p>
                  I work across web and mobile application development, combining technical
                  implementation with an interest in clean interfaces and useful product
                  experiences.
                </p>
                <p>
                  My experience includes contributing to ERP, travel, Bill of Materials and B2C
                  e-commerce applications, alongside developing independent business and
                  productivity products.
                </p>
                <p className="font-medium text-[var(--sec-primary)]">
                  I enjoy solving problems, learning new technologies and turning ideas into working
                  applications.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Three Pure Swiss Editorial Pillars (Hairline Columns, Zero Card Boxes) */}
        <div className="mt-20 grid gap-y-10 border-t border-[var(--sec-border-strong)] pt-10 md:grid-cols-3 md:gap-x-10">
          {ABOUT_PILLARS.map((pillar, idx) => (
            <motion.div
              key={pillar.index}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: idx * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`group flex flex-col justify-between ${
                idx > 0 ? 'md:border-l md:border-[var(--sec-border)] md:pl-10' : ''
              }`}
            >
              <div className="flex items-center justify-between border-b border-[var(--sec-border)] pb-4">
                <span className="font-mono text-xs font-bold tabular-nums text-[var(--sec-accent-ink)]">
                  {pillar.index}
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--sec-secondary)]">
                  Principle
                </span>
              </div>

              <div className="mt-6">
                <h3 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-[var(--sec-primary)] transition-colors group-hover:text-[var(--sec-accent-ink)]">
                  {pillar.title}
                </h3>

                <p className="mt-3 text-sm sm:text-base leading-relaxed text-[var(--sec-text-muted)]">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
