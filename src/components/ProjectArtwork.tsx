import type { ArtworkVariant } from '../data/portfolioData';

interface ProjectArtworkProps {
  variant: ArtworkVariant;
  large?: boolean;
}

export default function ProjectArtwork({ variant, large = false }: ProjectArtworkProps) {
  return (
    <div
      aria-hidden="true"
      className={`relative w-full overflow-hidden bg-[var(--sec-surface-alt)] select-none ${
        large ? 'h-64 sm:h-80' : 'h-56 sm:h-64'
      }`}
    >
      {/* Subtle Magazine Grid Layer */}
      <div
        className="absolute inset-0 opacity-85"
        style={{
          backgroundImage:
            'linear-gradient(to right, var(--sec-grid) 1px, transparent 1px), linear-gradient(to bottom, var(--sec-grid) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {variant === 'scrap-finance' && (
        <div className="relative flex h-full w-full items-center justify-center p-6">
          <div className="relative flex w-full max-w-sm items-end justify-between gap-3 border border-[var(--sec-border-strong)] bg-[var(--sec-surface)] p-5 transition-transform duration-300 group-hover:-translate-y-1">
            <div className="space-y-2.5 flex-1">
              <div className="h-2 w-16 bg-[var(--sec-accent)]" />
              <div className="h-2 w-full bg-[var(--sec-primary)]/15" />
              <div className="h-2 w-4/5 bg-[var(--sec-primary)]/15" />
              <div className="h-2 w-3/5 bg-[var(--sec-secondary)]/50" />
            </div>
            <div className="flex items-end gap-1.5 h-20">
              <div className="w-3 h-8 border border-[var(--sec-border-strong)] bg-[var(--sec-bg)]" />
              <div className="w-3 h-14 border border-[var(--sec-border-strong)] bg-[var(--sec-secondary)]/55" />
              <div className="w-3 h-11 border border-[var(--sec-primary)] bg-[var(--sec-accent)]" />
              <div className="w-3 h-20 bg-[var(--sec-primary)]" />
            </div>
          </div>
        </div>
      )}

      {variant === 'gold-ledger' && (
        <div className="relative flex h-full w-full items-center justify-center p-6">
          <div className="relative flex items-center justify-center">
            <div className="h-40 w-40 rounded-full border border-[var(--sec-primary)]/25 flex items-center justify-center transition-transform duration-500 group-hover:rotate-12">
              <div className="h-28 w-28 rounded-full border-2 border-[var(--sec-accent)] flex items-center justify-center">
                <div className="h-14 w-14 border border-[var(--sec-primary)] rotate-45 bg-[var(--sec-secondary)]/45" />
              </div>
            </div>
            <div className="absolute -right-14 top-4 border border-[var(--sec-border-strong)] bg-[var(--sec-surface)] px-3 py-2">
              <div className="h-1.5 w-10 bg-[var(--sec-primary)]" />
              <div className="mt-1.5 h-1 w-14 bg-[var(--sec-accent)]" />
              <div className="mt-1 h-1 w-8 bg-[var(--sec-secondary)]" />
            </div>
          </div>
        </div>
      )}

      {variant === 'productivity' && (
        <div className="relative flex h-full w-full items-center justify-center p-6">
          <div className="w-full max-w-xs space-y-2.5 transition-transform duration-300 group-hover:scale-[1.02]">
            <div className="flex items-center gap-3 border border-[var(--sec-primary)] bg-[var(--sec-surface)] p-3">
              <span className="h-3 w-3 bg-[var(--sec-accent)]" />
              <div className="h-1.5 flex-1 bg-[var(--sec-primary)]/35" />
              <span className="font-mono text-[10px] font-semibold text-[var(--sec-primary)]">01</span>
            </div>
            <div className="flex items-center gap-3 border border-[var(--sec-border-strong)] bg-[var(--sec-surface)] p-3 translate-x-3">
              <span className="h-3 w-3 border border-[var(--sec-primary)] bg-[var(--sec-secondary)]" />
              <div className="h-1.5 flex-1 bg-[var(--sec-primary)]/20" />
              <span className="font-mono text-[10px] text-[var(--sec-text-muted)]">02</span>
            </div>
            <div className="flex items-center gap-3 border border-[var(--sec-border)] bg-[var(--sec-surface)] p-3">
              <span className="h-3 w-3 border border-[var(--sec-accent)]" />
              <div className="h-1.5 w-2/3 bg-[var(--sec-primary)]/25" />
              <span className="font-mono text-[10px] text-[var(--sec-text-muted)]">03</span>
            </div>
          </div>
        </div>
      )}

      {variant === 'swap-debug' && (
        <div className="relative flex h-full w-full items-center justify-center p-6">
          <div className="w-full max-w-sm border-2 border-[var(--sec-primary)] bg-[var(--sec-surface)] p-5 transition-transform duration-300 group-hover:-translate-y-1">
            <div className="flex items-center justify-between border-b border-[var(--sec-border)] pb-3">
              <span className="font-mono text-[11px] font-bold text-[var(--sec-primary)]">
                SWAP 2K26 · TIMED ENGINE
              </span>
              <span className="font-mono text-[11px] font-semibold text-[var(--sec-accent-ink)] tabular-nums">
                00:45:00
              </span>
            </div>
            <div className="mt-4 space-y-2 font-mono text-[11px]">
              <div className="flex items-center justify-between text-[var(--sec-text-muted)]">
                <span>01 · Timed Assessment</span>
                <span className="font-bold text-[var(--sec-primary)]">ACTIVE</span>
              </div>
              <div className="flex items-center justify-between text-[var(--sec-text-muted)]">
                <span>02 · Time Calculation</span>
                <span className="font-semibold text-[var(--sec-accent-ink)]">AUTO</span>
              </div>
              <div className="flex items-center justify-between text-[var(--sec-text-muted)]">
                <span>03 · Marking System</span>
                <span className="font-semibold text-[var(--sec-text)]">READY</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {variant === 'erp' && (
        <div className="relative flex h-full w-full items-center justify-center p-6">
          <div className="grid grid-cols-3 gap-3 w-full max-w-xs">
            <div className="col-span-2 h-14 border border-[var(--sec-border-strong)] bg-[var(--sec-surface)] p-3">
              <div className="h-1.5 w-12 bg-[var(--sec-primary)]" />
              <div className="mt-2 h-1.5 w-full bg-[var(--sec-secondary)]/50" />
            </div>
            <div className="h-14 border border-[var(--sec-primary)] bg-[var(--sec-accent)] p-3" />
            <div className="h-16 border border-[var(--sec-border-strong)] bg-[var(--sec-secondary)]/45 p-3" />
            <div className="col-span-2 h-16 border border-[var(--sec-border-strong)] bg-[var(--sec-surface)] p-3 flex flex-col justify-between">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 bg-[var(--sec-accent)]" />
                <span className="h-2.5 w-2.5 bg-[var(--sec-primary)]" />
              </div>
              <div className="h-1.5 w-3/4 bg-[var(--sec-primary)]/25" />
            </div>
          </div>
        </div>
      )}

      {variant === 'travel' && (
        <div className="relative flex h-full w-full items-center justify-center p-6">
          <svg
            viewBox="0 0 320 180"
            className="h-full w-full max-w-sm transition-transform duration-300 group-hover:scale-[1.03]"
            fill="none"
          >
            <path
              d="M32 135 C 95 45, 195 140, 286 42"
              className="stroke-[var(--sec-primary)]"
              strokeWidth="2.2"
              strokeDasharray="5 5"
            />
            <path
              d="M32 135 C 120 115, 200 70, 286 42"
              className="stroke-[var(--sec-secondary)]"
              strokeWidth="1.5"
            />
            <rect
              x="26"
              y="129"
              width="12"
              height="12"
              className="fill-[var(--sec-surface)] stroke-[var(--sec-primary)]"
              strokeWidth="2"
            />
            <circle
              cx="158"
              cy="92"
              r="7"
              className="fill-[var(--sec-accent)] stroke-[var(--sec-primary)]"
              strokeWidth="1.5"
            />
            <rect
              x="280"
              y="36"
              width="12"
              height="12"
              className="fill-[var(--sec-primary)]"
            />
          </svg>
        </div>
      )}

      {variant === 'bom' && (
        <div className="relative flex h-full w-full items-center justify-center p-6">
          <div className="flex flex-col items-center gap-4 w-full max-w-xs">
            <div className="w-36 border border-[var(--sec-primary)] bg-[var(--sec-primary)] px-4 py-2 text-center">
              <div className="mx-auto h-1.5 w-16 bg-[var(--sec-accent)]" />
            </div>
            <div className="relative flex w-full justify-between px-4">
              <span className="absolute left-1/2 -top-4 h-4 w-px bg-[var(--sec-primary)]/40" />
              <span className="absolute left-10 right-10 top-0 h-px bg-[var(--sec-primary)]/40" />
              <div className="mt-3 w-20 border border-[var(--sec-border-strong)] bg-[var(--sec-surface)] p-2.5">
                <div className="h-1 w-10 bg-[var(--sec-primary)]/45" />
                <div className="mt-1.5 h-1 w-6 bg-[var(--sec-secondary)]" />
              </div>
              <div className="mt-3 w-20 border border-[var(--sec-primary)] bg-[var(--sec-accent)]/35 p-2.5">
                <div className="h-1 w-12 bg-[var(--sec-primary)]" />
                <div className="mt-1.5 h-1 w-8 bg-[var(--sec-primary)]/45" />
              </div>
              <div className="mt-3 w-20 border border-[var(--sec-border-strong)] bg-[var(--sec-surface)] p-2.5">
                <div className="h-1 w-9 bg-[var(--sec-primary)]/45" />
                <div className="mt-1.5 h-1 w-7 bg-[var(--sec-secondary)]" />
              </div>
            </div>
          </div>
        </div>
      )}

      {variant === 'B2C-ecommerce' && (
        <div className="relative flex h-full w-full items-center justify-center p-6">
          <div className="grid grid-cols-12 gap-2.5 w-full max-w-xs transition-transform duration-300 group-hover:-translate-y-1">
            <div className="col-span-7 h-32 border border-[var(--sec-border-strong)] bg-[var(--sec-surface)] p-3 flex flex-col justify-between">
              <div className="h-16 w-full border border-[var(--sec-border)] bg-[var(--sec-secondary)]/35" />
              <div className="flex items-center justify-between">
                <div className="h-1.5 w-14 bg-[var(--sec-primary)]/35" />
                <div className="h-3 w-8 bg-[var(--sec-accent)]" />
              </div>
            </div>
            <div className="col-span-5 flex flex-col gap-2.5">
              <div className="flex-1 border border-[var(--sec-primary)] bg-[var(--sec-primary)] p-2.5">
                <div className="h-1.5 w-8 bg-[var(--sec-accent)]" />
                <div className="mt-2 h-1 w-full bg-white/30" />
              </div>
              <div className="flex-1 border border-[var(--sec-border-strong)] bg-[var(--sec-surface)] p-2.5">
                <div className="h-1.5 w-10 bg-[var(--sec-primary)]/60" />
                <div className="mt-2 h-1 w-2/3 bg-[var(--sec-secondary)]" />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Edge Visual Classification Stamp */}
      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
        <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--sec-text-muted)]">
          {variant === 'swap-debug'
            ? 'Live Web Application'
            : 'Conceptual Architecture Visual'}
        </span>
      </div>
    </div>
  );
}
