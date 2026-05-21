import { NextResponse } from "next/server";

import prisma from "@/lib/db";

export async function POST(
  req: Request
) {
  try {
    const body = await req.json();

    const wishlist =
      await prisma.wishlist.create({
        data: {
          sessionId:
            body.sessionId,

          productId:
            body.productId,
        },
      });

    return NextResponse.json({
      success: true,
      wishlist,
    });
  } catch (error) {
    return NextResponse.json(
      {
        error:
          "Wishlist failed",
      },
      {
        status: 500,
      }
    );
  }
}