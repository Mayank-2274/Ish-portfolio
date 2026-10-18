"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Search,
  Activity,
  HeartHandshake,
  Brain,
  Sparkles,
  Gift,
  Users,
} from "lucide-react";
import { playCardFlipSound } from "@/lib/sound";

interface CharacterArchetype {
  id: string;
  name: string;
  role: string;
  themeColor: string;
  borderGlow: string;
  bgGradient: string;
  icon: React.ReactNode;
  tagline: string;
  abilities: string[];
  stats: { attack: number; empathy: number; strategy: number };
}

const CHARACTERS: CharacterArchetype[] = [
  {
    id: "detective",
    name: "THE DETECTIVE",
    role: "Investigative Infiltrator",
    themeColor: "#3B82F6",
    borderGlow: "border-blue-500 shadow-blue-500/20",
    bgGradient: "from-blue-950/40 to-slate-900/60",
    icon: <Search className="w-5 h-5 text-blue-400" />,
    tagline: "Uncovering truth from shadowed crime scenes.",
    abilities: [
      "Investigates covert scenes",
      "Gathers Forensic Evidence",
      "Seeks Impartial Justice",
      "Catches the Criminal",
    ],
    stats: { attack: 75, empathy: 60, strategy: 95 },
  },
  {
    id: "doctor",
    name: "THE DOCTOR",
    role: "Support & Field Medic",
    themeColor: "#10B981",
    borderGlow: "border-emerald-500 shadow-emerald-500/20",
    bgGradient: "from-emerald-950/40 to-slate-900/60",
    icon: <Activity className="w-5 h-5 text-emerald-400" />,
    tagline: "Healing physical trauma & sustaining the unit.",
    abilities: [
      "Revive downed allies",
      "Cure afflictions & wounds",
      "Support & Shield Teammates",
      "Field Medical Aid",
    ],
    stats: { attack: 45, empathy: 95, strategy: 80 },
  },
  {
    id: "rescuer",
    name: "THE RESCUER",
    role: "Animal Guardian & Advocate",
    themeColor: "#F59E0B",
    borderGlow: "border-amber-500 shadow-amber-500/20",
    bgGradient: "from-amber-950/40 to-slate-900/60",
    icon: <HeartHandshake className="w-5 h-5 text-amber-400" />,
    tagline: "Protecting voiceless creatures and inspiring empathy.",
    abilities: [
      "Rescue Endangered Animals",
      "Spread Public Awareness",
      "Foster Community Bonding",
      "Defend Harmless Lives",
    ],
    stats: { attack: 65, empathy: 98, strategy: 70 },
  },
  {
    id: "psychologist",
    name: "THE PSYCHOLOGIST",
    role: "Mental Tactician & Empath",
    themeColor: "#A855F7",
    borderGlow: "border-purple-500 shadow-purple-500/20",
    bgGradient: "from-purple-950/40 to-slate-900/60",
    icon: <Brain className="w-5 h-5 text-purple-400" />,
    tagline: "Navigating psyche, de-escalating violence & psychic intervention.",
    abilities: [
      "Tactical Mind Teleport",
      "Empathetic Mind Control",
      "Mental Health Restoration",
      "Psychology De-escalation",
    ],
    stats: { attack: 60, empathy: 90, strategy: 98 },
  },
];

const FEATURES = [
  "Roleplay Scenarios",
  "Educational Impact",
  "Interactive Choices",
  "Deep Branching Story",
  "Immersive Audio-Visuals",
  "Brain Storming Puzzles",
];

