"use client";

import Link from "next/link";

import { useState } from "react";

import { Menu, X } from "lucide-react";

export default function MobileMenu() {
  const [open, setOpen] =
    useState(false);

  const links = [
    {
      name: "Products",
      href: "/products",
    },

    {
      name: "Collections",
      href: "/collections",
    },

    {
      name: "Projects",
      href: "/projects",
    },

    {
      name: "Gallery",
      href: "/gallery",
    },

    {
      name: "Contact",
      href: "/contact",
    },
  ];

  return (
    <>
      <button
        onClick={() =>
          setOpen(true)
        }
        className="lg:hidden"
      >
        <Menu />
      </button>

      {open && (
        <div className="fixed inset-0 bg-white z-[100] p-10">
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-2xl font-semibold">
              AVTHAR
            </h2>

            <button
              onClick={() =>
                setOpen(false)
              }
            >
              <X />
            </button>
          </div>

          <div className="flex flex-col gap-8">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() =>
                  setOpen(false)
                }
                className="text-4xl font-semibold"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}