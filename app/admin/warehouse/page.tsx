import prisma from "@/lib/db";

import InventoryForm from "@/components/inventory/inventory-form";
import InventoryTable from "@/components/inventory/inventory-table";

export default async function WarehousePage() {
  const inventories =
    await prisma.inventory.findMany({
      include: {
        branch: true,
        product: true,
      },
    });

  return (
    <div>
      <InventoryForm />

      <InventoryTable
        inventories={inventories}
      />
    </div>
  );
}