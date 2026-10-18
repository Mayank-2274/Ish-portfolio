"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  MapPin,
  Compass,
  Palette,
  Camera,
  Radio,
  Sparkles,
  Heart,
} from "lucide-react";

interface HobbyItem {
  id: string;
  name: string;
  icon: React.ReactNode;
  note: string;
  color: string;
}

const HOBBIES: Record<string, HobbyItem> = {
  travelling: {
    id: "travelling",
    name: "Travelling",
    icon: <Compass className="w-4 h-4 text-[#D4A373]" />,
    note: "Pushes comfort zones & broadens global perspectives",
    color: "#D4A373",
  },
  dancing: {
    id: "dancing",
    name: "Dancing",
    icon: <Sparkles className="w-4 h-4 text-[#CCD5AE]" />,
    note: "Rhythm, joy, and physical creative expression",
    color: "#CCD5AE",
  },
  Painting: {
    id: "Painting",
    name: "Painting",
    icon: <Palette className="w-4 h-4 text-[#E76F51]" />,
    note: "Expressing visceral emotions on canvas with acrylics",
    color: "#E76F51",
  },
  Crocheting: {
    id: "Crocheting",
    name: "Crocheting",
    icon: <Heart className="w-4 h-4 text-[#F4A261]" />,
    note: "Therapeutic tactile craft, handmade tops & textures",
    color: "#F4A261",
  },
  "crime podcasts": {
    id: "crime podcasts",
    name: "Crime Podcasts",
    icon: <Radio className="w-4 h-4 text-[#9B2C2C]" />,
    note: "Immersive storytelling, mystery & investigative narrative",
    color: "#9B2C2C",
  },
  Photography: {
    id: "Photography",
    name: "Photography",
    icon: <Camera className="w-4 h-4 text-[#2A9D8F]" />,
    note: "Capturing light, architectural symmetry & raw moments",
    color: "#2A9D8F",
  },
};

