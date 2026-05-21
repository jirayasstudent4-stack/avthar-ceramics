import { NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const customer =
      await prisma.customer.create({
        data: {
          name: body.name,
          phone: body.phone,
          email: body.email,
          address: body.address,
        },
      });

    return NextResponse.json({
      success: true,
      customer,
    });
  } catch (error) {
    return NextResponse.json(
      {
        error:
          "Failed to create customer",
      },
      {
        status: 500,
      }
    );
  }
}

export async function GET() {
  try {
    const customers =
      await prisma.customer.findMany();

    return NextResponse.json(
      customers
    );
  } catch (error) {
    return NextResponse.json(
      {
        error:
          "Failed to fetch customers",
      },
      {
        status: 500,
      }
    );
  }
}