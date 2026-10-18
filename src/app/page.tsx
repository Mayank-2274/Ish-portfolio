import React from "react";
import QuickNav from "@/components/navigation/QuickNav";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import TableOfContents from "@/components/sections/TableOfContents";
import JourneyAcross from "@/components/sections/JourneyAcross";
import WildWithin from "@/components/sections/WildWithin";
import ColorDash from "@/components/sections/ColorDash";
import BoxOfMagic from "@/components/sections/BoxOfMagic";
import TheUnspoken from "@/components/sections/TheUnspoken";
import StopMotion from "@/components/sections/StopMotion";
import PhotographyGallery from "@/components/sections/PhotographyGallery";
import HoShin from "@/components/sections/HoShin";
import DreamyKnits from "@/components/sections/DreamyKnits";
import Outro from "@/components/sections/Outro";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full bg-[#FBF8F3]">
      {/* Floating Quick Navigation Pill */}
      <QuickNav />

      {/* 1. Hero Cover (PDF Page 1) */}
      <Hero />

      {/* 2. About Section (PDF Page 2) */}
      <About />

      {/* 3. Interactive Table of Contents (PDF Page 3) */}
      <TableOfContents />

      {/* 4. Project 1: "A journey across" (PDF Page 4) */}
      <JourneyAcross />

      {/* 5. Project 2: "Wild within" & Seamless Pattern (PDF Page 5) */}
      <WildWithin />

      {/* 6. Project 3: "Color Dash" Overview & Rules (PDF Pages 6 & 7) */}
      <ColorDash />

      {/* 7. Project 4: "Box of magic" & Prototype (PDF Pages 8 & 9) */}
      <BoxOfMagic />

      {/* 8. Project 5: "The Unspoken" Game Brochure (PDF Pages 10 & 11) */}
      <TheUnspoken />

      {/* 9. Project 6: "As i fly high...." Stop Motion (PDF Page 12) */}
      <StopMotion />

      {/* 10. Project 7: "Through my wandering eyes" Photography Series (PDF Pages 13, 14 & 15) */}
      <PhotographyGallery />

      {/* 11. Project 8: "Ho-shin - The ice prince" (PDF Page 16) */}
      <HoShin />

      {/* 12. Project 9: "Dreamy knits" (PDF Page 17) */}
      <DreamyKnits />

      {/* 13. Closing Outro (PDF Page 18) */}
      <Outro />
    </main>
  );
}
