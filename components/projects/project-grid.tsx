import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/projects/project-card";
import { Reveal } from "@/components/ui/reveal";

export function ProjectGrid() {
  return (
    <ul className="mt-12 grid gap-6 sm:mt-14 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, i) => (
        <Reveal as="li" key={project.slug} delay={Math.min(i * 100, 300)}>
          <ProjectCard project={project} />
        </Reveal>
      ))}
    </ul>
  );
}
