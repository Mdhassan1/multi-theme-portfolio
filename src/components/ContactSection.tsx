import { useState } from 'react';
import { motion } from 'motion/react';
import {
  ArrowUpRight,
  Check,
  Copy,
  Download,
  ExternalLink,
  Mail,
  Phone,
} from 'lucide-react';
import {
  CONTACT_INFO,
  CV_ASSET_URL,
  CV_DOWNLOAD_FILENAME,
} from '../data/portfolioData';
import SectionSeoHelmet from './SectionSeoHelmet';

interface ContactSectionProps {
  isSeoActive?: boolean;
}

export default function ContactSection({
  isSeoActive = false,
}: ContactSectionProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_INFO.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2400);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = CONTACT_INFO.email;
      textarea.setAttribute('readonly', '');
      textarea.style.position = 'absolute';
      textarea.style.left = '-9999px';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2400);
    }
  };

  return (
    <section
      id="contact"
      className="theme-contact relative bg-[var(--sec-bg)] text-[var(--sec-text)] border-b border-[var(--sec-border)] py-24 sm:py-32 lg:py-36"
    >
      <SectionSeoHelmet sectionKey="contact" isActive={isSeoActive} />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Creative Brutalist Framed Statement */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="border-2 border-white/85 bg-[var(--sec-surface)]"
        >
          {/* Top Brutalist Ticker / Header Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-white/85 px-6 py-4 sm:px-10">
            <p className="font-mono text-xs font-bold tracking-[0.18em] text-[var(--sec-accent)] uppercase">
              07 / Contact — Creative Brutalist
            </p>
            <span className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--sec-secondary)]">
              Direct Collaboration
            </span>
          </div>

          {/* Unconventional Brutalist Split Grid */}
          <div className="grid lg:grid-cols-12">
            {/* Left Monumental Electric-Yellow Statement Block */}
            <div className="lg:col-span-7 flex flex-col justify-between border-b-2 lg:border-b-0 lg:border-r-2 border-white/85 bg-[var(--sec-primary)] p-8 sm:p-12 lg:p-14 text-[var(--sec-primary-fg)]">
              <div>
                <h2 className="font-display text-[3.1rem] sm:text-[4.5rem] lg:text-[5.25rem] font-extrabold leading-[0.9] tracking-[-0.04em] uppercase">
                  HAVE AN IDEA?
                  <br />
                  LET&apos;S BUILD IT.
                </h2>

                <p className="mt-8 max-w-lg text-base sm:text-xl font-medium leading-relaxed text-[#171717]/85">
                  Interested in building something meaningful? Let&apos;s connect and turn an idea
                  into reality.
                </p>
              </div>

              {/* Raw Brutalist Action Strip */}
              <div className="mt-10 flex flex-wrap items-center gap-3 pt-6 border-t-2 border-[#171717]/25">
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="inline-flex min-h-[48px] items-center gap-2.5 bg-[#171717] px-6 py-3 text-sm font-bold uppercase tracking-wider text-[var(--sec-primary)] transition-colors duration-150 hover:bg-[var(--sec-accent)] hover:text-[#171717] whitespace-nowrap shrink-0"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  <span>Send an Email</span>
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex min-h-[48px] items-center gap-2.5 border-2 border-[#171717] bg-transparent px-5 py-3 text-sm font-bold uppercase tracking-wider text-[#171717] transition-colors duration-150 hover:bg-[#171717] hover:text-[var(--sec-primary)] whitespace-nowrap shrink-0 cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4" aria-hidden="true" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" aria-hidden="true" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>

                <a
                  href={CV_ASSET_URL}
                  download={CV_DOWNLOAD_FILENAME}
                  className="inline-flex min-h-[48px] items-center gap-2.5 border-2 border-[#171717] bg-[var(--sec-accent)] px-5 py-3 text-sm font-bold uppercase tracking-wider text-[var(--sec-accent-fg)] transition-colors duration-150 hover:bg-[#171717] hover:text-white whitespace-nowrap shrink-0"
                >
                  <Download className="h-4 w-4" aria-hidden="true" />
                  <span>Download CV</span>
                </a>
              </div>
            </div>

            {/* Right Raw Contrast Contact Matrix */}
            <div className="lg:col-span-5 flex flex-col divide-y-2 divide-white/85 bg-[var(--sec-bg)]">
              <div className="flex-1 p-7 sm:p-9 flex flex-col justify-between">
                <span className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[var(--sec-secondary)]">
                  01 / Email
                </span>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="mt-4 block font-display text-xl sm:text-2xl font-extrabold tracking-tight text-white transition-colors hover:text-[var(--sec-primary)] break-all"
                >
                  {CONTACT_INFO.email}
                </a>
              </div>

              <div className="flex-1 p-7 sm:p-9 flex flex-col justify-between">
                <span className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[var(--sec-secondary)]">
                  02 / Phone
                </span>
                <a
                  href={CONTACT_INFO.phoneHref}
                  className="mt-4 inline-flex items-center gap-3 font-display text-xl sm:text-2xl font-extrabold tabular-nums text-white transition-colors hover:text-[var(--sec-primary)]"
                >
                  <Phone className="h-5 w-5 text-[var(--sec-accent)]" aria-hidden="true" />
                  <span>{CONTACT_INFO.phoneDisplay}</span>
                </a>
              </div>

              <div className="flex-1 p-7 sm:p-9 flex flex-col justify-between bg-[var(--sec-surface-alt)]">
                <span className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[var(--sec-secondary)]">
                  03 / Live Platform
                </span>
                <a
                  href={CONTACT_INFO.swapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center justify-between gap-2 font-display text-lg sm:text-xl font-bold text-[var(--sec-accent)] transition-colors hover:text-[var(--sec-primary)]"
                >
                  <span>SWAP 2K26 Debugging Platform</span>
                  <ExternalLink className="h-5 w-5 shrink-0" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
