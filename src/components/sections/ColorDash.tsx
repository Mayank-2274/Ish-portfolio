"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Sparkles,
  Layers,
  RotateCw,
  Shuffle,
} from "lucide-react";
import { playCardFlipSound } from "@/lib/sound";

interface SpecialCard {
  id: string;
  name: string;
  imgSrc: string;
  count: string;
  type: "task" | "powerup" | "hazard" | "neutral" | "bonus";
  colorBadge: string;
  frontText: string;
  backRule: string;
  pointsImpact: string;
}

const SPECIAL_CARDS: SpecialCard[] = [
  {
    id: "task",
    name: "Task Card",
    imgSrc: "/portfolio/page-7-img-1.webp",
    count: "8 in deck",
    type: "task",
    colorBadge: "bg-amber-100 text-amber-900 border-amber-300",
    frontText: "Get a thing of the same color as one of the color cards you hold!",
    backRule:
      "Physical speed challenge! Players must find and touch a real-world object matching the color before the timer expires.",
    pointsImpact: "+20 Pts if completed / -30 Pts if failed",
  },
  {
    id: "rainbow",
    name: "Rainbow Card",
    imgSrc: "/portfolio/page-7-img-2.webp",
    count: "4 in deck",
    type: "powerup",
    colorBadge: "bg-pink-100 text-pink-900 border-pink-300",
    frontText: "Get two cards from the Discard Section!",
    backRule:
      "Ultimate wild advantage! Dig through the discard pile to fish out missing shades to finish your matching set.",
    pointsImpact: "Instant Set Completion Booster",
  },
  {
    id: "black",
    name: "Black Card",
    imgSrc: "/portfolio/page-7-img-3.webp",
    count: "3 in deck",
    type: "hazard",
    colorBadge: "bg-neutral-800 text-white border-neutral-700",
    frontText: "Exchange all your cards with the player on your right!",
    backRule:
      "Chaos penalty card! Forces a total hand swap with your neighbor, ruining their hoarding strategy or saving you.",
    pointsImpact: "High-Stakes Hand Swap",
  },
  {
    id: "white",
    name: "White Card",
    imgSrc: "/portfolio/page-7-img-4.webp",
    count: "3 in deck",
    type: "neutral",
    colorBadge: "bg-blue-100 text-blue-900 border-blue-300",
    frontText: "Exchange cards of the other two players!",
    backRule:
      "Puppet-master sabotage! Swap hands between any two opponents to break up an imminent winning set.",
    pointsImpact: "Strategic Opponent Disruption",
  },
  {
    id: "bonus",
    name: "Bonus Card",
    imgSrc: "/portfolio/page-7-img-5.webp",
    count: "2 in deck",
    type: "bonus",
    colorBadge: "bg-emerald-100 text-emerald-900 border-emerald-300",
    frontText: "BONUS 50 POINTS!",
    backRule:
      "Pure golden luck! Adds an immediate 50 points to your score tally at the end of the round.",
    pointsImpact: "+50 Bonus Points Directly",
  },
];

// 8 watercolor cards fanned out around the box
const FAN_CARDS = [
  { angle: -65, x: -140, y: -60, label: "Crimson Red" },
  { angle: -45, x: -110, y: -130, label: "Sunflower Yellow" },
  { angle: -15, x: -40, y: -160, label: "Emerald Green" },
  { angle: 15, x: 40, y: -160, label: "Sky Cyan" },
  { angle: 45, x: 110, y: -130, label: "Royal Indigo" },
  { angle: 65, x: 140, y: -60, label: "Warm Ochre" },
  { angle: 110, x: 100, y: 70, label: "Coral Peach" },
  { angle: -110, x: -100, y: 70, label: "Violet Plum" },
];

