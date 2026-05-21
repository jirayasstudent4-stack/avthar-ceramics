"use client";

import { usePathname } from "next/navigation";
import SearchBar from "./search-bar";
import { Bell, ChevronDown, Sparkles } from "lucide-react";

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
    /*
      fixed top-0: stays at top of viewport on scroll.
      left-0 lg:left-[105px]: on desktop, starts after the sidebar.
        On mobile, spans full width (sidebar is hidden).
      right-0: always extends to the right edge.
      z-40: below sidebar (z-50) so sidebar overlaps navbar edge on mobile.
      h-20: explicit height — layout.tsx uses pt-20 to match.
    */
    <header className="fixed top-0 left-0 lg:left-[105px] right-0 z-40 h-20 bg-white/90 backdrop-blur-xl border-b border-slate-200/80 shadow-sm">

      {/* Single flex row — items-center + justify-between fills the full h-20 */}
      <div className="flex items-center justify-between h-full px-4 md:px-6 lg:px-8">

        {/* LEFT — page title + badge */}
        <div className="flex items-center gap-4 min-w-0">
          <div className="min-w-0">
            <h1 className="text-xl md:text-2xl font-bold tracking-tight text-slate-800 truncate">
              {title}
            </h1>
          </div>

          <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100 shrink-0">
            <Sparkles size={14} className="text-blue-600" />
            <span className="text-xs font-semibold text-blue-700 whitespace-nowrap">
              Enterprise Workspace
            </span>
          </div>
        </div>

        {/* RIGHT — search + actions + profile */}
        <div className="flex items-center gap-3 shrink-0">

          {/* Search — desktop only */}
          <div className="hidden lg:block">
            <SearchBar />
          </div>

          {/* Notification bell */}
          <button className="relative w-10 h-10 rounded-xl border border-slate-200 bg-white shadow-sm flex items-center justify-center hover:shadow-md hover:border-slate-300 transition-all">
            <Bell size={18} className="text-slate-600" />
            <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center px-1 border-2 border-white">
              9+
            </span>
          </button>

          {/* Profile */}
          <button className="group flex items-center gap-3 bg-gradient-to-r from-[#06264a] to-[#0d3b73] rounded-2xl px-3 py-2 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
            <div className="relative shrink-0">
              <div className="w-8 h-8 md:w-9 md:h-9 rounded-xl bg-white text-[#06264a] flex items-center justify-center text-sm font-bold">
                A
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-green-400 border-2 border-[#0d3b73]" />
            </div>

            <div className="hidden sm:block text-left">
              <p className="text-white font-semibold text-sm leading-tight">Super Admin</p>
              <p className="text-blue-200 text-xs leading-tight">admin@avthar.com</p>
            </div>

            <ChevronDown size={15} className="text-white/70 hidden sm:block" />
          </button>

        </div>
      </div>
    </header>
  );
}
