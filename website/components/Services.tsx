import Reveal from "./Reveal";

const services = [
  {
    no: "01",
    title: "Web Design & Art Direction",
    body: "Type-led, cinematic layouts designed section by section — never a template. Editorial rhythm, real negative space and a considered palette, whether the brief is heritage-luxury or a product launch.",
    tags: ["Visual identity", "Editorial layout", "Design systems", "Prototyping"],
  },
  {
    no: "02",
    title: "Development & Full-Stack",
    body: "Production Next.js front-ends and, when a project needs a real backend, the whole thing — Supabase, auth, payments, multi-tenant data, mobile apps and CI/CD. Sites that ship, and products that scale.",
    tags: ["Next.js", "TypeScript", "Supabase / Postgres", "Expo", "Vercel"],
  },
  {
    no: "03",
    title: "Motion & Interaction Design",
    body: "The layer that turns a page into an experience: scroll choreography, magnetic cursors, page transitions and real-time WebGL — all reduced-motion safe and tuned to stay fast.",
    tags: ["GSAP · ScrollTrigger", "Lenis", "React Three Fiber", "WebGL"],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative scroll-mt-24 py-24 md:py-36">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8">
        <Reveal className="mb-16 md:mb-24">
          <p className="mono-label mb-5 flex items-center gap-3 text-acid">
            <span className="inline-block h-px w-10 bg-acid" />
            What the studio does
          </p>
          <h2 className="display fluid-h2 max-w-[16ch] tracking-tighter text-bone">
            Three disciplines, one person, one point of contact.
          </h2>
        </Reveal>

        <div className="flex flex-col">
          {services.map((s, i) => (
            <Reveal
              key={s.no}
              delay={i * 0.05}
              className="group grid gap-6 border-t border-ink-line py-10 md:grid-cols-[auto_1fr_1fr] md:gap-14 md:py-14"
            >
              <span className="display text-4xl text-bone-faint transition-colors duration-500 group-hover:text-acid md:text-6xl">
                {s.no}
              </span>
              <h3 className="display text-3xl leading-tight tracking-tight text-bone md:text-5xl">
                {s.title}
              </h3>
              <div className="flex flex-col gap-6">
                <p className="max-w-md text-base leading-relaxed text-bone-dim md:text-lg">
                  {s.body}
                </p>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-ink-line px-3 py-1 text-xs text-bone-faint transition-colors group-hover:border-bone-faint"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
