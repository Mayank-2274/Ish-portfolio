"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import { playTactileClick } from "@/lib/sound";

interface MoodboardItem {
  id: string;
  targetId: string;
  title: string;
  pageRange: string;
  projectNum: string;
  imgSrc: string;
  aspect: string;
  rotation: number;
  category: string;
}

const PROJECTS_MOODBOARD: MoodboardItem[] = [
  {
    id: "journey",
    targetId: "journey-across",
    title: "A journey across",
    pageRange: "p. 04",
    projectNum: "01",
    imgSrc: "/portfolio/page-3-img-10.webp",
    aspect: "aspect-[16/11]",
    rotation: -2,
    category: "Mind Map Illustration",
  },
  {
    id: "wild",
    targetId: "wild-within",
    title: "Wild within",
    pageRange: "p. 05",
    projectNum: "02",
    imgSrc: "/portfolio/page-3-img-1.webp",
    aspect: "aspect-[3/4]",
    rotation: 2.5,
    category: "Mixed Media & Wool",
  },
  {
    id: "colordash",
    targetId: "color-dash",
    title: "Color Dash",
    pageRange: "p. 06-07",
    projectNum: "03",
    imgSrc: "/portfolio/page-3-img-2.webp",
    aspect: "aspect-[3/4]",
    rotation: -3,
    category: "Card Game & Rules",
  },
  {
    id: "boxmagic",
    targetId: "box-of-magic",
    title: "Box of magic",
    pageRange: "p. 08-09",
    projectNum: "04",
    imgSrc: "/portfolio/page-3-img-3.webp",
    aspect: "aspect-square",
    rotation: 1.5,
    category: "Packaging Design",
  },
  {
    id: "unspoken",
    targetId: "the-unspoken",
    title: "The Unspoken",
    pageRange: "p. 10-11",
    projectNum: "05",
    imgSrc: "/portfolio/page-3-img-8.webp",
    aspect: "aspect-[4/3]",
    rotation: -1.8,
    category: "Anti-Violence Game Brochure",
  },
  {
    id: "flyhigh",
    targetId: "stop-motion",
    title: "As i fly high....",
    pageRange: "p. 12",
    projectNum: "06",
    imgSrc: "/portfolio/page-3-img-9.webp",
    aspect: "aspect-[4/3]",
    rotation: 3,
    category: "Stop Motion Animation",
  },
  {
    id: "wandering",
    targetId: "wandering-eyes",
    title: "Wandering eyes",
    pageRange: "p. 13-15",
    projectNum: "07",
    imgSrc: "/portfolio/page-3-img-6.webp",
    aspect: "aspect-[3/4]",
    rotation: -2.5,
    category: "Photography Series",
  },
  {
    id: "hoshin",
    targetId: "ho-shin",
    title: "Hoshin",
    pageRange: "p. 16",
    projectNum: "08",
    imgSrc: "/portfolio/page-3-img-7.webp",
    aspect: "aspect-[3/4]",
    rotation: 2,
    category: "Acrylic Portrait",
  },
  {
    id: "dreamy",
    targetId: "dreamy-knits",
    title: "Dreamy knits",
    pageRange: "p. 17",
    projectNum: "09",
    imgSrc: "/portfolio/page-3-img-4.webp",
    aspect: "aspect-[4/3]",
    rotation: -1,
    category: "Crochet Tops & Wearables",
  },
];

export default function TableOfContents() {
  const handleScrollTo = (targetId: string) => {
    playTactileClick();
    const el = document.getElementById(targetId);
    if (!el) return;

    if (window.__portfolioLenis) {
      window.__portfolioLenis.scrollTo(el, { offset: -30, duration: 1.4 });
    } else {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="table-of-contents"
      className="relative min-h-screen py-24 px-6 md:px-12 bg-[#FBF8F3] paper-grain overflow-hidden"
    >
      {/* Background soft ambient accents */}
      <div className="absolute top-1/3 left-10 w-96 h-96 rounded-full bg-[#FAEDCD]/30 blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[#E9EDC9]/35 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-6 border-b border-[#E8E1D5]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-xs tracking-widest uppercase text-[#8A7E68] mb-2 font-mono"
            >
              <span>PAGE 03</span>
              <span>•</span>
              <span>INDEX MOODBOARD</span>
            </motion.div>
            <h2 className="font-serif-title text-5xl sm:text-7xl font-light text-[#242220] tracking-tight">
              Content
            </h2>
          </div>
          <p className="font-script-hand text-xl sm:text-2xl text-[#D4A373] mt-3 sm:mt-0 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#CCD5AE]" />
            tap any postcard to jump straight into the work
          </p>
        </div>

        {/* Scattered Organic Moodboard Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {PROJECTS_MOODBOARD.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{
                scale: 1.03,
                rotate: 0,
                transition: { duration: 0.25 },
              }}
              onClick={() => handleScrollTo(item.targetId)}
              className="group cursor-pointer relative"
              style={{ transform: `rotate(${item.rotation}deg)` }}
            >
              {/* Washi tape on every card */}
              <div className="washi-tape" />

              {/* Card Container */}
              <div className="p-4 rounded-2xl bg-[#F4EFE6] border border-[#E8E1D5] shadow-md group-hover:shadow-xl transition-all duration-300">
                {/* Thumbnail Image */}
                <div
                  className={`relative w-full ${item.aspect} rounded-xl overflow-hidden bg-[#ECE5D8] mb-4`}
                >
                  <Image
                    src={item.imgSrc}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Subtle inner shadow overlay */}
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* Corner page badge */}
                  <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-md bg-white/85 backdrop-blur-xs text-[11px] font-mono text-[#4A4742] shadow-xs">
                    {item.pageRange}
                  </div>
                </div>

                {/* Card Info */}
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[11px] font-mono text-[#8A7E68] uppercase tracking-wider block">
                      PROJ {item.projectNum} • {item.category}
                    </span>
                    <h3 className="font-serif-title text-xl sm:text-2xl font-medium text-[#242220] group-hover:text-[#D4A373] transition-colors mt-0.5">
                      {item.title}
                    </h3>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#E9EDC9]/60 flex items-center justify-center text-[#242220] group-hover:bg-[#CCD5AE] group-hover:translate-x-1 transition-all">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Animated Hand-Drawn Connector Arrows at bottom of moodboard */}
        <div className="mt-16 flex justify-center items-center">
          <svg
            className="w-full max-w-xl h-24 overflow-visible"
            viewBox="0 0 500 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d="M30 50 Q 150 10, 250 50 T 460 30"
              stroke="#D4A373"
              strokeWidth="2"
              strokeDasharray="6 6"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
            />
            {/* Arrowhead */}
            <motion.path
              d="M450 20 L 465 30 L 452 42"
              stroke="#D4A373"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 1.6 }}
            />
            <text
              x="250"
              y="74"
              textAnchor="middle"
              className="font-script-hand text-base fill-[#8A7E68]"
            >
              chronological expedition through 18 portfolio slides
            </text>
          </svg>
        </div>
      </div>
    </section>
  );
}
