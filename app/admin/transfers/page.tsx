import prisma from "@/lib/db";

import TransferForm from "@/components/transfers/transfer-form";

import TransfersTable from "@/components/transfers/transfers-table";

export default async function TransfersPage() {
  const transfers =
    await prisma.stockTransfer.findMany(
      {
        include: {
          fromBranch: true,
          toBranch: true,
          product: true,
        },

        orderBy: {
          createdAt: "desc",
        },
      }
    );

  return (
    <div>
      <TransferForm />

      <TransfersTable
        transfers={transfers}
      />
    </div>
  );
}