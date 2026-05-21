export default function DealerOrdersPage() {
  return (
    <div>
      <div className="mb-10">
        <h1 className="text-5xl font-semibold tracking-tight mb-4">
          Dealer Orders
        </h1>

        <p className="text-lg text-neutral-500">
          Track all placed orders and invoices.
        </p>
      </div>

      <div className="bg-white rounded-[32px] border border-black/5 overflow-hidden">
        <table className="w-full">
          <thead className="border-b border-black/5">
            <tr>
              <th className="text-left p-6">
                Order ID
              </th>

              <th className="text-left p-6">
                Status
              </th>

              <th className="text-left p-6">
                Amount
              </th>

              <th className="text-left p-6">
                Date
              </th>
            </tr>
          </thead>

          <tbody>
            {[1, 2, 3].map(
              (item) => (
                <tr
                  key={item}
                  className="border-b border-black/5"
                >
                  <td className="p-6 font-medium">
                    ORD-2026-00
                    {item}
                  </td>

                  <td className="p-6 text-green-600">
                    Processing
                  </td>

                  <td className="p-6">
                    ₹45,000
                  </td>

                  <td className="p-6 text-neutral-500">
                    20 May 2026
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}