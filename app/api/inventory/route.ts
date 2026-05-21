import { NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const existingInventory =
      await prisma.inventory.findFirst({
        where: {
          branchId: body.branchId,
          productId: body.productId,
        },
      });

    if (existingInventory) {
      const updatedInventory =
        await prisma.inventory.update({
          where: {
            id: existingInventory.id,
          },
          data: {
            boxes:
              existingInventory.boxes +
              Number(body.boxes),

            pieces:
              existingInventory.pieces +
              Number(body.pieces),

            reservedBoxes:
              existingInventory.reservedBoxes +
              Number(
                body.reservedBoxes || 0
              ),

            damagedBoxes:
              existingInventory.damagedBoxes +
              Number(
                body.damagedBoxes || 0
              ),
          },
        });

      return NextResponse.json({
        success: true,
        inventory: updatedInventory,
      });
    }

    const inventory =
      await prisma.inventory.create({
        data: {
          branchId: body.branchId,
          productId: body.productId,

          boxes: Number(body.boxes),
          pieces: Number(body.pieces),

          reservedBoxes: Number(
            body.reservedBoxes || 0
          ),

          damagedBoxes: Number(
            body.damagedBoxes || 0
          ),
        },
      });

    return NextResponse.json({
      success: true,
      inventory,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        error:
          "Failed to create inventory",
      },
      {
        status: 500,
      }
    );
  }
}

export async function GET() {
  try {
    const inventories =
      await prisma.inventory.findMany({
        include: {
          branch: true,
          product: true,
        },
      });

    return NextResponse.json(
      inventories
    );
  } catch (error) {
    return NextResponse.json(
      {
        error:
          "Failed to fetch inventory",
      },
      {
        status: 500,
      }
    );
  }
}