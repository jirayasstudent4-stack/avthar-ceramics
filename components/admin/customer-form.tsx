"use client";

import axios from "axios";

import { useState } from "react";

import { useRouter } from "next/navigation";

export default function CustomerForm() {
  const router = useRouter();

  const [loading, setLoading] =
    useState(false);

  const [formData, setFormData] =
    useState({
      name: "",

      phone: "",

      email: "",

      address: "",
    });

  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    try {
      setLoading(true);

      await axios.post(
        "/api/customers",
        formData
      );

      router.refresh();

      setFormData({
        name: "",

        phone: "",

        email: "",

        address: "",
      });
    } catch (error) {
      console.log(error);

      alert(
        "Failed to create customer"
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-2xl border mb-6"
    >
      <h2 className="text-2xl font-bold mb-6">
        Create Customer
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Customer Name"
          className="border p-3 rounded outline-none"
          value={formData.name}
          onChange={(e) =>
            setFormData({
              ...formData,
              name:
                e.target.value,
            })
          }
          required
        />

        <input
          type="text"
          placeholder="Phone Number"
          className="border p-3 rounded outline-none"
          value={formData.phone}
          onChange={(e) =>
            setFormData({
              ...formData,
              phone:
                e.target.value,
            })
          }
          required
        />

        <input
          type="email"
          placeholder="Email Address"
          className="border p-3 rounded outline-none"
          value={formData.email}
          onChange={(e) =>
            setFormData({
              ...formData,
              email:
                e.target.value,
            })
          }
        />

        <input
          type="text"
          placeholder="Address"
          className="border p-3 rounded outline-none"
          value={formData.address}
          onChange={(e) =>
            setFormData({
              ...formData,
              address:
                e.target.value,
            })
          }
        />
      </div>

      <button
        disabled={loading}
        className="bg-black text-white px-6 py-3 rounded mt-5"
      >
        {loading
          ? "Creating..."
          : "Create Customer"}
      </button>
    </form>
  );
}