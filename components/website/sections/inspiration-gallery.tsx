"use client";

import Image from "next/image";

import FadeIn from "@/components/website/animations/fade-in";

const images = [
  "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200",

  "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200",

  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200",

  "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200",
];

export default function InspirationGallery() {
  return (
    <section className="section-spacing overflow-hidden">
      <div className="container-width">
        <FadeIn>
          <div className="mb-16 md:mb-20">
            <p className="uppercase tracking-[0.3em] text-sm text-neutral-500 mb-5">
              Inspiration Gallery
            </p>

            <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight max-w-[900px]">
              Spaces Defined Through Texture,
              Material, And Light
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {images.map((image, index) => (
            <FadeIn key={image}>
              <div className="group overflow-hidden rounded-[40px]">
                <div className="relative w-full h-[450px] md:h-[700px]">
                  <Image
                    src={image}
                    alt={`Gallery Image ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition duration-700 ease-out group-hover:scale-105"
                  />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}