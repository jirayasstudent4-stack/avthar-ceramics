import Image from "next/image";
import FadeIn from "@/components/website/animations/fade-in";
export default function ProjectShowcase() {
  return (
    <FadeIn>
    <section className="section-spacing bg-black text-white">
      <div className="container-width">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-sm text-white/50 mb-6">
              Global Projects
            </p>

            <h2 className="text-7xl font-semibold tracking-tight leading-none mb-10">
              Crafted For Extraordinary Spaces
            </h2>

            <p className="text-xl text-white/70 leading-10 mb-10">
              Our ceramic collections shape luxury villas, hospitality environments, modern residences, and iconic commercial architecture.
            </p>

            <button className="bg-white text-black px-8 py-5 rounded-full uppercase tracking-[0.2em] text-sm">
              View Inspiration
            </button>
          </div>

          <div>
            <Image
              src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2070"
              alt="Project"
              className="rounded-[40px] w-full h-[800px] object-cover"
              width={850}
              height={850}
            />
          </div>
        </div>
      </div>
    </section>
    </FadeIn>
  );
}