"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Palette, Sparkles, Droplets } from "lucide-react";

const PALETTE_SWATCHES = [
  { name: "Ice Magenta", hex: "#9D174D", desc: "Vibrant high-contrast shadows" },
  { name: "Royal Indigo", hex: "#1E3A8A", desc: "Cool icy ambient tones" },
  { name: "Solar Ochre", hex: "#D97706", desc: "Radiant warm skin highlights" },
  { name: "Glacial Cyan", hex: "#06B6D4", desc: "Reflective frozen accents" },
  { name: "Alabaster White", hex: "#F8FAFC", desc: "Crisp focal illumination" },
];

export default function HoShin() {
  const [activeSwatch, setActiveSwatch] = useState<string | null>(null);

  return (
    <section
      id="ho-shin"
      className="relative min-h-screen py-24 px-6 md:px-12 bg-[#FBF8F3] paper-grain overflow-hidden transition-colors duration-1000"
    >
      {/* Dynamic Ambient Background Glow inspired by Magenta / Royal Blue / Solar Ochre */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] rounded-full bg-pink-300/25 blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-10 w-[500px] h-[500px] rounded-full bg-blue-300/20 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header & Metadata */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 pb-6 border-b border-[#E8E1D5] gap-4">
          <div>
            <div className="flex items-center gap-3 text-xs tracking-widest uppercase text-[#8A7E68] font-mono mb-2">
              <span className="text-[#D4A373] font-bold">PROJECT 08</span>
              <span>•</span>
              <span>PAGE 16</span>
              <span>•</span>
              <span>ACRYLIC PORTRAITURE</span>
            </div>
            <div className="flex flex-wrap items-baseline gap-3">
              <h2 className="font-serif-title text-4xl sm:text-6xl font-light text-[#242220] tracking-tight">
                Ho-shin
              </h2>
              <span className="font-script-hand text-2xl sm:text-3xl text-[#D4A373]">
                - The ice prince
              </span>
            </div>
          </div>

          {/* Technical Metadata */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-mono text-[#6B665F]">
            <span className="px-3 py-1.5 rounded-lg bg-[#F4EFE6] border border-[#E8E1D5]">
              Size: <strong className="text-[#242220]">8.2 x 11.9 inches</strong>
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-[#F4EFE6] border border-[#E8E1D5]">
              Medium: <strong className="text-[#242220]">Acrylic on Canvas</strong>
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-[#F4EFE6] border border-[#E8E1D5]">
              Year: <strong className="text-[#242220]">2023</strong>
            </span>
          </div>
        </div>

        {/* Narrative Description Banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-5 rounded-2xl bg-[#F4EFE6] border border-[#E8E1D5] mb-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        >
          <p className="font-serif-title text-lg sm:text-xl text-[#242220]">
            &ldquo;This piece was created while i was experimenting with
            different shades. It is a potrait of a kpop singer (J-hope).&rdquo;
          </p>
          <div className="flex items-center gap-2 font-script-hand text-base text-[#D4A373] whitespace-nowrap">
            <Sparkles className="w-4 h-4 text-[#CCD5AE]" />
            vibrant contrast acrylic study
          </div>
        </motion.div>

        {/* Acrylic Centerpiece Display with 3D Tilt & Color Palette Extractor */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Canvas Artwork Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex justify-center"
          >
            <div className="relative w-full max-w-lg p-4 rounded-3xl bg-[#F4EFE6] border border-[#E8E1D5] shadow-2xl group">
              <div className="washi-tape" />

              <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-[#ECE5D8] border border-[#E8E1D5]">
                <Image
                  src="/portfolio/page-16-img-1.webp"
                  alt="Ho-shin - The ice prince acrylic portrait of J-Hope"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 550px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Glare specular reflection effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                {/* Corner Painting Badge */}
                <div className="absolute bottom-3 left-3 px-3 py-1 rounded-lg bg-black/60 backdrop-blur-md text-white text-xs font-mono">
                  J-Hope Acrylic Study • 2023
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Analysis & Color Palette Extractor */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="lg:col-span-5 flex flex-col justify-between space-y-6"
          >
            <div>
              <div className="flex items-center gap-2 mb-2 text-[#D4A373]">
                <Palette className="w-5 h-5" />
                <span className="font-mono text-xs uppercase tracking-wider font-semibold">
                  Color Harmony Exploration
                </span>
              </div>
              <h3 className="font-serif-title text-3xl sm:text-4xl font-light text-[#242220] leading-tight">
                Contrasting Warmth & Glacial Chroma
              </h3>
              <p className="font-sans-body text-sm text-[#6B665F] mt-3 leading-relaxed">
                By juxtaposing saturated magenta and deep indigo under-paintings
                against luminous solar highlights, this portrait creates a vibrant
                sculptural volume, capturing the energetic persona of J-Hope.
              </p>
            </div>

            {/* Extracted Color Palette Swatches */}
            <div className="p-5 rounded-2xl bg-[#F4EFE6] border border-[#E8E1D5]">
              <span className="font-mono text-xs text-[#8A7E68] uppercase tracking-wider block mb-3">
                Extracted Canvas Palette:
              </span>

              <div className="grid grid-cols-5 gap-2.5 mb-4">
                {PALETTE_SWATCHES.map((swatch, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveSwatch(swatch.name)}
                    className="flex flex-col items-center group cursor-pointer"
                    title={`${swatch.name} (${swatch.hex})`}
                  >
                    <div
                      className="w-12 h-12 rounded-xl shadow-md border-2 border-white transition-transform group-hover:scale-110"
                      style={{ backgroundColor: swatch.hex }}
                    />
                    <span className="text-[10px] font-mono text-[#8A7E68] mt-1.5 truncate max-w-full">
                      {swatch.hex}
                    </span>
                  </button>
                ))}
              </div>

              {/* Swatch Detail Pill */}
              <div className="p-3 rounded-xl bg-white/70 border border-[#E8E1D5] text-xs text-[#4A4742] flex items-center justify-between">
                <span className="font-serif-title font-medium">
                  {activeSwatch
                    ? `${activeSwatch} • ${
                        PALETTE_SWATCHES.find((s) => s.name === activeSwatch)?.desc
                      }`
                    : "Tap any swatch to inspect pigment intention"}
                </span>
                <Droplets className="w-3.5 h-3.5 text-[#D4A373]" />
              </div>
            </div>

            {/* Quote / Reflection note */}
            <div className="p-4 rounded-xl bg-[#E9EDC9]/40 border border-[#CCD5AE] text-xs text-[#4A4742]">
              <p className="font-serif-title italic text-sm">
                &ldquo;Experimenting with unexpected tones allowed the shadows to
                breathe with saturated life rather than flat grey.&rdquo;
              </p>
              <span className="font-script-hand text-sm text-[#D4A373] block mt-1">
                — Ishwari Jangam
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
