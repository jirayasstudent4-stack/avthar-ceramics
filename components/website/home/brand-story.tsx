import Image from "next/image";

export default function BrandStory() {
  return (
    <section className="section-spacing bg-neutral-100">
      <div className="container-width">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-sm text-neutral-500 mb-6">
              Our Philosophy
            </p>

            <h2 className="text-5xl md:text-6xl font-semibold tracking-tight leading-tight mb-10">
              Surfaces Inspired By Architecture
            </h2>

            <p className="text-xl text-neutral-600 leading-10">
              AVTHAR creates luxury ceramic experiences through timeless textures, modern materials, and architectural elegance designed for contemporary living spaces.
            </p>
          </div>

          <div className="relative h-[700px] rounded-[40px] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2074"
              alt="Luxury Interior"
              fill
              sizes="
                (max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                50vw
              "
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}