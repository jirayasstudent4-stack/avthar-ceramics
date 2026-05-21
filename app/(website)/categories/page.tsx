import prisma from "@/lib/db";

export default async function CategoriesPage() {
  const categories =
    await prisma.category.findMany({
      include: {
        products: true,
      },
    });

  return (
    <div className="pt-40 pb-24">
      <div className="container-width">
        <h1 className="text-7xl font-semibold tracking-tight mb-20">
          Categories
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {categories.map(
            (category) => (
              <div
                key={category.id}
                className="bg-neutral-100 rounded-[32px] p-10"
              >
                <h2 className="text-3xl font-semibold mb-5">
                  {category.name}
                </h2>

                <p className="text-neutral-500">
                  {
                    category.products
                      .length
                  }{" "}
                  Products
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}