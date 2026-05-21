"use client";

import axios from "axios";

import { useState } from "react";

import { useRouter } from "next/navigation";

export default function BranchForm() {
  const router = useRouter();

  const [loading, setLoading] =
    useState(false);

  const [formData, setFormData] =
    useState({
      name: "",

      address: "",

      city: "",

      state: "",

      phone: "",
    });

  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    try {
      setLoading(true);

      await axios.post(
        "/api/branches",
        formData
      );

      router.refresh();

      setFormData({
        name: "",

        address: "",

        city: "",

        state: "",

        phone: "",
      });
    } catch (error) {
      console.log(error);

      alert(
        "Failed to create branch"
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
        Create Branch
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Branch Name"
          className="border p-3 rounded outline-none"
          value={formData.name}
          onChange={(e) =>
            setFormData({
              ...formData,
              name:
                e.target.value,
            })
          }
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
        />

        <input
          type="text"
          placeholder="City"
          className="border p-3 rounded outline-none"
          value={formData.city}
          onChange={(e) =>
            setFormData({
              ...formData,
              city:
                e.target.value,
            })
          }
        />

        <input
          type="text"
          placeholder="State"
          className="border p-3 rounded outline-none"
          value={formData.state}
          onChange={(e) =>
            setFormData({
              ...formData,
              state:
                e.target.value,
            })
          }
        />

        <textarea
          placeholder="Branch Address"
          className="border p-3 rounded outline-none md:col-span-2"
          rows={4}
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
          : "Create Branch"}
      </button>
    </form>
  );
}