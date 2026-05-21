import prisma from "@/lib/db";
import ProjectForm from "@/components/cms/project-form";
import ProjectsTable from "@/components/cms/projects-table";

export default async function ProjectsPage() {
  const projects = await prisma.project.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Projects</h1>
      <ProjectForm />
      <ProjectsTable projects={projects} />
    </div>
  );
}
