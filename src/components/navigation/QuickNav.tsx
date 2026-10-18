"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Compass,
  ChevronUp,
  Layers,
  Sparkles,
  Check,
  X,
} from "lucide-react";
import { playTactileClick } from "@/lib/sound";

interface NavItem {
  id: string;
  page: number;
  label: string;
  category: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: "hero", page: 1, label: "Cover (Return to Top)", category: "Intro" },
  { id: "about", page: 2, label: "About Ishwari", category: "Bio" },
  { id: "table-of-contents", page: 3, label: "Content Moodboard", category: "Index" },
  { id: "journey-across", page: 4, label: "A journey across", category: "Project 01" },
  { id: "wild-within", page: 5, label: "Wild within & Pattern", category: "Project 02" },
  { id: "color-dash", page: 6, label: "Color Dash (Game & Rules)", category: "Project 03" },
  { id: "box-of-magic", page: 8, label: "Box of magic (Packaging)", category: "Project 04" },
  { id: "the-unspoken", page: 10, label: "The Unspoken (Brochure)", category: "Project 05" },
  { id: "stop-motion", page: 12, label: "As i fly high.... (Animation)", category: "Project 06" },
  { id: "wandering-eyes", page: 13, label: "Through my wandering eyes", category: "Project 07" },
  { id: "ho-shin", page: 16, label: "Ho-shin - The ice prince", category: "Project 08" },
  { id: "dreamy-knits", page: 17, label: "Dreamy knits (Crochet)", category: "Project 09" },
  { id: "outro", page: 18, label: "Outro & Colophon", category: "Closing" },
];

