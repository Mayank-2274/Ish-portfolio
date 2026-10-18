"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Clock,
  Heart,
  Palette,
  Tv,
  Users,
  Sparkles,
  Maximize2,
  Minimize2,
  RotateCcw,
} from "lucide-react";

interface ContinentInfo {
  id: string;
  name: string;
  colorName: string;
  badgeBg: string;
  borderColor: string;
  textColor: string;
  accentHex: string;
  icon: React.ReactNode;
  coords: { x: number; y: number }; // percentage coordinates on map
  scale: number;
  origin: string;
  details: {
    heading: string;
    description: string;
    bullets: string[];
  };
}

const CONTINENTS: ContinentInfo[] = [
  {
    id: "pink",
    name: "My Inspirations / Influence",
    colorName: "Pink Continent",
    badgeBg: "bg-pink-100",
    borderColor: "border-pink-300",
    textColor: "text-pink-900",
    accentHex: "#EC4899",
    icon: <Heart className="w-4 h-4 text-pink-600" />,
    coords: { x: 10, y: 34 },
    scale: 1.55,
    origin: "10% 34%",
    details: {
      heading: "Animal Love & Personal Heroes",
      description:
        "Deep affection for animals, following rescue NGOs, compassion, and beloved figures.",
      bullets: [
        "Love for animals & following animal welfare NGOs",
        "Influences: Robin, Deon, Scheindlier",
        "Gaming culture & imaginative character universes",
      ],
    },
  },
  {
    id: "orange",
    name: "What art means to me?",
    colorName: "Orange Continent",
    badgeBg: "bg-orange-100",
    borderColor: "border-orange-300",
    textColor: "text-orange-900",
    accentHex: "#F97316",
    icon: <Palette className="w-4 h-4 text-orange-600" />,
    coords: { x: 48, y: 24 },
    scale: 1.55,
    origin: "48% 24%",
    details: {
      heading: "Art is Healing",
      description:
        "A profound sanctuary for mental peace, catharsis, and emotional balance.",
      bullets: [
        "Art as therapy, mindfulness, and visual journaling",
        "Processing subconscious thoughts through vibrant strokes",
        "Finding joyful calm through tactile creative practice",
      ],
    },
  },
  {
    id: "purple",
    name: "Social media influence",
    colorName: "Purple Continent",
    badgeBg: "bg-purple-100",
    borderColor: "border-purple-300",
    textColor: "text-purple-900",
    accentHex: "#A855F7",
    icon: <Tv className="w-4 h-4 text-purple-600" />,
    coords: { x: 42, y: 62 },
    scale: 1.55,
    origin: "42% 62%",
    details: {
      heading: "Animation & Storytelling Idols",
      description:
        "Storytime animators and creators on YouTube who sparked her creative animation fire.",
      bullets: [
        "Kirti Chow & Mango Boi",
        "Lazy Assassin & Swastikam",
        "RgBucketlist & Maybe Another Day",
      ],
    },
  },
  {
    id: "green",
    name: "My environment",
    colorName: "Green Continent",
    badgeBg: "bg-emerald-100",
    borderColor: "border-emerald-300",
    textColor: "text-emerald-900",
    accentHex: "#10B981",
    icon: <Users className="w-4 h-4 text-emerald-600" />,
    coords: { x: 72, y: 36 },
    scale: 1.55,
    origin: "72% 36%",
    details: {
      heading: "Observation & Human Connection",
      description:
        "Navigating the world with an introvert's attentive gaze and family warmth.",
      bullets: [
        "Loving support of friends and family",
        "Keenly observing human nuances as an introvert",
        "Travelling far to expand mental paradigms and ideas",
      ],
    },
  },
  {
    id: "red",
    name: "Problems (Challenges to Conquer)",
    colorName: "Red Corner",
    badgeBg: "bg-red-100",
    borderColor: "border-red-300",
    textColor: "text-red-900",
    accentHex: "#EF4444",
    icon: <Clock className="w-4 h-4 text-red-600" />,
    coords: { x: 86, y: 56 },
    scale: 1.55,
    origin: "82% 65%",
    details: {
      heading: "The Clock of Self-Improvement",
      description:
        "Personal struggles mapped out honestly with actionable self-awareness.",
      bullets: [
        "Bad Time Management (working against the ticking clock)",
        "Social Media Addiction & digital overload",
        "Bad Posture from long studio hours",
      ],
    },
  },
];

