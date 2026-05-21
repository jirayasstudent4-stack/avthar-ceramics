import DealerSidebar from "@/components/dealer/dealer-sidebar";

import DealerNavbar from "@/components/dealer/dealer-navbar";

export default function DealerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#f5f5f3] flex">
      <DealerSidebar />

      <div className="flex-1 flex flex-col">
        <DealerNavbar />

        <main className="flex-1 p-6 md:p-10 overflow-x-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}