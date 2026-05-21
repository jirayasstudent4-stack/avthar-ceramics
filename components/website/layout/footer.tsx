"use client";

import Link from "next/link";
import { ArrowRight, MapPin, Mail, Phone, ChevronUp } from "lucide-react";

export default function WebsiteFooter() {
  return (
    <footer className="relative bg-[#0b0b0d] text-white overflow-hidden">

      {/* PREMIUM BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-red-500/10 blur-[180px]" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-orange-500/10 blur-[160px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <div className="relative container-width">

        {/* TOP SECTION */}
        <div className="pt-16 sm:pt-24 pb-16 sm:pb-24 border-b border-white/10">
          <p className="uppercase tracking-[0.35em] text-red-500 text-xs sm:text-sm mb-6 sm:mb-8">
            Luxury Ceramic Experience
          </p>

          <h2
            className="font-semibold leading-[1.05] max-w-5xl"
            style={{ fontSize: "clamp(1.75rem, 5vw, 5rem)" }}
          >
            Designing timeless spaces through premium surfaces & modern luxury.
          </h2>

          <div className="mt-8 sm:mt-12">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 sm:gap-4 border border-white/15 px-6 sm:px-8 py-4 sm:py-5 rounded-full hover:bg-white hover:text-black transition-all duration-500 text-sm"
            >
              <span className="uppercase tracking-[0.2em]">Start Your Project</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-all duration-300" />
            </Link>
          </div>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr] gap-12 md:gap-16 lg:gap-20 py-16 sm:py-24">

          {/* BRAND SIDE */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-wide mb-6 sm:mb-8">AVTHAR</h2>
            <p className="text-white/55 text-base sm:text-lg leading-8 sm:leading-9 max-w-lg">
              Since 2003, AVTHAR has delivered premium ceramic, granite and luxury interior solutions trusted by architects, designers and modern homeowners.
            </p>

            <div className="space-y-4 mt-10 sm:mt-14">
              {[
                { icon: MapPin, label: "Visit Us", value: "Chennai, Tamil Nadu, India" },
                { icon: Mail, label: "Email", value: "sales@avtharceramics.com" },
                { icon: Phone, label: "Call Us", value: "+91 98765 43210" },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="group flex items-start gap-4 sm:gap-5 p-4 sm:p-5 rounded-3xl border border-white/10 hover:border-red-500/30 hover:bg-white/[0.03] transition-all duration-500">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-red-500/10 flex items-center justify-center shrink-0">
                    <Icon size={16} className="text-red-500" />
                  </div>
                  <div>
                    <p className="text-white text-base sm:text-lg mb-1">{label}</p>
                    <p className="text-white/50 text-sm sm:text-base leading-7 break-all">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* COMPANY LINKS */}
          <div>
            <h3 className="text-white text-xl sm:text-2xl mb-8 sm:mb-10">Company</h3>
            <div className="space-y-5 sm:space-y-7">
              {["About Us", "Gallery", "Projects", "Transport", "Service", "Dealers"].map((item) => (
                <Link
                  key={item}
                  href="/"
                  className="group flex items-center justify-between border-b border-white/5 pb-4 sm:pb-5 text-white/55 hover:text-white transition-all duration-300"
                >
                  <span className="text-lg sm:text-xl">{item}</span>
                  <ArrowRight size={16} className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </Link>
              ))}
            </div>
          </div>

          {/* COLLECTIONS LINKS */}
          <div>
            <h3 className="text-white text-xl sm:text-2xl mb-8 sm:mb-10">Collections</h3>
            <div className="space-y-5 sm:space-y-7">
              {["Tiles", "Granites", "Fittings", "Sanitarywares", "Marbles", "Luxury Surfaces"].map((item) => (
                <Link
                  key={item}
                  href="/"
                  className="group flex items-center justify-between border-b border-white/5 pb-4 sm:pb-5 text-white/55 hover:text-white transition-all duration-300"
                >
                  <span className="text-lg sm:text-xl">{item}</span>
                  <ArrowRight size={16} className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/10 py-8 sm:py-10 flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">

          {/* Watermark — clamp prevents overflow */}
          <h1
            className="font-semibold leading-none tracking-tight text-white/10 select-none"
            style={{ fontSize: "clamp(2.5rem, 10vw, 5.5rem)" }}
          >
            AVTHAR
          </h1>

          <div className="flex flex-col items-center lg:items-end gap-4 sm:gap-5">
            <p className="text-white/40 text-xs sm:text-sm uppercase tracking-[0.25em]">
              © 2026 AVTHAR CERAMICS
            </p>
            <div className="flex items-center gap-6 sm:gap-8 text-white/40 text-xs sm:text-sm">
              <Link href="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </div>

      {/* SCROLL TO TOP */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Scroll to top"
        className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white text-black hover:bg-red-500 hover:text-white shadow-2xl flex items-center justify-center transition-all duration-500 hover:-translate-y-2"
      >
        <ChevronUp size={20} />
      </button>
    </footer>
  );
}
