import Link from "next/link";

export default function DealerCTA() {
  return (
    <section className="section-spacing bg-neutral-100">
      <div className="container-width">
        <div className="rounded-[32px] sm:rounded-[50px] bg-black text-white px-8 py-12 sm:p-16 md:p-24 text-center">

          <p className="uppercase tracking-[0.3em] text-xs sm:text-sm text-white/60 mb-4 sm:mb-6">
            Dealer Network
          </p>

          <h2
            className="font-semibold tracking-tight leading-tight mb-6 sm:mb-10 max-w-3xl mx-auto"
            style={{ fontSize: "clamp(1.9rem, 5vw, 3.75rem)" }}
          >
            Partner With AVTHAR Ceramics
          </h2>

          <p className="text-base sm:text-xl text-white/70 max-w-[800px] mx-auto leading-8 sm:leading-10 mb-8 sm:mb-12">
            Join our premium dealer ecosystem and access luxury ceramic collections, business support, and modern digital ordering infrastructure.
          </p>

          <Link
            href="/api/dealer/dashboard"
            className="inline-block bg-white text-black px-7 sm:px-8 py-4 sm:py-5 rounded-full uppercase tracking-[0.2em] text-xs sm:text-sm hover:bg-red-600 hover:text-white transition-all duration-300"
          >
            Dealer Portal
          </Link>
        </div>
      </div>
    </section>
  );
}
