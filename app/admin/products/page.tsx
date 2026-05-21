import prisma from "@/lib/db";

import ProductForm from "@/components/products/product-form";

import ProductTable from "@/components/products/product-table";

import ProductSearch from "@/components/products/product-search";

interface Props {
  searchParams: Promise<{
    query?: string;
  }>;
}

export default async function ProductsPage({
  searchParams,
}: Props) {
  const params = await searchParams;

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
            slug: {
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

      take: 10,
    });

  return (
    <div>
      <ProductForm />

      <ProductSearch />

      <ProductTable
        products={products}
      />
    </div>
  );
}