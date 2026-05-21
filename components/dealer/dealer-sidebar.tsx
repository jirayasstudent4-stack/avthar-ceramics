"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Warehouse,
  Users,
  Building2,
  FileText,
  Layout,
  ArrowRightLeft,
  MessageSquare,
  ShoppingBag,
} from "lucide-react";

const menus = [
  {
    name: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
  },

  {
    name: "Products",
    href: "/admin/products",
    icon: Package,
  },

  {
    name: "Sales",
    href: "/admin/sales",
    icon: ShoppingCart,
  },

  {
    name: "Warehouse",
    href: "/admin/warehouse",
    icon: Warehouse,
  },

  {
    name: "Transfers",
    href: "/admin/transfers",
    icon: ArrowRightLeft,
  },

  {
    name: "Customers",
    href: "/admin/customers",
    icon: Users,
  },

  {
    name: "Branches",
    href: "/admin/branches",
    icon: Building2,
  },

  {
    name: "Inquiries",
    href: "/admin/inquiries",
    icon: MessageSquare,
  },

  {
    name: "Reports",
    href: "/admin/reports",
    icon: FileText,
  },

  {
    name: "CMS",
    href: "/admin/cms",
    icon: Layout,
  },

  {
    name: "Dealer Cart",
    href: "/dealer/cart",
    icon: ShoppingBag,
  },

  {
    name: "Dealer Invoices",
    href: "/dealer/invoices",
    icon: FileText,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-[110px] h-screen sticky top-0 bg-gradient-to-b from-[#06264a] to-[#041c36] border-r border-white/10 flex flex-col items-center overflow-hidden">
      {/* NAVIGATION */}
      <div className="flex-1 overflow-y-auto py-4 w-full scrollbar-hide">
        <div className="flex flex-col items-center gap-3">
          {menus.map((menu) => {
            const active = pathname === menu.href;

            const Icon = menu.icon;

            return (
              <Link
                key={menu.href}
                href={menu.href}
                className="group flex flex-col items-center w-full"
              >
                {/* ICON BOX */}
                <div
                  className={`relative w-[58px] h-[58px] rounded-2xl flex items-center justify-center transition-all duration-300 ${
                    active
                      ? "bg-gradient-to-br from-[#3b9eff] to-[#0066ff] text-white shadow-[0_10px_25px_rgba(59,158,255,0.35)]"
                      : "bg-white/[0.07] text-white/75 hover:bg-white/[0.14] hover:text-white"
                  }`}
                >
                  {/* ACTIVE SIDE BAR */}
                  {active && (
                    <div className="absolute left-[-14px] w-[4px] h-[26px] rounded-full bg-white" />
                  )}

                  <Icon
                    size={22}
                    strokeWidth={2.2}
                  />
                </div>

                {/* MENU TEXT */}
                <span
                  className={`mt-2 text-[11px] leading-[14px] text-center px-1 transition-all duration-300 ${
                    active
                      ? "text-white font-semibold"
                      : "text-white/70 group-hover:text-white"
                  }`}
                >
                  {menu.name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </aside>
  );
}