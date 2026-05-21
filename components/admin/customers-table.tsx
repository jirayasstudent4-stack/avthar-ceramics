interface Props {
  customers: any[];
}

export default function CustomersTable({
  customers,
}: Props) {
  return (
    <div className="bg-white rounded-2xl border overflow-hidden">
      <table className="w-full">
        <thead className="bg-slate-100">
          <tr>
            <th className="p-4 text-left">
              Name
            </th>

            <th className="p-4 text-left">
              Phone
            </th>

            <th className="p-4 text-left">
              Email
            </th>

            <th className="p-4 text-left">
              Address
            </th>

            <th className="p-4 text-left">
              Total Sales
            </th>

            <th className="p-4 text-left">
              Created At
            </th>
          </tr>
        </thead>

        <tbody>
          {customers.map(
            (customer) => (
              <tr
                key={customer.id}
                className="border-t"
              >
                <td className="p-4 font-medium">
                  {customer.name}
                </td>

                <td className="p-4">
                  {customer.phone}
                </td>

                <td className="p-4">
                  {customer.email ||
                    "-"}
                </td>

                <td className="p-4">
                  {customer.address ||
                    "-"}
                </td>

                <td className="p-4">
                  {
                    customer.sales
                      .length
                  }
                </td>

                <td className="p-4">
                  {new Date(
                    customer.createdAt
                  ).toLocaleDateString()}
                </td>
              </tr>
            )
          )}

          {customers.length ===
            0 && (
            <tr>
              <td
                colSpan={6}
                className="p-6 text-center text-gray-500"
              >
                No customers found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}