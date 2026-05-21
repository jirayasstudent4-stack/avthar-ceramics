interface Props {
  transfers: any[];
}

export default function TransfersTable({
  transfers,
}: Props) {
  return (
    <div className="bg-white rounded-2xl border overflow-hidden">
      <table className="w-full">
        <thead className="bg-slate-100">
          <tr>
            <th className="p-4 text-left">
              Product
            </th>

            <th className="p-4 text-left">
              From
            </th>

            <th className="p-4 text-left">
              To
            </th>

            <th className="p-4 text-left">
              Boxes
            </th>

            <th className="p-4 text-left">
              Status
            </th>

            <th className="p-4 text-left">
              Date
            </th>
          </tr>
        </thead>

        <tbody>
          {transfers.map(
            (transfer) => (
              <tr
                key={transfer.id}
                className="border-t"
              >
                <td className="p-4">
                  {
                    transfer.product
                      .name
                  }
                </td>

                <td className="p-4">
                  {
                    transfer
                      .fromBranch
                      .name
                  }
                </td>

                <td className="p-4">
                  {
                    transfer
                      .toBranch.name
                  }
                </td>

                <td className="p-4">
                  {
                    transfer.boxes
                  }
                </td>

                <td className="p-4">
                  {
                    transfer.status
                  }
                </td>

                <td className="p-4">
                  {new Date(
                    transfer.createdAt
                  ).toLocaleDateString()}
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}