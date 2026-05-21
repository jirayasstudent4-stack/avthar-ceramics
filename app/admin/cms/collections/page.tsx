import prisma from "@/lib/db";

import CollectionForm from "@/components/admin/cms/collection-form";

export default async function CollectionsCMSPage() {
  const collections =
    await prisma.collection.findMany(
      {
        orderBy: {
          createdAt: "desc",
        },
      }
    );

  return (
    <div>
      <CollectionForm />

      <div className="grid grid-cols-3 gap-6">
        {collections.map(
          (collection) => (
            <div
              key={collection.id}
              className="bg-white rounded-2xl border overflow-hidden"
            >
              {collection.coverImage && (
                <img
                  src={
                    collection.coverImage
                  }
                  alt={
                    collection.name
                  }
                  className="w-full h-64 object-cover"
                />
              )}

              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-3">
                  {
                    collection.name
                  }
                </h2>

                <p className="text-neutral-500">
                  {
                    collection.slug
                  }
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}