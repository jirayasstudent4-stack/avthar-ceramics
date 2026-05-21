import Image from "next/image";
import FadeIn from "@/components/website/animations/fade-in";

export default function ProjectShowcase() {
  return (
    <FadeIn>
      <section className="section-spacing bg-black text-white">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center">

            <div>
              <p className="uppercase tracking-[0.3em] text-xs sm:text-sm text-white/50 mb-4 sm:mb-6">
                Global Projects
              </p>

              <h2
                className="font-semibold tracking-tight leading-none mb-6 sm:mb-10"
                style={{ fontSize: "clamp(2rem, 5.5vw, 4.5rem)" }}
              >
                Crafted For Extraordinary Spaces
              </h2>

              <p className="text-base sm:text-xl text-white/70 leading-8 sm:leading-10 mb-8 sm:mb-10">
                Our ceramic collections shape luxury villas, hospitality environments, modern residences, and iconic commercial architecture.
              </p>

              <button className="bg-white text-black px-7 sm:px-8 py-4 sm:py-5 rounded-full uppercase tracking-[0.2em] text-xs sm:text-sm hover:bg-red-600 hover:text-white transition-all duration-300">
                View Inspiration
              </button>
            </div>

            <div className="relative h-[320px] sm:h-[450px] md:h-[600px] lg:h-[800px] rounded-[28px] sm:rounded-[40px] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2070"
                alt="Project"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </FadeIn>
  );
}
