"use client";

import Link from "next/link";
import { Search } from "lucide-react";
import SearchOverlay from "./search-overlay";
import MobileMenu from "./mobile-menu";

export default function WebsiteNavbar() {
  return (
    <>
      {/*
        Flat fixed bar — no pill wrapper, no outer padding div.
        Height is explicit: h-16 mobile, h-20 desktop.
        overflow-hidden is intentionally NOT set here so the
        MobileMenu portal (rendered at body level) is never clipped.
      */}
      <header
        className="
          fixed top-0 left-0 right-0 z-50
          h-16 lg:h-20
          flex items-center
          px-4 sm:px-6 lg:px-10
          bg-black/40 backdrop-blur-xl
          border-b border-white/10
        "
      >
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0 mr-auto">
          <img
            src="/logo.png"
            alt="AVTHAR Logo"
            className="h-8 sm:h-10 lg:h-12 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-10 text-[11px] xl:text-[12px] font-medium uppercase tracking-[0.22em] text-white mr-8 xl:mr-10">
          <Link href="/products"    className="whitespace-nowrap transition-colors duration-300 hover:text-white/60">Products</Link>
          <Link href="/collections" className="whitespace-nowrap transition-colors duration-300 hover:text-white/60">Collections</Link>
          <Link href="/projects"    className="whitespace-nowrap transition-colors duration-300 hover:text-white/60">Projects</Link>
          <Link href="/gallery"     className="whitespace-nowrap transition-colors duration-300 hover:text-white/60">Gallery</Link>
          <Link href="/about"       className="whitespace-nowrap transition-colors duration-300 hover:text-white/60">About</Link>
          <Link href="/contact"     className="whitespace-nowrap transition-colors duration-300 hover:text-white/60">Contact</Link>
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Search — desktop only */}
          <button
            aria-label="Search"
            className="hidden lg:flex items-center justify-center w-9 h-9 rounded-full text-white/70 transition-colors duration-300 hover:text-white hover:bg-white/10"
          >
            <Search size={17} strokeWidth={2} />
          </button>

          <div className="hidden">
            <SearchOverlay />
          </div>

          {/* Dealer Login — desktop only */}
          <Link
            href="/api/dealer/dashboard"
            className="hidden lg:flex items-center justify-center rounded-full border border-white/25 px-4 xl:px-5 py-2 text-[11px] font-medium uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-white hover:text-black whitespace-nowrap"
          >
            Dealer Login
          </Link>

          {/* Mobile hamburger — MobileMenu renders its overlay via portal at body level */}
          <div className="lg:hidden">
            <MobileMenu />
          </div>
        </div>
      </header>
    </>
  );
}
