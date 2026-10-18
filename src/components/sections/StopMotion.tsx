"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Film,
  Play,
  Clock,
  Music,
  Trash2,
  Sparkles,
  ExternalLink,
} from "lucide-react";

const WASTE_MATERIALS = [
  "Two Pens",
  "Broken Piggy Bank",
  "Fabric Bag",
  "Empty Paint Bottles",
  "Broken Phone Case",
  "Paper Handkerchief",
];

export default function StopMotion() {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  return (
    <section
      id="stop-motion"
      className="relative min-h-screen py-24 px-6 md:px-12 bg-[#FBF8F3] paper-grain overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header & Metadata */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 pb-6 border-b border-[#E8E1D5] gap-4">
          <div>
            <div className="flex items-center gap-3 text-xs tracking-widest uppercase text-[#8A7E68] font-mono mb-2">
              <span className="text-[#D4A373] font-bold">PROJECT 06</span>
              <span>•</span>
              <span>PAGE 12</span>
              <span>•</span>
              <span>STOP MOTION ANIMATION</span>
            </div>
            <h2 className="font-serif-title text-4xl sm:text-6xl font-light text-[#242220] tracking-tight">
              As i fly high....
            </h2>
          </div>

          {/* Technical Metadata */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-mono text-[#6B665F]">
            <span className="px-3 py-1.5 rounded-lg bg-[#F4EFE6] border border-[#E8E1D5] flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#D4A373]" />
              Time: <strong className="text-[#242220]">27s</strong>
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-[#F4EFE6] border border-[#E8E1D5] flex items-center gap-1.5">
              <Music className="w-3.5 h-3.5 text-[#D4A373]" />
              Music: <strong className="text-[#242220]">Let it flow</strong>
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
          <div className="max-w-3xl">
            <p className="font-serif-title text-lg sm:text-xl text-[#242220]">
              &ldquo;This is a stop motion animation made using waste
              materials. This was my first ever animation. A story of how a
              handkerchief travels through different imaginary worlds.&rdquo;
            </p>
          </div>
          <div className="flex items-center gap-2 font-script-hand text-base text-[#D4A373] whitespace-nowrap">
            <Sparkles className="w-4 h-4 text-[#CCD5AE]" />
            handcrafted upcycled animation
          </div>
        </motion.div>

        {/* Video & Still Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          {/* Main Video Cinema Screen (Embed YouTube with Fallback Interactive Player) */}
          <div className="lg:col-span-8">
            <div className="relative rounded-3xl overflow-hidden bg-black border-4 border-[#242220] shadow-2xl group">
              <div className="relative aspect-video w-full">
                {isPlaying ? (
                  <iframe
                    src="https://www.youtube-nocookie.com/embed/bP2XGZS8NJU?autoplay=1&rel=0"
                    title="As i fly high.... Stop Motion Animation by Ishwari Jangam"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full border-0"
                  />
                ) : (
                  <div
                    onClick={() => setIsPlaying(true)}
                    className="relative w-full h-full cursor-pointer overflow-hidden"
                  >
                    {/* Pink Craft Still Frame Thumbnail */}
                    <Image
                      src="/portfolio/page-12-img-1.webp"
                      alt="As i fly high stop motion pink craft-flower still"
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 850px"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />

                    {/* Dark gradient & film sprockets */}
                    <div className="absolute inset-0 bg-black/35 group-hover:bg-black/20 transition-colors" />

                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                      <motion.div
                        whileHover={{ scale: 1.15 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-20 h-20 rounded-full bg-[#D4A373] text-[#242220] flex items-center justify-center shadow-2xl pl-1 border-4 border-white/80"
                      >
                        <Play className="w-8 h-8 fill-current" />
                      </motion.div>
                      <span className="font-serif-title text-xl font-medium tracking-wide mt-4 drop-shadow-md">
                        Play Stop-Motion Short (27s)
                      </span>
                      <span className="font-mono text-xs text-white/80 mt-1">
                        Music: &ldquo;Let it flow&rdquo;
                      </span>
                    </div>

                    {/* Stop-Motion Film Strip Perforations Indicator */}
                    <div className="absolute top-3 left-4 right-4 flex items-center justify-between text-white/80 text-[10px] font-mono">
                      <span>FPS: 12 • CLAY & FABRIC</span>
                      <span className="flex items-center gap-1">
                        <Film className="w-3.5 h-3.5 text-[#FAEDCD]" /> FIRST
                        ANIMATION RUN
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Direct Link to YouTube */}
            <div className="mt-3 flex items-center justify-between px-2 text-xs text-[#8A7E68]">
              <span className="font-script-hand text-base text-[#D4A373]">
                A handkerchief dancing through tactile realms
              </span>
              <a
                href="https://youtu.be/bP2XGZS8NJU"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 font-mono hover:text-[#242220] underline transition-colors"
              >
                Watch on YouTube <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Right Column: Tactile Craft Flower Still & Upcycled Waste Materials */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
            {/* Jittering Tactile Craft Card */}
            <div className="p-5 rounded-2xl bg-[#F4EFE6] border border-[#E8E1D5] shadow-md relative">
              {/* Stop-motion jitter label */}
              <div className="washi-tape" />

              <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-[#ECE5D8] mb-3">
                <Image
                  src="/portfolio/page-12-img-1.webp"
                  alt="Original animation keyframe"
                  fill
                  sizes="350px"
                  className="object-cover"
                />
              </div>

              <div className="flex items-center justify-between text-xs text-[#6B665F]">
                <span className="font-serif-title font-bold text-sm text-[#242220]">
                  Craft Flower Keyframe
                </span>
                <span className="font-mono text-[10px] bg-[#E9EDC9] px-2 py-0.5 rounded text-[#4A4742]">
                  Original Still
                </span>
              </div>
            </div>

            {/* Upcycled Waste Materials Checklist */}
            <div className="p-6 rounded-2xl bg-[#F4EFE6] border border-[#E8E1D5] shadow-md">
              <div className="flex items-center gap-2 mb-3 text-[#242220]">
                <Trash2 className="w-4 h-4 text-[#D4A373]" />
                <h4 className="font-serif-title text-base font-bold">
                  Upcycled Waste Materials
                </h4>
              </div>

              <div className="space-y-2">
                {WASTE_MATERIALS.map((mat, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-xs text-[#4A4742] bg-white/70 px-3 py-1.5 rounded-lg border border-[#E8E1D5]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4A373]" />
                    <span>{mat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
