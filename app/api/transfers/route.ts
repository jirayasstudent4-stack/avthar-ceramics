import { NextResponse } from "next/server";

import prisma from "@/lib/db";

export async function POST(
  req: Request
) {
  try {
    const body = await req.json();

    const {
      fromBranchId,
      toBranchId,
      productId,
      boxes,
      pieces,
      notes,
    } = body;

    if (
      fromBranchId === toBranchId
    ) {
      return NextResponse.json(
        {
          error:
            "Cannot transfer to same branch",
        },
        {
          status: 400,
        }
      );
    }

    const sourceInventory =
      await prisma.inventory.findUnique(
        {
          where: {
            branchId_productId:
              {
                branchId:
                  fromBranchId,

                productId,
              },
          },
        }
      );

    if (
      !sourceInventory ||
      sourceInventory.boxes <
        Number(boxes)
    ) {
      return NextResponse.json(
        {
          error:
            "Insufficient stock",
        },
        {
          status: 400,
        }
      );
    }

    const transfer =
      await prisma.stockTransfer.create(
        {
          data: {
            fromBranchId,
            toBranchId,
            productId,

            boxes:
              Number(boxes),

            pieces:
              Number(pieces),

            notes,

            status:
              "COMPLETED",
          },
        }
      );

    await prisma.inventory.update({
      where: {
        branchId_productId: {
          branchId:
            fromBranchId,

          productId,
        },
      },

      data: {
        boxes: {
          decrement:
            Number(boxes),
        },
      },
    });

    const destinationInventory =
      await prisma.inventory.findUnique(
        {
          where: {
            branchId_productId:
              {
                branchId:
                  toBranchId,

                productId,
              },
          },
        }
      );

    if (
      destinationInventory
    ) {
      await prisma.inventory.update(
        {
          where: {
            branchId_productId:
              {
                branchId:
                  toBranchId,

                productId,
              },
          },

          data: {
            boxes: {
              increment:
                Number(boxes),
            },
          },
        }
      );
    } else {
      await prisma.inventory.create(
        {
          data: {
            branchId:
              toBranchId,

            productId,

            boxes:
              Number(boxes),

            pieces:
              Number(pieces),
          },
        }
      );
    }

    return NextResponse.json({
      success: true,
      transfer,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        error:
          "Transfer failed",
      },
      {
        status: 500,
      }
    );
  }
}

export async function GET() {
  try {
    const transfers =
      await prisma.stockTransfer.findMany(
        {
          include: {
            fromBranch: true,
            toBranch: true,
            product: true,
          },

          orderBy: {
            createdAt: "desc",
          },
        }
      );

    return NextResponse.json(
      transfers
    );
  } catch (error) {
    return NextResponse.json(
      {
        error:
          "Failed to fetch transfers",
      },
      {
        status: 500,
      }
    );
  }
}