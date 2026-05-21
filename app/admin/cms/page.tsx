import Link from "next/link";

const items = [
  {
    title: "Collections",
    href:
      "/admin/cms/collections",
  },

  {
    title: "Projects",
    href:
      "/admin/cms/projects",
  },

  {
    title: "Gallery",
    href:
      "/admin/cms/gallery",
  },
];

export default function CMSPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-10">
        Website CMS
      </h1>

      <div className="grid grid-cols-3 gap-6">
        {items.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="bg-white rounded-2xl border p-10 hover:shadow-xl transition"
          >
            <h2 className="text-2xl font-semibold">
              {item.title}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
}