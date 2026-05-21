"use client";

import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
}

export default function LuxuryButton({
  children,
}: Props) {
  return (
    <motion.button
      whileHover={{
        scale: 1.03,
      }}
      whileTap={{
        scale: 0.98,
      }}
      className="bg-black text-white px-8 py-5 rounded-full uppercase tracking-[0.2em] text-sm"
    >
      {children}
    </motion.button>
  );
}