"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Moon,
  Sun,
  Sparkles,
  Flame,
} from "lucide-react";

export default function PhotographyGallery() {
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const darkSectionRef = useRef<HTMLDivElement>(null);

  // Track mouse coordinates for interactive glow in the dark section
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!darkSectionRef.current) return;
    const rect = darkSectionRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section id="wandering-eyes" className="relative w-full">
      {/* ========================================================
          PART 1: DAYLIGHT & ARCHITECTURE (PDF PAGE 13)
         ======================================================== */}
      <div className="py-24 px-6 md:px-12 bg-[#FBF8F3] paper-grain">
        <div className="max-w-7xl mx-auto">
          {/* Section Header & Metadata */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 pb-6 border-b border-[#E8E1D5] gap-4">
            <div>
              <div className="flex items-center gap-3 text-xs tracking-widest uppercase text-[#8A7E68] font-mono mb-2">
                <span className="text-[#D4A373] font-bold">PROJECT 07</span>
                <span>•</span>
                <span>PAGES 13, 14 & 15</span>
                <span>•</span>
                <span>PHOTOGRAPHY TRIPTYCH</span>
              </div>
              <h2 className="font-serif-title text-4xl sm:text-6xl font-light text-[#242220] tracking-tight">
                Through my wandering eyes
              </h2>
            </div>

            {/* Tagline */}
            <div className="flex items-center gap-2 text-xs font-mono text-[#6B665F]">
              <span className="px-3 py-1.5 rounded-lg bg-[#F4EFE6] border border-[#E8E1D5] flex items-center gap-1.5">
                <Sun className="w-3.5 h-3.5 text-[#D4A373]" /> Part 1 • Daylight
                & Heritage
              </span>
            </div>
          </div>

          {/* Dual Parallax Photo Frames (Balcony & Ancient Temple) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
            {/* Frame 1: Pink Flower Balcony */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 p-4 rounded-3xl bg-[#F4EFE6] border border-[#E8E1D5] shadow-lg group"
            >
              <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-[#ECE5D8]">
                <Image
                  src="/portfolio/page-13-img-1.webp"
                  alt="Pink flower draped vintage balcony"
                  fill
                  sizes="(max-width: 1024px) 100vw, 480px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="mt-3 flex items-center justify-between px-2">
                <span className="font-serif-title font-medium text-base text-[#242220]">
                  Floral Heritage Balcony
                </span>
                <span className="font-script-hand text-base text-[#D4A373]">
                  Pune Old Town
                </span>
              </div>
            </motion.div>

            {/* Frame 2: Symmetrical Ancient Stone Temple */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="lg:col-span-7 p-4 rounded-3xl bg-[#F4EFE6] border border-[#E8E1D5] shadow-lg group"
            >
              <div className="relative aspect-[16/11] w-full rounded-2xl overflow-hidden bg-[#ECE5D8]">
                <Image
                  src="/portfolio/page-13-img-2.webp"
                  alt="Ancient stone temple architecture with monumental pillar"
                  fill
                  sizes="(max-width: 1024px) 100vw, 680px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="mt-3 flex items-center justify-between px-2">
                <span className="font-serif-title font-medium text-base text-[#242220]">
                  Monolithic Stone Architecture
                </span>
                <span className="font-script-hand text-base text-[#D4A373]">
                  Timeless Symmetry
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ========================================================
          PARTS 2 & 3: LIGHT & DARKNESS + CONCEPTUAL TRIO (PAGES 14 & 15)
          Transitions background to deep obsidian (#080808)
         ======================================================== */}
      <div
        ref={darkSectionRef}
        onMouseMove={handleMouseMove}
        className="relative py-28 px-6 md:px-12 bg-[#080808] text-white dark-grain transition-colors duration-1000 overflow-hidden"
      >
        {/* Subtle Interactive Torch / Cursor Spotlight */}
        <div
          className="pointer-events-none absolute w-[550px] h-[550px] rounded-full blur-3xl opacity-25 transition-transform duration-100 ease-out -z-0"
          style={{
            background:
              "radial-gradient(circle, rgba(212, 163, 115, 0.4) 0%, rgba(204, 213, 174, 0.1) 40%, transparent 70%)",
            transform: `translate(${mousePos.x - 275}px, ${mousePos.y - 275}px)`,
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header Tag for Dark Photography Chapters */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-16 border-b border-neutral-800 gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs tracking-widest uppercase text-neutral-400 font-mono mb-2">
                <Moon className="w-3.5 h-3.5 text-[#FAEDCD]" />
                <span>PAGES 14 & 15 • LOW-KEY & CONCEPTUAL DARKROOM</span>
              </div>
              <h3 className="font-serif-title text-4xl sm:text-6xl font-light text-white tracking-tight">
                Light & Darkness
              </h3>
            </div>
            <span className="font-script-hand text-xl text-[#FAEDCD]">
              exploring shadows, fairy lights & psychological metaphors
            </span>
          </div>

          {/* PART 2 (PAGE 14): "The Sparkle within you" & "Magic in your hands" */}
          <div className="mb-24">
            <span className="font-mono text-xs uppercase tracking-wider text-neutral-500 block mb-6">
              Page 14 • Low-Key Illumination
            </span>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Photo 1: The Sparkle within you */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="p-5 rounded-3xl bg-[#141414] border border-neutral-800 shadow-2xl group hover:border-neutral-700 transition-colors"
              >
                <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-black mb-4">
                  <Image
                    src="/portfolio/page-14-img-1.webp"
                    alt="The Sparkle within you low-key fairy lights portrait"
                    fill
                    sizes="(max-width: 768px) 100vw, 550px"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-radial from-transparent to-black/40 pointer-events-none" />
                </div>
                <div className="flex items-center justify-between px-1">
                  <div>
                    <h4 className="font-serif-title text-2xl font-light text-white">
                      The Sparkle within you
                    </h4>
                    <p className="text-xs text-neutral-400 mt-0.5">
                      Warm fairy lights cradled in darkness, illuminating features
                    </p>
                  </div>
                  <Sparkles className="w-5 h-5 text-[#FAEDCD]" />
                </div>
              </motion.div>

              {/* Photo 2: Magic in your hands */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="p-5 rounded-3xl bg-[#141414] border border-neutral-800 shadow-2xl group hover:border-neutral-700 transition-colors"
              >
                <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-black mb-4">
                  <Image
                    src="/portfolio/page-14-img-2.webp"
                    alt="Magic in your hands long exposure light trail photography"
                    fill
                    sizes="(max-width: 768px) 100vw, 550px"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-radial from-transparent to-black/40 pointer-events-none" />
                </div>
                <div className="flex items-center justify-between px-1">
                  <div>
                    <h4 className="font-serif-title text-2xl font-light text-white">
                      Magic in your hands
                    </h4>
                    <p className="text-xs text-neutral-400 mt-0.5">
                      Long-exposure light streaks wrapping palms in luminosity
                    </p>
                  </div>
                  <Flame className="w-5 h-5 text-[#E76F51]" />
                </div>
              </motion.div>
            </div>
          </div>

          {/* PART 3 (PAGE 15): CONCEPTUAL TRIO ("Fear", "Control", "The other side") */}
          <div className="pt-8 border-t border-neutral-900">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-neutral-500 block">
                  Page 15 • Conceptual Series
                </span>
                <h4 className="font-serif-title text-3xl font-light text-white mt-1">
                  Psychological Triptych
                </h4>
              </div>
              <span className="font-script-hand text-lg text-neutral-400">
                Fear • Control • The Other Side
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Concept 1: Fear */}
              <motion.div
                initial={{ opacity: 0, scale: 0.94 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9 }}
                className="p-4 rounded-3xl bg-[#141414] border border-neutral-800 group hover:border-red-950 transition-colors relative"
              >
                <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-black mb-3">
                  <Image
                    src="/portfolio/page-15-img-3.webp"
                    alt="Fear monochrome hands clutching panda plush"
                    fill
                    sizes="380px"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 grayscale contrast-125"
                  />
                </div>
                <h5 className="font-serif-title text-2xl font-light text-white">
                  Fear
                </h5>
                <p className="text-xs text-neutral-400 mt-1">
                  Tense fingers clutching a plush mascot in cold monochrome darkness
                </p>
              </motion.div>

              {/* Concept 2: Control (with descending SVG red marionette threads) */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.15 }}
                className="p-4 rounded-3xl bg-[#141414] border border-neutral-800 group hover:border-red-900 transition-colors relative"
              >
                {/* Descending Red Thread Lines */}
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-32 h-16 pointer-events-none overflow-visible">
                  <svg
                    viewBox="0 0 120 60"
                    fill="none"
                    className="w-full h-full"
                  >
                    <motion.line
                      x1="20"
                      y1="0"
                      x2="35"
                      y2="60"
                      stroke="#EF4444"
                      strokeWidth="1.5"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2 }}
                    />
                    <motion.line
                      x1="60"
                      y1="0"
                      x2="60"
                      y2="60"
                      stroke="#EF4444"
                      strokeWidth="1.5"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.4 }}
                    />
                    <motion.line
                      x1="100"
                      y1="0"
                      x2="85"
                      y2="60"
                      stroke="#EF4444"
                      strokeWidth="1.5"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.1 }}
                    />
                  </svg>
                </div>

                <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-black mb-3">
                  <Image
                    src="/portfolio/page-15-img-2.webp"
                    alt="Control marionette strings conceptual portrait"
                    fill
                    sizes="380px"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <h5 className="font-serif-title text-2xl font-light text-white flex items-center justify-between">
                  Control
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                </h5>
                <p className="text-xs text-neutral-400 mt-1">
                  Puppeteer strings binding gesture and agency in stark contrast
                </p>
              </motion.div>

              {/* Concept 3: The other side */}
              <motion.div
                initial={{ opacity: 0, scale: 0.94 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.3 }}
                className="p-4 rounded-3xl bg-[#141414] border border-neutral-800 group hover:border-blue-950 transition-colors"
              >
                <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-black mb-3">
                  <Image
                    src="/portfolio/page-15-img-1.webp"
                    alt="The other side fanned book reflection"
                    fill
                    sizes="380px"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <h5 className="font-serif-title text-2xl font-light text-white">
                  The other side
                </h5>
                <p className="text-xs text-neutral-400 mt-1">
                  Symmetrical mirrored book foliage creating an infinite portal
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
