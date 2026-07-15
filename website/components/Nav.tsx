"use client";

import { useEffect, useState } from "react";
import Magnetic from "./Magnetic";

const links = [
  { label: "Work", id: "work" },
  { label: "Services", id: "services" },
  { label: "Studio", id: "about" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[90] transition-all duration-500 ease-out-expo ${
        scrolled
          ? "border-b border-ink-line/80 bg-ink/70 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-4 sm:px-8 md:py-5">
        <a
          href="#top"
          className="group flex items-center gap-2.5"
          aria-label="JW Studio — home"
        >
          <span className="grid h-8 w-8 place-items-center rounded-full bg-acid text-ink transition-transform duration-500 ease-out-expo group-hover:rotate-[360deg]">
            <span className="display text-base leading-none">J</span>
          </span>
          <span className="display text-lg tracking-tighter">
            JW<span className="text-bone-dim"> Studio</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="group relative px-4 py-2 text-sm text-bone-dim transition-colors hover:text-bone"
            >
              <span className="relative">
                {l.label}
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-acid transition-all duration-400 ease-out-expo group-hover:w-full" />
              </span>
            </a>
          ))}
        </div>

        <Magnetic strength={0.35}>
          <a
            href="#contact"
            data-cursor="Say hi"
            className="group relative overflow-hidden rounded-full border border-ink-line px-5 py-2.5 text-sm font-medium"
          >
            <span className="relative z-10 flex items-center gap-2 transition-colors duration-400 group-hover:text-ink">
              Start a project
              <span className="h-1.5 w-1.5 rounded-full bg-acid transition-colors duration-400 group-hover:bg-ink" />
            </span>
            <span className="absolute inset-0 -z-0 translate-y-full bg-acid transition-transform duration-500 ease-out-expo group-hover:translate-y-0" />
          </a>
        </Magnetic>
      </nav>
    </header>
  );
}
