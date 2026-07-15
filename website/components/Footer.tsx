const socials = [
  { label: "Justwebsites.in", href: "https://justwebsites.in" },
  { label: "Cosmos Tutorial", href: "https://cosmostutorial.com" },
  { label: "LinkedIn", href: "https://linkedin.com/in/dhathrish" },
  { label: "GitHub", href: "https://github.com/mdhathrish" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-ink-line pt-16">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8">
        <div className="flex flex-col gap-12 pb-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md">
            <div className="flex items-center gap-2.5">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-acid text-ink">
                <span className="display text-base leading-none">J</span>
              </span>
              <span className="display text-lg tracking-tighter text-bone">
                JW Studio
              </span>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-bone-dim">
              An independent web design & development studio. Cinematic,
              motion-led sites and real products — built end to end by one
              founder.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-12 gap-y-3">
            <p className="mono-label col-span-2 mb-2 text-bone-faint">
              Elsewhere
            </p>
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-1.5 text-sm text-bone-dim transition-colors hover:text-acid"
              >
                {s.label}
                <span className="opacity-0 transition-opacity group-hover:opacity-100">
                  ↗
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Oversized wordmark */}
        <div className="relative border-t border-ink-line pt-6">
          <p
            aria-hidden
            className="display pointer-events-none select-none text-[19vw] leading-[0.8] tracking-tightest text-bone/[0.04]"
          >
            JW STUDIO
          </p>
          <div className="flex flex-col gap-2 pb-8 pt-4 text-xs text-bone-faint sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} JW Studio — Hyderabad, India.</p>
            <p>
              Built with Next.js, GSAP, React Three Fiber &amp; Lenis. Deployed
              on Vercel.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
