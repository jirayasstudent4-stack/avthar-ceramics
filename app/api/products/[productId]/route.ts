import prisma from "@/lib/db";

import { NextResponse } from "next/server";

interface Props {
  params: Promise<{
    productId: string;
  }>;
}

export async function PUT(
  req: Request,
  { params }: Props
) {
  try {
    const { productId } =
      await params;

    const body =
      await req.json();

    const updatedProduct =
      await prisma.product.update({
        where: {
          id: productId,
        },

        data: {
          name: body.name,

          slug: body.slug,

          sku: body.sku,

          size: body.size,

          finish: body.finish,

          material:
            body.material,

          description:
            body.description,

          pricePerBox:
            Number(
              body.pricePerBox
            ),

          pricePerSqft:
            Number(
              body.pricePerSqft
            ),
        },
      });

    return NextResponse.json({
      success: true,
      updatedProduct,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        error:
          "Update failed",
      },
      {
        status: 500,
      }
    );
  }
}

export async function DELETE(
  req: Request,
  { params }: Props
) {
  try {
    const { productId } =
      await params;

    await prisma.product.update({
      where: {
        id: productId,
      },

      data: {
        isActive: false,
      },
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        error:
          "Deactivate failed",
      },
      {
        status: 500,
      }
    );
  }
}