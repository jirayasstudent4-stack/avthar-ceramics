"use client";

import Link from "next/link";

import { Product } from "@prisma/client";

interface Props {
  products: Product[];
}

export default function ProductTable({
  products,
}: Props) {
  async function handleDelete(
    productId: string
  ) {
    const confirmDelete = confirm(
      "Deactivate this product?"
    );

    if (!confirmDelete) return;

    try {
      const res = await fetch(
        `/api/products/${productId}`,
        {
          method: "DELETE",
        }
      );

      const data =
        await res.json();

      if (!res.ok) {
        throw new Error(
          data.error ||
            "Delete failed"
        );
      }

      alert(
        "Product deactivated successfully"
      );

      window.location.reload();
    } catch (error: any) {
      alert(
        error.message ||
          "Failed to deactivate product"
      );
    }
  }

  return (
    <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[1000px]">
          <thead className="bg-slate-100">
            <tr>
              <th className="p-4 text-left font-semibold">
                Image
              </th>

              <th className="p-4 text-left font-semibold">
                Product
              </th>

              <th className="p-4 text-left font-semibold">
                SKU
              </th>

              <th className="p-4 text-left font-semibold">
                Size
              </th>

              <th className="p-4 text-left font-semibold">
                Price Per Box
              </th>

              <th className="p-4 text-left font-semibold">
                Status
              </th>

              <th className="p-4 text-left font-semibold">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {products.length === 0 ? (
              <tr>
                <td
                  colSpan={7}
                  className="p-10 text-center text-gray-500"
                >
                  No products found
                </td>
              </tr>
            ) : (
              products.map(
                (product) => (
                  <tr
                    key={product.id}
                    className="border-t hover:bg-slate-50 transition"
                  >
                    <td className="p-4">
                      {product.coverImage ? (
                        <img
                          src={
                            product.coverImage
                          }
                          alt={
                            product.name
                          }
                          className="w-16 h-16 rounded-xl object-cover border"
                        />
                      ) : (
                        <div className="w-16 h-16 rounded-xl bg-slate-200 flex items-center justify-center text-xs text-gray-500">
                          No Image
                        </div>
                      )}
                    </td>

                    <td className="p-4">
                      <div>
                        <Link
                          href={`/admin/products/${product.id}`}
                          className="font-semibold text-slate-800 hover:text-blue-600 hover:underline transition"
                        >
                          {product.name}
                        </Link>

                        <p className="text-sm text-gray-500">
                          Ceramic Product
                        </p>
                      </div>
                    </td>

                    <td className="p-4 font-medium">
                      {product.sku || "-"}
                    </td>

                    <td className="p-4">
                      {product.size ||
                        "-"}
                    </td>

                    <td className="p-4 font-semibold text-green-600">
                      ₹
                      {product.pricePerBox.toLocaleString(
                        "en-IN"
                      )}
                    </td>

                    <td className="p-4">
                      {product.isActive ? (
                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                          Active
                        </span>
                      ) : (
                        <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium">
                          Inactive
                        </span>
                      )}
                    </td>

                    <td className="px-6 py-6">
                      <div className="flex items-center gap-3">
                        <Link
                          href={`/products/${product.slug}`}
                          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-xl transition"
                        >
                          View
                        </Link>

                        <Link
                          href={`/admin/products/${product.id}`}
                          className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-xl transition"
                        >
                          Edit
                        </Link>

                        <button
                          onClick={() =>
                            handleDelete(
                              product.id
                            )
                          }
                          className={`text-white px-4 py-2 rounded-lg text-sm transition ${
                            product.isActive
                              ? "bg-red-500 hover:bg-red-600"
                              : "bg-green-500 hover:bg-green-600"
                          }`}
                        >
                          {product.isActive
                            ? "Deactivate"
                            : "Activate"}
                        </button>
                      </div>
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