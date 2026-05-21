import prisma from "@/lib/db";

import AnalyticsCards from "@/components/analytics/analytics-cards";

import RevenueChart from "@/components/analytics/revenue-chart";

import TopProducts from "@/components/analytics/top-products";

export default async function ReportsPage() {
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

  return (
    <div className="space-y-6">
      <AnalyticsCards
        revenue={
          totalRevenue._sum
            .totalAmount || 0
        }
        totalSales={totalSales}
        totalProducts={
          totalProducts
        }
        totalCustomers={
          totalCustomers
        }
        lowStock={lowStock}
      />

      <RevenueChart />

      <TopProducts
        products={topProducts}
      />
    </div>
  );
}