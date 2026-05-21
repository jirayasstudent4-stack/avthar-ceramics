export default function DealerInvoicesPage() {
  return (
    <div>
      {/* HEADER */}
      <div className="mb-10">
        <h1 className="text-5xl font-semibold tracking-tight mb-4">
          Invoices
        </h1>

        <p className="text-lg text-neutral-500">
          Download GST invoices and payment records.
        </p>
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-[32px] border border-black/5 overflow-hidden">
        <table className="w-full">
          <thead className="border-b border-black/5">
            <tr>
              <th className="text-left p-6">
                Invoice
              </th>

              <th className="text-left p-6">
                Status
              </th>

              <th className="text-left p-6">
                Amount
              </th>

              <th className="text-left p-6">
                GST
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
                    INV-2026-00
                    {item}
                  </td>

                  <td className="p-6 text-yellow-600">
                    Pending
                  </td>

                  <td className="p-6">
                    ₹52,000
                  </td>

                  <td className="p-6">
                    ₹9,360
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