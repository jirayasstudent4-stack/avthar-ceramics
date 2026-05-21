interface Props {
  sales: any[];
}

export default function SalesTable({
  sales,
}: Props) {
  return (
    <div className="bg-white rounded-2xl border overflow-hidden">
      <table className="w-full">
        <thead className="bg-slate-100">
          <tr>
            <th className="p-4 text-left">
              Invoice
            </th>

            <th className="p-4 text-left">
              Customer
            </th>

            <th className="p-4 text-left">
              Branch
            </th>

            <th className="p-4 text-left">
              Amount
            </th>

            <th className="p-4 text-left">
              GST
            </th>

            <th className="p-4 text-left">
              Status
            </th>
          </tr>
        </thead>

        <tbody>
          {sales.map((sale) => (
            <tr
              key={sale.id}
              className="border-t"
            >
              <td className="p-4">
                {
                  sale.invoiceNumber
                }
              </td>

              <td className="p-4">
                {
                  sale.customer.name
                }
              </td>

              <td className="p-4">
                {sale.branch.name}
              </td>

              <td className="p-4">
                ₹
                {sale.totalAmount.toFixed(
                  2
                )}
              </td>

              <td className="p-4">
                ₹
                {sale.gstAmount.toFixed(
                  2
                )}
              </td>

              <td className="p-4">
                {sale.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}