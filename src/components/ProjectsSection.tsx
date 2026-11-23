import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  ExternalLink,
  X,
} from 'lucide-react';
import {
  PROJECT_FILTERS,
  PROJECTS,
  type ProjectFilterGroup,
  type ProjectItem,
} from '../data/portfolioData';
import ProjectArtwork from './ProjectArtwork';
import SectionSeoHelmet from './SectionSeoHelmet';

interface ProjectsSectionProps {
  isSeoActive?: boolean;
}

export default function ProjectsSection({
  isSeoActive = false,
}: ProjectsSectionProps) {
  const [filter, setFilter] = useState<ProjectFilterGroup>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const visibleProjects =
    filter === 'all'
      ? PROJECTS
      : PROJECTS.filter((p) => p.filterGroup === filter);

  // Give SWAP 2K26 (Project 04) cover-feature prominence at the top of the magazine
  const coverFeature = visibleProjects.find(
    (p) => p.id === 'swap-2k26-debugging-platform'
  );
  const editorialProjects = visibleProjects.filter(
    (p) => p.id !== 'swap-2k26-debugging-platform'
  );

  useEffect(() => {
    if (!selectedProject) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      } else if (e.key === 'ArrowRight') {
        const idx = PROJECTS.findIndex((p) => p.id === selectedProject.id);
        setSelectedProject(PROJECTS[(idx + 1) % PROJECTS.length]);
      } else if (e.key === 'ArrowLeft') {
        const idx = PROJECTS.findIndex((p) => p.id === selectedProject.id);
        setSelectedProject(
          PROJECTS[(idx - 1 + PROJECTS.length) % PROJECTS.length]
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject]);

  const navigateModal = (direction: 'prev' | 'next') => {
    if (!selectedProject) return;
    const idx = PROJECTS.findIndex((p) => p.id === selectedProject.id);
    const nextIdx =
      direction === 'next'
        ? (idx + 1) % PROJECTS.length
        : (idx - 1 + PROJECTS.length) % PROJECTS.length;
    setSelectedProject(PROJECTS[nextIdx]);
  };

  // Asymmetric magazine grid spans per index when displaying editorial works
  const getMagazineSpan = (index: number, total: number): string => {
    if (total === 1) return 'lg:col-span-12';
    if (total === 3) {
      if (index === 0) return 'lg:col-span-7';
      if (index === 1) return 'lg:col-span-5';
      return 'lg:col-span-12';
    }
    if (total === 4) {
      if (index === 0) return 'lg:col-span-5';
      if (index === 1) return 'lg:col-span-7';
      return 'lg:col-span-6';
    }
    switch (index) {
      case 0:
        return 'lg:col-span-7';
      case 1:
        return 'lg:col-span-5';
      case 2:
        return 'lg:col-span-12';
      case 3:
        return 'lg:col-span-5';
      case 4:
        return 'lg:col-span-7';
      default:
        return 'lg:col-span-6';
    }
  };

  return (
    <section
      id="projects"
      className="theme-projects relative bg-[var(--sec-bg)] text-[var(--sec-text)] border-b border-[var(--sec-border)] py-24 sm:py-32 lg:py-36"
    >
      <SectionSeoHelmet
        sectionKey="projects"
        isActive={isSeoActive || Boolean(selectedProject)}
        activeProject={selectedProject}
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Magazine Issue Header & Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-8 border-b border-[var(--sec-border-strong)] pb-10 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            <p className="font-mono text-xs font-semibold tracking-[0.16em] text-[var(--sec-accent-ink)] uppercase">
              03 / Projects — Modern Magazine
            </p>
            <h2 className="mt-4 font-display text-3xl sm:text-5xl lg:text-[3.35rem] font-extrabold leading-[1.0] tracking-[-0.03em] text-[var(--sec-primary)]">
              SELECTED WORKS.
              <br />
              <span className="text-[var(--sec-accent)]">REAL PROBLEMS.</span>
              <br />
              DIGITAL SOLUTIONS.
            </h2>
          </div>

          <div
            role="tablist"
            aria-label="Filter projects by category"
            className="flex flex-wrap gap-2"
          >
            {PROJECT_FILTERS.map((item) => {
              const active = filter === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setFilter(item.id)}
                  className={`min-h-[40px] border px-4 py-2 text-xs font-semibold transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                    active
                      ? 'border-[var(--sec-primary)] bg-[var(--sec-primary)] text-[var(--sec-primary-fg)]'
                      : 'border-[var(--sec-border)] bg-[var(--sec-surface)] text-[var(--sec-text-muted)] hover:border-[var(--sec-primary)] hover:text-[var(--sec-primary)]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* COVER STORY FEATURE SPREAD: PROJECT 04 — SWAP 2K26 */}
        {coverFeature && (
          <motion.article
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="group mt-12 grid border border-[var(--sec-primary)] bg-[var(--sec-primary)] text-[var(--sec-primary-fg)] lg:grid-cols-12"
          >
            {/* Left Large Feature Artwork */}
            <div className="lg:col-span-7 border-b lg:border-b-0 lg:border-r border-white/15 overflow-hidden">
              <div className="h-full transition-transform duration-500 group-hover:scale-[1.015]">
                <ProjectArtwork variant={coverFeature.artwork} large />
              </div>
            </div>

            {/* Right Editorial Case Study Story on Deep Forest Green */}
            <div className="lg:col-span-5 flex flex-col justify-between p-7 sm:p-10">
              <div>
                <div className="flex items-baseline justify-between gap-4 border-b border-white/15 pb-4">
                  <span className="font-display text-5xl sm:text-6xl font-extrabold tabular-nums leading-none text-[var(--sec-accent)]">
                    {coverFeature.number}
                  </span>
                  <div className="text-right">
                    <span className="block font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--sec-accent)]">
                      Featured Live Platform
                    </span>
                    <span className="mt-0.5 block text-xs text-[var(--sec-secondary)]">
                      {coverFeature.category}
                    </span>
                  </div>
                </div>

                <h3 className="mt-7 font-display text-2xl sm:text-3xl font-extrabold leading-tight tracking-tight text-white">
                  {coverFeature.title}
                </h3>

                <p className="mt-4 text-base leading-relaxed text-white/85">
                  {coverFeature.description}
                </p>

                {coverFeature.features && (
                  <div className="mt-6 border-t border-white/15 pt-5">
                    <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--sec-secondary)]">
                      Key Platform Features
                    </p>
                    <ul className="mt-3 space-y-2">
                      {coverFeature.features.map((feat) => (
                        <li
                          key={feat}
                          className="flex items-center gap-2.5 text-sm text-white/95"
                        >
                          <Check
                            className="h-3.5 w-3.5 shrink-0 text-[var(--sec-accent)]"
                            aria-hidden="true"
                          />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-white/15 pt-5">
                <a
                  href={coverFeature.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[42px] items-center gap-2 bg-[var(--sec-accent)] px-5 py-2.5 text-xs font-bold text-[var(--sec-accent-fg)] transition-opacity hover:opacity-90"
                >
                  <span>Visit Live Website</span>
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>

                <button
                  type="button"
                  onClick={() => setSelectedProject(coverFeature)}
                  className="inline-flex min-h-[40px] items-center gap-1.5 text-xs font-mono font-medium uppercase tracking-wider text-white transition-colors hover:text-[var(--sec-accent)] cursor-pointer"
                >
                  <span>Read Case Note</span>
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </motion.article>
        )}

        {/* ASYMMETRIC MAGAZINE EDITORIAL SPREADS */}
        {editorialProjects.length > 0 && (
          <div className="mt-8 grid gap-6 lg:grid-cols-12">
            {editorialProjects.map((project, index) => {
              const spanClass = getMagazineSpan(index, editorialProjects.length);
              const isHorizontalSpread = spanClass === 'lg:col-span-12';

              return (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{
                    duration: 0.45,
                    delay: (index % 2) * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`group border border-[var(--sec-border)] bg-[var(--sec-surface)] transition-colors duration-200 hover:border-[var(--sec-primary)] ${spanClass} ${
                    isHorizontalSpread
                      ? 'grid lg:grid-cols-12'
                      : 'flex flex-col justify-between'
                  }`}
                >
                  {/* Visual Preview */}
                  <div
                    className={`overflow-hidden ${
                      isHorizontalSpread
                        ? 'lg:col-span-6 border-b lg:border-b-0 lg:border-r border-[var(--sec-border)]'
                        : 'border-b border-[var(--sec-border)]'
                    }`}
                  >
                    <div className="h-full transition-transform duration-500 group-hover:scale-[1.02]">
                      <ProjectArtwork
                        variant={project.artwork}
                        large={isHorizontalSpread}
                      />
                    </div>
                  </div>

                  {/* Magazine Copy Block */}
                  <div
                    className={`flex flex-col justify-between ${
                      isHorizontalSpread ? 'lg:col-span-6' : 'flex-1'
                    }`}
                  >
                    <div className="p-6 sm:p-8">
                      <div className="flex items-baseline justify-between gap-4 border-b border-[var(--sec-border)] pb-4">
                        <span className="font-display text-4xl font-extrabold tabular-nums leading-none text-[var(--sec-numeral)] transition-colors duration-200 group-hover:text-[var(--sec-accent-ink)]">
                          {project.number}
                        </span>
                        <span className="text-right font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--sec-text-muted)]">
                          {project.category}
                        </span>
                      </div>

                      <h3 className="mt-6 font-display text-2xl sm:text-[1.7rem] font-bold leading-tight tracking-tight text-[var(--sec-primary)] transition-colors group-hover:text-[var(--sec-accent-ink)]">
                        {project.title}
                      </h3>

                      <p className="mt-3 text-sm sm:text-base leading-relaxed text-[var(--sec-text-secondary)]">
                        {project.description}
                      </p>

                      {project.technologies && project.technologies.length > 0 && (
                        <p className="mt-5 font-mono text-xs text-[var(--sec-text-muted)]">
                          {project.technologies.join(' · ')}
                        </p>
                      )}
                    </div>

                    <div className="flex items-center justify-between border-t border-[var(--sec-border)] px-6 py-4 sm:px-8 bg-[var(--sec-surface-alt)]/35">
                      <span className="font-mono text-[11px] text-[var(--sec-text-muted)]">
                        {project.visualType}
                      </span>

                      <button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex min-h-[40px] items-center gap-2 text-xs font-bold uppercase tracking-[0.1em] text-[var(--sec-primary)] transition-colors hover:text-[var(--sec-accent-ink)] cursor-pointer"
                      >
                        <span>Inspect Spread</span>
                        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        )}
      </div>

      {/* Magazine Case Study Detail Modal */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#193D32]/75 p-4 sm:p-6 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto border-2 border-[var(--sec-primary)] bg-[var(--sec-surface)] text-[var(--sec-text)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[var(--sec-border)] bg-[var(--sec-bg)] px-6 py-4 sm:px-8">
              <div className="flex items-center gap-3 font-mono text-xs">
                <span className="font-bold text-[var(--sec-accent-ink)]">
                  PROJECT {selectedProject.number}
                </span>
                <span className="text-[var(--sec-border-strong)]">/</span>
                <span className="text-[var(--sec-text-muted)]">
                  {selectedProject.visualType}
                </span>
              </div>

              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                aria-label="Close project details"
                className="inline-flex h-10 w-10 items-center justify-center border border-[var(--sec-border-strong)] bg-[var(--sec-surface)] text-[var(--sec-primary)] transition-colors hover:bg-[var(--sec-primary)] hover:text-[var(--sec-primary-fg)] cursor-pointer"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>

            <div className="border-b border-[var(--sec-border)]">
              <ProjectArtwork variant={selectedProject.artwork} large />
            </div>

            <div className="p-6 sm:p-8">
              <p className="text-xs font-mono uppercase tracking-[0.12em] text-[var(--sec-text-muted)]">
                {selectedProject.category}
              </p>

              <h3
                id="project-modal-title"
                className="mt-3 font-display text-2xl sm:text-3xl font-bold tracking-tight text-[var(--sec-primary)]"
              >
                {selectedProject.title}
              </h3>

              <p className="mt-4 text-base leading-relaxed text-[var(--sec-text-secondary)]">
                {selectedProject.description}
              </p>

              {selectedProject.features &&
                selectedProject.features.length > 0 && (
                  <div className="mt-7 border-t border-[var(--sec-border)] pt-6">
                    <h4 className="font-mono text-xs uppercase tracking-[0.12em] text-[var(--sec-text-muted)]">
                      Platform Capabilities
                    </h4>
                    <ul className="mt-3 grid gap-2.5 sm:grid-cols-3">
                      {selectedProject.features.map((feat) => (
                        <li
                          key={feat}
                          className="flex items-center gap-2 text-sm text-[var(--sec-text)]"
                        >
                          <Check
                            className="h-3.5 w-3.5 shrink-0 text-[var(--sec-accent-ink)]"
                            aria-hidden="true"
                          />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

              {selectedProject.technologies &&
                selectedProject.technologies.length > 0 && (
                  <div className="mt-7 border-t border-[var(--sec-border)] pt-6">
                    <h4 className="font-mono text-xs uppercase tracking-[0.12em] text-[var(--sec-text-muted)]">
                      Associated MoonProduct Stack
                    </h4>
                    <p className="mt-2.5 font-mono text-sm text-[var(--sec-text-secondary)]">
                      {selectedProject.technologies.join(' · ')}
                    </p>
                  </div>
                )}

              <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-[var(--sec-border)] pt-6">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => navigateModal('prev')}
                    className="inline-flex min-h-[40px] items-center gap-2 border border-[var(--sec-border-strong)] px-4 py-2 text-xs font-medium text-[var(--sec-primary)] transition-colors hover:bg-[var(--sec-primary)] hover:text-[var(--sec-primary-fg)] cursor-pointer"
                  >
                    <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>Previous</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => navigateModal('next')}
                    className="inline-flex min-h-[40px] items-center gap-2 border border-[var(--sec-border-strong)] px-4 py-2 text-xs font-medium text-[var(--sec-primary)] transition-colors hover:bg-[var(--sec-primary)] hover:text-[var(--sec-primary-fg)] cursor-pointer"
                  >
                    <span>Next</span>
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </button>
                </div>

                {selectedProject.externalUrl && (
                  <a
                    href={selectedProject.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[42px] items-center gap-2 bg-[var(--sec-accent)] px-5 py-2.5 text-xs font-bold text-[var(--sec-accent-fg)] transition-opacity hover:opacity-90"
                  >
                    <span>Visit bugbust.vercel.app</span>
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
