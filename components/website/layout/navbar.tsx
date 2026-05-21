"use client";

import Link from "next/link";
import { Search } from "lucide-react";

import SearchOverlay from "./search-overlay";
import MobileMenu from "./mobile-menu";

export default function WebsiteNavbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <div className="container-width">

        <div
          className="
            mt-5
            flex items-center justify-between
            rounded-full
            border border-black/10
            bg-white/20
            px-6 lg:px-10
            py-4
            backdrop-blur-xl
            shadow-[0_8px_40px_rgba(0,0,0,0.15)]
          "
        >

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center"
          >
            <img
              src="/logo.png"
              alt="AVTHAR Logo"
              className="h-14 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="
              hidden lg:flex items-center
              gap-10
              text-[12px]
              font-medium
              uppercase
              tracking-[0.22em]
              text-black
            "
          >

            <Link
  href="/products"
  className="
    transition duration-300
    hover:text-violet-600
  "
>
  Products
</Link>

            <Link
              href="/collections"
              className="
                transition duration-300
                hover:text-violet-600
              "
            >
              Collections
            </Link>

            <Link
              href="/projects"
              className="
                transition duration-300
                hover:text-violet-600
              "
            >
              Projects
            </Link>

            <Link
              href="/gallery"
              className="
                transition duration-300
                hover:text-violet-600
              "
            >
              Gallery
            </Link>

            <Link
              href="/about"
              className="
                transition duration-300
                hover:text-violet-600
              "
            >
              About
            </Link>

            <Link
              href="/contact"
              className="
                transition duration-300
                hover:text-violet-600
              "
            >
              Contact
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-5">

            {/* Search */}
            <button
              className="
                hidden lg:flex items-center justify-center
                text-black transition duration-300
                hover:text-violet-600
              "
            >
              <Search size={18} strokeWidth={2.2} />
            </button>

            {/* Existing SearchOverlay */}
            <div className="hidden">
              <SearchOverlay />
            </div>

            {/* Dealer Login */}
            <Link
              href="/api/dealer/dashboard"
              className="
                hidden lg:flex items-center justify-center
                rounded-full
                border border-black/30
                px-5 py-2
                text-[11px]
                font-medium
                uppercase
                tracking-[0.22em]
                text-black
                transition-all duration-300
                hover:bg-black
                hover:text-white
              "
            >
              Dealer Login
            </Link>

            {/* Mobile Menu */}
            <div className="text-black lg:hidden">
              <MobileMenu />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}