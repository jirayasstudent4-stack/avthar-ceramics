import prisma from "@/lib/db";

export default async function InquiriesPage() {
  const inquiries =
    await prisma.inquiry.findMany({
      include: {
        product: true,
      },

      orderBy: {
        createdAt: "desc",
      },
    });

  return (
    <div>
      <h1 className="text-4xl font-bold mb-10">
        Product Inquiries
      </h1>

      <div className="space-y-6">
        {inquiries.map(
          (inquiry) => (
            <div
              key={inquiry.id}
              className="bg-white rounded-2xl border p-6"
            >
              <div className="flex justify-between mb-5">
                <div>
                  <h2 className="text-2xl font-semibold">
                    {
                      inquiry.fullName
                    }
                  </h2>

                  <p className="text-neutral-500">
                    {inquiry.email}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
                    Status
                  </p>

                  <p className="font-medium">
                    {
                      inquiry.status
                    }
                  </p>
                </div>
              </div>

              {inquiry.product && (
                <p className="mb-4">
                  Product:
                  {" "}
                  {
                    inquiry.product
                      .name
                  }
                </p>
              )}

              <p className="text-neutral-600 leading-8">
                {
                  inquiry.message
                }
              </p>
            </div>
          )
        )}
      </div>
    </div>
  );
}