"use client";

import axios from "axios";

import Link from "next/link";

import {
  Search,
  X,
} from "lucide-react";

import {
  useState,
} from "react";

export default function SearchOverlay() {
  const [open, setOpen] =
    useState(false);

  const [query, setQuery] =
    useState("");

  const [results, setResults] =
    useState<any[]>([]);

  async function handleSearch(
    value: string
  ) {
    setQuery(value);

    if (!value) {
      setResults([]);

      return;
    }

    const res = await axios.get(
      `/api/search?query=${value}`
    );

    setResults(res.data);
  }

  return (
    <>
      <button
        onClick={() =>
          setOpen(true)
        }
      >
        <Search size={18} />
      </button>

      {open && (
        <div className="fixed inset-0 bg-white z-[999] p-10 overflow-y-auto">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-3xl font-semibold">
                Search
              </h2>

              <button
                onClick={() =>
                  setOpen(false)
                }
              >
                <X />
              </button>
            </div>

            <input
              placeholder="Search luxury surfaces..."
              className="w-full border-b border-neutral-300 text-4xl py-6 outline-none"
              value={query}
              onChange={(e) =>
                handleSearch(
                  e.target.value
                )
              }
            />

            <div className="grid grid-cols-3 gap-8 mt-16">
              {results.map((product) => (
                <Link
                  key={product.id}
                  href={`/products/${product.slug}`}
                >
                  <div>
                    <img
                      src={
                        product.coverImage
                      }
                      alt={product.name}
                      className="w-full h-[350px] object-cover rounded-[30px]"
                    />

                    <h3 className="text-2xl font-semibold mt-5">
                      {product.name}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}