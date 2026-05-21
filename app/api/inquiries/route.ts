import { NextResponse } from "next/server";

import prisma from "@/lib/db";

export async function POST(
  req: Request
) {
  try {
    const body = await req.json();

    const inquiry =
      await prisma.inquiry.create({
        data: {
          fullName:
            body.fullName,

          email:
            body.email,

          phone:
            body.phone,

          company:
            body.company,

          message:
            body.message,

          productId:
            body.productId,
        },
      });

    return NextResponse.json({
      success: true,
      inquiry,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        error:
          "Inquiry failed",
      },
      {
        status: 500,
      }
    );
  }
}