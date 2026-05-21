"use client";

import { usePathname } from "next/navigation";

import {
  Bell,
  ChevronDown,
  Sparkles,
  Search,
} from "lucide-react";

function getPageTitle(pathname: string): string {
  const segments = pathname
    .split("/")
    .filter(Boolean);

  // /admin
  if (
    segments.length === 1 &&
    segments[0] === "admin"
  ) {
    return "Dashboard";
  }

  // /dealer/dashboard
  if (
    segments.length === 2 &&
    segments[0] === "dealer" &&
    segments[1] === "dashboard"
  ) {
    return "Dashboard";
  }

  // LAST ROUTE
  const last =
    segments[segments.length - 1];

  return last
    .split("-")
    .map(
      (word) =>
        word.charAt(0).toUpperCase() +
        word.slice(1)
    )
    .join(" ");
}

export default function DealerNavbar() {
  const pathname = usePathname();

  const title =
    getPageTitle(pathname);

  return (
    <header className="sticky top-0 z-40 h-[86px] bg-white/75 backdrop-blur-2xl border-b border-gray-200/60 px-8 flex items-center justify-between">
      {/* LEFT */}
      <div className="flex items-center gap-6">
        {/* PAGE TITLE */}
        <div>
          <h1 className="text-[32px] font-bold tracking-tight text-[#0f172a] leading-none">
            {title}
          </h1>

          <div className="flex items-center gap-2 mt-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />

            <p className="text-sm text-gray-500 font-medium">
              AVTHAR Dealer Workspace
            </p>
          </div>
        </div>

        {/* TAG */}
        <div className="hidden xl:flex items-center gap-2 px-4 py-2 rounded-2xl bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100 shadow-sm">
          <Sparkles
            size={16}
            className="text-blue-600"
          />

          <span className="text-sm font-semibold text-blue-700">
            Smart Dealer Panel
          </span>
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-5">
        {/* SEARCH */}
        <div className="hidden lg:flex items-center gap-3 h-[52px] w-[340px] px-5 rounded-2xl border border-gray-200 bg-white shadow-sm">
          <Search
            size={18}
            className="text-gray-400"
          />

          <input
            type="text"
            placeholder="Search products..."
            className="bg-transparent outline-none text-sm w-full placeholder:text-gray-400"
          />
        </div>

        {/* NOTIFICATION */}
        <button className="relative w-12 h-12 rounded-2xl bg-white border border-gray-200 shadow-sm flex items-center justify-center hover:shadow-lg hover:-translate-y-[1px] transition-all duration-300">
          <Bell
            size={20}
            className="text-[#0f172a]"
          />

          <div className="absolute -top-1 -right-1 min-w-[20px] h-5 rounded-full bg-red-500 text-white text-[11px] font-bold flex items-center justify-center px-1 border-2 border-white">
            9+
          </div>
        </button>

        {/* PROFILE */}
        <button className="group flex items-center gap-4 bg-gradient-to-r from-[#06264a] to-[#0b3f78] rounded-[26px] px-4 py-2.5 shadow-[0_10px_30px_rgba(6,38,74,0.25)] hover:scale-[1.02] transition-all duration-300">
          {/* AVATAR */}
          <div className="relative">
            <div className="w-12 h-12 rounded-2xl bg-white text-[#06264a] flex items-center justify-center text-lg font-bold shadow-md">
              A
            </div>

            <div className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-green-400 border-2 border-[#0b3f78]" />
          </div>

          {/* USER */}
          <div className="hidden sm:block text-left">
            <p className="text-white font-semibold text-[15px] leading-none">
              AVTHAR Dealer
            </p>

            <p className="text-blue-100 text-sm mt-1">
              Premium Partner
            </p>
          </div>

          {/* DROPDOWN */}
          <ChevronDown
            size={18}
            className="text-white/70 group-hover:text-white transition"
          />
        </button>
      </div>
    </header>
  );
}