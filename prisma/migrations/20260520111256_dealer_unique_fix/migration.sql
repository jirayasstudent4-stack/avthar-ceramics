/*
  Warnings:

  - A unique constraint covering the columns `[phone]` on the table `Dealer` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Dealer_phone_key" ON "Dealer"("phone");
