import prisma from "@/lib/db";

import Image from "next/image";

export default async function CollectionsPage() {
  const collections =
    await prisma.collection.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

  return (
    <section className="px-6 lg:px-20 py-32">
      <div className="mb-20">
        <h1 className="text-6xl font-light tracking-[0.2em] uppercase">
          Collections
        </h1>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
        {collections.map(
          (collection) => (
            <div
              key={collection.id}
              className="group"
            >
              <div className="relative h-[500px] overflow-hidden rounded-[32px]">
                <Image
                  src={
                    collection.coverImage ||
                    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2070"
                  }
                  alt={collection.name}
                  fill
                  
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition duration-700"
                />
              </div>

              <div className="pt-6">
                <h2 className="text-3xl font-light">
                  {collection.name}
                </h2>

                <p className="text-neutral-500 mt-3 leading-relaxed">
                  {
                    collection.description
                  }
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}