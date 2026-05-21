import { NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      customerId,
      branchId,
      items,
    } = body;

    let totalAmount = 0;

    for (const item of items) {
      totalAmount +=
        item.price *
        item.quantityBoxes;
    }

    const gstAmount =
      totalAmount * 0.18;

    const sale =
      await prisma.sale.create({
        data: {
          invoiceNumber:
            "INV-" + Date.now(),

          customerId,
          branchId,

          totalAmount,
          gstAmount,

          status: "COMPLETED",

          items: {
            create: items.map(
              (item: any) => ({
                productId:
                  item.productId,

                quantityBoxes:
                  Number(
                    item.quantityBoxes
                  ),

                quantityPieces:
                  Number(
                    item.quantityPieces ||
                      0
                  ),

                price: Number(
                  item.price
                ),
              })
            ),
          },
        },

        include: {
          items: true,
        },
      });

for (const item of items) {

  // FIND INVENTORY
  const inventory =
    await prisma.inventory.findUnique({
      where: {
        branchId_productId: {
          branchId,
          productId: item.productId,
        },
      },
    });

  // CHECK STOCK
  if (
    !inventory ||
    inventory.boxes <
      item.quantityBoxes
  ) {
    return NextResponse.json(
      {
        error:
          "Insufficient stock available",
      },
      {
        status: 400,
      }
    );
  }

  // UPDATE INVENTORY
  await prisma.inventory.update({
    where: {
      branchId_productId: {
        branchId,
        productId: item.productId,
      },
    },

    data: {
      boxes: {
        decrement: Number(
          item.quantityBoxes
        ),
      },
    },
  });
}

    return NextResponse.json({
      success: true,
      sale,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        error:
          "Failed to create sale",
      },
      {
        status: 500,
      }
    );
  }
}

export async function GET() {
  try {
    const sales =
      await prisma.sale.findMany({
        include: {
          customer: true,
          branch: true,
          items: true,
        },

        orderBy: {
          createdAt: "desc",
        },
      });

    return NextResponse.json(sales);
  } catch (error) {
    return NextResponse.json(
      {
        error:
          "Failed to fetch sales",
      },
      {
        status: 500,
      }
    );
  }
}