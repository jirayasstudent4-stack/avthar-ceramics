"use client";

import axios from "axios";

import { useState } from "react";

interface Props {
  productId: string;
}

export default function ProductInquiry({
  productId,
}: Props) {
  const [loading, setLoading] =
    useState(false);

  const [formData, setFormData] =
    useState({
      fullName: "",

      email: "",

      phone: "",

      company: "",

      message: "",
    });

  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    try {
      setLoading(true);

      await axios.post(
        "/api/inquiries",
        {
          ...formData,
          productId,
        }
      );

      alert(
        "Inquiry submitted successfully"
      );

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
    } catch (error) {
      alert(
        "Inquiry failed"
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="border border-neutral-200 rounded-[40px] p-10">
      <h2 className="text-3xl font-semibold mb-8">
        Request Product Consultation
      </h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-5"
      >
        <input
          placeholder="Full Name"
          className="w-full border border-neutral-300 rounded-full px-6 py-4 outline-none"
          value={formData.fullName}
          onChange={(e) =>
            setFormData({
              ...formData,
              fullName:
                e.target.value,
            })
          }
        />

        <input
          placeholder="Email"
          type="email"
          className="w-full border border-neutral-300 rounded-full px-6 py-4 outline-none"
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
          placeholder="Phone"
          className="w-full border border-neutral-300 rounded-full px-6 py-4 outline-none"
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
          placeholder="Company / Studio"
          className="w-full border border-neutral-300 rounded-full px-6 py-4 outline-none"
          value={formData.company}
          onChange={(e) =>
            setFormData({
              ...formData,
              company:
                e.target.value,
            })
          }
        />

        <textarea
          rows={5}
          placeholder="Project Details"
          className="w-full border border-neutral-300 rounded-[30px] px-6 py-4 outline-none"
          value={formData.message}
          onChange={(e) =>
            setFormData({
              ...formData,
              message:
                e.target.value,
            })
          }
        />

        <button
          disabled={loading}
          className="bg-black text-white px-8 py-5 rounded-full uppercase tracking-[0.2em] text-sm"
        >
          {loading
            ? "Submitting..."
            : "Request Quote"}
        </button>
      </form>
    </div>
  );
}