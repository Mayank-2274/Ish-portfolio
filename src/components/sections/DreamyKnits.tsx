"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Heart } from "lucide-react";

interface KnitItem {
  id: string;
  title: string;
  category: string;
  imgSrc: string;
  aspect: string;
  rotation: number;
  note: string;
}

const KNIT_ITEMS: KnitItem[] = [
  {
    id: "sketch",
    title: "Original Fashion Sketch",
    category: "Concept Illustration",
    imgSrc: "/portfolio/page-17-img-2.webp",
    aspect: "aspect-square",
    rotation: -2,
    note: "Pencil & marker silhouette planning sleeve drape and neckline",
  },
  {
    id: "shrug-worn",
    title: "Pink & Orange Crochet Shrug",
    category: "Worn Look",
    imgSrc: "/portfolio/page-17-img-4.webp",
    aspect: "aspect-[9/16]",
    rotation: 1.5,
    note: "Textured flare sleeves with vibrant gradient tones",
  },
  {
    id: "shrug-flat",
    title: "Shrug Flat-Lay Detail",
    category: "Flat-Lay Craft",
    imgSrc: "/portfolio/page-17-img-6.webp",
    aspect: "aspect-[3/4]",
    rotation: -1.5,
    note: "Tactile stitch inspection showing shell pattern consistency",
  },
  {
    id: "vest",
    title: "Black Floral Granny Square Vest",
    category: "Wearable Vest",
    imgSrc: "/portfolio/page-17-img-1.webp",
    aspect: "aspect-[4/3]",
    rotation: 2,
    note: "Classic floral granny squares bordered with contrast black yarn",
  },
  {
    id: "halter",
    title: "Yellow & Orange Beaded Halter Top",
    category: "First Attempt • Exploration",
    imgSrc: "/portfolio/page-17-img-3.webp",
    aspect: "aspect-[4/3]",
    rotation: -2,
    note: "Her very first crochet top exploration with delicate pearl accents",
  },
  {
    id: "grey-top",
    title: "Grey Textured Open-Back Top",
    category: "Minimal Knitwear",
    imgSrc: "/portfolio/page-17-img-5.webp",
    aspect: "aspect-[4/3]",
    rotation: 1,
    note: "Understated neutral grey tone with airy open stitchwork",
  },
];

export default function DreamyKnits() {
  return (
    <section
      id="dreamy-knits"
      className="relative min-h-screen py-24 px-6 md:px-12 bg-[#FBF8F3] paper-grain overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header & Metadata */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 pb-6 border-b border-[#E8E1D5] gap-4">
          <div>
            <div className="flex items-center gap-3 text-xs tracking-widest uppercase text-[#8A7E68] font-mono mb-2">
              <span className="text-[#D4A373] font-bold">PROJECT 09</span>
              <span>•</span>
              <span>PAGE 17</span>
              <span>•</span>
              <span>HANDMADE CROCHET APPAREL</span>
            </div>
            <h2 className="font-serif-title text-4xl sm:text-6xl font-light text-[#242220] tracking-tight">
              Dreamy knits
            </h2>
          </div>

          {/* Technical Metadata */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-mono text-[#6B665F]">
            <span className="px-3 py-1.5 rounded-lg bg-[#F4EFE6] border border-[#E8E1D5]">
              Materials: <strong className="text-[#242220]">Wool, Needle, pearls</strong>
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
              &ldquo;I have made crochet tops. The yellow one was my first
              attempt. I did it for explortion and had fun working on it.&rdquo;
            </p>
          </div>
          <div className="flex items-center gap-2 font-script-hand text-base text-[#D4A373] whitespace-nowrap">
            <Heart className="w-4 h-4 text-[#E76F51]" />
            therapeutic loops, needles & pearl beadwork
          </div>
        </motion.div>

        {/* Visual Masonry Collage with Animated Connector Arrows */}
        <div className="relative">
          {/* Animated SVG Connector Arrows Overlay */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none z-10">
            <svg
              className="w-full h-full overflow-visible"
              viewBox="0 0 1200 800"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Arrow 1: Connecting Concept Sketch (top-left) to Worn Shrug (center) */}
              <motion.path
                d="M 320 180 C 420 120, 480 200, 520 280"
                stroke="#242220"
                strokeWidth="2.5"
                strokeDasharray="6 6"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.6, ease: "easeInOut" }}
              />
              <motion.path
                d="M 510 270 L 522 284 L 528 268"
                stroke="#242220"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 1.5 }}
              />

              {/* Arrow 2: Connecting Flat-Lay Detail to Worn Shrug */}
              <motion.path
                d="M 850 320 C 780 340, 720 380, 680 430"
                stroke="#242220"
                strokeWidth="2.5"
                strokeDasharray="6 6"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.6, ease: "easeInOut", delay: 0.2 }}
              />
              <motion.path
                d="M 688 418 L 678 434 L 695 436"
                stroke="#242220"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 1.7 }}
              />
            </svg>
          </div>

          {/* Masonry / Editorial Cards Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
            {KNIT_ITEMS.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.7,
                  delay: idx * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{
                  scale: 1.02,
                  rotate: 0,
                  transition: { duration: 0.2 },
                }}
                className="relative group p-4 rounded-3xl bg-[#F4EFE6] border border-[#E8E1D5] shadow-md hover:shadow-xl transition-all"
                style={{ transform: `rotate(${item.rotation}deg)` }}
              >
                <div className="washi-tape" />

                <div
                  className={`relative w-full ${item.aspect} rounded-2xl overflow-hidden bg-[#ECE5D8] mb-3`}
                >
                  <Image
                    src={item.imgSrc}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-md bg-white/85 backdrop-blur-xs text-[10px] font-mono text-[#4A4742] shadow-xs">
                    {item.category}
                  </div>
                </div>

                <h4 className="font-serif-title font-medium text-lg text-[#242220]">
                  {item.title}
                </h4>
                <p className="text-xs font-sans-body text-[#6B665F] mt-1 leading-snug">
                  {item.note}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Handcrafted Signoff Stamp */}
        <div className="mt-16 text-center">
          <span className="font-script-hand text-2xl text-[#D4A373] inline-flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#CCD5AE]" />
            hand-threaded stitch by stitch with warmth & patience
          </span>
        </div>
      </div>
    </section>
  );
}
