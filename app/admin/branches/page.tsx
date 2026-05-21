import prisma from "@/lib/db";

import BranchForm from "@/components/admin/branch-form";

import BranchesTable from "@/components/admin/branches-table";

export default async function BranchesPage() {
  const branches =
    await prisma.branch.findMany({
      include: {
        users: true,

        sales: true,

        inventories: true,
      },

      orderBy: {
        createdAt: "desc",
      },
    });

  return (
    <div className="p-6">
      {/* HEADER */}
      <div className="mb-6">
        <h1 className="text-4xl font-bold mb-2">
          Branches
        </h1>

        <p className="text-gray-500">
          Manage company branches,
          warehouses, and sales locations.
        </p>
      </div>

      {/* FORM */}
      <BranchForm />

      {/* TABLE */}
      <BranchesTable
        branches={branches}
      />
    </div>
  );
}