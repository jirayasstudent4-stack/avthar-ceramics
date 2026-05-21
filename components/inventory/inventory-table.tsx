"use client";

import { Inventory, Product, Branch } from "@prisma/client";

type InventoryWithRelations =
  Inventory & {
    product: Product;
    branch: Branch;
  };

interface Props {
  inventories: InventoryWithRelations[];
}

export default function InventoryTable({
  inventories,
}: Props) {
  return (
    <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[1000px]">
          <thead className="bg-slate-100">
            <tr>
              <th className="p-4 text-left font-semibold">
                Product
              </th>

              <th className="p-4 text-left font-semibold">
                SKU
              </th>

              <th className="p-4 text-left font-semibold">
                Branch
              </th>

              <th className="p-4 text-left font-semibold">
                Boxes
              </th>

              <th className="p-4 text-left font-semibold">
                Pieces
              </th>

              <th className="p-4 text-left font-semibold">
                Updated
              </th>
            </tr>
          </thead>

          <tbody>
            {inventories.length === 0 ? (
              <tr>
                <td
                  colSpan={6}
                  className="p-10 text-center text-gray-500"
                >
                  No inventory found
                </td>
              </tr>
            ) : (
              inventories.map(
                (inventory) => (
                  <tr
                    key={inventory.id}
                    className="border-t hover:bg-slate-50 transition"
                  >
                    <td className="p-4 font-medium">
                      {
                        inventory.product
                          .name
                      }
                    </td>

                    <td className="p-4">
                      {inventory.product
                        .sku || "-"}
                    </td>

                    <td className="p-4">
                      {
                        inventory.branch
                          .name
                      }
                    </td>

                    <td className="p-4 font-semibold">
                      {inventory.boxes}
                    </td>

                    <td className="p-4">
                      {
                        inventory.pieces
                      }
                    </td>

                    <td className="p-4 text-sm text-gray-500">
                      {new Date(
                        inventory.updatedAt
                      ).toLocaleDateString()}
                    </td>
                  </tr>
                )
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}