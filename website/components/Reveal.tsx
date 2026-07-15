"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
};

// Scroll-triggered fade/rise. Wraps its children in a single element and
// animates in when it enters the viewport. Reduced-motion safe (CSS resets it).
export default function Reveal({
  children,
  as: Tag = "div",
  className = "",
  delay = 0,
  y = 42,
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  // Polymorphic tag — cast avoids React 19's `children: never` union inference.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Component = Tag as React.ComponentType<any>;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { y, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: once
              ? "play none none none"
              : "play none none reverse",
          },
        }
      );
    });
    return () => ctx.revert();
  }, [delay, y, once]);

  return (
    <Component
      ref={ref as React.Ref<HTMLElement>}
      className={`reveal-item ${className}`}
    >
      {children}
    </Component>
  );
}
