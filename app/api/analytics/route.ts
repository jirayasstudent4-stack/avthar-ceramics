import { NextResponse } from "next/server";

import prisma from "@/lib/db";

export async function GET() {
  try {
    const totalRevenue =
      await prisma.sale.aggregate({
        _sum: {
          totalAmount: true,
        },
      });

    const totalSales =
      await prisma.sale.count();

    const totalProducts =
      await prisma.product.count();

    const totalCustomers =
      await prisma.customer.count();

    const lowStock =
      await prisma.inventory.count({
        where: {
          boxes: {
            lte: 10,
          },
        },
      });

    const topProducts =
      await prisma.saleItem.groupBy({
        by: ["productId"],

        _sum: {
          quantityBoxes: true,
        },

        orderBy: {
          _sum: {
            quantityBoxes:
              "desc",
          },
        },

        take: 5,
      });

    return NextResponse.json({
      revenue:
        totalRevenue._sum
          .totalAmount || 0,

      totalSales,

      totalProducts,

      totalCustomers,

      lowStock,

      topProducts,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        error:
          "Analytics fetch failed",
      },
      {
        status: 500,
      }
    );
  }
}