"use client";

import { useRef, cloneElement, type ReactElement } from "react";
import { gsap } from "gsap";

// Wraps a single element and pulls it toward the pointer while hovered.
export default function Magnetic({
  children,
  strength = 0.4,
}: {
  children: ReactElement;
  strength?: number;
}) {
  const ref = useRef<HTMLElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - (rect.left + rect.width / 2)) * strength;
    const y = (e.clientY - (rect.top + rect.height / 2)) * strength;
    gsap.to(el, { x, y, duration: 0.6, ease: "power3.out" });
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    gsap.to(el, { x: 0, y: 0, duration: 0.7, ease: "elastic.out(1, 0.4)" });
  };

  return cloneElement(children as ReactElement<Record<string, unknown>>, {
    ref,
    onMouseMove: onMove,
    onMouseLeave: onLeave,
  });
}
