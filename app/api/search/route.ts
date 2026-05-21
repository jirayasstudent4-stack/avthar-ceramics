import { NextResponse } from "next/server";

import prisma from "@/lib/db";

import { smartSearch } from "@/lib/search";

export async function GET(
  req: Request
) {
  const { searchParams } =
    new URL(req.url);

  const query =
    searchParams.get("query") ||
    "";

  const products =
    await prisma.product.findMany({
      include: {
        collection: true,
      },
    });

  const results =
    smartSearch(products, query);

  return NextResponse.json(
    results.map((r) => r.item)
  );
}