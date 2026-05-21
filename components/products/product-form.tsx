"use client";
import slugify from "slugify";
import axios from "axios";
import { useEffect, useState } from "react";
import ImageUpload from "./image-upload";

interface Category {
  id: string;
  name: string;
}

export default function ProductForm() {
  const [categories, setCategories] =
    useState<Category[]>([]);

  const [formData, setFormData] =
    useState({
      name: "",
      slug: "",
      sku: "",
      description: "",
      categoryId: "",

      size: "",
      thickness: "",

      finish: "",
      texture: "",
      material: "",

      pricePerBox: "",
      pricePerPiece: "",
      pricePerSqft: "",
      pricePerSqm: "",

      piecesPerBox: "",

      coverImage: "",
    });

  useEffect(() => {
    fetchCategories();
  }, []);

  async function fetchCategories() {
    const res = await axios.get(
      "/api/categories"
    );

    setCategories(res.data);
  }

  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    try {
      await axios.post(
        "/api/products",
        formData
      );

      alert("Product created");

      window.location.reload();
    } catch (error) {
      alert("Failed");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-2xl border mb-6"
    >
      <h2 className="text-2xl font-bold mb-5">
        Add Product
      </h2>

      <div className="grid grid-cols-2 gap-4">
<input
  placeholder="Product Name"
  className="border p-4 rounded-xl"
  value={formData.name}
  onChange={(e) => {
    const name =
      e.target.value;

    setFormData({
      ...formData,
      name,

      slug: slugify(name, {
        lower: true,
        strict: true,
      }),
    });
  }}
/>

        <input
          placeholder="Slug"
          className="border p-3 rounded"
          value={formData.slug}
          onChange={(e) =>
            setFormData({
              ...formData,
              slug: e.target.value,
            })
          }
        />

        <input
          placeholder="SKU"
          className="border p-3 rounded"
          value={formData.sku}
          onChange={(e) =>
            setFormData({
              ...formData,
              sku: e.target.value,
            })
          }
        />

        <select
          className="border p-3 rounded"
          value={formData.categoryId}
          onChange={(e) =>
            setFormData({
              ...formData,
              categoryId: e.target.value,
            })
          }
        >
          <option value="">
            Select Category
          </option>

          {categories.map((category) => (
            <option
              key={category.id}
              value={category.id}
            >
              {category.name}
            </option>
          ))}
        </select>

        <input
          placeholder="Tile Size"
          className="border p-3 rounded"
          value={formData.size}
          onChange={(e) =>
            setFormData({
              ...formData,
              size: e.target.value,
            })
          }
        />

        <input
          placeholder="Thickness"
          className="border p-3 rounded"
          value={formData.thickness}
          onChange={(e) =>
            setFormData({
              ...formData,
              thickness: e.target.value,
            })
          }
        />

        <input
          placeholder="Finish"
          className="border p-3 rounded"
          value={formData.finish}
          onChange={(e) =>
            setFormData({
              ...formData,
              finish: e.target.value,
            })
          }
        />

        <input
          placeholder="Texture"
          className="border p-3 rounded"
          value={formData.texture}
          onChange={(e) =>
            setFormData({
              ...formData,
              texture: e.target.value,
            })
          }
        />

        <input
          placeholder="Material"
          className="border p-3 rounded"
          value={formData.material}
          onChange={(e) =>
            setFormData({
              ...formData,
              material: e.target.value,
            })
          }
        />

        <input
          placeholder="Price Per Box"
          className="border p-3 rounded"
          value={formData.pricePerBox}
          onChange={(e) =>
            setFormData({
              ...formData,
              pricePerBox: e.target.value,
            })
          }
        />

        <input
          placeholder="Price Per Piece"
          className="border p-3 rounded"
          value={formData.pricePerPiece}
          onChange={(e) =>
            setFormData({
              ...formData,
              pricePerPiece: e.target.value,
            })
          }
        />

        <input
          placeholder="Price Per Sqft"
          className="border p-3 rounded"
          value={formData.pricePerSqft}
          onChange={(e) =>
            setFormData({
              ...formData,
              pricePerSqft: e.target.value,
            })
          }
        />

        <input
          placeholder="Price Per Sqm"
          className="border p-3 rounded"
          value={formData.pricePerSqm}
          onChange={(e) =>
            setFormData({
              ...formData,
              pricePerSqm: e.target.value,
            })
          }
        />

        <input
          placeholder="Pieces Per Box"
          className="border p-3 rounded"
          value={formData.piecesPerBox}
          onChange={(e) =>
            setFormData({
              ...formData,
              piecesPerBox:
                e.target.value,
            })
          }
        />

<ImageUpload
  value={formData.coverImage}
  onChange={(url) =>
    setFormData({
      ...formData,
      coverImage: url,
    })
  }
/>
      </div>

      <textarea
        placeholder="Description"
        className="border p-3 rounded w-full mt-4"
        rows={5}
        value={formData.description}
        onChange={(e) =>
          setFormData({
            ...formData,
            description:
              e.target.value,
          })
        }
      />

      <button
        type="submit"
        className="bg-black text-white px-6 py-3 rounded mt-5"
      >
        Create Product
      </button>
    </form>
  );
}