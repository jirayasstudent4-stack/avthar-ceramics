-- CreateTable
CREATE TABLE "DealerCart" (
    "id" TEXT NOT NULL,
    "dealerId" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL DEFAULT 1,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DealerCart_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "DealerCart" ADD CONSTRAINT "DealerCart_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
