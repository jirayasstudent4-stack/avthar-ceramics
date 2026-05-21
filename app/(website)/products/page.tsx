"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    name: "Floor Tiles",

    description:
      "Luxury floor tile collections crafted for modern interiors and premium residential spaces.",

    banner:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2000",

    products: [
      {
        title: "Royal Marble Floor",
        size: "120x120 cm - Marble Finish",
        image:
          "https://images.orientbell.com/media/catalog/product/o/r/orient_bell_-_super_gloss_portoro_gold_marble_1.jpg?q=80&w=1200",
      },

      {
        title: "Modern Living Floor",
        size: "80x80 cm - Premium Tile",
        image:
          "https://images.orientbell.com/media/catalog/product/p/g/pgvt_california_beige_hotel_reception_60x120_cm.jpg",
      },

      {
        title: "Luxury Hall Flooring",
        size: "60x120 cm - GVT",
        image:
          "https://images.orientbell.com/media/catalog/product/p/g/pgvt_statuario_marble_living_room_60x120_cm_2_.webp",
      },

      {
        title: "Italian Marble Tile",
        size: "100x200 cm - Glossy",
        image:
          "https://images.orientbell.com/media/catalog/product/t/l/tl_grey_silvia_marble_tl_pearl_grey_silvia_marble_400x400_mm.jpg",
      },

      {
        title: "Classic Stone Floor",
        size: "80x160 cm - Matt",
        image:
          "https://images.orientbell.com/media/catalog/product/h/r/hrp_cobble_stone_natural_1.jpg",
      },

      {
        title: "Premium White Floor",
        size: "120x240 cm - Luxury",
        image:
          "https://images.orientbell.com/media/catalog/product/t/l/tl_moroccan_art_black_white_400x400_mm_timeless_2.0_floor_tiles.jpg",
      },
    ],
  },

  {
    name: "Wall Tiles",

    description:
      "Elegant wall tile collections designed for stylish interiors, feature walls, and luxury decorative spaces.",

    banner:
      "https://images.orientbell.com/media/catalog/product/g/f/gft_sph_geometric_sandune_hl_gft_sph_lisbon_floral_hl_gft_spb_sand_crema_gft_spb_sand_sandune__bathroom_ambiance_ceramic_sparkle_wall_tiles_300x450_mm_1.webp",

    products: [
      {
        title: "Textured Wall Design",
        size: "60x120 cm - Ceramic",
        image:
          "https://images.orientbell.com/media/catalog/product/g/f/gft_sph_echo_hibiscus_hl_gft_spb_ocean_blue_dk_gft_spb_ocean_lt__bathroom_ambiance_ceramic_sparkle_wall_tiles_300x450_mm_1.webp",
      },

      {
        title: "Modern Pattern Wall",
        size: "80x120 cm - Matt",
        image:
          "https://images.orientbell.com/media/catalog/product/s/f/sfm_modern_stone_gris_dk.jpg",
      },

      {
        title: "Luxury Decorative Wall",
        size: "120x240 cm - Premium",
        image:
          "https://images.orientbell.com/media/catalog/product/d/e/decor_portugese_art_multi_1.jpg",
      },

      {
        title: "Designer Interior Wall",
        size: "60x60 cm - Glossy",
        image:
          "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200",
      },

      {
        title: "Modern Ceramic Wall",
        size: "100x200 cm - Digital",
        image:
          "https://images.orientbell.com/media/catalog/product/b/d/bdp_kaso_blue.jpg",
      },

      {
        title: "Premium White Wall",
        size: "80x160 cm - Designer",
        image:
          "https://images.orientbell.com/media/catalog/product/c/a/carrara20luxe20white20silktouch_hd9h2ohgt7s3x9x8.jpg",
      },
    ],
  },

  {
    name: "Elevation Tiles",

    description:
      "Premium elevation tile designs for luxury exteriors, modern facades, and stylish architectural finishes.",

    banner:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=2000",

    products: [
      {
        title: "Exterior Stone Elevation",
        size: "30x45 cm - Exterior",
        image:
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200",
      },

      {
        title: "Luxury Elevation Finish",
        size: "60x120 cm - Rustic",
        image:
          "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?q=80&w=1200",
      },

      {
        title: "Modern Facade Tile",
        size: "45x90 cm - Matt",
        image:
          "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200",
      },

      {
        title: "Premium Exterior Design",
        size: "80x160 cm - Digital",
        image:
          "https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=1200",
      },

      {
        title: "Contemporary Elevation",
        size: "100x200 cm - Premium",
        image:
          "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=1200",
      },

      {
        title: "Architectural Wall Finish",
        size: "120x240 cm - Luxury",
        image:
          "https://images.orientbell.com/media/catalog/product/8/0/800x2400_nu_granalt_snp_grey_glossy.jpg",
      },
    ],
  },

  {
    name: "Bath Room Tiles",

    description:
      "Modern bathroom tile collections with waterproof finishes and elegant textures for luxurious washroom interiors.",

    banner:
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=2000",

    products: [
      {
        title: "Luxury Bathroom Interior",
        size: "60x120 cm - Gres Tough",
        image:
          "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=1200",
      },

      {
        title: "Modern Washroom Design",
        size: "80x160 cm - Premium",
        image:
          "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200",
      },

      {
        title: "Elegant Bathroom Wall",
        size: "120x240 cm - Ceramic",
        image:
          "https://images.orientbell.com/media/catalog/product/b/f/bfm_ec_plain_white_bathroomn_ceramic_tile_300x300mm.jpg",
      },

      {
        title: "Designer Washroom Tile",
        size: "60x60 cm - Matt",
        image:
          "https://images.orientbell.com/media/catalog/product/3/0/300x450_odg_statuario_white_odh_arrow_grey_hl.webp",
      },

      {
        title: "Premium Bath Finish",
        size: "100x200 cm - Glossy",
        image:
          "https://images.orientbell.com/media/catalog/product/o/h/ohg_line_travertine_brown_hl_odg_travertine_brown_lt_dk_300x450_mm_1.webp",
      },

      {
        title: "Luxury Wet Area Tile",
        size: "80x120 cm - Designer",
        image:
          "https://images.orientbell.com/media/catalog/product/o/h/ohg_emperador_marble_strips_hl_odg_emperador_marble_brown_odg_emperador_marble_creama_300x600_mm.webp",
      },
    ],
  },

  {
    name: "Portico Tiles",

    description:
      "Stylish portico and outdoor tile collections designed for entrances, patios, pathways, and exterior spaces.",

    banner:
      "https://images.orientbell.com/media/catalog/product/n/a/natural_rottowood_beige.jpg",

    products: [
      {
        title: "Outdoor Entrance Tile",
        size: "80x120 cm - Outdoor",
        image:
          "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=1200",
      },

      {
        title: "Luxury Portico Design",
        size: "100x200 cm - Rustic",
        image:
          "https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=1200",
      },

      {
        title: "Modern Outdoor Finish",
        size: "120x240 cm - Premium",
        image:
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200",
      },

      {
        title: "Elegant Patio Tile",
        size: "60x120 cm - Matt",
        image:
          "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?q=80&w=1200",
      },

      {
        title: "Exterior Walkway Tile",
        size: "80x80 cm - Stone",
        image:
          "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200",
      },

      {
        title: "Premium Exterior Surface",
        size: "45x90 cm - Designer",
        image:
          "https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=1200",
      },
    ],
  },
];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <main className="bg-[#f5f5f5] min-h-screen">
      {/* HERO */}
      <section className="relative h-[420px] overflow-hidden">
        <Image
          src={activeCategory.banner}
          alt={activeCategory.name}
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 h-full flex items-end">
          <div className="max-w-[1500px] mx-auto w-full px-6 pb-16">
            <div className="inline-block bg-black/30 backdrop-blur-md px-10 py-6 rounded-2xl">
              <h1 className="text-white text-5xl md:text-7xl font-bold uppercase">
                {activeCategory.name}
              </h1>

              <div className="flex items-center gap-3 mt-4 text-white/90 text-lg">
                <Link href="/">Home</Link>

                <span>-</span>

                <p>{activeCategory.name}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-24">
        <div className="max-w-[1500px] mx-auto px-6">
          <div className="grid lg:grid-cols-[320px_1fr] gap-16">
            {/* SIDEBAR */}
            <aside>
              <div className="bg-white rounded-[30px] overflow-hidden border border-neutral-200 shadow-sm sticky top-28">
                {categories.map((category, index) => {
                  const active =
                    activeCategory.name === category.name;

                  return (
                    <button
                      key={index}
                      onClick={() => setActiveCategory(category)}
                      className={`
                        w-full
                        flex items-center justify-between
                        px-10 py-8
                        border-b border-neutral-200
                        transition-all duration-300
                        text-left
                        ${
                          active
                            ? "bg-[#ff3b3b] text-white"
                            : "bg-white text-neutral-800 hover:bg-neutral-50"
                        }
                      `}
                    >
                      <span className="text-[22px] font-semibold">
                        {category.name}
                      </span>

                      <ArrowRight className="w-5 h-5" />
                    </button>
                  );
                })}
              </div>
            </aside>

            {/* RIGHT SIDE */}
            <div>
              {/* TITLE */}
              <div className="mb-20">
                <h2 className="text-5xl md:text-6xl font-bold uppercase text-neutral-900">
                  {activeCategory.name}
                </h2>

                <p className="mt-8 text-[20px] leading-[2] text-neutral-600 max-w-6xl">
                  {activeCategory.description}
                </p>
              </div>

              {/* PRODUCTS GRID */}
              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-x-12 gap-y-20">
                {activeCategory.products.map((product, index) => (
                  <div
                    key={index}
                    className="group"
                  >
                    {/* IMAGE */}
                    <div className="relative h-[280px] overflow-hidden bg-neutral-100 rounded-sm">
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="
                          object-cover
                          transition duration-700
                          group-hover:scale-105
                        "
                      />
                    </div>

                    {/* TEXT */}
                    <div className="text-center pt-8">
                      <h3 className="text-[24px] font-semibold text-neutral-900">
                        {product.title}
                      </h3>

                      <p className="mt-3 text-[18px] text-neutral-500 leading-relaxed">
                        {product.size}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}