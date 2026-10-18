"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { playPaperCreaseSound } from "@/lib/sound";

const UNFOLDING_STEPS = [
  {
    step: 1,
    title: "1. Flat Die-Cut & Geometric Creasing",
    desc: "Initial planar layout detailing foldable flaps, structural score lines, and precision cardboard interlocking seams.",
    imgSrc: "/portfolio/page-8-img-1.webp",
  },
  {
    step: 2,
    title: "2. Isometric Unfolding Mechanics",
    desc: "Cardboard folding progression showing the tactile angled lid sliding open without tearing or catching the card deck.",
    imgSrc: "/portfolio/page-8-img-2.webp",
  },
  {
    step: 3,
    title: "3. Fully Articulated Ergonomic Box",
    desc: "Complete structural container with secure lid retention, engineered for rapid gameplay setup and snug card storage.",
    imgSrc: "/portfolio/page-8-img-3.webp",
  },
];

const PROTOTYPE_PHOTOS = [
  {
    title: "Octagonal Lid Profile",
    caption: "Matte black finish with hand-rendered Color Dash lettering",
    imgSrc: "/portfolio/page-9-img-1.webp",
    aspect: "aspect-square",
  },
  {
    title: "Telescoping Joint Detail",
    caption: "Tight friction fit ensuring cards remain secure during transport",
    imgSrc: "/portfolio/page-9-img-2.webp",
    aspect: "aspect-[4/3]",
  },
  {
    title: "Physical Prototype in Hand",
    caption: "Real-world scale testing: compact 4 x 2.7 inches ergonomic footprint",
    imgSrc: "/portfolio/page-9-img-3.webp",
    aspect: "aspect-[3/4]",
  },
];

