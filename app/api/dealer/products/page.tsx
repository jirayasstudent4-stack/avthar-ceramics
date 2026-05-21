import prisma from "@/lib/db";

import Image from "next/image";

import Link from "next/link";

import AddToCart from "@/components/dealer/add-to-cart";

import { isLowStock } from "@/lib/inventory";

import {
  formatCurrency,
} from "@/lib/currency";

export default async function DealerProductsPage() {
  const products =
    await prisma.product.findMany({
      where: {
        isActive: true,
      },

      orderBy: {
        createdAt: "desc",
      },
    });

  return (
    <div>
      {/* HEADER */}
      <div className="mb-12">
        <p className="uppercase tracking-[0.3em] text-xs text-neutral-500 mb-4">
          Dealer Products
        </p>

        <h1 className="text-5xl font-semibold tracking-tight mb-4">
          Product Catalog
        </h1>

        <p className="text-lg text-neutral-500 max-w-[700px]">
          Access dealer pricing, live inventory, and bulk ordering
          for premium ceramic collections.
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-[32px] border border-black/5 overflow-hidden hover:shadow-xl transition duration-500"
          >
            {/* IMAGE */}
            <div className="relative h-[320px] overflow-hidden">
              <Image
                src={
                  product.coverImage ||
                  "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200"
                }
                alt={product.name}
                fill
                className="object-cover hover:scale-105 transition duration-700"
              />

              {/* STOCK BADGE */}
              <div className="absolute top-5 right-5">
                <div
                  className={`text-xs px-4 py-2 rounded-full uppercase tracking-[0.15em] font-medium backdrop-blur-xl ${
                    product.stockQty > 100
                      ? "bg-green-100/90 text-green-700"
                      : product.stockQty > 20
                      ? "bg-yellow-100/90 text-yellow-700"
                      : "bg-red-100/90 text-red-700"
                  }`}
                >
                  {product.stockQty > 100
                    ? "In Stock"
                    : product.stockQty > 20
                    ? "Low Stock"
                    : "Critical"}
                </div>
              </div>
            </div>

            {/* CONTENT */}
            <div className="p-7">
              {/* TITLE */}
              <div className="mb-6">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight mb-2">
                      {product.name}
                    </h2>

                    <p className="text-neutral-500">
                      {product.size}
                    </p>
                  </div>

                  {product.finish && (
                    <div className="text-xs uppercase tracking-[0.2em] text-neutral-400">
                      {product.finish}
                    </div>
                  )}
                </div>

                {/* STOCK INFO */}
                <div className="mt-5">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm text-neutral-500">
                      Available Stock
                    </p>

                    <p className="text-sm font-medium">
                      {product.stockQty} boxes
                    </p>
                  </div>

                  {/* STOCK BAR */}
                  <div className="h-2 rounded-full bg-neutral-100 overflow-hidden">
                    <div
                      className={`h-full rounded-full ${
                        product.stockQty > 100
                          ? "bg-green-500"
                          : product.stockQty > 20
                          ? "bg-yellow-500"
                          : "bg-red-500"
                      }`}
                      style={{
                        width: `${Math.min(
                          product.stockQty,
                          100
                        )}%`,
                      }}
                    />
                  </div>

                  {/* LOW STOCK ALERT */}
                  {isLowStock(
                    product.stockQty,
                    product.lowStockAlert
                  ) && (
                    <div className="mt-3 flex items-center gap-2 text-red-600 text-sm font-medium">
                      <div className="w-2 h-2 rounded-full bg-red-500" />

                      Low stock alert — reorder recommended
                    </div>
                  )}
                </div>
              </div>

              {/* PRICE */}
              <div className="mb-7">
                <p className="text-sm text-neutral-500 mb-2">
                  Dealer Price
                </p>

                <h3 className="text-3xl font-semibold tracking-tight">
                  {formatCurrency(
                    product.pricePerBox *
                      0.85
                  )}
                </h3>
              </div>

              {/* ACTIONS */}
              <div className="flex gap-4">
                <Link
                  href={`/dealer/products/${product.id}`}
                  className="flex-1 bg-black text-white py-4 rounded-2xl text-center font-medium hover:opacity-90 transition"
                >
                  View Product
                </Link>

                <AddToCart
                  productId={product.id}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}