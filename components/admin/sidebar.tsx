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
  { name: "Dashboard",       href: "/admin",           icon: LayoutDashboard },
  { name: "Products",        href: "/admin/products",  icon: Package },
  { name: "Sales",           href: "/admin/sales",     icon: ShoppingCart },
  { name: "Warehouse",       href: "/admin/warehouse", icon: Warehouse },
  { name: "Transfers",       href: "/admin/transfers", icon: ArrowRightLeft },
  { name: "Customers",       href: "/admin/customers", icon: Users },
  { name: "Branches",        href: "/admin/branches",  icon: Building2 },
  { name: "Inquiries",       href: "/admin/inquiries", icon: MessageSquare },
  { name: "Reports",         href: "/admin/reports",   icon: FileText },
  { name: "CMS",             href: "/admin/cms",       icon: Layout },
  { name: "Dealer Cart",     href: "/dealer/cart",     icon: ShoppingBag },
  { name: "Dealer Invoices", href: "/dealer/invoices", icon: FileText },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    /*
      fixed inset-y-0 left-0: pins sidebar to full viewport height on the left.
      w-[105px]: icon sidebar width — matches the lg:pl-[105px] offset in layout.tsx
        and the lg:left-[105px] offset in navbar.tsx.
      z-50: above navbar (z-40) so the sidebar edge is always visible.
      hidden lg:flex: sidebar is hidden on mobile, shown on desktop.
        Mobile navigation can be added as a separate drawer component if needed.
      overflow-y-auto: sidebar scrolls independently if menu items exceed viewport.
    */
    <aside className="fixed inset-y-0 left-0 z-50 w-[105px] hidden lg:flex flex-col bg-[#06264a] border-r border-white/10">

      {/* Logo area — same height as navbar (h-20) so they align perfectly */}
      <div className="h-20 flex items-center justify-center shrink-0 border-b border-white/10">
        <div className="w-10 h-10 rounded-2xl bg-white/15 flex items-center justify-center">
          <span className="text-white font-bold text-lg tracking-tight">A</span>
        </div>
      </div>

      {/* Nav links — scrollable independently */}
      <nav className="flex-1 overflow-y-auto py-4 scrollbar-hide">
        <div className="flex flex-col items-center gap-2 px-3">
          {menus.map((menu) => {
            const active = pathname === menu.href || pathname.startsWith(menu.href + "/");
            const Icon = menu.icon;

            return (
              <Link
                key={menu.href}
                href={menu.href}
                title={menu.name}
                className="group flex flex-col items-center w-full gap-1.5 py-1"
              >
                <div
                  className={`w-[54px] h-[54px] rounded-2xl flex items-center justify-center transition-all duration-200 ${
                    active
                      ? "bg-[#2f8fff] text-white shadow-lg shadow-blue-500/30"
                      : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"
                  }`}
                >
                  <Icon size={21} strokeWidth={2} />
                </div>

                <span
                  className={`text-[11px] leading-tight text-center px-1 transition-colors duration-200 ${
                    active ? "text-white font-medium" : "text-white/65 group-hover:text-white"
                  }`}
                >
                  {menu.name}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>

    </aside>
  );
}
