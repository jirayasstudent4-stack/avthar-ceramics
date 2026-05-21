"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      className="relative h-screen min-h-[800px] overflow-hidden bg-black"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070')",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* LAYERED GRADIENT OVERLAYS */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f0c29]/90 via-[#1d4ed8]/30 to-[#312e81]/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

      {/* ANIMATED GLOW BLOBS */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.18, 0.32, 0.18] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-[#1d4ed8]/25 blur-[120px] pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.12, 0.25, 0.12] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute -bottom-40 -right-40 w-[700px] h-[700px] rounded-full bg-[#312e81]/30 blur-[140px] pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-red-600/10 blur-[100px] pointer-events-none"
      />

      {/* CONTENT */}
      <div className="relative z-20 h-full flex items-center">
        <div className="container-width w-full">
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            className="max-w-[900px] pt-32 md:pt-40"
          >
            {/* SUBTITLE BADGE */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="inline-flex items-center gap-3 mb-10"
            >
              <span className="uppercase tracking-[0.45em] text-xs text-white/60 backdrop-blur-sm bg-white/5 border border-white/10 px-4 py-2 rounded-full">
                International Luxury Ceramic Surfaces
              </span>
            </motion.div>

            {/* HEADING */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.35 }}
              className="font-bold tracking-[-0.03em] leading-[0.88] text-white mb-10"
              style={{ fontSize: "clamp(3.5rem, 9vw, 7.5rem)" }}
            >
              Crafted For
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/50">
                Modern
              </span>
              <br />
              Architecture
            </motion.h1>

            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.55 }}
              className="text-white/65 text-lg md:text-xl leading-9 max-w-[640px] mb-14"
            >
              Premium porcelain and ceramic collections engineered for luxury
              interiors, timeless architecture, and contemporary living spaces.
            </motion.p>

            {/* BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.75 }}
              className="flex flex-col sm:flex-row gap-5 pb-20"
            >
              <Link
                href="/products"
                className="group relative inline-flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white px-10 py-5 uppercase tracking-[0.2em] text-sm font-semibold transition-all duration-500 hover:shadow-[0_0_40px_rgba(220,38,38,0.5)] hover:scale-[1.03] active:scale-100"
              >
                Explore Collection
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>

              <Link
                href="/projects"
                className="group inline-flex items-center justify-center gap-3 border border-white/20 bg-white/5 backdrop-blur-xl text-white px-10 py-5 uppercase tracking-[0.2em] text-sm hover:bg-white hover:text-black transition-all duration-500 hover:scale-[1.03] active:scale-100"
              >
                View Projects
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* BOTTOM BLEND */}
      <div className="absolute bottom-0 left-0 w-full h-52 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none" />

      {/* SIDE VIGNETTE */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/20 pointer-events-none" />
    </section>
  );
}
