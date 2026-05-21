"use client";

import axios from "axios";

import {
  useEffect,
  useState,
} from "react";

export default function TransferForm() {
  const [branches, setBranches] =
    useState<any[]>([]);

  const [products, setProducts] =
    useState<any[]>([]);

  const [formData, setFormData] =
    useState({
      fromBranchId: "",
      toBranchId: "",

      productId: "",

      boxes: "",

      pieces: "",

      notes: "",
    });

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const branchesRes =
      await axios.get(
        "/api/branches"
      );

    const productsRes =
      await axios.get(
        "/api/products"
      );

    setBranches(
      branchesRes.data
    );

    setProducts(
      productsRes.data
    );
  }

  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    try {
      await axios.post(
        "/api/transfers",
        formData
      );

      alert(
        "Transfer completed"
      );

      window.location.reload();
    } catch (error: any) {
      alert(
        error.response?.data
          ?.error ||
          "Transfer failed"
      );
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-2xl border mb-6"
    >
      <h2 className="text-2xl font-bold mb-5">
        Stock Transfer
      </h2>

      <div className="grid grid-cols-2 gap-4">
        <select
          className="border p-3 rounded"
          value={
            formData.fromBranchId
          }
          onChange={(e) =>
            setFormData({
              ...formData,
              fromBranchId:
                e.target.value,
            })
          }
        >
          <option value="">
            From Branch
          </option>

          {branches.map(
            (branch) => (
              <option
                key={branch.id}
                value={branch.id}
              >
                {branch.name}
              </option>
            )
          )}
        </select>

        <select
          className="border p-3 rounded"
          value={
            formData.toBranchId
          }
          onChange={(e) =>
            setFormData({
              ...formData,
              toBranchId:
                e.target.value,
            })
          }
        >
          <option value="">
            To Branch
          </option>

          {branches.map(
            (branch) => (
              <option
                key={branch.id}
                value={branch.id}
              >
                {branch.name}
              </option>
            )
          )}
        </select>

        <select
          className="border p-3 rounded"
          value={
            formData.productId
          }
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

          {products.map(
            (product) => (
              <option
                key={product.id}
                value={product.id}
              >
                {product.name}
              </option>
            )
          )}
        </select>

        <input
          type="number"
          placeholder="Boxes"
          className="border p-3 rounded"
          value={formData.boxes}
          onChange={(e) =>
            setFormData({
              ...formData,
              boxes:
                e.target.value,
            })
          }
        />

        <textarea
          placeholder="Notes"
          className="border p-3 rounded col-span-2"
          rows={4}
          value={formData.notes}
          onChange={(e) =>
            setFormData({
              ...formData,
              notes:
                e.target.value,
            })
          }
        />
      </div>

      <button
        type="submit"
        className="bg-black text-white px-6 py-3 rounded mt-5"
      >
        Transfer Stock
      </button>
    </form>
  );
}