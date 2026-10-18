"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function WildWithin() {
  const [tessellationGrid, setTessellationGrid] = useState<number>(3); // 1 = single tile, 2 = 2x2, 3 = 3x3, 4 = full seamless

  return (
    <section
      id="wild-within"
      className="relative min-h-screen py-24 px-6 md:px-12 bg-[#FBF8F3] paper-grain overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header & Metadata */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 pb-6 border-b border-[#E8E1D5] gap-4">
          <div>
            <div className="flex items-center gap-3 text-xs tracking-widest uppercase text-[#8A7E68] font-mono mb-2">
              <span className="text-[#D4A373] font-bold">PROJECT 02</span>
              <span>•</span>
              <span>PAGE 05</span>
              <span>•</span>
              <span>MIXED MEDIA & PATTERN</span>
            </div>
            <div className="flex flex-wrap items-baseline gap-4">
              <h2 className="font-serif-title text-4xl sm:text-6xl font-light text-[#242220] tracking-tight">
                Wild within
              </h2>
              <span className="font-script-hand text-2xl sm:text-3xl text-[#D4A373]">
                & Seamless pattern
              </span>
            </div>
          </div>

          {/* Technical Metadata */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-mono text-[#6B665F]">
            <span className="px-3 py-1.5 rounded-lg bg-[#F4EFE6] border border-[#E8E1D5]">
              Size: <strong className="text-[#242220]">10.8x12.5 inches</strong>
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-[#F4EFE6] border border-[#E8E1D5]">
              Materials: <strong className="text-[#242220]">Black pen, wool</strong>
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-[#F4EFE6] border border-[#E8E1D5]">
              Year: <strong className="text-[#242220]">2024</strong>
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
            &ldquo;A self potrait using animal inspired pattern. Connecting
            innerself with wild and nature.&rdquo;
          </p>
          <div className="flex items-center gap-2 font-script-hand text-base text-[#D4A373] whitespace-nowrap">
            <Sparkles className="w-4 h-4 text-[#CCD5AE]" />
            tactile pen patterns & wool crochet
          </div>
        </motion.div>

        {/* Side-by-Side Split Showcase: Left Portrait, Right Tessellating Pattern */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Mixed Media Self-Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 flex flex-col justify-between p-6 rounded-3xl bg-[#F4EFE6] border border-[#E8E1D5] shadow-lg"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-serif-title text-2xl text-[#242220] font-medium">
                  Self Portrait
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-[#E9EDC9] text-[#4A4742]">
                  Pen & Crochet
                </span>
              </div>

              {/* Artwork Container */}
              <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-[#ECE5D8] border border-[#E8E1D5] group">
                <Image
                  src="/portfolio/page-5-img-1.webp"
                  alt="Wild within self portrait with wool and pen"
                  fill
                  sizes="(max-width: 1024px) 100vw, 550px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />

                {/* Tactile Wool Callout Badge */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs px-4 py-2 rounded-xl backdrop-blur-md bg-black/40 border border-white/10">
                  <span className="font-serif-title">Tactile Red Wool & Intricate Patterns</span>
                  <span className="font-mono text-[10px] uppercase opacity-80">
                    Handmade
                  </span>
                </div>
              </div>
            </div>

            <p className="font-sans-body text-xs sm:text-sm text-[#6B665F] mt-5 leading-relaxed">
              Combining micro-detailed animal prints and botanical pen
              renderings with physical strands of red and orange crochet wool,
              bridging internal psychology with external wilderness.
            </p>
          </motion.div>

          {/* Right Column: Seamless Pattern Dynamic Tessellation */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-6 flex flex-col justify-between p-6 rounded-3xl bg-[#F4EFE6] border border-[#E8E1D5] shadow-lg"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="font-serif-title text-2xl text-[#242220] font-medium block">
                    Seamless Pattern
                  </span>
                  <span className="text-xs text-[#8A7E68]">
                    Geometric Pencil Unit → Tessellated Grid
                  </span>
                </div>

                {/* Grid Density Controls */}
                <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#ECE5D8] border border-[#E8E1D5]">
                  {[1, 2, 3, 4].map((level) => (
                    <button
                      key={level}
                      onClick={() => setTessellationGrid(level)}
                      className={`px-2.5 py-1 rounded-lg text-xs font-mono font-medium transition-all ${
                        tessellationGrid === level
                          ? "bg-white text-[#242220] shadow-xs"
                          : "text-[#8A7E68] hover:text-[#242220]"
                      }`}
                    >
                      {level === 1 ? "1x Tile" : `${level}x${level}`}
                    </button>
                  ))}
                </div>
              </div>

              {/* Dynamic Tessellation Viewport */}
              <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-[#ECE5D8] border border-[#E8E1D5] p-2 flex items-center justify-center">
                {tessellationGrid === 1 ? (
                  // Single Base Tile
                  <div className="relative w-4/5 aspect-square rounded-xl overflow-hidden border border-[#D4A373] shadow-md">
                    <Image
                      src="/portfolio/page-5-img-3.webp"
                      alt="Single seamless pattern tile in red pencil"
                      fill
                      sizes="350px"
                      className="object-contain"
                    />
                    <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-black/60 text-white text-[10px] font-mono">
                      Base Tile Unit
                    </div>
                  </div>
                ) : tessellationGrid === 4 ? (
                  // Full repeating render
                  <div className="relative w-full h-full rounded-xl overflow-hidden">
                    <Image
                      src="/portfolio/page-5-img-2.webp"
                      alt="Full seamless pattern grid"
                      fill
                      sizes="550px"
                      className="object-cover"
                    />
                    <div className="absolute bottom-2 right-2 px-2.5 py-1 rounded-md bg-black/60 text-white text-[11px] font-mono backdrop-blur-xs">
                      Master Seamless Grid
                    </div>
                  </div>
                ) : (
                  // 2x2 or 3x3 Tessellation
                  <div
                    className="grid w-full h-full gap-1 p-1 rounded-xl overflow-hidden"
                    style={{
                      gridTemplateColumns: `repeat(${tessellationGrid}, minmax(0, 1fr))`,
                      gridTemplateRows: `repeat(${tessellationGrid}, minmax(0, 1fr))`,
                    }}
                  >
                    {Array.from({
                      length: tessellationGrid * tessellationGrid,
                    }).map((_, i) => (
                      <div
                        key={i}
                        className="relative w-full h-full rounded-md overflow-hidden bg-white/40 border border-[#D4A373]/30"
                      >
                        <Image
                          src="/portfolio/page-5-img-3.webp"
                          alt={`Tessellated tile ${i}`}
                          fill
                          sizes="180px"
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Explanatory Caption */}
            <div className="mt-5 flex items-center justify-between text-xs text-[#6B665F]">
              <span className="font-script-hand text-base text-[#D4A373]">
                {tessellationGrid === 1
                  ? "Inspect the isolated red pencil motif"
                  : tessellationGrid === 4
                  ? "Full woven tessellation rhythm"
                  : `Tessellating ${tessellationGrid * tessellationGrid} synchronized tiles`}
              </span>
              <span className="font-mono text-[#8A7E68]">
                Modular Geometry
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
