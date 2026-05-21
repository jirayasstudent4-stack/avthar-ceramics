"use client";

import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { name: "Home",        href: "/" },
  { name: "Products",    href: "/products" },
  { name: "Collections", href: "/collections" },
  { name: "Projects",    href: "/projects" },
  { name: "Gallery",     href: "/gallery" },
  { name: "About",       href: "/about" },
  { name: "Contact",     href: "/contact" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Ensure portal target exists (SSR safety)
  useEffect(() => { setMounted(true); }, []);

  // Lock / unlock body scroll
  useEffect(() => {
    if (!mounted) return;
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open, mounted]);

  // Close on Escape key
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") setOpen(false);
  }, []);
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const close = () => setOpen(false);

  const overlay = (
    <AnimatePresence>
      {open && (
        /*
          fixed inset-0 z-[999] — sits above everything including the navbar (z-50).
          This is rendered via createPortal directly into document.body,
          so it is NEVER clipped by any ancestor overflow or stacking context.
        */
        <motion.div
          key="mobile-menu-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[999] bg-[#080809]/95 backdrop-blur-xl overflow-y-auto overflow-x-hidden"
        >
          {/* Inner layout — full height flex column */}
          <div className="min-h-full flex flex-col px-6 py-6">

            {/* Top bar: logo + close */}
            <div className="flex items-center justify-between mb-10 shrink-0">
              <Link href="/" onClick={close} className="flex items-center">
                <img
                  src="/logo.png"
                  alt="AVTHAR"
                  className="h-8 w-auto object-contain brightness-0 invert"
                />
              </Link>
              <button
                onClick={close}
                aria-label="Close navigation menu"
                className="flex items-center justify-center w-10 h-10 rounded-full text-white/60 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X size={20} strokeWidth={1.8} />
              </button>
            </div>

            {/* Nav links — staggered fade-in */}
            <nav className="flex flex-col flex-1">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.3, delay: 0.05 + i * 0.06, ease: "easeOut" }}
                >
                  <Link
                    href={link.href}
                    onClick={close}
                    className="
                      group flex items-center justify-between
                      py-5 border-b border-white/[0.07]
                      text-2xl font-medium tracking-wide text-white/75
                      hover:text-white transition-colors duration-200
                    "
                  >
                    {link.name}
                    <ArrowRight
                      size={18}
                      className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-white/40"
                    />
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Dealer Login CTA */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.5 }}
              className="mt-10 shrink-0"
            >
              <Link
                href="/api/dealer/dashboard"
                onClick={close}
                className="
                  flex items-center justify-center gap-2
                  w-full rounded-full
                  bg-white text-black
                  py-4 px-6
                  uppercase tracking-[0.2em] text-xs font-semibold
                  hover:bg-red-600 hover:text-white
                  transition-colors duration-300
                "
              >
                Dealer Login
                <ArrowRight size={14} />
              </Link>
            </motion.div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      {/* Hamburger button — lives inside the navbar */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Open navigation menu"
        className="flex items-center justify-center w-9 h-9 rounded-full text-white hover:bg-white/10 transition-colors"
      >
        <Menu size={20} strokeWidth={1.8} />
      </button>

      {/* Overlay — rendered at document.body via portal */}
      {mounted && createPortal(overlay, document.body)}
    </>
  );
}
