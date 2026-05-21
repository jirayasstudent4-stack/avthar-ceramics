"use client";

import { motion } from "framer-motion";

export default function LuxuryLoader() {
  return (
    <div className="fixed inset-0 bg-white z-[999] flex items-center justify-center">
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.9,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="text-5xl font-semibold tracking-[0.4em]"
      >
        AVTHAR
      </motion.div>
    </div>
  );
}