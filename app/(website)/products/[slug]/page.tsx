import prisma from "@/lib/db";

import { notFound } from "next/navigation";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: Props) {
  const { slug } =
    await params;

  if (!slug) {
    return {
      title: "Product",
    };
  }

  const product =
    await prisma.product.findUnique({
      where: {
        slug,
      },

      include: {
        category: true,
        collection: true,
      },
    });

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: product.name,

    description:
      product.description ||
      product.name,
  };
}

export default async function ProductPage({
  params,
}: Props) {
  const { slug } =
    await params;

  if (!slug) {
    notFound();
  }

  const product =
    await prisma.product.findUnique({
      where: {
        slug,
      },

      include: {
        category: true,
        collection: true,
      },
    });

  if (!product) {
    notFound();
  }

  return (
    <div className="p-10">
      <h1 className="text-5xl font-semibold mb-6">
        {product.name}
      </h1>

      <p className="text-neutral-500 mb-10">
        {product.description}
      </p>

      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <img
            src={
              product.coverImage ||
              ""
            }
            alt={product.name}
            className="w-full rounded-3xl"
          />
        </div>

        <div className="space-y-5">
          <div>
            <p className="text-neutral-500">
              Category
            </p>

            <h2 className="text-2xl font-semibold">
              {
                product.category
                  ?.name
              }
            </h2>
          </div>

          <div>
            <p className="text-neutral-500">
              Size
            </p>

            <h2 className="text-2xl font-semibold">
              {product.size}
            </h2>
          </div>

          <div>
            <p className="text-neutral-500">
              Finish
            </p>

            <h2 className="text-2xl font-semibold">
              {product.finish}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}