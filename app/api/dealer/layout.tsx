"use client";

import { useState } from "react";
import DealerSidebar from "@/components/dealer/dealer-sidebar";
import DealerNavbar from "@/components/dealer/dealer-navbar";

export default function DealerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f0f4f8] overflow-x-hidden">

      {/*
        Sidebar: fixed full-height column.
        Receives open state for mobile drawer behavior.
      */}
      <DealerSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/*
        Content shell: offset left by sidebar width on desktop only.
        On mobile (< lg) sidebar is a drawer overlay, so no offset.
      */}
      <div className="lg:pl-[110px]">

        {/*
          Navbar: fixed top bar.
          Receives hamburger handler to open sidebar on mobile.
        */}
        <DealerNavbar onMenuClick={() => setSidebarOpen(true)} />

        {/*
          Main content: pt clears the fixed navbar height (86px → pt-[86px]).
          Responsive horizontal padding.
        */}
        <main className="pt-[86px] px-4 md:px-6 lg:px-8 py-6 overflow-x-hidden">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>

      </div>
    </div>
  );
}
