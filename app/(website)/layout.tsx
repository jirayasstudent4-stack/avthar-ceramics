import "@/app/globals.css";

import WebsiteNavbar from "@/components/website/layout/navbar";

import WebsiteFooter from "@/components/website/layout/footer";

import SmoothScroll from "@/components/website/shared/smooth-scroll";

export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SmoothScroll>
      <div className="bg-white text-black relative">
        <WebsiteNavbar />

        <main className="min-h-screen">
          {children}
        </main>

        <WebsiteFooter />
      </div>
    </SmoothScroll>
  );
}