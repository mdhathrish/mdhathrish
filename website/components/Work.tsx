import { projects } from "@/lib/projects";
import CaseStudyRow from "./CaseStudyRow";
import Reveal from "./Reveal";

export default function Work() {
  return (
    <section id="work" className="relative scroll-mt-24 py-24 md:py-36">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8">
        <Reveal className="mb-14 flex flex-col gap-6 md:mb-20 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mono-label mb-5 flex items-center gap-3 text-acid">
              <span className="inline-block h-px w-10 bg-acid" />
              Selected work
            </p>
            <h2 className="display fluid-h2 max-w-[12ch] tracking-tighter text-bone">
              Four builds, no filler.
            </h2>
          </div>
          <p className="max-w-sm text-base leading-relaxed text-bone-dim">
            Every project below is a real repository — the descriptions, tech
            stacks and standout details are pulled straight from the code, not
            invented. Expand any row.
          </p>
        </Reveal>
      </div>

      <div className="mx-auto max-w-[1600px] border-t border-ink-line">
        {projects.map((project) => (
          <CaseStudyRow key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
