"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import FadeIn from "@/components/website/animations/fade-in";

export default function ArchitecturalShowcase() {
  return (
    <FadeIn>
      <section className="relative min-h-[70vh] sm:min-h-[80vh] lg:min-h-[120vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2070"
          alt="Architecture"
          className="absolute inset-0 w-full h-full object-cover"
          fill
          sizes="100vw"
          priority
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 h-full min-h-[70vh] sm:min-h-[80vh] lg:min-h-[120vh] flex items-center">
          <div className="container-width py-20 sm:py-28">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="max-w-[850px]"
            >
              <p className="uppercase tracking-[0.4em] text-xs sm:text-sm text-white/70 mb-6 sm:mb-8">
                Architectural Surfaces
              </p>

              <h2
                className="font-semibold tracking-tight text-white leading-none mb-6 sm:mb-10"
                style={{ fontSize: "clamp(2.2rem, 7vw, 6rem)" }}
              >
                Designed For Timeless Spaces
              </h2>

              <p className="text-base sm:text-xl text-white/70 leading-7 sm:leading-9 mb-8 sm:mb-10 max-w-[650px]">
                Crafted for luxury residences, contemporary architecture, hospitality projects, and premium interiors worldwide.
              </p>

              <Link
                href="/projects"
                className="inline-block bg-white text-black px-7 sm:px-8 py-4 sm:py-5 rounded-full uppercase tracking-[0.2em] text-xs sm:text-sm hover:bg-red-600 hover:text-white transition-all duration-300"
              >
                Explore Projects
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </FadeIn>
  );
}
