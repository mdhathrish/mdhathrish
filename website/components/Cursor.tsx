"use client";

import { useEffect, useRef, useState } from "react";

// A magnetic, blend-mode cursor. Grows and labels itself over interactive
// elements tagged with data-cursor. Only rendered on fine pointers.
export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState<string>("");
  const [hovering, setHovering] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!fine || reduced) return;
    setEnabled(true);

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    let raf = 0;

    const move = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (dot.current) {
        dot.current.style.transform = `translate3d(${mx}px, ${my}px, 0)`;
      }
    };

    const loop = () => {
      rx += (mx - rx) * 0.15;
      ry += (my - ry) * 0.15;
      if (ring.current) {
        ring.current.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      }
      raf = requestAnimationFrame(loop);
    };

    const over = (e: MouseEvent) => {
      const el = (e.target as HTMLElement).closest(
        "[data-cursor], a, button"
      ) as HTMLElement | null;
      if (el) {
        setHovering(true);
        setLabel(el.getAttribute("data-cursor") || "");
      }
    };
    const out = (e: MouseEvent) => {
      const el = (e.target as HTMLElement).closest(
        "[data-cursor], a, button"
      ) as HTMLElement | null;
      if (el) {
        setHovering(false);
        setLabel("");
      }
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    window.addEventListener("mouseout", out);
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      window.removeEventListener("mouseout", out);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dot}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[120] -ml-[3px] -mt-[3px] h-1.5 w-1.5 rounded-full bg-acid mix-blend-difference"
      />
      <div
        ref={ring}
        aria-hidden
        className={`pointer-events-none fixed left-0 top-0 z-[120] flex items-center justify-center rounded-full border border-bone/50 mix-blend-difference transition-[width,height,background-color,border-color] duration-300 ease-out-expo ${
          hovering
            ? label
              ? "h-20 w-20 border-transparent bg-acid"
              : "h-14 w-14 border-transparent bg-acid"
            : "h-9 w-9"
        }`}
        style={{ marginLeft: -0, marginTop: -0, translate: "-50% -50%" }}
      >
        {label ? (
          <span className="mono-label text-[0.55rem] tracking-[0.15em] text-ink">
            {label}
          </span>
        ) : null}
      </div>
    </>
  );
}
