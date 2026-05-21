interface Props {
  branches: any[];
}

export default function BranchesTable({
  branches,
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
              City
            </th>

            <th className="p-4 text-left">
              State
            </th>

            <th className="p-4 text-left">
              Phone
            </th>

            <th className="p-4 text-left">
              Staff Count
            </th>

            <th className="p-4 text-left">
              Sales Count
            </th>

            <th className="p-4 text-left">
              Created At
            </th>
          </tr>
        </thead>

        <tbody>
          {branches.map((branch) => (
            <tr
              key={branch.id}
              className="border-t"
            >
              <td className="p-4 font-medium">
                {branch.name}
              </td>

              <td className="p-4">
                {branch.city}
              </td>

              <td className="p-4">
                {branch.state}
              </td>

              <td className="p-4">
                {branch.phone}
              </td>

              <td className="p-4">
                {branch.users.length}
              </td>

              <td className="p-4">
                {branch.sales.length}
              </td>

              <td className="p-4">
                {new Date(
                  branch.createdAt
                ).toLocaleDateString()}
              </td>
            </tr>
          ))}

          {branches.length === 0 && (
            <tr>
              <td
                colSpan={7}
                className="p-6 text-center text-gray-500"
              >
                No branches found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}