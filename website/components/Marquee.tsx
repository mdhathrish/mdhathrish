const items = [
  "Web Design",
  "Art Direction",
  "Motion",
  "WebGL / 3D",
  "Full-Stack",
  "Next.js",
  "GSAP",
  "Interaction",
];

export default function Marquee() {
  return (
    <div className="relative flex overflow-hidden border-y border-ink-line py-6 md:py-8">
      <div className="flex shrink-0 animate-marquee items-center whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="display px-6 text-3xl tracking-tighter text-bone-dim md:px-10 md:text-5xl">
              {item}
            </span>
            <span className="text-2xl text-acid md:text-3xl">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