export default function TheUnspoken() {
  const [activeSide, setActiveSide] = useState<"front" | "back">("front");
  const [selectedChar, setSelectedChar] = useState<CharacterArchetype>(
    CHARACTERS[0]
  );

  return (
    <section
      id="the-unspoken"
      className="relative min-h-screen py-24 px-6 md:px-12 bg-[#FBF8F3] paper-grain overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header & Metadata */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 pb-6 border-b border-[#E8E1D5] gap-4">
          <div>
            <div className="flex items-center gap-3 text-xs tracking-widest uppercase text-[#8A7E68] font-mono mb-2">
              <span className="text-[#D4A373] font-bold">PROJECT 05</span>
              <span>•</span>
              <span>PAGES 10 & 11</span>
              <span>•</span>
              <span>GAME BROCHURE & CHARACTER DESIGN</span>
            </div>
            <h2 className="font-serif-title text-4xl sm:text-6xl font-light text-[#242220] tracking-tight">
              The Unspoken
            </h2>
          </div>

          {/* Technical Metadata */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-mono text-[#6B665F]">
            <span className="px-3 py-1.5 rounded-lg bg-[#F4EFE6] border border-[#E8E1D5]">
              Size: <strong className="text-[#242220]">2000 x 1545</strong>
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-[#F4EFE6] border border-[#E8E1D5]">
              Medium: <strong className="text-[#242220]">Digital (Canva)</strong>
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
            &ldquo;This is a Brochure for a game made to fight against
            violence. I have designed different characters roles to experience
            different scenarios.&rdquo;
          </p>
          <div className="flex items-center gap-2 font-script-hand text-base text-[#D4A373] whitespace-nowrap">
            <Sparkles className="w-4 h-4 text-[#CCD5AE]" />
            interactive 3D brochure & character selection roster
          </div>
        </motion.div>

        {/* 3D Trifold / Bifold Interactive Brochure Viewer */}
        <div className="p-6 sm:p-10 rounded-3xl bg-[#F4EFE6] border border-[#E8E1D5] shadow-lg mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 pb-4 border-b border-[#E8E1D5] gap-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-[#8A7E68]">
                Interactive Brochure Viewer
              </span>
              <h3 className="font-serif-title text-2xl sm:text-3xl font-light text-[#242220] mt-0.5">
                {activeSide === "front"
                  ? "Frontside • Overview, Key Features & Disclaimer"
                  : "Backside • 4 Playable Classes & Join Us CTA"}
              </h3>
            </div>

            {/* Side Toggle Flip Button */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  if (activeSide !== "front") {
                    playCardFlipSound();
                    setActiveSide("front");
                  }
                }}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
                  activeSide === "front"
                    ? "bg-[#242220] text-white shadow-xs"
                    : "bg-[#ECE5D8] text-[#6B665F] hover:bg-[#E8E1D5]"
                }`}
              >
                Page 10 (Frontside)
              </button>
              <button
                onClick={() => {
                  if (activeSide !== "back") {
                    playCardFlipSound();
                    setActiveSide("back");
                  }
                }}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
                  activeSide === "back"
                    ? "bg-[#242220] text-white shadow-xs"
                    : "bg-[#ECE5D8] text-[#6B665F] hover:bg-[#E8E1D5]"
                }`}
              >
                Page 11 (Backside)
              </button>
            </div>
          </div>

          {/* Brochure Artwork Container with 3D Flip animation */}
          <div className="perspective-1000 w-full mb-8">
            <motion.div
              key={activeSide}
              initial={{ rotateY: activeSide === "front" ? -90 : 90, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[16/11] w-full rounded-2xl overflow-hidden bg-[#ECE5D8] border-2 border-[#E8E1D5] shadow-xl"
            >
              <Image
                src={
                  activeSide === "front"
                    ? "/portfolio/page-10-img-1.webp"
                    : "/portfolio/page-11-img-1.webp"
                }
                alt={`The Unspoken Game Brochure ${activeSide}`}
                fill
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-contain"
              />
            </motion.div>
          </div>

          {/* Key Features & Promo Code Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center pt-2 border-t border-[#E8E1D5]">
            {/* Features Tags */}
            <div className="md:col-span-8 flex flex-wrap gap-2">
              {FEATURES.map((feat, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full text-xs font-sans-body bg-[#ECE5D8] text-[#4A4742] border border-[#E8E1D5]"
                >
                  ✓ {feat}
                </span>
              ))}
            </div>

            {/* Promo Code IAMBRAVE Badge */}
            <div className="md:col-span-4 flex items-center justify-end">
              <div className="px-3.5 py-1.5 rounded-xl bg-amber-100 border border-amber-300 text-amber-900 text-xs font-mono flex items-center gap-2 shadow-xs">
                <Gift className="w-4 h-4 text-amber-600" />
                <span>
                  Code: <strong className="font-bold">IAMBRAVE</strong> (Bonus
                  Feature)
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* RPG CHARACTER SELECTION ROSTER (Backside Deep Dive) */}
        <div className="p-6 sm:p-10 rounded-3xl bg-[#171717] text-white border border-neutral-800 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-neutral-800 gap-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#CCD5AE]">
                Interactive RPG Character Roster
              </span>
              <h3 className="font-serif-title text-3xl sm:text-4xl font-light text-white mt-1">
                Choose Your Agent Against Violence
              </h3>
            </div>
            <span className="font-script-hand text-xl text-[#FAEDCD]">
              4 playable archetypes with unique stat matrices
            </span>
          </div>

          {/* Character Card Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {CHARACTERS.map((char) => {
              const isSelected = selectedChar.id === char.id;
              return (
                <motion.div
                  key={char.id}
                  whileHover={{ y: -4 }}
                  onClick={() => {
                    playCardFlipSound();
                    setSelectedChar(char);
                  }}
                  className={`p-5 rounded-2xl cursor-pointer transition-all border ${
                    isSelected
                      ? `${char.borderGlow} bg-gradient-to-b ${char.bgGradient} shadow-lg ring-1 ring-white/30`
                      : "border-neutral-800 bg-neutral-900/60 hover:border-neutral-700"
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${char.themeColor}25` }}
                    >
                      {char.icon}
                    </div>
                    <span className="font-mono text-[10px] uppercase text-neutral-400">
                      CLASS 0{CHARACTERS.indexOf(char) + 1}
                    </span>
                  </div>

                  <h4 className="font-serif-title text-xl font-bold text-white mb-0.5">
                    {char.name}
                  </h4>
                  <span className="text-xs text-neutral-400 font-sans-body block mb-3">
                    {char.role}
                  </span>

                  <p className="text-[11px] text-neutral-300 italic mb-4">
                    &ldquo;{char.tagline}&rdquo;
                  </p>

                  {/* Character Abilities */}
                  <div className="space-y-1.5 border-t border-white/10 pt-3">
                    {char.abilities.map((ability, idx) => (
                      <div
                        key={idx}
                        className="text-xs text-neutral-300 flex items-center gap-1.5"
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: char.themeColor }}
                        />
                        <span>{ability}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Selected Character Stat Console */}
          <div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg"
                style={{ backgroundColor: `${selectedChar.themeColor}25` }}
              >
                {selectedChar.icon}
              </div>
              <div>
                <h4 className="font-serif-title text-2xl font-bold text-white">
                  Active Class: {selectedChar.name}
                </h4>
                <p className="text-xs text-neutral-400">
                  {selectedChar.role} • Ready for deployment in community campaign
                </p>
              </div>
            </div>

            {/* Stat Bars */}
            <div className="flex-1 max-w-md w-full space-y-2">
              <div>
                <div className="flex justify-between text-[11px] font-mono text-neutral-400 mb-1">
                  <span>RESOLVE / ATTACK</span>
                  <span>{selectedChar.stats.attack}%</span>
                </div>
                <div className="h-1.5 w-full bg-neutral-800 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ backgroundColor: selectedChar.themeColor }}
                    initial={{ width: 0 }}
                    animate={{ width: `${selectedChar.stats.attack}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-[11px] font-mono text-neutral-400 mb-1">
                  <span>EMPATHY / HEALING</span>
                  <span>{selectedChar.stats.empathy}%</span>
                </div>
                <div className="h-1.5 w-full bg-neutral-800 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ backgroundColor: selectedChar.themeColor }}
                    initial={{ width: 0 }}
                    animate={{ width: `${selectedChar.stats.empathy}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-[11px] font-mono text-neutral-400 mb-1">
                  <span>STRATEGY & MIND</span>
                  <span>{selectedChar.stats.strategy}%</span>
                </div>
                <div className="h-1.5 w-full bg-neutral-800 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ backgroundColor: selectedChar.themeColor }}
                    initial={{ width: 0 }}
                    animate={{ width: `${selectedChar.stats.strategy}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>
            </div>

            {/* Community CTA: JOIN US! */}
            <div className="flex flex-col items-center sm:items-end">
              <span className="font-script-hand text-xl text-[#FAEDCD] mb-1">
                Stand against violence
              </span>
              <button className="px-6 py-2.5 rounded-xl font-mono text-xs font-bold uppercase tracking-wider bg-white text-black hover:bg-[#CCD5AE] transition-colors shadow-md flex items-center gap-2">
                <Users className="w-4 h-4" /> JOIN US!
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
