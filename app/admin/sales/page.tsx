import prisma from "@/lib/db";

import SaleForm from "@/components/sales/sale-form";
import SalesTable from "@/components/sales/sales-table";

export default async function SalesPage() {
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

  return (
    <div>
      <SaleForm />

      <SalesTable sales={sales} />
    </div>
  );
}