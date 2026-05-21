import prisma from "@/lib/db";

import Image from "next/image";

import {
  formatCurrency,
} from "@/lib/currency";

export default async function DealerCartPage() {
  const cart =
    await prisma.dealerCart.findMany({
      include: {
        product: true,
      },
    });

  const total =
    cart.reduce(
      (acc, item) =>
        acc +
        item.product
          .pricePerBox *
          item.quantity,
      0
    ) * 0.85;

  return (
    <div>
      {/* HEADER */}
      <div className="mb-10">
        <h1 className="text-5xl font-semibold tracking-tight mb-4">
          Dealer Cart
        </h1>

        <p className="text-lg text-neutral-500">
          Review products before placing your bulk order.
        </p>
      </div>

      <div className="grid xl:grid-cols-3 gap-8">
        {/* ITEMS */}
        <div className="xl:col-span-2 space-y-5">
          {cart.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-[30px] border border-black/5 p-5 flex gap-5"
            >
              <div className="relative w-[140px] h-[140px] rounded-2xl overflow-hidden">
                <Image
                  src={
                    item.product
                      .coverImage ||
                    ""
                  }
                  alt={
                    item.product.name
                  }
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex-1 flex justify-between">
                <div>
                  <h2 className="text-2xl font-semibold mb-3">
                    {
                      item.product.name
                    }
                  </h2>

                  <p className="text-neutral-500 mb-2">
                    {
                      item.product.size
                    }
                  </p>

                  <p className="text-neutral-500">
                    Qty:
                    {" "}
                    {item.quantity}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-2xl font-semibold">
                    {formatCurrency(
                      item.product
                        .pricePerBox *
                        0.85
                    )}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* SUMMARY */}
        <div className="bg-black text-white rounded-[32px] p-8 h-fit sticky top-28">
          <h2 className="text-3xl font-semibold mb-8">
            Order Summary
          </h2>

          <div className="flex justify-between mb-6">
            <p>Total Items</p>

            <p>{cart.length}</p>
          </div>

          <div className="flex justify-between mb-10">
            <p>Total Amount</p>

            <p className="text-2xl font-semibold">
              {formatCurrency(
                total
              )}
            </p>
          </div>

          <button className="w-full bg-white text-black py-5 rounded-2xl font-medium hover:opacity-90 transition">
            Proceed To Checkout
          </button>
        </div>
      </div>
    </div>
  );
}