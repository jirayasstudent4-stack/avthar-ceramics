import prisma from "@/lib/db";

import { notFound } from "next/navigation";

import EditProductForm from "@/components/admin/products/edit-product-form";

interface Props {
  params: Promise<{
    productId: string;
  }>;
}

export default async function EditProductPage({
  params,
}: Props) {
  const { productId } =
    await params;

  const product =
    await prisma.product.findUnique({
      where: {
        id: productId,
      },
    });

  if (!product) {
    return notFound();
  }

  return (
    <div className="max-w-5xl">
      <h1 className="text-4xl font-bold mb-10">
        Edit Product
      </h1>

      <EditProductForm
        product={product}
      />
    </div>
  );
}