export default function BoxOfMagic() {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section
      id="box-of-magic"
      className="relative min-h-screen py-24 px-6 md:px-12 bg-[#FBF8F3] paper-grain overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header & Metadata */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 pb-6 border-b border-[#E8E1D5] gap-4">
          <div>
            <div className="flex items-center gap-3 text-xs tracking-widest uppercase text-[#8A7E68] font-mono mb-2">
              <span className="text-[#D4A373] font-bold">PROJECT 04</span>
              <span>•</span>
              <span>PAGES 08 & 09</span>
              <span>•</span>
              <span>PACKAGING DESIGN & PROTOTYPE</span>
            </div>
            <h2 className="font-serif-title text-4xl sm:text-6xl font-light text-[#242220] tracking-tight">
              Box of magic
            </h2>
          </div>

          {/* Technical Metadata */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-mono text-[#6B665F]">
            <span className="px-3 py-1.5 rounded-lg bg-[#F4EFE6] border border-[#E8E1D5]">
              Size: <strong className="text-[#242220]">4 x 2.7 inches</strong>
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-[#F4EFE6] border border-[#E8E1D5]">
              Materials: <strong className="text-[#242220]">Cardboard, color pencils</strong>
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
            &ldquo;Packaging design for a color card game. Made with cardboard
            and matt finish keeping the cards secure and easily accessible&rdquo;
          </p>
          <div className="flex items-center gap-2 font-script-hand text-base text-[#D4A373] whitespace-nowrap">
            <Sparkles className="w-4 h-4 text-[#CCD5AE]" />
            isometric unfolding sketches & physical craft
          </div>
        </motion.div>

        {/* PART 1: Industrial Design Sketches & Unfolding Step-by-Step (Page 8) */}
        <div className="p-6 sm:p-10 rounded-3xl bg-[#F4EFE6] border border-[#E8E1D5] shadow-lg mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 pb-4 border-b border-[#E8E1D5] gap-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-[#8A7E68]">
                Page 08 • Structural Blueprints
              </span>
              <h3 className="font-serif-title text-3xl font-light text-[#242220]">
                Unfolding Origami Mechanics
              </h3>
            </div>

            {/* Step Navigation Tabs */}
            <div className="flex items-center gap-2">
              {UNFOLDING_STEPS.map((s, idx) => (
                <button
                  key={s.step}
                  onClick={() => {
                    if (activeStep !== idx) {
                      playPaperCreaseSound();
                      setActiveStep(idx);
                    }
                  }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono font-medium transition-all ${
                    activeStep === idx
                      ? "bg-[#242220] text-white shadow-xs"
                      : "bg-[#ECE5D8] text-[#6B665F] hover:bg-[#E8E1D5]"
                  }`}
                >
                  Step 0{s.step}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Step Display */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Step Visual Preview */}
            <div className="lg:col-span-7">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-[#ECE5D8] border border-[#E8E1D5] p-2"
              >
                <Image
                  src={UNFOLDING_STEPS[activeStep].imgSrc}
                  alt={UNFOLDING_STEPS[activeStep].title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 650px"
                  className="object-contain"
                />
              </motion.div>
            </div>

            {/* Step Details & Sequence List */}
            <div className="lg:col-span-5 space-y-4">
              {UNFOLDING_STEPS.map((s, idx) => {
                const isActive = activeStep === idx;
                return (
                  <div
                    key={s.step}
                    onClick={() => {
                      if (activeStep !== idx) {
                        playPaperCreaseSound();
                        setActiveStep(idx);
                      }
                    }}
                    className={`p-4 rounded-2xl cursor-pointer transition-all border ${
                      isActive
                        ? "bg-white border-[#D4A373] shadow-md ring-1 ring-[#D4A373]/30"
                        : "bg-[#ECE5D8]/50 border-transparent hover:bg-[#ECE5D8]"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-mono text-xs font-bold text-[#D4A373]">
                        STAGE 0{s.step}
                      </span>
                      <h4 className="font-serif-title font-bold text-base text-[#242220]">
                        {s.title}
                      </h4>
                    </div>
                    <p className="text-xs font-sans-body text-[#6B665F] leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* PART 2: Prototype Spread with Vertically Stacked Kinetic Typography (Page 9) */}
        <div className="relative rounded-3xl overflow-hidden bg-[#242220] text-white p-6 sm:p-12 shadow-2xl">
          {/* Kinetic Typography Marquee Layer */}
          <div className="absolute inset-0 flex flex-col justify-around opacity-5 pointer-events-none select-none overflow-hidden">
            <div className="animate-marquee font-serif-title text-8xl font-black whitespace-nowrap">
              COLOR DASH • BOX OF MAGIC • COLOR DASH • BOX OF MAGIC •
            </div>
            <div className="animate-marquee font-serif-title text-8xl font-black whitespace-nowrap -scale-x-100">
              PHYSICAL PROTOTYPE • CARDBOARD PACKAGING • PROTOTYPE •
            </div>
          </div>

          <div className="relative z-10">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-10 border-b border-white/10 gap-4">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#CCD5AE]">
                  Page 09 • Physical Model Gallery
                </span>
                <h3 className="font-serif-title text-4xl sm:text-5xl font-light text-white mt-1">
                  Prototype
                </h3>
              </div>
              <span className="font-script-hand text-xl text-[#FAEDCD]">
                hand-cut cardboard with matte finish
              </span>
            </div>

            {/* Prototype 3-Card Photo Spread */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {PROTOTYPE_PHOTOS.map((proto, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: idx * 0.15 }}
                  className="rounded-2xl overflow-hidden bg-white/5 border border-white/10 p-3 group hover:border-[#CCD5AE]/50 transition-colors"
                >
                  <div
                    className={`relative w-full ${proto.aspect} rounded-xl overflow-hidden bg-black/40 mb-3`}
                  >
                    <Image
                      src={proto.imgSrc}
                      alt={proto.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 380px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h4 className="font-serif-title font-medium text-base text-white">
                    {proto.title}
                  </h4>
                  <p className="text-xs text-white/60 mt-1 font-sans-body">
                    {proto.caption}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
