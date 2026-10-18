import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans, Caveat } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";

const serifFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const sansFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const scriptFont = Caveat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-script",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Ishwari Jangam | Design & Art Portfolio 2024",
  description:
    "An interactive, scroll-driven editorial portfolio of Ishwari Jangam. Featuring game design, stop-motion animation, crochet knits, conceptual photography, and visual narratives.",
  keywords: [
    "Ishwari Jangam",
    "Design Portfolio",
    "Game Design",
    "Stop Motion",
    "Photography",
    "Crochet",
    "Illustration",
    "Creative Technologist",
  ],
  authors: [{ name: "Ishwari Jangam" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${serifFont.variable} ${sansFont.variable} ${scriptFont.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-[#FBF8F3] text-[#242220] selection:bg-[#CCD5AE] selection:text-[#1a1a1a]">
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
