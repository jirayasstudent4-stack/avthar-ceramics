export const dynamic = "force-dynamic";

import prisma from "@/lib/db";
import Image from "next/image";
import Link from "next/link";
import { formatCurrency } from "@/lib/currency";

export default async function FeaturedProducts() {
  const products = await prisma.product.findMany({
    where: { isActive: true },
    take: 4,
    orderBy: { createdAt: "desc" },
  });

  return (
   <section className="relative z-10 bg-white pt-20 md:pt-20 pb-20 md:pb-28">
      <div className="container-width">

        {/* SECTION HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 sm:gap-10 mb-12 sm:mb-16 md:mb-20">
          <div className="max-w-[700px]">
            <p className="uppercase tracking-[0.35em] text-xs text-neutral-400 mb-4 sm:mb-6">
              Featured Collection
            </p>

            <h2
              className="font-semibold tracking-[-0.05em] leading-[1] text-black mb-4 sm:mb-6"
              style={{ fontSize: "clamp(2rem, 5vw, 3.75rem)" }}
            >
              Signature
              <br />
              Surfaces
            </h2>

            <p className="text-neutral-500 text-base sm:text-lg leading-7 sm:leading-8 max-w-[600px]">
              Curated ceramic collections crafted for timeless interiors,
              luxury residences, and contemporary architectural spaces.
            </p>
          </div>

          <Link
            href="/products"
            className="uppercase tracking-[0.2em] text-sm border-b border-black pb-2 w-fit hover:opacity-60 transition shrink-0"
          >
            View All Products
          </Link>
        </div>

        {/* PRODUCTS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8 xl:gap-10">
          {products.map((product) => (
            <Link key={product.id} href={`/products/${product.slug}`} className="group block">

              {/* IMAGE CARD */}
              <div className="relative overflow-hidden rounded-[28px] sm:rounded-[36px] bg-neutral-100">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={product.coverImage || "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200"}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                    className="object-cover transition duration-1000 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-700" />
              </div>

              {/* CONTENT */}
              <div className="pt-4 sm:pt-6 px-1">
                <div className="flex items-start justify-between gap-3 mb-2 sm:mb-3">
                  <h3 className="text-lg sm:text-2xl font-semibold tracking-tight leading-tight">
                    {product.name}
                  </h3>
                  {product.finish && (
                    <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-neutral-400 whitespace-nowrap mt-1 shrink-0">
                      {product.finish}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-neutral-500 text-sm">{product.size}</p>
                  <p className="text-base sm:text-lg font-medium tracking-tight">
                    {formatCurrency(product.pricePerBox)}
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
