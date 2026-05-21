import Image from "next/image";

export default function BrandStory() {
  return (
    <section className="section-spacing bg-neutral-100">
      <div className="container-width">
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center">

          <div>
            <p className="uppercase tracking-[0.3em] text-xs sm:text-sm text-neutral-500 mb-4 sm:mb-6">
              Our Philosophy
            </p>

            <h2
              className="font-semibold tracking-tight leading-tight mb-6 sm:mb-10"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.75rem)" }}
            >
              Surfaces Inspired By Architecture
            </h2>

            <p className="text-base sm:text-xl text-neutral-600 leading-8 sm:leading-10">
              AVTHAR creates luxury ceramic experiences through timeless textures, modern materials, and architectural elegance designed for contemporary living spaces.
            </p>
          </div>

          <div className="relative h-[320px] sm:h-[450px] md:h-[560px] lg:h-[700px] rounded-[28px] sm:rounded-[40px] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2074"
              alt="Luxury Interior"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
