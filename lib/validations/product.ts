import { z } from "zod";

export const productSchema =
  z.object({
    name: z.string().min(2),

    slug: z.string().min(2),

    sku: z.string().min(2),

    categoryId: z.string(),

    size: z.string(),

    pricePerBox:
      z.coerce.number(),

    pricePerPiece:
      z.coerce.number(),

    pricePerSqft:
      z.coerce.number(),

    pricePerSqm:
      z.coerce.number(),

    piecesPerBox:
      z.coerce.number(),
  });