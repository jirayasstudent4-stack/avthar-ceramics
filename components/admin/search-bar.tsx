"use client";

import axios from "axios";
import {
  useEffect,
  useState,
} from "react";

export default function SearchBar() {
  const [query, setQuery] =
    useState("");

  const [results, setResults] =
    useState<any[]>([]);

  useEffect(() => {
    async function search() {
      if (!query) {
        setResults([]);
        return;
      }

      const res = await axios.get(
        `/api/search?query=${query}`
      );

      setResults(res.data);
    }

    search();
  }, [query]);

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search products..."
        className="border p-2 rounded-lg w-[300px]"
        value={query}
        onChange={(e) =>
          setQuery(e.target.value)
        }
      />

      {results.length > 0 && (
        <div className="absolute bg-white border rounded-lg mt-2 w-full shadow-lg z-50">
          {results.map((item) => (
            <div
              key={item.id}
              className="p-3 border-b"
            >
              <p className="font-semibold">
                {item.name}
              </p>

              <p className="text-sm text-gray-500">
                {item.sku}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}