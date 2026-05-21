"use client";

import {
  useRouter,
  useSearchParams,
} from "next/navigation";

export default function ProductFilters() {
  const router = useRouter();

  const searchParams =
    useSearchParams();

  function updateFilter(
    key: string,
    value: string
  ) {
    const params =
      new URLSearchParams(
        searchParams.toString()
      );

    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    router.push(
      `/products?${params.toString()}`
    );
  }

  return (
    <div className="flex flex-wrap gap-4 mb-14">
      <select
        className="border rounded-full px-5 py-3 bg-white"
        onChange={(e) =>
          updateFilter(
            "finish",
            e.target.value
          )
        }
      >
        <option value="">
          All Finishes
        </option>

        <option value="Glossy">
          Glossy
        </option>

        <option value="Matte">
          Matte
        </option>

        <option value="Marble">
          Marble
        </option>
      </select>

      <select
        className="border rounded-full px-5 py-3 bg-white"
        onChange={(e) =>
          updateFilter(
            "size",
            e.target.value
          )
        }
      >
        <option value="">
          All Sizes
        </option>

        <option value="60x60">
          60x60
        </option>

        <option value="60x120">
          60x120
        </option>

        <option value="80x160">
          80x160
        </option>
      </select>
    </div>
  );
}