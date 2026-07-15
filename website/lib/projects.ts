export type Project = {
  id: string;
  index: string;
  title: string;
  client: string;
  year: string;
  category: string;
  discipline: string[];
  summary: string;
  description: string;
  standout: string;
  stack: string[];
  live: string | null;
  liveLabel: string | null;
  preview: string; // screenshot of the actual site in /public/previews
};

// Every field below is drawn from the real repos in ../_discovery — no placeholders.
export const projects: Project[] = [
  {
    id: "uma-jewellers",
    index: "01",
    title: "Uma Jewellers",
    client: "Uma Jewellers · Hyderabad, est. 1990",
    year: "2025",
    category: "3D / Motion Site",
    discipline: ["Art Direction", "WebGL / 3D", "Motion"],
    summary:
      "An Awwwards-caliber single-page site for a Hyderabad gold & diamond house — a live WebGL ring layered under a choreographed scroll pipeline.",
    description:
      "Ten art-directed sections built around a real-time 3D hero. The ring renders live via React Three Fiber, layered beneath a GSAP + Lenis scroll choreography so type, imagery and the 3D layer move as one composition. Not a static landing page — the WebGL layer is client-only and only exists once the site is running.",
    standout:
      "A live, client-only (ssr:false) WebGL ring driving the hero — the flagship 3D build, tuned so the scroll pipeline and the render never fight each other.",
    stack: [
      "Next.js 15",
      "React 19",
      "TypeScript 5",
      "React Three Fiber 9",
      "drei",
      "three.js 0.185",
      "GSAP 3 · ScrollTrigger",
      "Lenis 1.3",
      "Tailwind CSS 4",
      "Turbopack",
    ],
    live: "https://umajewellers1990.vercel.app",
    liveLabel: "umajewellers1990.vercel.app",
    preview: "/previews/uma-jewellers.jpg",
  },
  {
    id: "sadaf",
    index: "02",
    title: "SADAF — House of Pearls",
    client: "SADAF · heritage pearl house (demo)",
    year: "2025",
    category: "Editorial Luxury",
    discipline: ["Art Direction", "Editorial", "Motion"],
    summary:
      "Clean editorial luxury for a heritage pearl house — the restraint piece, rebuilt from a dark WebGL version into real photography.",
    description:
      "A study in art-directed restraint. An earlier dark, WebGL-choreographed version was deliberately torn down and rebuilt around real editorial photography because no procedural render cleared the photoreal bar. Warm ivory grounds, near-black type, nacre-rose and antique-gold reserved strictly as accents. Hero → collections carousel → spotlight → craftsmanship split → heritage timeline → FAQ → atelier CTA.",
    standout:
      "Knowing when to remove the 3D. Kept to a 159 kB first-load budget — Lenis is dynamically imported post-hydration — and reduced-motion safe throughout.",
    stack: [
      "Next.js 15",
      "TypeScript",
      "Tailwind CSS",
      "GSAP 3 · ScrollTrigger",
      "Lenis (lazy post-hydration)",
      "Archivo / Playfair Display",
      "next/font",
    ],
    live: "https://sadaf-zeta.vercel.app",
    liveLabel: "sadaf-zeta.vercel.app",
    preview: "/previews/sadaf.jpg",
  },
  {
    id: "house-of-hangouts",
    index: "03",
    title: "House of Hangouts",
    client: "House of Hangouts · live jam sessions",
    year: "2025",
    category: "Product / Booking Platform",
    discipline: ["Product Design", "Full-Stack", "Systems"],
    summary:
      "A real booking product for intimate live jam sessions — UPI payment, admin verification and QR-ticketed entry, end to end.",
    description:
      "Not a landing page — a working product. Guests book tickets and pay via UPI manually; an admin verifies the payment screenshot; a QR-coded ticket is generated and emailed automatically. Client-side image compression on screenshot upload, schema-validated forms, and an in-browser QR scanner for door check-in.",
    standout:
      "The full manual-UPI → verification → QR-ticket-by-email flow, wired on Supabase with Resend — real product logic and door-side scanning, not a mockup.",
    stack: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "Supabase · Postgres / Auth / Storage",
      "Resend (QR ticket email)",
      "zod · react-hook-form",
      "html5-qrcode",
    ],
    live: "https://houseofhangouts.com",
    liveLabel: "houseofhangouts.com",
    preview: "/previews/house-of-hangouts.jpg",
  },
  {
    id: "cosmos-tutorial",
    index: "04",
    title: "Cosmos Tutorial",
    client: "Cosmos Tutorial · B2B SaaS",
    year: "2024 — now",
    category: "Multi-tenant SaaS",
    discipline: ["Product", "Full-Stack", "Mobile", "Infra"],
    summary:
      "A multi-tenant B2B platform for coaching institutes — students, fees, attendance and a parent app — built and shipped solo.",
    description:
      "The proof that this studio ships real products, not just sites. A full multi-tenant SaaS: an admin portal for institutes plus an Expo parent app on iOS and Android. Institute-level data isolation enforced by 52 RLS policies over 18 database functions, AI-generated progress reports, signed-URL study materials and push notifications — built solo in roughly six months, live on the App Store.",
    standout:
      "Multi-tenant isolation done properly: 52 row-level-security policies, staging/production separation, Sentry monitoring and a full CI/CD pipeline — one founder, end to end.",
    stack: [
      "Next.js 14",
      "Expo React Native (iOS + Android)",
      "Supabase · 52 RLS policies",
      "PostgreSQL",
      "Gemini AI (reports)",
      "Expo Push",
      "GitHub Actions · EAS · Vercel",
      "Sentry",
    ],
    live: "https://cosmostutorial.com",
    liveLabel: "cosmostutorial.com · App Store",
    preview: "/previews/cosmos-tutorial.jpg",
  },
];
