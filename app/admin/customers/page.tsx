import prisma from "@/lib/db";

import CustomerForm from "@/components/admin/customer-form";

import CustomersTable from "@/components/admin/customers-table";

export default async function CustomersPage() {
  const customers =
    await prisma.customer.findMany({
      include: {
        sales: true,
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
          Customers
        </h1>

        <p className="text-gray-500">
          Manage customers and track
          sales relationships.
        </p>
      </div>

      {/* FORM */}
      <CustomerForm />

      {/* TABLE */}
      <CustomersTable
        customers={customers}
      />
    </div>
  );
}