import prisma from "@/lib/db";

export default async function sitemap() {
  const products =
    await prisma.product.findMany({
      where: {
        isActive: true,
      },
    });

  const productUrls =
    products.map((product) => ({
      url: `https://yourdomain.com/products/${product.slug}`,

      lastModified:
        new Date(),
    }));

  return [
    {
      url:
        "https://yourdomain.com",

      lastModified:
        new Date(),
    },

    {
      url:
        "https://yourdomain.com/products",

      lastModified:
        new Date(),
    },

    ...productUrls,
  ];
}