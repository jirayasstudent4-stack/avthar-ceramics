import { NextResponse } from "next/server";

import prisma from "@/lib/db";

export async function GET() {
  const collections =
    await prisma.collection.findMany({
      include: {
        products: true,
      },
    });

  return NextResponse.json(
    collections
  );
}

export async function POST(
  req: Request
) {
  try {
    const body = await req.json();

    const collection =
      await prisma.collection.create({
        data: {
          name: body.name,

          slug: body.slug,

          description:
            body.description,

          coverImage:
            body.coverImage,

          isFeatured:
            body.isFeatured,
        },
      });

    return NextResponse.json({
      success: true,
      collection,
    });
  } catch (error) {
    return NextResponse.json(
      {
        error:
          "Collection creation failed",
      },
      {
        status: 500,
      }
    );
  }
}