"use client";

import Link from "next/link";

import {
  ArrowRight,
  MapPin,
  Mail,
  Phone,
  ChevronUp,
} from "lucide-react";

export default function WebsiteFooter() {
  return (
    <footer className="relative bg-[#0b0b0d] text-white overflow-hidden">

      {/* PREMIUM BACKGROUND */}
      <div className="absolute inset-0">

        {/* Gradient Glow */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-red-500/10 blur-[180px]" />

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-500/10 blur-[160px]" />

        {/* Noise Texture */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />

      </div>

      <div className="relative container-width px-6 lg:px-0">

        {/* TOP HUGE TEXT */}
        <div className="pt-28 pb-24 border-b border-white/10">

          <p className="uppercase tracking-[0.35em] text-red-500 text-sm mb-8">
            Luxury Ceramic Experience
          </p>

          <h2 className="text-[36px] md:text-[80px] leading-[1] font-semibold max-w-6xl">
            Designing timeless
            spaces through premium
            surfaces & modern luxury.
          </h2>

          <div className="mt-12">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-4 border border-white/15 px-8 py-5 rounded-full hover:bg-white hover:text-black transition-all duration-500"
            >

              <span className="uppercase tracking-[0.2em] text-sm">
                Start Your Project
              </span>

              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-all duration-300"
              />

            </Link>
          </div>

        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr_1fr] gap-20 py-24">

          {/* BRAND SIDE */}
          <div>

            <h2 className="text-4xl font-semibold tracking-wide mb-8">
              AVTHAR
            </h2>

            <p className="text-white/55 text-lg leading-9 max-w-lg">
              Since 2003, AVTHAR has delivered
              premium ceramic, granite and luxury
              interior solutions trusted by architects,
              designers and modern homeowners.
            </p>

            {/* CONTACT CARDS */}
            <div className="space-y-5 mt-14">

              <div className="group flex items-start gap-5 p-5 rounded-3xl border border-white/10 hover:border-red-500/30 hover:bg-white/[0.03] transition-all duration-500">

                <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center">
                  <MapPin size={18} className="text-red-500" />
                </div>

                <div>
                  <p className="text-white text-lg mb-1">
                    Visit Us
                  </p>

                  <p className="text-white/50 leading-7">
                    Chennai, Tamil Nadu,
                    India
                  </p>
                </div>

              </div>

              <div className="group flex items-start gap-5 p-5 rounded-3xl border border-white/10 hover:border-red-500/30 hover:bg-white/[0.03] transition-all duration-500">

                <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center">
                  <Mail size={18} className="text-red-500" />
                </div>

                <div>
                  <p className="text-white text-lg mb-1">
                    Email
                  </p>

                  <p className="text-white/50">
                    sales@avtharceramics.com
                  </p>
                </div>

              </div>

              <div className="group flex items-start gap-5 p-5 rounded-3xl border border-white/10 hover:border-red-500/30 hover:bg-white/[0.03] transition-all duration-500">

                <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center">
                  <Phone size={18} className="text-red-500" />
                </div>

                <div>
                  <p className="text-white text-lg mb-1">
                    Call Us
                  </p>

                  <p className="text-white/50">
                    +91 98765 43210
                  </p>
                </div>

              </div>

            </div>

          </div>

          {/* LINKS */}
          <div>

            <h3 className="text-white text-2xl mb-10">
              Company
            </h3>

            <div className="space-y-7">

              {[
                "About Us",
                "Gallery",
                "Projects",
                "Transport",
                "Service",
                "Dealers",
              ].map((item, index) => (
                <Link
                  key={index}
                  href="/"
                  className="group flex items-center justify-between border-b border-white/5 pb-5 text-white/55 hover:text-white transition-all duration-300"
                >

                  <span className="text-xl">
                    {item}
                  </span>

                  <ArrowRight
                    size={18}
                    className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                  />

                </Link>
              ))}

            </div>

          </div>

          {/* PRODUCTS */}
          <div>

            <h3 className="text-white text-2xl mb-10">
              Collections
            </h3>

            <div className="space-y-7">

              {[
                "Tiles",
                "Granites",
                "Fittings",
                "Sanitarywares",
                "Marbles",
                "Luxury Surfaces",
              ].map((item, index) => (
                <Link
                  key={index}
                  href="/"
                  className="group flex items-center justify-between border-b border-white/5 pb-5 text-white/55 hover:text-white transition-all duration-300"
                >

                  <span className="text-xl">
                    {item}
                  </span>

                  <ArrowRight
                    size={18}
                    className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                  />

                </Link>
              ))}

            </div>

          </div>

        </div>

        {/* HUGE BOTTOM SECTION */}
        <div className="border-t border-white/10 py-10 flex flex-col lg:flex-row items-center justify-between gap-8">

          {/* BIG BRAND */}
          <h1 className="text-[42px] md:text-[90px] leading-none font-semibold tracking-tight text-white/10">
            AVTHAR
          </h1>

          {/* BOTTOM RIGHT */}
          <div className="flex flex-col items-center lg:items-end gap-5">

            <p className="text-white/40 text-sm uppercase tracking-[0.25em]">
              © 2026 AVTHAR CERAMICS
            </p>

            <div className="flex items-center gap-8 text-white/40 text-sm">

              <Link
                href="/privacy-policy"
                className="hover:text-white transition"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms"
                className="hover:text-white transition"
              >
                Terms & Conditions
              </Link>

            </div>

          </div>

        </div>

      </div>

      {/* FLOATING BUTTON */}
      <button
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        className="fixed bottom-8 right-8 z-50 w-16 h-16 rounded-full bg-white text-black hover:bg-red-500 hover:text-white shadow-2xl flex items-center justify-center transition-all duration-500 hover:-translate-y-2"
      >

        <ChevronUp size={24} />

      </button>

    </footer>
  );
}