"use client";

import axios from "axios";

interface Props {
  productId: string;
}

export default function AddToCart({
  productId,
}: Props) {
  async function handleAdd() {
    try {
      await axios.post(
        "/api/dealer/cart",
        {
          dealerId:
            "demo-dealer",

          productId,

          quantity: 1,
        }
      );

      alert(
        "Added to cart"
      );
    } catch (error) {
      alert(
        "Failed"
      );
    }
  }

  return (
    <button
      onClick={handleAdd}
      className="px-6 py-4 border border-black/10 rounded-2xl hover:bg-black hover:text-white transition"
    >
      Add
    </button>
  );
}