"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export default function SaleForm() {
  const [customers, setCustomers] =
    useState([]);

  const [products, setProducts] =
    useState([]);

  const [branches, setBranches] =
    useState([]);

  const [formData, setFormData] =
    useState({
      customerId: "",
      branchId: "",

      productId: "",

      quantityBoxes: "",

      price: "",
    });

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const customersRes =
      await axios.get(
        "/api/customers"
      );

    const productsRes =
      await axios.get(
        "/api/products"
      );

    const branchesRes =
      await axios.get(
        "/api/branches"
      );

    setCustomers(customersRes.data);

    setProducts(productsRes.data);

    setBranches(branchesRes.data);
  }

  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    try {
      await axios.post(
        "/api/sales",
        {
          customerId:
            formData.customerId,

          branchId:
            formData.branchId,

          items: [
            {
              productId:
                formData.productId,

              quantityBoxes:
                Number(
                  formData.quantityBoxes
                ),

              quantityPieces: 0,

              price: Number(
                formData.price
              ),
            },
          ],
        }
      );

      alert("Sale created");

      window.location.reload();
    } catch (error) {
      alert(
        "Failed to create sale"
      );
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-2xl border mb-6"
    >
      <h2 className="text-2xl font-bold mb-5">
        Create Sale
      </h2>

      <div className="grid grid-cols-2 gap-4">
        <select
          className="border p-3 rounded"
          value={formData.customerId}
          onChange={(e) =>
            setFormData({
              ...formData,
              customerId:
                e.target.value,
            })
          }
        >
          <option value="">
            Select Customer
          </option>

          {customers.map(
            (customer: any) => (
              <option
                key={customer.id}
                value={customer.id}
              >
                {customer.name}
              </option>
            )
          )}
        </select>

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

          {branches.map(
            (branch: any) => (
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

          {products.map(
            (product: any) => (
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
          placeholder="Quantity Boxes"
          className="border p-3 rounded"
          value={
            formData.quantityBoxes
          }
          onChange={(e) =>
            setFormData({
              ...formData,
              quantityBoxes:
                e.target.value,
            })
          }
        />

        <input
          type="number"
          placeholder="Price"
          className="border p-3 rounded"
          value={formData.price}
          onChange={(e) =>
            setFormData({
              ...formData,
              price: e.target.value,
            })
          }
        />
      </div>

      <button
        type="submit"
        className="bg-black text-white px-6 py-3 rounded mt-5"
      >
        Create Invoice
      </button>
    </form>
  );
}