import prisma from "@/lib/db";

export default async function BranchReportsPage() {
  const branches =
    await prisma.branch.findMany({
      include: {
        sales: true,
      },
    });

  return (
    <div className="bg-white rounded-2xl border p-6">
      <h1 className="text-3xl font-bold mb-6">
        Branch Performance
      </h1>

      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="text-left p-4">
              Branch
            </th>

            <th className="text-left p-4">
              Total Sales
            </th>

            <th className="text-left p-4">
              Revenue
            </th>
          </tr>
        </thead>

        <tbody>
          {branches.map((branch) => {
            const revenue =
              branch.sales.reduce(
                (acc, sale) =>
                  acc +
                  sale.totalAmount,
                0
              );

            return (
              <tr
                key={branch.id}
                className="border-b"
              >
                <td className="p-4">
                  {branch.name}
                </td>

                <td className="p-4">
                  {
                    branch.sales
                      .length
                  }
                </td>

                <td className="p-4">
                  ₹
                  {revenue.toFixed(
                    2
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}