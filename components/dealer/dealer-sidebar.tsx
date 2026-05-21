"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  FileText,
  ShoppingBag,
  Wallet,
  X,
} from "lucide-react";

const menus = [
  { name: "Dashboard", href: "/api/dealer/dashboard",  icon: LayoutDashboard },
  { name: "Products",  href: "/api/dealer/products",   icon: Package },
  { name: "Orders",    href: "/api/dealer/orders",     icon: ShoppingCart },
  { name: "Cart",      href: "/dealer/cart",           icon: ShoppingBag },
  { name: "Invoices",  href: "/api/dealer/invoices",   icon: FileText },
  { name: "Payments",  href: "/api/dealer/payments",   icon: Wallet },
];

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function DealerSidebar({ open, onClose }: Props) {
  const pathname = usePathname();

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const NavContent = () => (
    <>
      {/* Logo area — h-[86px] matches navbar height exactly */}
      <div className="h-[86px] flex items-center justify-center shrink-0 border-b border-white/10">
        <div className="w-10 h-10 rounded-2xl bg-white/15 flex items-center justify-center">
          <span className="text-white font-bold text-lg">A</span>
        </div>
      </div>

      {/* Nav links */}
      <nav className="flex-1 overflow-y-auto py-4 scrollbar-hide">
        <div className="flex flex-col items-center gap-2 px-3">
          {menus.map((menu) => {
            const active =
              pathname === menu.href ||
              pathname.startsWith(menu.href + "/");
            const Icon = menu.icon;

            return (
              <Link
                key={menu.href}
                href={menu.href}
                onClick={onClose}
                title={menu.name}
                className="group flex flex-col items-center w-full gap-1.5 py-1"
              >
                <div
                  className={`relative w-[54px] h-[54px] rounded-2xl flex items-center justify-center transition-all duration-200 ${
                    active
                      ? "bg-gradient-to-br from-[#3b9eff] to-[#0066ff] text-white shadow-[0_8px_20px_rgba(59,158,255,0.35)]"
                      : "bg-white/[0.07] text-white/70 hover:bg-white/[0.14] hover:text-white"
                  }`}
                >
                  {active && (
                    <div className="absolute left-[-13px] w-[3px] h-6 rounded-full bg-white" />
                  )}
                  <Icon size={20} strokeWidth={2} />
                </div>

                <span
                  className={`text-[11px] leading-tight text-center px-1 transition-colors duration-200 ${
                    active ? "text-white font-semibold" : "text-white/65 group-hover:text-white"
                  }`}
                >
                  {menu.name}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );

  return (
    <>
      {/*
        DESKTOP sidebar — fixed full-height column.
        hidden on mobile, shown on lg+.
        z-50: above navbar (z-40).
      */}
      <aside className="fixed inset-y-0 left-0 z-50 w-[110px] hidden lg:flex flex-col bg-gradient-to-b from-[#06264a] to-[#041c36] border-r border-white/10">
        <NavContent />
      </aside>

      {/*
        MOBILE drawer — rendered via AnimatePresence portal-style.
        Slides in from left, covers full height.
        Backdrop closes on click.
      */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              key="dealer-sidebar-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm lg:hidden"
              onClick={onClose}
            />

            {/* Drawer panel */}
            <motion.aside
              key="dealer-sidebar-drawer"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
              className="fixed inset-y-0 left-0 z-[70] w-[110px] flex flex-col bg-gradient-to-b from-[#06264a] to-[#041c36] border-r border-white/10 lg:hidden"
            >
              {/* Close button — top right of drawer */}
              <button
                onClick={onClose}
                aria-label="Close sidebar"
                className="absolute top-4 right-2 w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-colors"
              >
                <X size={14} />
              </button>

              <NavContent />
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
