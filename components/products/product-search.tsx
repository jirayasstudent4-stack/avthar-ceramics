"use client";

import {
  useRouter,
  useSearchParams,
} from "next/navigation";

import { useState } from "react";

export default function ProductSearch() {
  const router = useRouter();

  const searchParams =
    useSearchParams();

  const [query, setQuery] =
    useState(
      searchParams.get(
        "query"
      ) || ""
    );

  function handleSearch() {
    router.push(
      `/admin/products?query=${query}`
    );
  }

  return (
    <div className="flex gap-3 mb-6">
      <input
        type="text"
        placeholder="Search products..."
        className="border p-3 rounded w-[300px]"
        value={query}
        onChange={(e) =>
          setQuery(e.target.value)
        }
      />

      <button
        onClick={handleSearch}
        className="bg-black text-white px-5 rounded"
      >
        Search
      </button>
    </div>
  );
}