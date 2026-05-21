"use client";

import axios from "axios";

import { Heart } from "lucide-react";

interface Props {
  productId: string;
}

export default function WishlistButton({
  productId,
}: Props) {
  async function addToWishlist() {
    const sessionId =
      localStorage.getItem(
        "wishlist_session"
      ) ||
      crypto.randomUUID();

    localStorage.setItem(
      "wishlist_session",
      sessionId
    );

    try {
      await axios.post(
        "/api/wishlist",
        {
          sessionId,
          productId,
        }
      );

      alert(
        "Added to wishlist"
      );
    } catch (error) {
      alert(
        "Wishlist failed"
      );
    }
  }

  return (
    <button
      onClick={addToWishlist}
      className="border border-neutral-300 p-4 rounded-full"
    >
      <Heart size={20} />
    </button>
  );
}