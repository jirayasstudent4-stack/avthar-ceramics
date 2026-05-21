export default function Newsletter() {
  return (
    <section className="pb-32">
      <div className="container-width">
        <div className="border border-neutral-200 rounded-[50px] p-14 md:p-24 text-center">
          <p className="uppercase tracking-[0.3em] text-sm text-neutral-500 mb-6">
            Newsletter
          </p>

          <h2 className="text-6xl font-semibold tracking-tight leading-tight mb-10">
            Discover New Collections & Architectural Trends
          </h2>

          <div className="max-w-[700px] mx-auto flex flex-col md:flex-row gap-5">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 border border-neutral-300 rounded-full px-8 py-5 outline-none"
            />

            <button className="bg-black text-white px-10 py-5 rounded-full uppercase tracking-[0.2em] text-sm">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}