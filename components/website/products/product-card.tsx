import Link from "next/link";

import Image from "next/image";
import { formatCurrency } from "@/lib/currency";

interface Props {
  product: {
    id: string;

    name: string;

   sku?: string | null;

    size?: string | null;

    finish?: string | null;

    coverImage?: string | null;

    pricePerBox: number;
  };
}

export default function ProductCard({
  product,
}: Props) {
  return (
    <Link
      href={`/products/${product.sku || "-"}`}
      className="group block"
    >
      <div className="relative overflow-hidden rounded-[32px] bg-neutral-100 h-[520px]">
        <Image
          src={
            product.coverImage ||
            "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1974"
          }
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover group-hover:scale-105 transition duration-700"
        />
      </div>

      <div className="pt-5">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-2xl font-semibold">
            {product.name}
          </h3>

          <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
            {product.finish}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-neutral-500">
            {product.size || "Premium Size"}
          </p>

          <p className="font-medium">
            {formatCurrency(
  product.pricePerBox
)}
          </p>
        </div>
      </div>
    </Link>
  );
}