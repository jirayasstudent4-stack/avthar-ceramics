import Sidebar from "@/components/admin/sidebar";
import Navbar from "@/components/admin/navbar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#f0f4f8]">

      {/*
        Sidebar: fixed full-height column on the left.
        z-50 keeps it above all content.
        Width: 105px (icon sidebar).
      */}
      <Sidebar />

      {/*
        Content shell: offset left by sidebar width on desktop.
        On mobile (< lg) sidebar is hidden, so no offset needed.
      */}
      <div className="lg:pl-[105px]">

        {/*
          Navbar: fixed top bar.
          Left edge matches sidebar width on desktop.
          Full width on mobile.
        */}
        <Navbar />

        {/*
          Main content: pt-20 clears the fixed navbar (h-20).
          px-4/6/8 provides responsive horizontal padding.
        */}
        <main className="pt-20 px-4 md:px-6 lg:px-8 py-6">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>

      </div>
    </div>
  );
}
