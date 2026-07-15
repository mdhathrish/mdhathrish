"use client";

import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { gsap } from "gsap";

// 3D layer is client-only — it won't appear in raw server HTML.
const HeroCanvas = dynamic(() => import("./HeroCanvas"), { ssr: false });

const headline = [
  ["We", "make", "the"],
  ["internet", "feel"],
  ["expensive."],
];

export default function Hero() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power4.out" },
        delay: 0.15,
      });
      tl.from(".hero-eyebrow", { y: 20, opacity: 0, duration: 0.8 })
        .from(
          ".hero-word",
          { yPercent: 115, duration: 1.1, stagger: 0.06 },
          "-=0.4"
        )
        .from(
          ".hero-sub",
          { y: 24, opacity: 0, duration: 0.9 },
          "-=0.7"
        )
        .from(
          ".hero-meta > *",
          { y: 20, opacity: 0, duration: 0.7, stagger: 0.1 },
          "-=0.6"
        )
        .from(".hero-cue", { opacity: 0, duration: 1 }, "-=0.3");
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="top"
      ref={root}
      className="relative flex min-h-[100svh] w-full flex-col justify-between overflow-hidden pt-28"
    >
      {/* 3D background */}
      <div className="pointer-events-none absolute inset-0 -z-0 opacity-90">
        <div className="absolute right-[-10%] top-[-6%] h-[80vh] w-[80vh] md:right-[2%] md:top-[8%]">
          <HeroCanvas />
        </div>
      </div>

      {/* Radial vignette to seat the type over the render */}
      <div className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(120%_90%_at_15%_40%,rgba(10,10,11,0.92)_35%,rgba(10,10,11,0.2)_75%,transparent)]" />

      <div className="relative z-10 mx-auto w-full max-w-[1600px] flex-1 px-5 sm:px-8">
        <div className="flex h-full flex-col justify-center">
          <p className="hero-eyebrow mono-label mb-7 flex items-center gap-3 text-acid">
            <span className="inline-block h-px w-10 bg-acid" />
            Independent web studio — Hyderabad, IN
          </p>

          <h1 className="display fluid-hero tracking-tightest text-bone">
            {headline.map((line, i) => (
              <span key={i} className="block overflow-hidden py-[0.4vw]">
                <span className="inline-block">
                  {line.map((word, j) => (
                    <span
                      key={j}
                      className="hero-word mr-[0.28em] inline-block"
                    >
                      {word === "expensive." ? (
                        <span className="text-acid">{word}</span>
                      ) : (
                        word
                      )}
                    </span>
                  ))}
                </span>
              </span>
            ))}
          </h1>

          <p className="hero-sub mt-9 max-w-xl text-balance text-lg leading-relaxed text-bone-dim sm:text-xl">
            JW Studio is a one-person design & development practice building
            cinematic, motion-led websites — and the occasional real product
            that ships to the App Store.
          </p>
        </div>
      </div>

      {/* Bottom meta row + scroll cue */}
      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-5 pb-8 sm:px-8">
        <div className="hero-meta flex flex-col gap-6 border-t border-ink-line pt-6 sm:flex-row sm:items-end sm:justify-between">
          <dl className="grid grid-cols-3 gap-8 sm:gap-14">
            {[
              ["04", "Selected works"],
              ["1", "Founder, end to end"],
              ["∞", "Pixels obsessed over"],
            ].map(([n, label]) => (
              <div key={label}>
                <dt className="display text-3xl text-bone sm:text-4xl">{n}</dt>
                <dd className="mt-1 max-w-[9rem] text-xs leading-snug text-bone-faint">
                  {label}
                </dd>
              </div>
            ))}
          </dl>

          <a
            href="#work"
            className="hero-cue group flex items-center gap-3 self-start text-sm text-bone-dim sm:self-auto"
          >
            <span className="mono-label">Scroll</span>
            <span className="grid h-10 w-10 place-items-center rounded-full border border-ink-line transition-colors duration-300 group-hover:border-acid">
              <span className="block h-3 w-3 animate-bounce text-acid">↓</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
