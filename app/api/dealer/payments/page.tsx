export default function DealerPaymentsPage() {
  return (
    <div>
      <div className="mb-10">
        <h1 className="text-5xl font-semibold tracking-tight mb-4">
          Payments
        </h1>

        <p className="text-lg text-neutral-500">
          Monitor dealer payments and credit transactions.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-[28px] p-7 border border-black/5">
          <p className="text-neutral-500 mb-3">
            Outstanding
          </p>

          <h2 className="text-4xl font-semibold">
            ₹2.8L
          </h2>
        </div>

        <div className="bg-white rounded-[28px] p-7 border border-black/5">
          <p className="text-neutral-500 mb-3">
            Paid This Month
          </p>

          <h2 className="text-4xl font-semibold">
            ₹5.2L
          </h2>
        </div>

        <div className="bg-white rounded-[28px] p-7 border border-black/5">
          <p className="text-neutral-500 mb-3">
            Credit Available
          </p>

          <h2 className="text-4xl font-semibold">
            ₹4.8L
          </h2>
        </div>
      </div>

      <div className="bg-white rounded-[32px] border border-black/5 p-8">
        <h2 className="text-2xl font-semibold mb-6">
          Recent Transactions
        </h2>

        <div className="space-y-5">
          {[1, 2, 3].map(
            (item) => (
              <div
                key={item}
                className="flex items-center justify-between border border-black/5 rounded-2xl p-5"
              >
                <div>
                  <p className="font-semibold mb-1">
                    TXN-2026-00
                    {item}
                  </p>

                  <p className="text-neutral-500 text-sm">
                    Bank Transfer
                  </p>
                </div>

                <div className="text-right">
                  <p className="font-semibold">
                    ₹85,000
                  </p>

                  <p className="text-green-600 text-sm">
                    Success
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}