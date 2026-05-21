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
    <aside className="w-[105px] h-screen sticky top-0 bg-[#06264a] border-r border-white/10 flex flex-col items-center">

      {/* NAVIGATION */}
      <div className="flex-1 overflow-y-auto py-5 w-full scrollbar-hide">
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
                {/* ICON */}
                <div
                  className={`w-[54px] h-[54px] rounded-2xl flex items-center justify-center transition-all duration-300 ${
                    active
                      ? "bg-[#2f8fff] text-white shadow-lg shadow-blue-500/30"
                      : "bg-white/10 text-white/75 hover:bg-white/20 hover:text-white"
                  }`}
                >
                  <Icon size={22} strokeWidth={2.2} />
                </div>

                {/* TEXT */}
                <span
                  className={`mt-2 text-[12px] leading-[14px] text-center px-1 transition-all duration-300 ${
                    active
                      ? "text-white font-medium"
                      : "text-white/80 group-hover:text-white"
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