import { ShoppingCart, Clock3, Wallet, Package, TrendingUp } from "lucide-react";
import StatsCard from "@/components/dealer/dashboard/stats-card";

export default function DealerDashboard() {
  return (
    <div className="space-y-6">

      {/* HEADER */}
      <div className="mb-6 sm:mb-10">
        <p className="uppercase tracking-[0.3em] text-xs text-neutral-500 mb-3">
          Dealer Dashboard
        </p>

        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-3">
          Welcome Back
        </h1>

        <p className="text-sm sm:text-base text-neutral-500 max-w-[600px] leading-relaxed">
          Monitor orders, inventory, payments, and overall dealer business
          performance from one centralized platform.
        </p>
      </div>

      {/* STATS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
        <StatsCard title="Total Orders"       value="24"    icon={ShoppingCart} />
        <StatsCard title="Pending Orders"     value="5"     icon={Clock3} />
        <StatsCard title="Credit Balance"     value="₹4.8L" icon={Wallet} />
        <StatsCard title="Available Products" value="420"   icon={Package} />
      </div>

      {/* ANALYTICS ROW */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">

        {/* Monthly Revenue */}
        <div className="bg-white rounded-[24px] sm:rounded-[32px] p-5 sm:p-6 md:p-8 border border-black/5">
          <div className="flex items-start justify-between mb-5 sm:mb-6">
            <div>
              <p className="text-neutral-500 text-sm mb-2 sm:mb-3">Monthly Revenue</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
                ₹12.8L
              </h2>
            </div>
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl sm:rounded-2xl bg-black text-white flex items-center justify-center text-base sm:text-lg font-semibold shrink-0">
              ₹
            </div>
          </div>

          <div className="flex items-center justify-between mb-2 sm:mb-3">
            <p className="text-xs sm:text-sm text-neutral-500">Growth Progress</p>
            <p className="text-xs sm:text-sm font-medium">78%</p>
          </div>
          <div className="h-2 bg-neutral-100 rounded-full overflow-hidden">
            <div className="w-[78%] h-full bg-black rounded-full" />
          </div>
        </div>

        {/* Order Growth */}
        <div className="bg-white rounded-[24px] sm:rounded-[32px] p-5 sm:p-6 md:p-8 border border-black/5">
          <div className="flex items-start justify-between mb-5 sm:mb-6">
            <div>
              <p className="text-neutral-500 text-sm mb-2 sm:mb-3">Order Growth</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
                +24%
              </h2>
            </div>
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl sm:rounded-2xl bg-green-500 text-white flex items-center justify-center shrink-0">
              <TrendingUp size={18} className="sm:hidden" />
              <TrendingUp size={22} className="hidden sm:block md:hidden" />
              <TrendingUp size={24} className="hidden md:block" />
            </div>
          </div>

          <div className="flex items-center justify-between mb-2 sm:mb-3">
            <p className="text-xs sm:text-sm text-neutral-500">Performance</p>
            <p className="text-xs sm:text-sm font-medium">65%</p>
          </div>
          <div className="h-2 bg-neutral-100 rounded-full overflow-hidden">
            <div className="w-[65%] h-full bg-green-500 rounded-full" />
          </div>
        </div>
      </div>

      {/* BOTTOM GRID — Recent Orders + Inventory */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-5 md:gap-6">

        {/* Recent Orders */}
        <div className="xl:col-span-2 bg-white rounded-[24px] sm:rounded-[32px] p-5 sm:p-6 md:p-8 border border-black/5">
          <div className="flex items-center justify-between mb-5 sm:mb-8">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">Recent Orders</h2>
            <button className="text-xs sm:text-sm uppercase tracking-[0.2em] text-neutral-500 hover:text-black transition">
              View All
            </button>
          </div>

          <div className="space-y-3 sm:space-y-4 md:space-y-5">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="flex items-center justify-between border border-black/5 rounded-xl sm:rounded-2xl p-4 sm:p-5 hover:border-black/10 transition"
              >
                <div className="min-w-0 mr-3">
                  <p className="font-semibold text-sm sm:text-base mb-0.5 truncate">
                    ORD-2026-00{item}
                  </p>
                  <p className="text-neutral-500 text-xs sm:text-sm truncate">
                    Premium Marble Collection
                  </p>
                </div>

                <div className="text-right shrink-0">
                  <p className="font-semibold text-sm sm:text-base">₹45,000</p>
                  <p className="text-xs sm:text-sm text-green-600">Processing</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Inventory Status */}
        <div className="bg-black text-white rounded-[24px] sm:rounded-[32px] p-5 sm:p-6 md:p-8">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-5 sm:mb-8">
            Inventory Status
          </h2>

          <div className="space-y-5 sm:space-y-6 md:space-y-7">
            {[
              { label: "Marble Series",   pct: 82 },
              { label: "Concrete Series", pct: 64 },
              { label: "Stone Collection",pct: 91 },
            ].map(({ label, pct }) => (
              <div key={label}>
                <div className="flex justify-between mb-2 sm:mb-3 text-sm sm:text-base">
                  <p>{label}</p>
                  <p>{pct}%</p>
                </div>
                <div className="h-1.5 sm:h-2 rounded-full bg-white/10 overflow-hidden">
                  <div
                    className="h-full bg-white rounded-full"
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-white/10">
            <p className="text-white/60 text-xs sm:text-sm mb-2">Warehouse Efficiency</p>
            <h3 className="text-3xl sm:text-4xl font-semibold">94%</h3>
          </div>
        </div>

      </div>
    </div>
  );
}
