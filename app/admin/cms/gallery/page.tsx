import prisma from "@/lib/db";
import GalleryForm from "@/components/cms/gallery-form";
import GalleryGrid from "@/components/cms/gallery-grid";

export default async function GalleryPage() {
  const items = await prisma.galleryItem.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Gallery</h1>
      <GalleryForm />
      <GalleryGrid items={items} />
    </div>
  );
}
