interface Props {
  projects: any[];
}

export default function ProjectsTable({
  projects,
}: Props) {
  return (
    <div className="bg-white border rounded-2xl p-6">
      <h2 className="text-2xl font-bold mb-6">
        Projects
      </h2>

      <div className="space-y-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="border rounded-xl p-4"
          >
            {project.title}
          </div>
        ))}
      </div>
    </div>
  );
}