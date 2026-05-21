"use client";

import { usePathname } from "next/navigation";
import { Bell, ChevronDown, Sparkles, Search, Menu } from "lucide-react";

function getPageTitle(pathname: string): string {
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length === 1 && segments[0] === "admin") return "Dashboard";

  // /api/dealer/dashboard
  if (segments.includes("dashboard")) return "Dashboard";

  const last = segments[segments.length - 1];
  return last
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

interface Props {
  onMenuClick: () => void;
}

export default function DealerNavbar({ onMenuClick }: Props) {
  const pathname = usePathname();
  const title = getPageTitle(pathname);

  return (
    /*
      fixed top-0: stays at top on scroll.
      left-0 lg:left-[110px]: full-width on mobile, offset by sidebar on desktop.
      right-0: always extends to right edge.
      z-40: below sidebar (z-50) so sidebar overlaps navbar on mobile.
      h-[86px]: explicit height — layout uses pt-[86px] to match.
    */
    <header className="fixed top-0 left-0 lg:left-[110px] right-0 z-40 h-[86px] bg-white/85 backdrop-blur-2xl border-b border-gray-200/60 shadow-sm">

      <div className="flex items-center justify-between h-full px-4 md:px-6 lg:px-8">

        {/* LEFT — hamburger (mobile) + title + badge */}
        <div className="flex items-center gap-3 min-w-0">

          {/* Hamburger — mobile only */}
          <button
            onClick={onMenuClick}
            aria-label="Open sidebar"
            className="lg:hidden flex items-center justify-center w-9 h-9 rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all shrink-0"
          >
            <Menu size={18} className="text-slate-700" />
          </button>

          {/* Page title */}
          <div className="min-w-0">
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-[#0f172a] leading-none truncate">
              {title}
            </h1>
            <div className="flex items-center gap-1.5 mt-1">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shrink-0" />
              <p className="text-xs text-gray-500 font-medium truncate">
                AVTHAR Dealer Workspace
              </p>
            </div>
          </div>

          {/* Enterprise badge — xl only */}
          <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100 shadow-sm shrink-0">
            <Sparkles size={13} className="text-blue-600" />
            <span className="text-xs font-semibold text-blue-700 whitespace-nowrap">
              Smart Dealer Panel
            </span>
          </div>
        </div>

        {/* RIGHT — search + bell + profile */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">

          {/* Search — desktop only */}
          <div className="hidden lg:flex items-center gap-2 h-11 w-[260px] xl:w-[320px] px-4 rounded-xl border border-gray-200 bg-white shadow-sm">
            <Search size={16} className="text-gray-400 shrink-0" />
            <input
              type="text"
              placeholder="Search products..."
              className="bg-transparent outline-none text-sm w-full placeholder:text-gray-400"
            />
          </div>

          {/* Notification bell */}
          <button className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white border border-gray-200 shadow-sm flex items-center justify-center hover:shadow-md transition-all">
            <Bell size={17} className="text-[#0f172a]" />
            <span className="absolute -top-1 -right-1 min-w-[16px] h-4 rounded-full bg-red-500 text-white text-[9px] font-bold flex items-center justify-center px-1 border-2 border-white">
              9+
            </span>
          </button>

          {/* Profile button */}
          <button className="group flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-[#06264a] to-[#0b3f78] rounded-2xl px-2.5 sm:px-3.5 py-2 shadow-lg hover:scale-[1.02] transition-all duration-300">
            {/* Avatar */}
            <div className="relative shrink-0">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-white text-[#06264a] flex items-center justify-center text-sm font-bold">
                A
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-green-400 border-2 border-[#0b3f78]" />
            </div>

            {/* User info — hidden on small screens */}
            <div className="hidden sm:block text-left">
              <p className="text-white font-semibold text-sm leading-none">AVTHAR Dealer</p>
              <p className="text-blue-200 text-xs mt-0.5">Premium Partner</p>
            </div>

            <ChevronDown size={14} className="text-white/70 hidden sm:block" />
          </button>

        </div>
      </div>
    </header>
  );
}
