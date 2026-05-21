"use client";

import { useState } from "react";

import axios from "axios";

export default function CollectionForm() {
  const [loading, setLoading] =
    useState(false);

  const [formData, setFormData] =
    useState({
      name: "",
      slug: "",
      description: "",
      coverImage: "",
    });

  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    try {
      setLoading(true);

      await axios.post(
        "/api/cms/collections",
        formData
      );

      alert(
        "Collection created"
      );

      window.location.reload();
    } catch (error) {
      console.error(error);

      alert(
        "Creation failed"
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border rounded-2xl p-6 mb-10"
    >
      <h2 className="text-2xl font-bold mb-6">
        Create Collection
      </h2>

      <div className="grid gap-4">
        <input
          placeholder="Name"
          className="border p-3 rounded-xl"
          value={formData.name}
          onChange={(e) =>
            setFormData({
              ...formData,
              name: e.target.value,
            })
          }
        />

        <input
          placeholder="Slug"
          className="border p-3 rounded-xl"
          value={formData.slug}
          onChange={(e) =>
            setFormData({
              ...formData,
              slug: e.target.value,
            })
          }
        />

        <textarea
          placeholder="Description"
          rows={5}
          className="border p-3 rounded-xl"
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
        />

        <input
          placeholder="Cover Image URL"
          className="border p-3 rounded-xl"
          value={
            formData.coverImage
          }
          onChange={(e) =>
            setFormData({
              ...formData,
              coverImage:
                e.target.value,
            })
          }
        />
      </div>

      <button className="bg-black text-white px-6 py-3 rounded-xl mt-5">
        {loading
          ? "Creating..."
          : "Create Collection"}
      </button>
    </form>
  );
}