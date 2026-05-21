import Image from "next/image";

const collections = [
  {
    title: "Marble Signature",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2070",
  },
  {
    title: "Concrete Edition",
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1974",
  },
  {
    title: "Stone Atmosphere",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2074",
  },
];

export default function LuxuryCollections() {
  return (
    <section className="section-spacing">
      <div className="container-width">

        <div className="mb-12 sm:mb-16 md:mb-20">
          <p className="uppercase tracking-[0.3em] text-xs sm:text-sm text-neutral-500 mb-4 sm:mb-5">
            Curated Collections
          </p>

          <h2
            className="font-semibold tracking-tight max-w-[800px]"
            style={{ fontSize: "clamp(1.9rem, 5vw, 3.75rem)" }}
          >
            Luxury Ceramic Collections Inspired By Modern Architecture
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {collections.map((collection) => (
            <div
              key={collection.title}
              className="group relative overflow-hidden rounded-[28px] sm:rounded-[40px]"
            >
              <div className="relative h-[320px] sm:h-[420px] md:h-[560px] lg:h-[700px]">
                <Image
                  src={collection.image}
                  alt={collection.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition duration-700"
                />
              </div>

              <div className="absolute inset-0 bg-black/30" />

              <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 z-10">
                <h3 className="text-2xl sm:text-4xl font-semibold text-white mb-3 sm:mb-5">
                  {collection.title}
                </h3>
                <button className="text-white uppercase tracking-[0.2em] text-xs sm:text-sm">
                  Discover Collection
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
