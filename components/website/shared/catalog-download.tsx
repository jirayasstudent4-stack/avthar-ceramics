"use client";

import axios from "axios";

import { useState } from "react";

export default function CatalogDownload() {
  const [email, setEmail] =
    useState("");

  async function handleDownload() {
    try {
      await axios.post(
        "/api/catalog-download",
        {
          email,
        }
      );

      window.open(
        "/catalog.pdf",
        "_blank"
      );
    } catch (error) {
      alert(
        "Download failed"
      );
    }
  }

  return (
    <div className="border border-neutral-200 rounded-[40px] p-10">
      <h2 className="text-3xl font-semibold mb-6">
        Download Catalog
      </h2>

      <input
        type="email"
        placeholder="Your email"
        className="w-full border border-neutral-300 rounded-full px-6 py-4 mb-5 outline-none"
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
      />

      <button
        onClick={handleDownload}
        className="bg-black text-white px-8 py-5 rounded-full uppercase tracking-[0.2em] text-sm"
      >
        Download PDF
      </button>
    </div>
  );
}