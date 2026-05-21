"use client";

import { usePathname } from "next/navigation";

import SearchBar from "./search-bar";

import {
  Bell,
  Settings,
  ChevronDown,
  Sparkles,
} from "lucide-react";

const DYNAMIC_SEGMENTS = new Set(["edit", "create", "new"]);

function formatSegment(segment: string): string {
  return segment
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function isDynamic(segment: string): boolean {
  return DYNAMIC_SEGMENTS.has(segment) || /^[a-z0-9]{20,}$/i.test(segment);
}

function getPageTitle(pathname: string): string {
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length <= 1) return "Dashboard";

  // Walk from the end, skip dynamic segments to find the meaningful name
  for (let i = segments.length - 1; i >= 0; i--) {
    const seg = segments[i];
    if (!isDynamic(seg) && seg !== "admin" && seg !== "dealer") {
      return formatSegment(seg);
    }
  }

  return "Dashboard";
}

export default function Navbar() {
  const pathname = usePathname();
  const title = getPageTitle(pathname);

  return (
    <header className="sticky top-0 z-40 h-[82px] bg-white/80 backdrop-blur-xl border-b border-gray-200/70 px-8 flex items-center justify-between">
      {/* LEFT */}
      <div className="flex items-center gap-6">
        {/* DYNAMIC TITLE */}
        <div>
          <h1 className="text-[30px] leading-none font-bold tracking-tight text-[#111827]">
            {title}
          </h1>

          
        </div>

        {/* TAG */}
        <div className="hidden xl:flex items-center gap-2 px-4 py-2 rounded-2xl bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100">
          <Sparkles size={16} className="text-blue-600" />

          <span className="text-sm font-semibold text-blue-700">
            Enterprise Workspace
          </span>
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-5">
        {/* SEARCH */}
        <div className="hidden lg:block w-[340px]">
          <SearchBar />
        </div>

        {/* ACTIONS */}
        <div className="flex items-center gap-3">
          <button className="relative w-12 h-12 rounded-2xl border border-gray-200 bg-white shadow-sm flex items-center justify-center hover:shadow-md transition-all">
            <Bell size={20} className="text-gray-700" />

            <div className="absolute -top-1 -right-1 min-w-[20px] h-5 rounded-full bg-red-500 text-white text-[11px] font-bold flex items-center justify-center px-1 border-2 border-white">
              9+
            </div>
          </button>
        </div>

        {/* PROFILE */}
        <button className="group flex items-center gap-4 bg-gradient-to-r from-[#06264a] to-[#0d3b73] rounded-3xl px-4 py-2.5 shadow-xl hover:scale-[1.02] transition-all duration-300">
          <div className="relative">
            <div className="w-12 h-12 rounded-2xl bg-white text-[#06264a] flex items-center justify-center text-lg font-bold">
              A
            </div>

            <div className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-green-400 border-2 border-[#0d3b73]" />
          </div>

          <div className="hidden sm:block text-left">
            <p className="text-white font-semibold text-[15px]">
              Super Admin
            </p>

            <p className="text-blue-100 text-sm">
              admin@avthar.com
            </p>
          </div>

          <ChevronDown size={18} className="text-white/70" />
        </button>
      </div>
    </header>
  );
}
