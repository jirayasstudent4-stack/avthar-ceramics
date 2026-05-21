import { NextResponse } from "next/server";

import prisma from "@/lib/db";

import { hashPassword } from "@/lib/hash";

export async function POST(
  req: Request
) {
  try {
    const body = await req.json();

    const existingDealer =
      await prisma.dealer.findUnique({
        where: {
          email: body.email,
        },
      });

    if (existingDealer) {
      return NextResponse.json(
        {
          error:
            "Dealer already exists",
        },
        {
          status: 400,
        }
      );
    }

    const hashedPassword =
      await hashPassword(
        body.password
      );

    const dealer =
      await prisma.dealer.create({
        data: {
          businessName:
            body.businessName,

          ownerName:
            body.ownerName,

          email: body.email,

          phone: body.phone,

          password:
            hashedPassword,

          address:
            body.address,

          gstNumber:
            body.gstNumber,
        },
      });

    return NextResponse.json({
      success: true,
      dealer,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        error:
          "Registration failed",
      },
      {
        status: 500,
      }
    );
  }
}