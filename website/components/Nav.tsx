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
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Keep the panel from surviving a resize back up to desktop, and let
  // Escape close it like any other overlay.
  useEffect(() => {
    if (!menuOpen) return;
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    window.addEventListener("keydown", onKey);
    const { overflow } = document.documentElement.style;
    document.documentElement.style.overflow = "hidden";
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = overflow;
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[90] transition-all duration-500 ease-out-expo ${
        scrolled || menuOpen
          ? "border-b border-ink-line/80 bg-ink/70 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-4 sm:px-8 md:py-5">
        <a
          href="#top"
          onClick={() => setMenuOpen(false)}
          className="group relative z-10 flex items-center gap-2.5"
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

        <div className="flex items-center gap-2.5 sm:gap-3">
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-full border border-ink-line text-bone transition-colors md:hidden"
          >
            <span className="relative block h-3 w-4">
              <span
                className={`absolute left-0 top-0 h-px w-4 bg-current transition-transform duration-300 ease-out-expo ${
                  menuOpen ? "translate-y-[5.5px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute bottom-0 left-0 h-px w-4 bg-current transition-transform duration-300 ease-out-expo ${
                  menuOpen ? "-translate-y-[5.5px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>

          <Magnetic strength={0.35}>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              data-cursor="Say hi"
              className="group relative shrink-0 overflow-hidden rounded-full border border-ink-line px-4 py-2.5 text-sm font-medium sm:px-5"
            >
              <span className="relative z-10 flex items-center gap-2 transition-colors duration-400 group-hover:text-ink">
                <span className="sm:hidden">Start</span>
                <span className="hidden sm:inline">Start a project</span>
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-acid transition-colors duration-400 group-hover:bg-ink" />
              </span>
              <span className="absolute inset-0 -z-0 translate-y-full bg-acid transition-transform duration-500 ease-out-expo group-hover:translate-y-0" />
            </a>
          </Magnetic>
        </div>
      </nav>

      {/* Mobile link panel */}
      <div
        id="mobile-menu"
        className="grid transition-[grid-template-rows] duration-500 ease-out-expo md:hidden"
        style={{ gridTemplateRows: menuOpen ? "1fr" : "0fr" }}
      >
        <div
          className={`overflow-hidden border-t ${
            menuOpen ? "border-ink-line/80" : "border-transparent"
          }`}
        >
          <div className="flex flex-col px-5 py-2 sm:px-8">
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={() => setMenuOpen(false)}
                className="border-b border-ink-line py-4 text-lg text-bone-dim transition-colors last:border-none hover:text-bone"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
