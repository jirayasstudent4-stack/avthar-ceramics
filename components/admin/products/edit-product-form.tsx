"use client";

import axios from "axios";

import { useState } from "react";

import { useRouter } from "next/navigation";

interface Props {
  product: any;
}

export default function EditProductForm({
  product,
}: Props) {
  const router = useRouter();

  const [loading, setLoading] =
    useState(false);

  const [formData, setFormData] =
    useState({
      name: product.name || "",

      slug: product.slug || "",

      sku: product.sku || "",

      size: product.size || "",

      finish:
        product.finish || "",

      material:
        product.material || "",

      description:
        product.description ||
        "",

      pricePerBox:
        product.pricePerBox ||
        0,

      pricePerSqft:
        product.pricePerSqft ||
        0,
    });

  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    try {
      setLoading(true);

      await axios.put(
        `/api/products/${product.id}`,
        formData
      );

      alert(
        "Product updated successfully"
      );

      window.location.href =
  "/admin/products";
    } catch (error) {
      console.log(error);

      alert(
        "Update failed"
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border rounded-2xl p-10"
    >
      <div className="grid grid-cols-2 gap-6">
        <input
          value={formData.name}
          onChange={(e) =>
            setFormData({
              ...formData,
              name:
                e.target.value,
            })
          }
          className="border p-4 rounded-xl"
          placeholder="Name"
        />

        <input
          value={formData.slug}
          onChange={(e) =>
            setFormData({
              ...formData,
              slug:
                e.target.value,
            })
          }
          className="border p-4 rounded-xl"
          placeholder="Slug"
        />

        <input
          value={formData.sku}
          onChange={(e) =>
            setFormData({
              ...formData,
              sku:
                e.target.value,
            })
          }
          className="border p-4 rounded-xl"
          placeholder="SKU"
        />

        <input
          value={formData.size}
          onChange={(e) =>
            setFormData({
              ...formData,
              size:
                e.target.value,
            })
          }
          className="border p-4 rounded-xl"
          placeholder="Size"
        />

        <input
          value={formData.finish}
          onChange={(e) =>
            setFormData({
              ...formData,
              finish:
                e.target.value,
            })
          }
          className="border p-4 rounded-xl"
          placeholder="Finish"
        />

        <input
          value={formData.material}
          onChange={(e) =>
            setFormData({
              ...formData,
              material:
                e.target.value,
            })
          }
          className="border p-4 rounded-xl"
          placeholder="Material"
        />

        <input
          type="number"
          value={
            formData.pricePerBox
          }
          onChange={(e) =>
            setFormData({
              ...formData,
              pricePerBox:
                Number(
                  e.target.value
                ),
            })
          }
          className="border p-4 rounded-xl"
          placeholder="Price Per Box"
        />

        <input
          type="number"
          value={
            formData.pricePerSqft
          }
          onChange={(e) =>
            setFormData({
              ...formData,
              pricePerSqft:
                Number(
                  e.target.value
                ),
            })
          }
          className="border p-4 rounded-xl"
          placeholder="Price Per Sqft"
        />

        <textarea
          value={
            formData.description
          }
          onChange={(e) =>
            setFormData({
              ...formData,
              description:
                e.target.value,
            })
          }
          rows={6}
          className="border p-4 rounded-xl col-span-2"
          placeholder="Description"
        />

        <button
          disabled={loading}
          className="bg-black text-white px-8 py-4 rounded-xl col-span-2"
        >
          {loading
            ? "Updating..."
            : "Update Product"}
        </button>
      </div>
    </form>
  );
}