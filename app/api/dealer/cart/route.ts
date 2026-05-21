import { NextResponse } from "next/server";

import prisma from "@/lib/db";

export async function POST(
  req: Request
) {
  try {
    const body = await req.json();

    const cartItem =
      await prisma.dealerCart.create({
        data: {
          dealerId:
            body.dealerId,

          productId:
            body.productId,

          quantity:
            body.quantity || 1,
        },
      });

    return NextResponse.json({
      success: true,
      cartItem,
    });
  } catch (error) {
    return NextResponse.json(
      {
        error:
          "Cart failed",
      },
      {
        status: 500,
      }
    );
  }
}