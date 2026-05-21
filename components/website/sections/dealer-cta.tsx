import Link from "next/link";

export default function DealerCTA() {
  return (
    <section className="section-spacing bg-neutral-100">
      <div className="container-width">
        <div className="rounded-[50px] bg-black text-white p-14 md:p-24 text-center">
          <p className="uppercase tracking-[0.3em] text-sm text-white/60 mb-6">
            Dealer Network
          </p>

          <h2 className="text-6xl font-semibold tracking-tight leading-tight mb-10">
            Partner With AVTHAR Ceramics
          </h2>

          <p className="text-xl text-white/70 max-w-[800px] mx-auto leading-10 mb-12">
            Join our premium dealer ecosystem and access luxury ceramic collections, business support, and modern digital ordering infrastructure.
          </p>

          <Link
            href="/api/dealer/dashboard"
            className="bg-white text-black px-8 py-5 rounded-full uppercase tracking-[0.2em] text-sm inline-block"
          >
            Dealer Portal
          </Link>
        </div>
      </div>
    </section>
  );
}