export const dynamic = "force-dynamic";

import prisma from "@/lib/db";

import Image from "next/image";

import Link from "next/link";

import { formatCurrency } from "@/lib/currency";

export default async function FeaturedProducts() {
  const products =
    await prisma.product.findMany({
      where: {
        isActive: true,
      },

      take: 4,

      orderBy: {
        createdAt: "desc",
      },
    });

  return (
    <section className="relative z-30 bg-white pt-14 md:pt-20 pb-24 md:pb-28 overflow-hidden -mt-2">
      <div className="container-width">
        {/* SECTION HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-20">
          <div className="max-w-[700px]">
            <p className="uppercase tracking-[0.35em] text-xs md:text-sm text-neutral-400 mb-6">
              Featured Collection
            </p>

            <h2 className="text-4xl md:text-6xl font-semibold tracking-[-0.05em] leading-[1] text-black mb-6">
              Signature
              <br />
              Surfaces
            </h2>

            <p className="text-neutral-500 text-lg leading-8 max-w-[600px]">
              Curated ceramic collections crafted for timeless interiors,
              luxury residences, and contemporary architectural spaces.
            </p>
          </div>

          <Link
            href="/products"
            className="uppercase tracking-[0.2em] text-sm border-b border-black pb-2 w-fit hover:opacity-60 transition"
          >
            View All Products
          </Link>
        </div>

        {/* PRODUCTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 xl:gap-10">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.slug}`}
              className="group block"
            >
              {/* IMAGE CARD */}
              <div className="relative overflow-hidden rounded-[36px] bg-neutral-100">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={
                      product.coverImage ||
                      "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200"
                    }
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    25vw"
                    className="object-cover transition duration-1000 ease-out group-hover:scale-105"
                  />
                </div>

                {/* IMAGE OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-700" />
              </div>

              {/* CONTENT */}
              <div className="pt-6 px-1">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-2xl font-semibold tracking-tight leading-tight">
                    {product.name}
                  </h3>

                  {product.finish && (
                    <span className="text-[11px] uppercase tracking-[0.25em] text-neutral-400 whitespace-nowrap mt-1">
                      {product.finish}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-neutral-500 text-sm md:text-base">
                    {product.size}
                  </p>

                  <p className="text-lg font-medium tracking-tight">
                    {formatCurrency(
                      product.pricePerBox
                    )}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}