export default function About() {
  const [activeHobby, setActiveHobby] = useState<HobbyItem | null>(null);

  return (
    <section
      id="about"
      className="relative min-h-screen py-24 px-6 md:px-12 flex flex-col justify-center items-center bg-[#FBF8F3] overflow-hidden"
    >
      {/* Background Soft Blob */}
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-[#E9EDC9]/30 blur-3xl pointer-events-none -z-10" />

      <div className="w-full max-w-6xl">
        {/* Section Header Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-12 text-xs tracking-widest uppercase text-[#8A7E68]"
        >
          <span className="font-mono text-[#D4A373] font-semibold">
            PAGE 02 //
          </span>
          <span className="font-sans-body">BIOGRAPHY & CREATIVE ROOTS</span>
          <div className="h-[1px] flex-1 bg-[#E8E1D5]" />
        </motion.div>

        {/* Content Grid: Left Portrait + Right Editorial Bio */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Portrait with Parallax Mask & Tactile Framing */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Organic decorative backdrop blob */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#CCD5AE]/40 to-[#FAEDCD]/60 blur-lg -z-10" />

            <div className="relative rounded-3xl overflow-hidden border-2 border-[#E8E1D5] bg-[#F4EFE6] shadow-xl p-2.5">
              <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden">
                <Image
                  src="/portfolio/page-2-img-1.webp"
                  alt="Ishwari Jangam Portrait"
                  fill
                  sizes="(max-width: 768px) 100vw, 450px"
                  className="object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Hometown Badge */}
              <div className="mt-3 flex items-center justify-between px-2 py-1 text-xs text-[#6B665F]">
                <span className="flex items-center gap-1.5 font-medium text-[#242220]">
                  <MapPin className="w-3.5 h-3.5 text-[#D4A373]" /> Pune City,
                  India
                </span>
                <span className="font-script-hand text-base text-[#D4A373]">
                  curious soul & explorer
                </span>
              </div>
            </div>

            {/* Tactile Stamp */}
            <div className="hidden sm:flex absolute -bottom-5 -right-5 w-24 h-24 rounded-full bg-[#E9EDC9] border border-[#CCD5AE] shadow-md items-center justify-center p-2 text-center rotate-6">
              <span className="font-script-hand text-xs font-bold text-[#4A4742] leading-tight">
                Designed & Crafted with Joy
              </span>
            </div>
          </motion.div>

          {/* Right Column: Editorial Typography & Interactive Bio */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <h2 className="font-serif-title text-5xl sm:text-6xl lg:text-7xl font-light text-[#242220] mb-6 tracking-tight flex items-baseline gap-4">
              About
              <span className="font-script-hand text-2xl sm:text-3xl text-[#D4A373] font-normal">
                get to know me
              </span>
            </h2>

            {/* Bio Body Paragraph with Interactive Highlights */}
            <div className="font-sans-body text-base sm:text-lg md:text-xl text-[#3A3835] leading-relaxed space-y-4">
              <p>
                Hello! I am{" "}
                <strong className="font-semibold text-[#242220]">
                  Ishwari Jangam
                </strong>
                , a naturally curious individual with a constant desire to
                explore new things.
              </p>
              <p>
                <button
                  onMouseEnter={() => setActiveHobby(HOBBIES.travelling)}
                  onMouseLeave={() => setActiveHobby(null)}
                  className="font-medium text-[#B07D48] underline decoration-[#D4A373]/60 underline-offset-4 hover:bg-[#FAEDCD] px-1 rounded transition-colors"
                >
                  Travelling
                </button>{" "}
                is one of my passions—it pushes me out of my comfort zone and
                allows me to collect joyful memories. Each journey enriches my
                life and broadens my perspective. I hail from{" "}
                <span className="font-medium text-[#242220]">Pune city</span>.
              </p>
              <p>
                In addition to design, I have various hobbies that I enjoy, such
                as{" "}
                <button
                  onMouseEnter={() => setActiveHobby(HOBBIES.dancing)}
                  onMouseLeave={() => setActiveHobby(null)}
                  className="font-medium text-[#657732] underline decoration-[#CCD5AE] underline-offset-4 hover:bg-[#E9EDC9] px-1 rounded transition-colors"
                >
                  dancing
                </button>
                ,{" "}
                <button
                  onMouseEnter={() => setActiveHobby(HOBBIES.Painting)}
                  onMouseLeave={() => setActiveHobby(null)}
                  className="font-medium text-[#C25E45] underline decoration-[#E76F51]/60 underline-offset-4 hover:bg-[#FAEDCD] px-1 rounded transition-colors"
                >
                  Painting
                </button>{" "}
                allows me to express my emotions on a canvas.{" "}
                <button
                  onMouseEnter={() => setActiveHobby(HOBBIES.Crocheting)}
                  onMouseLeave={() => setActiveHobby(null)}
                  className="font-medium text-[#C87E39] underline decoration-[#F4A261]/60 underline-offset-4 hover:bg-[#FAEDCD] px-1 rounded transition-colors"
                >
                  Crocheting
                </button>{" "}
                has a therapeutic effect on me, and I also love immersing myself
                in{" "}
                <button
                  onMouseEnter={() => setActiveHobby(HOBBIES["crime podcasts"])}
                  onMouseLeave={() => setActiveHobby(null)}
                  className="font-medium text-[#9B2C2C] underline decoration-[#9B2C2C]/50 underline-offset-4 hover:bg-[#FBE8E8] px-1 rounded transition-colors"
                >
                  crime podcasts
                </button>
                .{" "}
                <button
                  onMouseEnter={() => setActiveHobby(HOBBIES.Photography)}
                  onMouseLeave={() => setActiveHobby(null)}
                  className="font-medium text-[#1E7469] underline decoration-[#2A9D8F]/60 underline-offset-4 hover:bg-[#E0F2F1] px-1 rounded transition-colors"
                >
                  Photography
                </button>{" "}
                helps me capture the beauty around me. Each of these hobbies
                reflects a different aspect of my personality and fuels my
                creativity.
              </p>
            </div>

            {/* Interactive Hobby Popover / Active Callout */}
            <div className="mt-8 p-4 rounded-2xl border border-[#E8E1D5] bg-[#F4EFE6]/80 backdrop-blur-sm min-h-[68px] flex items-center transition-all">
              {activeHobby ? (
                <motion.div
                  key={activeHobby.id}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3"
                >
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center shadow-xs"
                    style={{ backgroundColor: `${activeHobby.color}25` }}
                  >
                    {activeHobby.icon}
                  </div>
                  <div>
                    <h4 className="font-serif-title font-bold text-sm text-[#242220]">
                      {activeHobby.name}
                    </h4>
                    <p className="font-sans-body text-xs text-[#6B665F]">
                      {activeHobby.note}
                    </p>
                  </div>
                </motion.div>
              ) : (
                <div className="flex items-center gap-2 text-xs text-[#8A7E68]">
                  <Sparkles className="w-4 h-4 text-[#D4A373] animate-pulse" />
                  <span className="font-script-hand text-base text-[#6B665F]">
                    Hover over any highlighted hobby to peek into my passions
                  </span>
                </div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Animated SVG organic yellow/olive ribbon strokes in the bottom-right corner */}
        <div className="w-full flex justify-end mt-12">
          <svg
            className="w-72 sm:w-96 h-28 overflow-visible"
            viewBox="0 0 380 110"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Stroke 1: Soft Olive Ribbon */}
            <motion.path
              d="M10 90 C 80 10, 160 110, 240 40 C 290 -5, 340 70, 370 20"
              stroke="#CCD5AE"
              strokeWidth="6"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
            />
            {/* Stroke 2: Pastel Yellow Accent */}
            <motion.path
              d="M30 95 C 100 25, 180 120, 260 55 C 310 10, 350 75, 375 35"
              stroke="#E9EDC9"
              strokeWidth="4"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut", delay: 0.2 }}
            />
            {/* Stroke 3: Terracotta highlight with little hand-drawn star */}
            <motion.path
              d="M180 80 C 220 50, 260 90, 320 60"
              stroke="#D4A373"
              strokeWidth="2.5"
              strokeDasharray="4 4"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: "easeInOut", delay: 0.4 }}
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
