"use client";

import React from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const titleLetters = "Portfolio".split("");
  const subtitleLetters = "Ishwari Jangam".split("");
  const yearLetters = "-2024".split("");

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.045,
        delayChildren: 0.2,
      },
    },
  };

  const letterVariants: Variants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const handleScrollDown = () => {
    const nextSection = document.getElementById("about");
    if (nextSection) {
      if (typeof window !== "undefined" && window.__portfolioLenis) {
        window.__portfolioLenis.scrollTo(nextSection, { offset: -20, duration: 1.4 });
      } else {
        nextSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between items-center px-6 py-12 md:py-16 paper-grain overflow-hidden"
    >
      {/* Subtle organic decorative background elements */}
      <div className="absolute top-12 left-10 w-72 h-72 rounded-full bg-[#E9EDC9]/35 blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-16 right-10 w-80 h-80 rounded-full bg-[#FAEDCD]/40 blur-3xl pointer-events-none -z-10" />

      {/* Top Bar / Header tag */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="w-full max-w-6xl flex justify-between items-center text-xs tracking-widest uppercase text-[#8A7E68]"
      >
        <span className="flex items-center gap-2 font-mono">
          <span className="inline-block w-2 h-2 rounded-full bg-[#CCD5AE] animate-pulse" />
          PAGE 01 • COVER ARCHIVE
        </span>
        <span className="font-script-hand text-base lowercase tracking-normal text-[#D4A373]">
          craft • game • art • crochet
        </span>
      </motion.div>

      {/* Main Hero Centerpiece */}
      <div className="w-full max-w-6xl flex flex-col items-center my-auto py-8">
        {/* Typographic Staggered serif reveal */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-6 sm:mb-8"
        >
          {/* Main Title: Portfolio */}
          <h1 className="font-serif-title text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] font-light tracking-tight text-[#242220] leading-none select-none flex justify-center overflow-hidden">
            {titleLetters.map((char, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                className="inline-block hover:text-[#D4A373] transition-colors duration-300"
              >
                {char}
              </motion.span>
            ))}
          </h1>

          {/* Subtitle & Year */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mt-3 sm:mt-5 text-[#4A4742]">
            <motion.div
              variants={containerVariants}
              className="flex font-serif-title italic text-2xl sm:text-4xl md:text-5xl tracking-wide"
            >
              {subtitleLetters.map((char, index) => (
                <motion.span key={index} variants={letterVariants}>
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.div>

            <motion.div
              variants={containerVariants}
              className="flex font-sans-body font-light text-xl sm:text-3xl text-[#8A7E68]"
            >
              {yearLetters.map((char, index) => (
                <motion.span key={index} variants={letterVariants}>
                  {char}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Hero Artwork Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-3xl relative mt-4 group"
        >
          {/* Decorative washi tape aesthetic at top center */}
          <div className="washi-tape" />

          {/* Image Container with editorial border */}
          <div className="relative rounded-2xl overflow-hidden border border-[#E8E1D5] bg-[#F4EFE6] shadow-xl shadow-black/5 transition-transform duration-700 group-hover:shadow-2xl group-hover:scale-[1.01]">
            <div className="relative aspect-[16/10] w-full">
              <Image
                src="/portfolio/page-1-img-1.webp"
                alt="Ishwari Jangam Portfolio Cover Artwork"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1024px"
                className="object-cover object-center"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="flex flex-col items-center gap-3 pt-4"
      >
        <button
          onClick={handleScrollDown}
          className="group flex flex-col items-center gap-2 text-xs uppercase tracking-widest text-[#8A7E68] hover:text-[#242220] transition-colors"
          aria-label="Scroll to explore"
        >
          <span className="font-script-hand text-base capitalize tracking-normal text-[#D4A373] group-hover:translate-y-0.5 transition-transform">
            explore portfolio
          </span>
          <div className="w-8 h-12 rounded-full border border-[#D4A373]/50 flex items-start justify-center p-1.5 transition-colors group-hover:border-[#D4A373]">
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
              className="w-1.5 h-2.5 rounded-full bg-[#D4A373]"
            />
          </div>
          <ArrowDown className="w-3.5 h-3.5 text-[#8A7E68] group-hover:translate-y-1 transition-transform" />
        </button>
      </motion.div>
    </section>
  );
}
