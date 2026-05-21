import Fuse from "fuse.js";

export function smartSearch(
  products: any[],
  query: string
) {
  const fuse = new Fuse(products, {
    keys: [
      "name",
      "description",
      "finish",
      "material",
      "size",
      "collection.name",
    ],

    threshold: 0.3,
  });

  return fuse.search(query);
}