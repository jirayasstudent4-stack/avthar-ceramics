export default function Newsletter() {
  return (
    <section className="pb-16 sm:pb-24 md:pb-32">
      <div className="container-width">
        <div className="border border-neutral-200 rounded-[32px] sm:rounded-[50px] px-8 py-12 sm:p-16 md:p-24 text-center">

          <p className="uppercase tracking-[0.3em] text-xs sm:text-sm text-neutral-500 mb-4 sm:mb-6">
            Newsletter
          </p>

          <h2
            className="font-semibold tracking-tight leading-tight mb-6 sm:mb-10 max-w-3xl mx-auto"
            style={{ fontSize: "clamp(1.7rem, 4.5vw, 3.75rem)" }}
          >
            Discover New Collections & Architectural Trends
          </h2>

          <div className="max-w-[700px] mx-auto flex flex-col sm:flex-row gap-4 sm:gap-5">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 border border-neutral-300 rounded-full px-6 sm:px-8 py-4 sm:py-5 outline-none text-sm sm:text-base focus:border-black transition-colors"
            />
            <button className="w-full sm:w-auto bg-black text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full uppercase tracking-[0.2em] text-xs sm:text-sm hover:bg-red-600 transition-colors duration-300 whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
