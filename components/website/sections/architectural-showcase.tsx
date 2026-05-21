"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import FadeIn from "@/components/website/animations/fade-in";
export default function ArchitecturalShowcase() {
  return (
    <FadeIn>
    <section className="relative h-[120vh] overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2070"
        alt="Architecture"
        className="absolute inset-0 w-full h-full object-cover"
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 h-full flex items-center">
        <div className="container-width">
          <motion.div
            initial={{
              opacity: 0,
              y: 60,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1,
            }}
            className="max-w-[850px]"
          >
            <p className="uppercase tracking-[0.4em] text-sm text-white/70 mb-8">
              Architectural Surfaces
            </p>

            <h2 className="text-7xl md:text-8xl font-semibold tracking-tight text-white leading-none mb-10">
              Designed For Timeless Spaces
            </h2>

            <p className="text-xl text-white/70 leading-9 mb-10 max-w-[650px]">
              Crafted for luxury residences, contemporary architecture, hospitality projects, and premium interiors worldwide.
            </p>

            <button className="bg-white text-black px-8 py-5 rounded-full uppercase tracking-[0.2em] text-sm">
              Explore Projects
            </button>
          </motion.div>
        </div>
      </div>
    </section>
    </FadeIn>
  );
}