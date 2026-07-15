import Reveal from "./Reveal";

const principles = [
  {
    k: "One brain, whole build",
    v: "Design, front-end, backend and deploy all live in one head — so nothing gets lost in a hand-off and the vision survives to production.",
  },
  {
    k: "A studio that ships products",
    v: "Not an agency that only talks. Cosmos Tutorial is a live multi-tenant SaaS on the App Store — the same hands that art-direct your site also shipped real software.",
  },
  {
    k: "Motion with restraint",
    v: "Heavy motion when it earns its place, and the discipline to strip 3D out when photography does the job better. Every build is reduced-motion safe.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-24 py-24 md:py-36">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8">
        <div className="grid gap-14 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
          {/* Left column — label + signature block */}
          <Reveal className="flex flex-col justify-between gap-12">
            <div>
              <p className="mono-label mb-5 flex items-center gap-3 text-acid">
                <span className="inline-block h-px w-10 bg-acid" />
                The studio
              </p>
              <h2 className="display fluid-h3 max-w-[14ch] tracking-tight text-bone">
                A one-person studio, run by a founder who also ships.
              </h2>
            </div>

            <div className="rounded-2xl border border-ink-line bg-ink-soft p-7">
              <div className="flex items-center gap-4">
                <span className="grid h-14 w-14 place-items-center rounded-full bg-acid text-ink">
                  <span className="display text-2xl leading-none">JW</span>
                </span>
                <div>
                  <p className="display text-lg text-bone">JW Studio</p>
                  <p className="text-sm text-bone-faint">
                    Independent · Hyderabad, India
                  </p>
                </div>
              </div>
              <dl className="mt-7 grid grid-cols-3 gap-4 border-t border-ink-line pt-6">
                {[
                  ["6 mo", "Solo SaaS, 0→App Store"],
                  ["52", "RLS policies shipped"],
                  ["100%", "Reduced-motion safe"],
                ].map(([n, l]) => (
                  <div key={l}>
                    <dt className="display text-2xl text-acid">{n}</dt>
                    <dd className="mt-1 text-[0.7rem] leading-snug text-bone-faint">
                      {l}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>

          {/* Right column — narrative + principles */}
          <div className="flex flex-col gap-10">
            <Reveal className="text-2xl leading-relaxed text-bone sm:text-3xl">
              <p className="text-balance">
                I design, build and ship the web end to end — usually solo.
                JW Studio is where that turns into client work: cinematic,
                motion-led sites for people who want their corner of the
                internet to{" "}
                <span className="text-acid">feel expensive</span>.
              </p>
            </Reveal>

            <div className="flex flex-col">
              {principles.map((p, i) => (
                <Reveal
                  key={p.k}
                  delay={i * 0.05}
                  className="grid gap-2 border-t border-ink-line py-7 md:grid-cols-[1fr_1.4fr] md:gap-8"
                >
                  <h3 className="display text-xl tracking-tight text-bone md:text-2xl">
                    {p.k}
                  </h3>
                  <p className="text-base leading-relaxed text-bone-dim">
                    {p.v}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