export default function QuickNav() {
  const [activeId, setActiveId] = useState<string>("hero");
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const navRef = useRef<HTMLDivElement>(null);

  // Close drop-up menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  // Lock background scrolling while chapter list is open
  useEffect(() => {
    if (menuOpen) {
      // Pause Lenis smooth scrolling for the page
      if (window.__portfolioLenis) {
        window.__portfolioLenis.stop();
      }
      document.body.style.overflow = "hidden";
    } else {
      if (window.__portfolioLenis) {
        window.__portfolioLenis.start();
      }
      document.body.style.overflow = "";
    }

    return () => {
      if (window.__portfolioLenis) {
        window.__portfolioLenis.start();
      }
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Track active section and scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const winScroll = window.scrollY;
      const height =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = height > 0 ? (winScroll / height) * 100 : 0;
      setScrollProgress(progress);

      const sectionElements = NAV_ITEMS.map((item) =>
        document.getElementById(item.id)
      );

      const scrollPosition = window.scrollY + window.innerHeight * 0.35;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const el = sectionElements[i];
        if (el && el.offsetTop <= scrollPosition) {
          setActiveId(NAV_ITEMS[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    playTactileClick();

    // Ensure Lenis is active before scrolling
    if (window.__portfolioLenis) {
      window.__portfolioLenis.start();
    }

    setTimeout(() => {
      const element = document.getElementById(id);
      if (!element) return;

      if (window.__portfolioLenis) {
        window.__portfolioLenis.scrollTo(element, { offset: -20, duration: 1.4 });
      } else {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 50);
  };

  const currentItem =
    NAV_ITEMS.find((item) => item.id === activeId) || NAV_ITEMS[0];

  return (
    <>
      {/* Top Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-black/5 z-50 pointer-events-none">
        <motion.div
          className="h-full bg-gradient-to-r from-[#D4A373] via-[#CCD5AE] to-[#D4A373]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Quick Navigation Pill */}
      <aside
        ref={navRef}
        aria-label="Quick navigation and chapter selector"
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[92vw] max-w-[380px] sm:w-auto sm:max-w-none"
      >
        <div className="relative w-full">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex items-center justify-between sm:justify-start p-1.5 pl-3.5 pr-2 rounded-full bg-[#FBF8F3]/95 backdrop-blur-md border border-[#E8E1D5] shadow-xl shadow-black/10 text-[#242220] w-full"
          >
            {/* Quick Menu / Chapter Drop-Up Trigger */}
            <button
              onClick={() => {
                setMenuOpen(!menuOpen);
                playTactileClick();
              }}
              className="flex items-center gap-2 py-1 pr-1.5 rounded-full text-xs font-medium hover:bg-[#E9EDC9]/50 transition-colors cursor-pointer group min-w-0 flex-1 sm:flex-initial"
              title={menuOpen ? "Close chapter list" : "Choose chapter to jump"}
              aria-label="Choose chapter"
              aria-expanded={menuOpen}
            >
              <Compass className="w-4 h-4 text-[#D4A373] group-hover:rotate-45 transition-transform shrink-0" />
              
              {/* Single line, guaranteed no vertical wrapping */}
              <span className="font-serif-title tracking-wide text-xs sm:text-sm whitespace-nowrap truncate min-w-0 text-left">
                p.{currentItem.page.toString().padStart(2, "0")} • {currentItem.label}
              </span>

              {/* Animated Drop-Up Chevron */}
              <div
                className={`p-1 rounded-full transition-transform duration-200 shrink-0 ml-auto sm:ml-1 ${
                  menuOpen
                    ? "rotate-180 bg-[#CCD5AE] text-[#242220]"
                    : "text-[#8A7E68] group-hover:bg-[#E9EDC9]"
                }`}
              >
                <ChevronUp className="w-3.5 h-3.5" />
              </div>
            </button>
          </motion.div>

          {/* Quick Jump Drawer Popover */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                data-lenis-prevent="true"
                data-lenis-prevent-wheel="true"
                data-lenis-prevent-touch="true"
                initial={{ opacity: 0, y: 12, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.96 }}
                transition={{ duration: 0.2 }}
                className="absolute bottom-14 left-1/2 -translate-x-1/2 w-[92vw] sm:w-[440px] max-w-[460px] max-h-[60vh] sm:max-h-[66vh] overflow-y-auto overscroll-contain rounded-2xl bg-[#FBF8F3]/98 backdrop-blur-2xl border border-[#E8E1D5] shadow-2xl p-4 text-[#242220] z-50 scrollbar-thin"
              >
                {/* Header */}
                <div className="flex items-center justify-between pb-3 border-b border-[#E8E1D5] mb-2 sticky top-0 bg-[#FBF8F3]/95 backdrop-blur-sm z-10">
                  <div className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-[#D4A373]" />
                    <span className="font-serif-title font-semibold text-sm">
                      Jump to Chapter (18 Pages)
                    </span>
                  </div>
                  <button
                    onClick={() => setMenuOpen(false)}
                    className="p-1 rounded-full text-[#8A7E68] hover:bg-[#ECE5D8] transition-colors cursor-pointer"
                    aria-label="Close chapter menu"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Chapter List */}
                <div className="space-y-1 py-1">
                  {NAV_ITEMS.map((item) => {
                    const isActive = activeId === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => scrollTo(item.id)}
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-left text-xs transition-all cursor-pointer ${
                          isActive
                            ? "bg-[#E9EDC9] text-[#242220] font-medium shadow-xs ring-1 ring-[#CCD5AE]"
                            : "hover:bg-[#F4EFE6] text-[#4A4742]"
                        }`}
                      >
                        <div className="flex items-center gap-2 sm:gap-2.5 min-w-0 flex-1 mr-2">
                          <span className="font-mono text-[11px] text-[#8A7E68] w-7 shrink-0">
                            p.{item.page.toString().padStart(2, "0")}
                          </span>
                          <span className="font-sans-body truncate text-xs">
                            {item.label}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5 shrink-0">
                          <span className="text-[10px] uppercase tracking-wider text-[#8A7E68] font-medium hidden sm:inline">
                            {item.category}
                          </span>
                          {isActive && (
                            <Check className="w-3.5 h-3.5 text-[#242220] shrink-0" />
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Footer Signature */}
                <div className="mt-3 pt-3 border-t border-[#E8E1D5] flex items-center justify-between text-[11px] text-[#8A7E68] sticky bottom-0 bg-[#FBF8F3]/95 backdrop-blur-sm">
                  <span>Ishwari Jangam</span>
                  <span className="flex items-center gap-1 font-script-hand text-sm text-[#D4A373]">
                    <Sparkles className="w-3 h-3" /> Pune, India
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </aside>
    </>
  );
}
