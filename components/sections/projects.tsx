import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectGrid } from "@/components/projects/project-grid";

export function Projects() {
  return (
    <section
      id="projects"
      aria-label="Featured projects"
      className="relative overflow-hidden border-t border-slate-200/70 bg-slate-50 text-slate-900 dark:border-white/5 dark:bg-[#0a0f1e] dark:text-slate-100"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="hero-orb absolute top-10 right-1/5 h-[380px] w-[380px] rounded-full bg-indigo-300/40 blur-[130px] dark:bg-indigo-500/10" />
      </div>
      <Container className="relative">
        <div className="py-20 sm:py-24 lg:py-28">
          <SectionHeading
            align="center"
            label="Selected Work"
            title="Featured Projects"
            description="Real applications I've built — what they solve and the engineering behind them."
          />
          <ProjectGrid />
        </div>
      </Container>
    </section>
  );
}
