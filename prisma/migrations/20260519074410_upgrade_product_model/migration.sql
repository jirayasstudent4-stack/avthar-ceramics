/*
  Warnings:

  - A unique constraint covering the columns `[sku]` on the table `Product` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "piecesPerBox" INTEGER,
ADD COLUMN     "pricePerPiece" DOUBLE PRECISION,
ADD COLUMN     "pricePerSqft" DOUBLE PRECISION,
ADD COLUMN     "pricePerSqm" DOUBLE PRECISION,
ADD COLUMN     "sku" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Product_sku_key" ON "Product"("sku");
