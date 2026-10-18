"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUp, Heart, MapPin } from "lucide-react";

interface ProjectLink {
  id: string;
  name: string;
  page: string;
}

const PROJECT_LINKS: ProjectLink[] = [
  { id: "journey-across", name: "A journey across", page: "p.04" },
  { id: "wild-within", name: "Wild within", page: "p.05" },
  { id: "color-dash", name: "Color Dash", page: "p.06-07" },
  { id: "box-of-magic", name: "Box of magic", page: "p.08-09" },
  { id: "the-unspoken", name: "The Unspoken", page: "p.10-11" },
  { id: "stop-motion", name: "As i fly high....", page: "p.12" },
  { id: "wandering-eyes", name: "Wandering eyes", page: "p.13-15" },
  { id: "ho-shin", name: "Hoshin", page: "p.16" },
  { id: "dreamy-knits", name: "Dreamy knits", page: "p.17" },
];

export default function Outro() {
  const scrollToTop = () => {
    if (window.__portfolioLenis) {
      window.__portfolioLenis.scrollTo(0, { duration: 1.5 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (window.__portfolioLenis) {
      window.__portfolioLenis.scrollTo(el, { offset: -30, duration: 1.4 });
    } else {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="outro"
      className="relative min-h-screen py-28 px-6 md:px-12 bg-[#FBF8F3] paper-grain flex flex-col justify-between items-center text-center overflow-hidden"
    >
      {/* Background soft ambient accents */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#FAEDCD]/35 blur-3xl pointer-events-none -z-10" />

      {/* Top Page Marker */}
      <div className="w-full max-w-5xl flex justify-between items-center text-xs tracking-widest uppercase text-[#8A7E68] font-mono border-b border-[#E8E1D5] pb-4">
        <span>PAGE 18 • FINAL SLIDE</span>
        <span className="font-script-hand text-base capitalize text-[#D4A373]">
          thank you for visiting
        </span>
      </div>

      {/* Centerpiece: The Typographic Code-Tag Closing & Signature */}
      <div className="w-full max-w-4xl my-auto py-12 flex flex-col items-center">
        {/* Animated Code Tags */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4 mb-10"
        >
          {/* Tag 1: <You end have reached the> */}
          <div className="font-mono text-2xl sm:text-4xl md:text-5xl font-light text-[#242220] tracking-tight flex items-center justify-center gap-1 sm:gap-2">
            <span className="text-[#D4A373] font-bold">&lt;</span>
            <span className="hover:text-[#D4A373] transition-colors">
              You end have reached the
            </span>
            <span className="text-[#D4A373] font-bold">&gt;</span>
          </div>

          {/* Tag 2: <Thank You for time! your> */}
          <div className="font-mono text-2xl sm:text-4xl md:text-5xl font-light text-[#242220] tracking-tight flex items-center justify-center gap-1 sm:gap-2">
            <span className="text-[#CCD5AE] font-bold">&lt;</span>
            <span className="hover:text-[#CCD5AE] transition-colors">
              Thank You for time! your
            </span>
            <span className="text-[#CCD5AE] font-bold">&gt;</span>
          </div>
        </motion.div>

        {/* Ishwari's Graphical Signature Mark from Page 18 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full max-w-xl aspect-[4412/668] my-6"
        >
          <Image
            src="/portfolio/page-18-img-1.webp"
            alt="Ishwari Jangam handwritten artistic signature mark"
            fill
            sizes="(max-width: 768px) 100vw, 600px"
            className="object-contain"
          />
        </motion.div>

        {/* Back to Top Smooth Trigger */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 mb-12"
        >
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#242220] text-white hover:bg-[#D4A373] hover:text-[#242220] transition-all duration-300 shadow-xl shadow-black/10 text-xs font-mono uppercase tracking-widest"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            <span>Return to Portfolio Cover</span>
          </button>
        </motion.div>

        {/* Revisit Project Directory Matrix */}
        <div className="w-full max-w-3xl pt-8 border-t border-[#E8E1D5]">
          <span className="font-mono text-[11px] text-[#8A7E68] uppercase tracking-wider block mb-4">
            Revisit Any Chapter From The 18-Slide Journey:
          </span>
          <div className="flex flex-wrap justify-center gap-2">
            {PROJECT_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="px-3 py-1.5 rounded-lg text-xs font-sans-body bg-[#F4EFE6] hover:bg-[#E9EDC9] border border-[#E8E1D5] text-[#4A4742] transition-colors flex items-center gap-1.5"
              >
                <span className="font-mono text-[10px] text-[#8A7E68]">
                  {link.page}
                </span>
                <span>{link.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Colophon */}
      <footer className="w-full max-w-5xl pt-8 border-t border-[#E8E1D5] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8A7E68]">
        <div className="flex items-center gap-2">
          <MapPin className="w-3.5 h-3.5 text-[#D4A373]" />
          <span>Ishwari Jangam • Pune City, Maharashtra, India</span>
        </div>
        <div className="font-script-hand text-base text-[#D4A373] flex items-center gap-1.5">
          <Heart className="w-3.5 h-3.5 text-[#E76F51]" />
          Crafted with Next.js, Lenis, Framer Motion & Tailwind CSS
        </div>
        <span className="font-mono text-[10px]">
          IDGE2500209 • 2024 Archive
        </span>
      </footer>
    </section>
  );
}
