import prisma from "@/lib/db";

import { notFound } from "next/navigation";

import Image from "next/image";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CollectionDetailPage({
  params,
}: Props) {
  const { slug } =
    await params;

  const collection =
    await prisma.collection.findUnique({
      where: {
        slug,
      },

      include: {
        products: true,
      },
    });

  if (!collection) {
    return notFound();
  }

  return (
    <section>
      <div className="relative h-[70vh] overflow-hidden">
        <Image
          src={
            collection.coverImage ||
            "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2070"
          }
          alt={collection.name}
          fill
          
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute bottom-20 left-10 lg:left-20 text-white">
          <h1 className="text-6xl lg:text-8xl font-light tracking-[0.2em] uppercase">
            {collection.name}
          </h1>

          <p className="max-w-2xl mt-6 text-lg text-neutral-200 leading-relaxed">
            {
              collection.description
            }
          </p>
        </div>
      </div>

      <div className="px-6 lg:px-20 py-24">
        <h2 className="text-4xl font-light mb-14">
          Products
        </h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
          {collection.products.map(
            (product) => (
              <div
                key={product.id}
                className="group"
              >
                <div className="relative h-[420px] overflow-hidden rounded-[30px]">
                  <Image
                    src={
                      product.coverImage ||
                      "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1974"
                    }
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition duration-700"
                  />
                </div>

                <div className="pt-5">
                  <h3 className="text-2xl font-light">
                    {product.name}
                  </h3>

                  <p className="text-neutral-500 mt-2">
                    {product.size}
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}