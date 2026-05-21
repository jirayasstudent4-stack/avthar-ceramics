import Sidebar from "@/components/admin/sidebar";
import Navbar from "@/components/admin/navbar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 bg-slate-100 min-h-screen">
        <Navbar />

        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
}