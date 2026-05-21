import {
  ShoppingCart,
  Clock3,
  Wallet,
  Package,
  TrendingUp,
} from "lucide-react";

import StatsCard from "@/components/dealer/dashboard/stats-card";

export default function DealerDashboard() {
  return (
    <div>
      {/* HEADER */}
      <div className="mb-12">
        <p className="uppercase tracking-[0.3em] text-xs text-neutral-500 mb-4">
          Dealer Dashboard
        </p>

        <h1 className="text-5xl font-semibold tracking-tight mb-4">
          Welcome Back
        </h1>

        <p className="text-lg text-neutral-500 max-w-[700px]">
          Monitor orders, inventory, payments, and overall
          dealer business performance from one centralized platform.
        </p>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">
        <StatsCard
          title="Total Orders"
          value="24"
          icon={ShoppingCart}
        />

        <StatsCard
          title="Pending Orders"
          value="5"
          icon={Clock3}
        />

        <StatsCard
          title="Credit Balance"
          value="₹4.8L"
          icon={Wallet}
        />

        <StatsCard
          title="Available Products"
          value="420"
          icon={Package}
        />
      </div>

      {/* ANALYTICS */}
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        {/* MONTHLY REVENUE */}
        <div className="bg-white rounded-[32px] p-8 border border-black/5">
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-neutral-500 mb-3">
                Monthly Revenue
              </p>

              <h2 className="text-5xl font-semibold tracking-tight">
                ₹12.8L
              </h2>
            </div>

            <div className="w-14 h-14 rounded-2xl bg-black text-white flex items-center justify-center">
              ₹
            </div>
          </div>

          <div className="flex items-center justify-between mb-3">
            <p className="text-sm text-neutral-500">
              Growth Progress
            </p>

            <p className="text-sm font-medium">
              78%
            </p>
          </div>

          <div className="h-3 bg-neutral-100 rounded-full overflow-hidden">
            <div className="w-[78%] h-full bg-black rounded-full" />
          </div>
        </div>

        {/* ORDER GROWTH */}
        <div className="bg-white rounded-[32px] p-8 border border-black/5">
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-neutral-500 mb-3">
                Order Growth
              </p>

              <h2 className="text-5xl font-semibold tracking-tight">
                +24%
              </h2>
            </div>

            <div className="w-14 h-14 rounded-2xl bg-green-500 text-white flex items-center justify-center">
              <TrendingUp size={24} />
            </div>
          </div>

          <div className="flex items-center justify-between mb-3">
            <p className="text-sm text-neutral-500">
              Performance
            </p>

            <p className="text-sm font-medium">
              65%
            </p>
          </div>

          <div className="h-3 bg-neutral-100 rounded-full overflow-hidden">
            <div className="w-[65%] h-full bg-green-500 rounded-full" />
          </div>
        </div>
      </div>

      {/* CONTENT GRID */}
      <div className="grid xl:grid-cols-3 gap-6">
        {/* RECENT ORDERS */}
        <div className="xl:col-span-2 bg-white rounded-[32px] p-8 border border-black/5">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-semibold">
              Recent Orders
            </h2>

            <button className="text-sm uppercase tracking-[0.2em] text-neutral-500 hover:text-black transition">
              View All
            </button>
          </div>

          <div className="space-y-5">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="flex items-center justify-between border border-black/5 rounded-2xl p-5 hover:border-black/10 transition"
              >
                <div>
                  <p className="font-semibold mb-1">
                    ORD-2026-00{item}
                  </p>

                  <p className="text-neutral-500 text-sm">
                    Premium Marble Collection
                  </p>
                </div>

                <div className="text-right">
                  <p className="font-semibold">
                    ₹45,000
                  </p>

                  <p className="text-sm text-green-600">
                    Processing
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* INVENTORY */}
        <div className="bg-black text-white rounded-[32px] p-8">
          <h2 className="text-2xl font-semibold mb-8">
            Inventory Status
          </h2>

          <div className="space-y-7">
            <div>
              <div className="flex justify-between mb-3">
                <p>Marble Series</p>

                <p>82%</p>
              </div>

              <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                <div className="w-[82%] h-full bg-white rounded-full" />
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-3">
                <p>Concrete Series</p>

                <p>64%</p>
              </div>

              <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                <div className="w-[64%] h-full bg-white rounded-full" />
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-3">
                <p>Stone Collection</p>

                <p>91%</p>
              </div>

              <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                <div className="w-[91%] h-full bg-white rounded-full" />
              </div>
            </div>
          </div>

          {/* INVENTORY FOOTER */}
          <div className="mt-10 pt-8 border-t border-white/10">
            <p className="text-white/60 text-sm mb-2">
              Warehouse Efficiency
            </p>

            <h3 className="text-4xl font-semibold">
              94%
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}