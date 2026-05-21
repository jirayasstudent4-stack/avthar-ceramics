"use client";

import axios from "axios";
import { useEffect, useState } from "react";

interface Product {
  id: string;
  name: string;
}

interface Branch {
  id: string;
  name: string;
}

export default function InventoryForm() {
  const [products, setProducts] =
    useState<Product[]>([]);

  const [branches, setBranches] =
    useState<Branch[]>([]);

  const [formData, setFormData] =
    useState({
      branchId: "",
      productId: "",

      boxes: "",
      pieces: "",

      reservedBoxes: "",
      damagedBoxes: "",
    });

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const productsRes =
      await axios.get("/api/products");

    const branchesRes =
      await axios.get("/api/branches");

    setProducts(productsRes.data);

    setBranches(branchesRes.data);
  }

  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    try {
      await axios.post(
        "/api/inventory",
        formData
      );

      alert("Inventory added");

      window.location.reload();
    } catch (error) {
      alert(
        "Failed to create inventory"
      );
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-2xl border mb-6"
    >
      <h2 className="text-2xl font-bold mb-5">
        Add Inventory
      </h2>

      <div className="grid grid-cols-2 gap-4">
        <select
          className="border p-3 rounded"
          value={formData.branchId}
          onChange={(e) =>
            setFormData({
              ...formData,
              branchId:
                e.target.value,
            })
          }
        >
          <option value="">
            Select Branch
          </option>

          {branches.map((branch) => (
            <option
              key={branch.id}
              value={branch.id}
            >
              {branch.name}
            </option>
          ))}
        </select>

        <select
          className="border p-3 rounded"
          value={formData.productId}
          onChange={(e) =>
            setFormData({
              ...formData,
              productId:
                e.target.value,
            })
          }
        >
          <option value="">
            Select Product
          </option>

          {products.map((product) => (
            <option
              key={product.id}
              value={product.id}
            >
              {product.name}
            </option>
          ))}
        </select>

        <input
          type="number"
          placeholder="Boxes"
          className="border p-3 rounded"
          value={formData.boxes}
          onChange={(e) =>
            setFormData({
              ...formData,
              boxes: e.target.value,
            })
          }
        />

        <input
          type="number"
          placeholder="Pieces"
          className="border p-3 rounded"
          value={formData.pieces}
          onChange={(e) =>
            setFormData({
              ...formData,
              pieces:
                e.target.value,
            })
          }
        />

        <input
          type="number"
          placeholder="Reserved Boxes"
          className="border p-3 rounded"
          value={
            formData.reservedBoxes
          }
          onChange={(e) =>
            setFormData({
              ...formData,
              reservedBoxes:
                e.target.value,
            })
          }
        />

        <input
          type="number"
          placeholder="Damaged Boxes"
          className="border p-3 rounded"
          value={
            formData.damagedBoxes
          }
          onChange={(e) =>
            setFormData({
              ...formData,
              damagedBoxes:
                e.target.value,
            })
          }
        />
      </div>

      <button
        type="submit"
        className="bg-black text-white px-6 py-3 rounded mt-5"
      >
        Save Inventory
      </button>
    </form>
  );
}