export default function JourneyAcross() {
  const [selectedContinent, setSelectedContinent] =
    useState<ContinentInfo | null>(null);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  const resetView = () => {
    setSelectedContinent(null);
  };

  // Close full screen on Escape key and prevent background scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsFullscreen(false);
      }
    };

    if (isFullscreen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isFullscreen]);

  return (
    <section
      id="journey-across"
      className="relative min-h-screen py-24 px-6 md:px-12 bg-[#FBF8F3] paper-grain overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header & Metadata Bar */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 pb-6 border-b border-[#E8E1D5] gap-4">
          <div>
            <div className="flex items-center gap-3 text-xs tracking-widest uppercase text-[#8A7E68] font-mono mb-2">
              <span className="text-[#D4A373] font-bold">PROJECT 01</span>
              <span>•</span>
              <span>PAGE 04</span>
              <span>•</span>
              <span>MIND MAP ILLUSTRATION</span>
            </div>
            <h2 className="font-serif-title text-4xl sm:text-6xl font-light text-[#242220] tracking-tight">
              A journey across
            </h2>
          </div>

          {/* Technical Metadata Tag */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-mono text-[#6B665F]">
            <span className="px-3 py-1.5 rounded-lg bg-[#F4EFE6] border border-[#E8E1D5]">
              Size: <strong className="text-[#242220]">1676x1072</strong>
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-[#F4EFE6] border border-[#E8E1D5]">
              Medium: <strong className="text-[#242220]">Digital (Adobe Fresco)</strong>
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-[#F4EFE6] border border-[#E8E1D5]">
              Year: <strong className="text-[#242220]">2024</strong>
            </span>
          </div>
        </div>

        {/* Narrative Intro Banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-5 sm:p-6 rounded-2xl bg-[#F4EFE6]/90 border border-[#E8E1D5] mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-xs"
        >
          <div className="max-w-3xl">
            <p className="font-serif-title text-lg sm:text-xl text-[#242220] leading-snug">
              &ldquo;This a little peak in my life and my history who i am
              inspired by and problems i faced. I have represent them as
              different continents of a map.&rdquo;
            </p>
          </div>
          <div className="flex items-center gap-2 font-script-hand text-lg text-[#D4A373] whitespace-nowrap">
            <Sparkles className="w-4 h-4 text-[#CCD5AE]" />
            interactive territory explorer
          </div>
        </motion.div>

        {/* Interactive Continent Selector Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <span className="text-xs uppercase tracking-wider font-mono text-[#8A7E68] mr-2">
            Explore Continents:
          </span>
          {CONTINENTS.map((continent) => {
            const isSelected = selectedContinent?.id === continent.id;
            return (
              <button
                key={continent.id}
                onClick={() =>
                  setSelectedContinent(isSelected ? null : continent)
                }
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  isSelected
                    ? "shadow-md scale-105 ring-2 ring-offset-2 ring-black/10"
                    : "hover:scale-102 opacity-85 hover:opacity-100"
                } ${continent.badgeBg} ${continent.textColor} border ${continent.borderColor}`}
              >
                {continent.icon}
                <span>{continent.name}</span>
              </button>
            );
          })}
          {selectedContinent && (
            <button
              onClick={resetView}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs bg-[#ECE5D8] hover:bg-[#E8E1D5] text-[#4A4742] transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reset Map
            </button>
          )}
        </div>

        {/* Interactive Map Canvas Container */}
        <div className="relative rounded-3xl overflow-hidden border-2 border-[#E8E1D5] bg-[#ECE5D8] shadow-2xl shadow-black/10">
          {/* Main Map Viewport */}
          <div
            onClick={() => {
              if (selectedContinent) {
                resetView();
              }
            }}
            className={`relative w-full aspect-[1676/1072] overflow-hidden ${
              selectedContinent ? "cursor-pointer" : ""
            }`}
            title={selectedContinent ? "Click anywhere on the map to reset view" : undefined}
          >
            <motion.div
              animate={{
                scale: selectedContinent ? selectedContinent.scale : 1,
                transformOrigin: selectedContinent
                  ? selectedContinent.origin
                  : "50% 50%",
              }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full h-full"
            >
              <Image
                src="/portfolio/page-4-img-1.webp"
                alt="A journey across illustrated mind-map"
                fill
                priority
                sizes="(max-width: 1200px) 100vw, 1280px"
                className="object-contain"
              />

              {/* Hotspot Radar Pins on Map */}
              {CONTINENTS.map((continent) => {
                const isSelected = selectedContinent?.id === continent.id;
                return (
                  <button
                    key={continent.id}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedContinent(isSelected ? null : continent);
                    }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
                    style={{
                      left: `${continent.coords.x}%`,
                      top: `${continent.coords.y}%`,
                    }}
                    title={`Zoom to ${continent.name}`}
                  >
                    <div className="relative flex items-center justify-center">
                      {/* Pulsing ring */}
                      <span
                        className="animate-ping absolute inline-flex h-8 w-8 rounded-full opacity-60"
                        style={{ backgroundColor: continent.accentHex }}
                      />
                      {/* Pin Center */}
                      <div
                        className={`relative z-10 w-7 h-7 rounded-full flex items-center justify-center text-white shadow-md border-2 border-white transition-transform ${
                          isSelected ? "scale-125 ring-2 ring-black" : "group-hover:scale-110"
                        }`}
                        style={{ backgroundColor: continent.accentHex }}
                      >
                        {continent.icon}
                      </div>
                    </div>
                  </button>
                );
              })}

              {/* Subtle animated rotating clock hands aligned with the illustrated clock */}
              <div
                className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                style={{ left: "80%", top: "70%" }}
              >
                <div className="relative w-6 h-6 flex items-center justify-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      repeat: Infinity,
                      duration: 12,
                      ease: "linear",
                    }}
                    className="absolute w-[2px] h-3.5 bg-red-900 origin-bottom bottom-3 rounded-full"
                  />
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      repeat: Infinity,
                      duration: 2.5,
                      ease: "linear",
                    }}
                    className="absolute w-[1.5px] h-4.5 bg-red-700 origin-bottom bottom-3 rounded-full"
                  />
                  <div className="w-1.5 h-1.5 rounded-full bg-red-900 z-10" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Expand Full Screen Button (Desktop View, bottom-right) */}
          <div className="hidden sm:block absolute bottom-4 right-4 z-20">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsFullscreen(true);
              }}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/90 hover:bg-white text-[#242220] backdrop-blur-md border border-[#E8E1D5] shadow-lg text-xs font-medium hover:scale-105 active:scale-95 transition-all group cursor-pointer"
              title="Open Map in Full Screen"
              aria-label="Open map in full screen"
            >
              <Maximize2 className="w-4 h-4 text-[#D4A373] group-hover:scale-115 transition-transform" />
              <span className="font-mono text-xs">Full Screen</span>
            </button>
          </div>

          {/* Desktop View: Continent Details Popover (inside bottom-left, hidden on mobile) */}
          <AnimatePresence>
            {selectedContinent && (
              <motion.div
                onClick={(e) => e.stopPropagation()}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="hidden sm:block absolute bottom-4 left-6 max-w-md p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-[#E8E1D5] shadow-xl text-[#242220] z-20"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: selectedContinent.accentHex }}
                    />
                    <span className="font-mono text-xs uppercase tracking-wider font-semibold text-[#6B665F]">
                      {selectedContinent.colorName}
                    </span>
                  </div>
                  <button
                    onClick={resetView}
                    className="text-xs text-[#8A7E68] hover:text-[#242220] underline cursor-pointer"
                  >
                    Close
                  </button>
                </div>

                <h3 className="font-serif-title text-xl font-bold text-[#242220]">
                  {selectedContinent.details.heading}
                </h3>
                <p className="text-xs font-sans-body text-[#4A4742] mt-1 mb-3">
                  {selectedContinent.details.description}
                </p>

                <div className="space-y-1.5 border-t border-gray-100 pt-2.5">
                  {selectedContinent.details.bullets.map((bullet, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 text-xs text-[#3A3835]"
                    >
                      <Sparkles
                        className="w-3 h-3 shrink-0 mt-0.5"
                        style={{ color: selectedContinent.accentHex }}
                      />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Mobile View: Explanation Card Below the Map Box (so it never covers the map!) */}
        <AnimatePresence>
          {selectedContinent && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              className="sm:hidden mt-4 w-full p-5 rounded-2xl bg-white border-2 border-[#E8E1D5] shadow-lg text-[#242220]"
            >
              <div className="flex items-center justify-between mb-2 pb-2 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <span
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: selectedContinent.accentHex }}
                  />
                  <span className="font-mono text-xs uppercase tracking-wider font-semibold text-[#6B665F]">
                    {selectedContinent.colorName}
                  </span>
                </div>
                <button
                  onClick={resetView}
                  className="px-2 py-0.5 rounded bg-gray-100 text-xs text-[#4A4742] font-mono hover:bg-gray-200"
                >
                  Close ×
                </button>
              </div>

              <h3 className="font-serif-title text-lg font-bold text-[#242220]">
                {selectedContinent.details.heading}
              </h3>
              <p className="text-xs font-sans-body text-[#4A4742] mt-1 mb-3 leading-relaxed">
                {selectedContinent.details.description}
              </p>

              <div className="space-y-2 border-t border-gray-100 pt-3">
                {selectedContinent.details.bullets.map((bullet, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2 text-xs text-[#3A3835]"
                  >
                    <Sparkles
                      className="w-3.5 h-3.5 shrink-0 mt-0.5"
                      style={{ color: selectedContinent.accentHex }}
                    />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ========================================================
          FULL SCREEN DESKTOP MODAL / EXPANDED LIGHTBOX
         ======================================================== */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-6 text-white"
          >
            {/* Top Bar Controls */}
            <div className="flex items-center justify-between pb-4 border-b border-white/15 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[#D4A373] animate-pulse" />
                <div>
                  <h3 className="font-serif-title text-xl text-white font-medium">
                    A journey across • Full Screen Map View
                  </h3>
                  <span className="font-mono text-[11px] text-white/60">
                    High-Resolution Digital Illustration • 1676x1072
                  </span>
                </div>
              </div>

              {/* Continent Filter Pills in Full Screen */}
              <div className="hidden md:flex items-center gap-2">
                {CONTINENTS.map((continent) => {
                  const isSelected = selectedContinent?.id === continent.id;
                  return (
                    <button
                      key={continent.id}
                      onClick={() =>
                        setSelectedContinent(isSelected ? null : continent)
                      }
                      className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs transition-all ${
                        isSelected
                          ? "bg-white text-black font-semibold shadow-md"
                          : "bg-white/10 text-white/80 hover:bg-white/20"
                      }`}
                    >
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: continent.accentHex }}
                      />
                      <span>{continent.name.split(" ")[0]}</span>
                    </button>
                  );
                })}
              </div>

              {/* Exit Full Screen Button */}
              <button
                onClick={() => setIsFullscreen(false)}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-mono transition-colors border border-white/20 cursor-pointer"
                title="Exit Full Screen (Esc)"
              >
                <Minimize2 className="w-4 h-4 text-[#FAEDCD]" />
                <span className="hidden sm:inline">Exit Full Screen</span>
                <span className="text-[10px] text-white/50">[Esc]</span>
              </button>
            </div>

            {/* Central Full Screen Canvas */}
            <div
              onClick={() => {
                if (selectedContinent) {
                  resetView();
                }
              }}
              className={`relative flex-1 w-full my-4 rounded-2xl overflow-hidden bg-neutral-900 border border-white/10 flex items-center justify-center ${
                selectedContinent ? "cursor-pointer" : ""
              }`}
              title={selectedContinent ? "Click anywhere on the map to reset view" : undefined}
            >
              <motion.div
                animate={{
                  scale: selectedContinent ? selectedContinent.scale * 1.15 : 1,
                  transformOrigin: selectedContinent
                    ? selectedContinent.origin
                    : "50% 50%",
                }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full aspect-[1676/1072] max-w-6xl max-h-[80vh]"
              >
                <Image
                  src="/portfolio/page-4-img-1.webp"
                  alt="A journey across full screen illustrated mind map"
                  fill
                  priority
                  sizes="100vw"
                  className="object-contain"
                />

                {/* Hotspot Radar Pins in Full Screen */}
                {CONTINENTS.map((continent) => {
                  const isSelected = selectedContinent?.id === continent.id;
                  return (
                    <button
                      key={continent.id}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedContinent(isSelected ? null : continent);
                      }}
                      className="absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
                      style={{
                        left: `${continent.coords.x}%`,
                        top: `${continent.coords.y}%`,
                      }}
                      title={continent.name}
                    >
                      <div className="relative flex items-center justify-center">
                        <span
                          className="animate-ping absolute inline-flex h-10 w-10 rounded-full opacity-60"
                          style={{ backgroundColor: continent.accentHex }}
                        />
                        <div
                          className={`relative z-10 w-9 h-9 rounded-full flex items-center justify-center text-white shadow-xl border-2 border-white transition-transform ${
                            isSelected ? "scale-125 ring-4 ring-white" : "group-hover:scale-115"
                          }`}
                          style={{ backgroundColor: continent.accentHex }}
                        >
                          {continent.icon}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </motion.div>

              {/* Fullscreen Continent Info Popover Card */}
              <AnimatePresence>
                {selectedContinent && (
                  <motion.div
                    onClick={(e) => e.stopPropagation()}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="absolute bottom-6 left-6 max-w-md p-5 rounded-2xl bg-black/85 backdrop-blur-xl border border-white/20 text-white shadow-2xl z-30"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: selectedContinent.accentHex }}
                        />
                        <span className="font-mono text-xs uppercase tracking-wider text-[#CCD5AE]">
                          {selectedContinent.colorName}
                        </span>
                      </div>
                      <button
                        onClick={resetView}
                        className="text-xs text-white/60 hover:text-white underline cursor-pointer"
                      >
                        Close
                      </button>
                    </div>

                    <h4 className="font-serif-title text-xl font-bold text-white">
                      {selectedContinent.details.heading}
                    </h4>
                    <p className="text-xs text-white/80 mt-1 mb-3">
                      {selectedContinent.details.description}
                    </p>

                    <div className="space-y-1.5 border-t border-white/10 pt-2.5">
                      {selectedContinent.details.bullets.map((bullet, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2 text-xs text-white/90"
                        >
                          <Sparkles
                            className="w-3 h-3 shrink-0 mt-0.5"
                            style={{ color: selectedContinent.accentHex }}
                          />
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Bottom Bar Info & Reset */}
            <div className="flex items-center justify-between pt-3 border-t border-white/15 text-xs text-white/70">
              <span className="font-script-hand text-base text-[#FAEDCD]">
                Click any hotspot or pill to pan & zoom into that continent
              </span>
              <div className="flex items-center gap-3">
                {selectedContinent && (
                  <button
                    onClick={resetView}
                    className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/15 hover:bg-white/25 text-white transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    Reset Zoom
                  </button>
                )}
                <span className="font-mono text-[11px] text-white/50 hidden sm:inline">
                  Press ESC to close
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
