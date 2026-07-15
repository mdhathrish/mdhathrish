"use client";

import { useState } from "react";
import type { Project } from "@/lib/projects";

function SitePreview({ project }: { project: Project }) {
  const barLabel = project.live
    ? project.live.replace(/^https?:\/\//, "")
    : `${project.id}.local`;

  const frame = (
    <figure className="group/preview relative overflow-hidden rounded-2xl border border-ink-line bg-ink-raised">
      {/* Browser chrome */}
      <div className="flex items-center gap-3 border-b border-ink-line px-4 py-2.5">
        <span className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-ink-line" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink-line" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink-line" />
        </span>
        <span className="flex min-w-0 flex-1 items-center gap-2 truncate rounded-md bg-ink px-3 py-1 font-mono text-[0.65rem] text-bone-faint">
          {project.live ? (
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-acid" />
          ) : (
            <span className="shrink-0">◌</span>
          )}
          <span className="truncate">{barLabel}</span>
        </span>
      </div>

      {/* Screenshot */}
      <div className="relative aspect-[16/10] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.preview}
          alt={`${project.title} — website preview`}
          loading="lazy"
          className="h-full w-full object-cover object-top transition-transform duration-[900ms] ease-out-expo group-hover/preview:scale-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/5 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
          <div>
            <p className="mono-label text-bone-faint">{project.client}</p>
            <p className="display mt-0.5 text-xl text-bone">{project.title}</p>
          </div>
          {project.live && (
            <span className="flex items-center gap-1.5 rounded-full bg-acid px-3 py-1.5 text-xs font-medium text-ink opacity-0 transition-opacity duration-300 group-hover/preview:opacity-100">
              View live ↗
            </span>
          )}
        </div>
      </div>
    </figure>
  );

  return project.live ? (
    <a
      href={project.live}
      target="_blank"
      rel="noreferrer"
      data-cursor="Open site"
      className="block"
    >
      {frame}
    </a>
  ) : (
    frame
  );
}

export default function CaseStudyRow({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`group border-b border-ink-line transition-colors duration-500 ${
        open ? "bg-ink-soft" : "hover:bg-ink-soft/60"
      }`}
    >
      {/* Header row */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        data-cursor={open ? "Close" : "View"}
        className="flex w-full items-center gap-4 px-5 py-7 text-left sm:gap-8 sm:px-8 md:py-9"
      >
        <span className="mono-label w-8 shrink-0 text-bone-faint transition-colors group-hover:text-acid">
          {project.index}
        </span>

        <span className="flex min-w-0 flex-1 flex-col gap-1 md:flex-row md:items-baseline md:gap-6">
          <span className="display fluid-h3 truncate leading-none text-bone transition-transform duration-500 ease-out-expo md:group-hover:translate-x-2">
            {project.title}
          </span>
          <span className="mono-label shrink-0 text-bone-faint">
            {project.category}
          </span>
        </span>

        <span className="hidden shrink-0 text-sm text-bone-dim lg:block">
          {project.year}
        </span>

        <span
          className={`relative grid h-11 w-11 shrink-0 place-items-center rounded-full border transition-all duration-500 ease-out-expo ${
            open
              ? "rotate-45 border-acid bg-acid text-ink"
              : "border-ink-line text-bone group-hover:border-acid"
          }`}
        >
          <span className="absolute h-4 w-px bg-current" />
          <span className="absolute h-px w-4 bg-current" />
        </span>
      </button>

      {/* Expandable detail panel */}
      <div
        className="grid transition-all duration-700 ease-in-out-quint"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <div className="grid gap-8 px-5 pb-12 sm:px-8 md:grid-cols-[1.1fr_0.9fr] md:gap-14 md:pl-20">
            {/* Left: narrative */}
            <div className="flex flex-col gap-8">
              <p className="max-w-xl text-lg leading-relaxed text-bone sm:text-xl">
                {project.description}
              </p>

              <div>
                <p className="mono-label mb-3 text-acid">The standout</p>
                <p className="max-w-xl border-l-2 border-acid/60 pl-4 text-base leading-relaxed text-bone-dim">
                  {project.standout}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                {project.live ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    data-cursor="Open"
                    className="group/cta inline-flex items-center gap-2.5 rounded-full bg-acid px-5 py-2.5 text-sm font-medium text-ink transition-transform duration-300 hover:scale-[1.03]"
                  >
                    Visit live site
                    <span className="transition-transform duration-300 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5">
                      ↗
                    </span>
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 rounded-full border border-ink-line px-5 py-2.5 text-sm text-bone-faint">
                    <span className="h-1.5 w-1.5 rounded-full bg-bone-faint" />
                    Private / on request
                  </span>
                )}
                {project.liveLabel && (
                  <span className="text-sm text-bone-faint">
                    {project.liveLabel}
                  </span>
                )}
              </div>
            </div>

            {/* Right: meta + stack + visual */}
            <div className="flex flex-col gap-6">
              <SitePreview project={project} />

              <div>
                <p className="mono-label mb-3 text-bone-faint">Discipline</p>
                <div className="flex flex-wrap gap-2">
                  {project.discipline.map((d) => (
                    <span
                      key={d}
                      className="rounded-full border border-ink-line px-3 py-1 text-xs text-bone-dim"
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="mono-label mb-3 text-bone-faint">Built with</p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-md bg-ink-raised px-2.5 py-1 font-mono text-xs text-bone-dim"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
