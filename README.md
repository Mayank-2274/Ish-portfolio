# Ishwari Jangam — Design & Craft Portfolio

A high-craft, scroll-driven editorial portfolio website for artist and designer **Ishwari Jangam**, translating her 18-page selected works collection into an interactive, animated web experience.

## ✨ Features & Architecture

- **Chronological 18-Page Narrative**: Faithfully maps every section from the editorial collection across 9 featured projects.
- **Interactive Mechanics**:
  - **Project 01 (A Journey Across)**: Interactive color-continent explorer with territory hotspots and desktop full-screen modal.
  - **Project 02 (Wild Within)**: Seamless 1x, 2x2, and 3x3 pattern tessellation engine.
  - **Project 03 (Color Dash)**: 3D flippable card mechanics with custom physical cardstock flip sound effects.
  - **Project 04 (Box of Magic)**: 3-step isometric origami unfolding progression with paper crease acoustics.
  - **Project 05 (The Unspoken)**: 3D trifold brochure toggle and RPG character roster.
  - **Project 06 (Stop Motion)**: Tactile animation showcase with integrated video and waste material breakdown.
  - **Project 07 (Photography Gallery)**: Daylight architectural frames transitioning to an obsidian darkroom cursor spotlight.
  - **Project 08 (Ho-Shin)**: Acrylic color study with 3D card tilt and 5-swatch palette inspector.
  - **Project 09 (Dreamy Knits)**: Masonry crochet collage with hand-drawn SVG connector curves.
- **Physical Sound Engine**: Zero-dependency Web Audio API synthesizer for tactile navigation taps and physical card flips.
- **Quick Jump Chapter Drawer**: Floating chapter selector with reading progress tracking and Lenis smooth scrolling.

## 🛠 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **Language**: TypeScript
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Smooth Inertial Scroll**: [Lenis](https://lenis.darkroom.engineering/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Audio**: Web Audio API (Native synthesized tactile acoustics)

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 🌐 Deploy to Vercel

The repository is fully configured for deployment on [Vercel](https://vercel.com):

1. Import this repository (`https://github.com/Mayank-2274/Ish-portfolio.git`) in your Vercel Dashboard.
2. Vercel automatically detects Next.js.
3. Click **Deploy**. No additional environment variables required.