export default function ColorDash() {
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});

  const toggleCardFlip = (cardId: string) => {
    playCardFlipSound();
    setFlippedCards((prev) => ({
      ...prev,
      [cardId]: !prev[cardId],
    }));
  };

  return (
    <section
      id="color-dash"
      className="relative min-h-screen py-24 px-6 md:px-12 bg-[#FBF8F3] paper-grain overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header & Metadata */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 pb-6 border-b border-[#E8E1D5] gap-4">
          <div>
            <div className="flex items-center gap-3 text-xs tracking-widest uppercase text-[#8A7E68] font-mono mb-2">
              <span className="text-[#D4A373] font-bold">PROJECT 03</span>
              <span>•</span>
              <span>PAGES 06 & 07</span>
              <span>•</span>
              <span>TABLETOP GAME DESIGN</span>
            </div>
            <h2 className="font-serif-title text-4xl sm:text-6xl font-light text-[#242220] tracking-tight">
              Color Dash
            </h2>
          </div>

          {/* Technical Metadata */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-mono text-[#6B665F]">
            <span className="px-3 py-1.5 rounded-lg bg-[#F4EFE6] border border-[#E8E1D5]">
              Card Size: <strong className="text-[#242220]">3.5 x 2.4 inch</strong>
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-[#F4EFE6] border border-[#E8E1D5]">
              Material: <strong className="text-[#242220]">Paper, Watercolors</strong>
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-[#F4EFE6] border border-[#E8E1D5]">
              Players: <strong className="text-[#242220]">2 to 4 Players</strong>
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
            &ldquo;This is a color card game for 2 to 4 players. It is designed
            to challenge players quick thinking.&rdquo;
          </p>
          <div className="flex items-center gap-2 font-script-hand text-base text-[#D4A373] whitespace-nowrap">
            <Sparkles className="w-4 h-4 text-[#CCD5AE]" />
            hand-painted watercolor cards & octagonal packaging
          </div>
        </motion.div>

        {/* PART A: Radial Fan Out of Cards around Central Octagonal Box */}
        <div className="relative mb-24 p-6 sm:p-12 rounded-3xl bg-[#F4EFE6] border border-[#E8E1D5] shadow-lg overflow-hidden flex flex-col items-center">
          <div className="text-center max-w-xl mb-8">
            <span className="font-mono text-xs uppercase tracking-wider text-[#8A7E68]">
              Part A • Visual Assets & Composition
            </span>
            <h3 className="font-serif-title text-3xl font-light text-[#242220] mt-1">
              The Octagonal Hub & Watercolor Fan
            </h3>
            <p className="text-xs font-sans-body text-[#6B665F] mt-1">
              Scroll or hover to expand the hand-painted cards radially around the
              octagonal box.
            </p>
          </div>

          {/* Interactive Radial Fan Arena */}
          <div className="relative w-full max-w-2xl h-[420px] sm:h-[480px] flex items-center justify-center my-6">
            {/* Center: The Octagonal "COLOUR DASH" Box */}
            <motion.div
              whileHover={{ scale: 1.08 }}
              className="relative z-20 w-44 sm:w-56 aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-[#242220] bg-black group cursor-pointer"
            >
              <Image
                src="/portfolio/page-6-img-1.webp"
                alt="Color Dash Octagonal Box packaging"
                fill
                sizes="250px"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
              <div className="absolute bottom-2 left-2 right-2 text-center text-white text-[10px] font-mono bg-black/60 backdrop-blur-xs py-1 rounded">
                COLOUR DASH CORE BOX
              </div>
            </motion.div>

            {/* Radially Fanned Watercolor Cards */}
            {FAN_CARDS.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  x: card.x * 1.5,
                  y: card.y * 1.3,
                  rotate: card.angle,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{
                  scale: 1.15,
                  zIndex: 30,
                  transition: { duration: 0.2 },
                }}
                className="absolute z-10 w-24 sm:w-28 aspect-[2.4/3.5] rounded-xl overflow-hidden shadow-lg border-2 border-white/80 bg-white cursor-pointer group"
              >
                <Image
                  src="/portfolio/page-6-img-2.webp"
                  alt={`Watercolor Card ${card.label}`}
                  fill
                  sizes="120px"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-1.5">
                  <span className="text-[9px] text-white font-mono leading-none">
                    {card.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="font-script-hand text-lg text-[#D4A373] text-center mt-4">
            half-solid shades, half-doodle watercolors designed for rapid visual pattern matching
          </p>
        </div>

        {/* PART B: Interactive Rulebook & 3D Flippable Special Cards (Page 7) */}
        <div className="p-6 sm:p-10 rounded-3xl bg-[#F4EFE6] border border-[#E8E1D5] shadow-lg">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-6 mb-8 border-b border-[#E8E1D5] gap-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-[#8A7E68]">
                Part B • PDF Page 07 Interactive Rulebook
              </span>
              <h3 className="font-serif-title text-3xl sm:text-4xl font-light text-[#242220] mt-1">
                Game Mechanics & 3D Special Deck
              </h3>
            </div>

            {/* Quick Rules Snapshot Pills */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-white border border-[#E8E1D5] text-[#242220]">
                Deck: <strong>72 Total Cards</strong> (52 Color + 20 Special)
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-100 text-emerald-900 border border-emerald-200">
                Set: <strong>+50 Pts</strong>
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-amber-100 text-amber-900 border border-amber-200">
                Task Pass: <strong>+20 Pts</strong>
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-rose-100 text-rose-900 border border-rose-200">
                Task Fail: <strong>-30 Pts</strong>
              </span>
            </div>
          </div>

          {/* Interactive 3D Flippable Special Cards Grid */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-serif-title text-xl text-[#242220] flex items-center gap-2">
                <Layers className="w-5 h-5 text-[#D4A373]" />
                Interactive Special Cards
                <span className="font-script-hand text-base text-[#D4A373] font-normal">
                  (Click any card to flip 3D and read mechanics)
                </span>
              </h4>
              <span className="text-xs font-mono text-[#8A7E68] hidden sm:inline">
                Click to Flip (rotateY: 180deg)
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {SPECIAL_CARDS.map((card) => {
                const isFlipped = !!flippedCards[card.id];
                return (
                  <div
                    key={card.id}
                    className="perspective-1000 h-[360px] cursor-pointer"
                    onClick={() => toggleCardFlip(card.id)}
                  >
                    <motion.div
                      animate={{ rotateY: isFlipped ? 180 : 0 }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="relative w-full h-full preserve-3d"
                    >
                      {/* CARD FRONT (Artwork) */}
                      <div className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden bg-white border-2 border-[#E8E1D5] shadow-md flex flex-col justify-between p-3">
                        <div className="flex items-center justify-between">
                          <span
                            className={`px-2 py-0.5 rounded text-[10px] font-mono border ${card.colorBadge}`}
                          >
                            {card.count}
                          </span>
                          <RotateCw className="w-3.5 h-3.5 text-[#8A7E68]" />
                        </div>

                        <div className="relative w-full aspect-[3/4] my-2 rounded-xl overflow-hidden bg-[#ECE5D8]">
                          <Image
                            src={card.imgSrc}
                            alt={card.name}
                            fill
                            sizes="220px"
                            className="object-cover"
                          />
                        </div>

                        <div className="text-center">
                          <h5 className="font-serif-title font-bold text-sm text-[#242220]">
                            {card.name}
                          </h5>
                          <span className="font-mono text-[10px] text-[#D4A373] block mt-0.5">
                            {card.pointsImpact}
                          </span>
                        </div>
                      </div>

                      {/* CARD BACK (Rules & Perks) */}
                      <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl overflow-hidden bg-[#242220] text-white border-2 border-[#D4A373] shadow-xl p-4 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between pb-2 border-b border-white/10 mb-2">
                            <span className="font-mono text-[10px] text-[#FAEDCD]">
                              {card.name.toUpperCase()}
                            </span>
                            <span className="text-[10px] text-white/60">
                              RULES
                            </span>
                          </div>

                          <p className="font-sans-body text-xs text-white/90 leading-relaxed mb-3">
                            &ldquo;{card.frontText}&rdquo;
                          </p>

                          <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-[11px] text-white/80">
                            {card.backRule}
                          </div>
                        </div>

                        <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-[#CCD5AE]">
                          <span>{card.pointsImpact}</span>
                          <span className="text-white/40">Flip ↻</span>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Step-by-Step Game Loop Guide */}
          <div className="p-6 rounded-2xl bg-white/70 border border-[#E8E1D5]">
            <h4 className="font-serif-title text-xl text-[#242220] mb-4 flex items-center gap-2">
              <Shuffle className="w-5 h-5 text-[#D4A373]" />
              How to Play • The Turn Loop
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-[#F4EFE6] border border-[#E8E1D5]">
                <span className="font-mono text-xs font-bold text-[#D4A373] block mb-1">
                  STEP 01
                </span>
                <h5 className="font-serif-title font-semibold text-sm text-[#242220] mb-1">
                  Shuffle & Deal
                </h5>
                <p className="text-xs text-[#6B665F]">
                  Deal starting hands to 2-4 players. Form the draw pile and open
                  the central discard section.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#F4EFE6] border border-[#E8E1D5]">
                <span className="font-mono text-xs font-bold text-[#D4A373] block mb-1">
                  STEP 02
                </span>
                <h5 className="font-serif-title font-semibold text-sm text-[#242220] mb-1">
                  Pick & Match
                </h5>
                <p className="text-xs text-[#6B665F]">
                  Draw from deck or discard. Strategize sets of matching color
                  shades, tones, and tints.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#F4EFE6] border border-[#E8E1D5]">
                <span className="font-mono text-xs font-bold text-[#D4A373] block mb-1">
                  STEP 03
                </span>
                <h5 className="font-serif-title font-semibold text-sm text-[#242220] mb-1">
                  Execute Special Cards
                </h5>
                <p className="text-xs text-[#6B665F]">
                  Deploy Task Cards for rapid room searches (+20 pts) or Black
                  Cards to swap hands with your neighbor!
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#F4EFE6] border border-[#E8E1D5]">
                <span className="font-mono text-xs font-bold text-[#D4A373] block mb-1">
                  STEP 04
                </span>
                <h5 className="font-serif-title font-semibold text-sm text-[#242220] mb-1">
                  Tally & Win
                </h5>
                <p className="text-xs text-[#6B665F]">
                  First player to lock 50-point color sets and bank task bonuses
                  claims the Color Dash crown.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
