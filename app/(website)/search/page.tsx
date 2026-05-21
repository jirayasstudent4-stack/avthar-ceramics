import prisma from "@/lib/db";

import ProductCard from "@/components/website/products/product-card";

interface Props {
  searchParams: Promise<{
    query?: string;
  }>;
}

export default async function SearchPage({
  searchParams,
}: Props) {
  const params =
    await searchParams;

  const query =
    params.query || "";

  const products =
    await prisma.product.findMany({
      where: {
        isActive: true,

        OR: [
          {
            name: {
              contains: query,
              mode:
                "insensitive",
            },
          },

          {
            finish: {
              contains: query,
              mode:
                "insensitive",
            },
          },

          {
            material: {
              contains: query,
              mode:
                "insensitive",
            },
          },
        ],
      },

      orderBy: {
        createdAt: "desc",
      },
    });

  return (
    <div className="pt-40 pb-24">
      <div className="container-width">
        <div className="mb-16">
          <h1 className="text-6xl font-semibold tracking-tight mb-6">
            Search Results
          </h1>

          <p className="text-neutral-500">
            {products.length} products found
          </p>
        </div>

        {products.length === 0 ? (
          <div className="py-24 text-center">
            <h2 className="text-3xl font-semibold mb-4">
              No Products Found
            </h2>

            <p className="text-neutral-500">
              Try another keyword.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.map(
              (product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
}