"use client";

import { useState } from "react";
import Image from "next/image";

const categories = [
  "All",
  "Floor Tiles",
  "Wall Tiles",
  "Bathroom Tiles",
  "Portico Tiles",
  "Sanitarywares",
];

const galleryImages = [
  {
    category: "Floor Tiles",
    image:
      "https://images.orientbell.com/media/catalog/product/o/r/orient_bell_-_super_gloss_portoro_gold_marble_1.jpg",
  },

  {
    category: "Floor Tiles",
    image:
      "https://images.orientbell.com/media/catalog/product/p/g/pgvt_california_beige_hotel_reception_60x120_cm.jpg",
  },

  {
    category: "Floor Tiles",
    image:
      "https://images.orientbell.com/media/catalog/product/p/g/pgvt_statuario_marble_living_room_60x120_cm_2_.webp",
  },
    {
    category: "Floor Tiles",
    image:
      "https://images.orientbell.com/media/catalog/product/b/f/bfm_ec_plain_white_bathroomn_ceramic_tile_300x300mm.jpg",
  },

  {
    category: "Wall Tiles",
    image:
      "https://images.orientbell.com/media/catalog/product/g/f/gft_sph_echo_hibiscus_hl_gft_spb_ocean_blue_dk_gft_spb_ocean_lt__bathroom_ambiance_ceramic_sparkle_wall_tiles_300x450_mm_1.webp",
  },

  {
    category: "Wall Tiles",
    image:
      "https://images.orientbell.com/media/catalog/product/s/f/sfm_modern_stone_gris_dk.jpg",
  },
    {
    category: "Wall Tiles",
    image:
      "https://images.orientbell.com/media/catalog/product/n/a/natural_rottowood_beige.jpg",
  },

  {
    category: "Wall Tiles",
    image:
      "https://images.orientbell.com/media/catalog/product/d/e/decor_portugese_art_multi_1.jpg",
  },

  {
    category: "Bathroom Tiles",
    image:
      "https://images.orientbell.com/media/catalog/product/b/f/bfm_ec_plain_white_bathroomn_ceramic_tile_300x300mm.jpg",
  },

  {
    category: "Bathroom Tiles",
    image:
      "https://images.orientbell.com/media/catalog/product/3/0/300x450_odg_statuario_white_odh_arrow_grey_hl.webp",
  },

  {
    category: "Bathroom Tiles",
    image:
      "https://images.orientbell.com/media/catalog/product/o/h/ohg_line_travertine_brown_hl_odg_travertine_brown_lt_dk_300x450_mm_1.webp",
  },
   {
    category: "Bathroom Tiles",
    image:
      "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?q=80&w=1200",
  },

  {
    category: "Portico Tiles",
    image:
      "https://images.orientbell.com/media/catalog/product/n/a/natural_rottowood_beige.jpg",
  },
    {
    category: "Portico Tiles",
    image:
      "https://images.orientbell.com/media/catalog/product/o/h/ohg_line_travertine_brown_hl_odg_travertine_brown_lt_dk_300x450_mm_1.webp",
  },

  {
    category: "Portico Tiles",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200",
  },

  {
    category: "Portico Tiles",
    image:
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?q=80&w=1200",
  },

  {
    category: "Sanitarywares",
    image:
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=1200",
  },

  {
    category: "Sanitarywares",
    image:
      "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?q=80&w=1200",
  },
    {
    category: "Sanitarywares",
    image:
      "https://images.orientbell.com/media/catalog/product/3/0/300x450_odg_statuario_white_odh_arrow_grey_hl.webp",
  },
    {
    category: "Sanitarywares",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200",
  },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] =
    useState("All");

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter(
          (item) => item.category === activeCategory
        );

  return (
    <main className="pt-36 pb-24 bg-[#f7f7f7] min-h-screen">
      <div className="max-w-[1500px] mx-auto px-6">
        {/* TITLE */}
        <div className="mb-16">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-neutral-900">
            Gallery
          </h1>
        </div>

        {/* CATEGORY BUTTONS */}
        <div className="flex flex-wrap gap-6 mb-20">
          {categories.map((category, index) => {
            const active =
              activeCategory === category;

            return (
              <button
                key={index}
                onClick={() =>
                  setActiveCategory(category)
                }
                className={`
                  px-10 py-5
                  rounded-2xl
                  text-xl
                  transition-all duration-300
                  ${
                    active
                      ? "bg-blue-600 text-white shadow-lg"
                      : "bg-white text-black hover:bg-black hover:text-white"
                  }
                `}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* IMAGE GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {filteredImages.map((item, index) => (
            <div
              key={index}
              className="group overflow-hidden bg-white shadow-md hover:shadow-2xl transition duration-500"
            >
              <div className="relative h-[300px] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.category}
                  fill
                  unoptimized
                  sizes="(max-width:768px) 100vw,
                         (max-width:1200px) 50vw,
                         25vw"
                  className="
                    object-cover
                    transition duration-700
                    group-hover:scale-110
                  "
                />
              </div>

              <div className="p-5 text-center">
                <h3 className="text-xl font-semibold text-neutral-800">
                  {item.category}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SCROLL TOP */}
      <button
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        className="
          fixed bottom-8 right-8
          w-20 h-20
          bg-red-500
          text-white
          text-4xl
          shadow-2xl
          hover:scale-105
          transition
          z-50
          rounded-full
        "
      >
        ↑
      </button>
    </main>
  );
}