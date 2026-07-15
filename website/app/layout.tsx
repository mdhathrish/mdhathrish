import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Cursor from "@/components/Cursor";
import Nav from "@/components/Nav";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://justwebsites.in"),
  title: "JW Studio — Design & build for the web",
  description:
    "JW Studio is a one-person web design & development studio building cinematic, motion-led sites and real products. Selected work: Uma Jewellers, SADAF, House of Hangouts, Cosmos Tutorial.",
  keywords: [
    "web design studio",
    "creative developer",
    "GSAP",
    "React Three Fiber",
    "Next.js",
    "motion design",
    "Hyderabad",
  ],
  openGraph: {
    title: "JW Studio — Design & build for the web",
    description:
      "A one-person studio building cinematic, motion-led sites and real products.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0B",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} ${mono.variable}`}
    >
      <body className="cursor-none-fine">
        <div className="grain" aria-hidden />
        <Cursor />
        <SmoothScroll>
          <Nav />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
