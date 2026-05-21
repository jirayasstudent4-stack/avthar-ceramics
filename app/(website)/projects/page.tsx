const projects = [
  {
    title:
      "Luxury Villa Interior",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2070",
  },

  {
    title:
      "Modern Hospitality Space",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2074",
  },

  {
    title:
      "Architectural Residence",
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2070",
  },
];
import Image from "next/image";
export default function ProjectsPage() {
  return (
    <div className="pt-40 pb-24">
      <div className="container-width">
        <div className="mb-20">
          <p className="uppercase tracking-[0.3em] text-sm text-neutral-500 mb-6">
            Projects
          </p>

          <h1 className="text-7xl font-semibold tracking-tight max-w-[900px]">
            Spaces Crafted Through Material & Design
          </h1>
        </div>

        <div className="space-y-12">
          {projects.map((project) => (
            <div
              key={project.title}
              className="overflow-hidden rounded-[50px]"
            >
              <Image
                src={project.image}
                alt={project.title}
                className="w-full h-[800px] object-cover hover:scale-105 transition duration-700"
                width={850}
                height={850}
              />

              <div className="pt-8">
                <h2 className="text-4xl font-semibold">
                  {project.title}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}