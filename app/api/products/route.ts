import { NextResponse } from "next/server";

import prisma from "@/lib/db";

export async function GET() {
  try {
    const products =
      await prisma.product.findMany({
        include: {
          category: true,
        },

        orderBy: {
          createdAt: "desc",
        },
      });

    return NextResponse.json(
      products
    );
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        error:
          "Failed to fetch products",
      },
      {
        status: 500,
      }
    );
  }
}

export async function POST(
  req: Request
) {
  try {
    const body = await req.json();

    const product =
      await prisma.product.create({
        data: {
          name: body.name,

          slug: body.slug,

          description:
            body.description,

          coverImage:
            body.coverImage,

          pricePerBox:
            Number(
              body.pricePerBox
            ),

          stockQty:
            Number(
              body.stockQty || 0
            ),

          size: body.size,

          finish:
            body.finish,

          material:
            body.material,

          isActive:
            body.isActive,

          categoryId:
            body.categoryId,
        },
      });

    return NextResponse.json({
      success: true,
      product,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        error:
          "Failed to create product",
      },
      {
        status: 500,
      }
    );
  }
}