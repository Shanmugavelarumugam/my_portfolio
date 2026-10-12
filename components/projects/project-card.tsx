import Link from "next/link";
import { ArrowRight, HeartPulse, Pill, Truck } from "lucide-react";
import type { Project, ProjectVisual } from "@/types/project";
import { cn } from "@/lib/utils";

const visualIcons = {
  mobile: HeartPulse,
  pos: Pill,
  desktop: Truck,
} as const satisfies Record<ProjectVisual, typeof HeartPulse>;

function ProjectVisualMock({ visual }: { visual: ProjectVisual }) {
  if (visual === "mobile") {
    return (
      <div className="flex items-center justify-center gap-4">
        <div className="w-28 rounded-2xl border border-white/15 bg-[#0a0f1e] p-2 shadow-xl">
          <div className="mx-auto h-1 w-10 rounded-full bg-white/20" />
          <div className="mt-2 space-y-1.5 rounded-xl bg-white/[0.04] p-2">
            <div className="h-2 w-3/4 rounded bg-sky-400/50" />
            <div className="h-2 w-full rounded bg-white/10" />
            <div className="h-2 w-5/6 rounded bg-white/10" />
            <div className="mt-2 grid grid-cols-2 gap-1.5">
              <div className="h-8 rounded-lg bg-sky-400/15" />
              <div className="h-8 rounded-lg bg-indigo-400/15" />
              <div className="h-8 rounded-lg bg-indigo-400/15" />
              <div className="h-8 rounded-lg bg-sky-400/15" />
            </div>
          </div>
        </div>
        <div className="hidden w-24 space-y-2 min-[400px]:block">
          <div className="h-2 w-full rounded bg-white/10" />
          <div className="h-2 w-4/5 rounded bg-white/10" />
          <div className="h-16 rounded-xl border border-white/10 bg-white/[0.04] p-2">
            <div className="h-2 w-2/3 rounded bg-emerald-400/50" />
            <div className="mt-1.5 h-2 w-full rounded bg-white/10" />
            <div className="mt-1 h-2 w-3/4 rounded bg-white/10" />
          </div>
        </div>
      </div>
    );
  }
  if (visual === "pos") {
    return (
      <div className="w-full max-w-xs rounded-2xl border border-white/15 bg-[#0a0f1e] p-3 shadow-xl">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-white/20" />
          <div className="h-2 w-16 rounded bg-white/15" />
          <div className="ml-auto h-5 w-14 rounded-full bg-emerald-400/20" />
        </div>
        <div className="mt-3 grid grid-cols-[1fr_1.2fr] gap-2">
          <div className="space-y-1.5 rounded-xl bg-white/[0.04] p-2">
            <div className="h-2 w-2/3 rounded bg-sky-400/50" />
            {[0, 1, 2].map((i) => (
              <div key={i} className="flex justify-between gap-2">
                <div className="h-2 w-2/3 rounded bg-white/10" />
                <div className="h-2 w-1/4 rounded bg-white/10" />
              </div>
            ))}
            <div className="h-6 rounded-lg bg-sky-400/25" />
          </div>
          <div className="grid grid-cols-2 gap-1.5">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className={cn(
                  "h-9 rounded-lg",
                  i % 2 === 0 ? "bg-sky-400/15" : "bg-indigo-400/15"
                )}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="w-full max-w-sm rounded-2xl border border-white/15 bg-[#0a0f1e] shadow-xl">
      <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-white/20" />
        <span className="h-2 w-2 rounded-full bg-white/20" />
        <span className="h-2 w-2 rounded-full bg-white/20" />
        <span className="ml-2 h-2 w-24 rounded bg-white/10" />
      </div>
      <div className="space-y-1.5 p-3">
        {[90, 100, 80, 95].map((w, i) => (
          <div
            key={i}
            className="flex items-center gap-2 rounded-lg bg-white/[0.04] px-2 py-1.5"
          >
            <div className="h-5 w-5 rounded-md bg-sky-400/20" />
            <div className="h-2 rounded bg-white/10" style={{ width: `${w}px` }} />
            <div className="ml-auto h-2 w-10 rounded bg-emerald-400/30" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  const Icon = visualIcons[project.visual];
  return (
    <article className="project-card group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-200 hover:-translate-y-[5px] hover:border-sky-500/40 hover:shadow-[0_24px_60px_-24px_rgba(14,165,233,0.35)] dark:border-white/10 dark:bg-white/[0.02] dark:shadow-none dark:hover:border-sky-400/40 dark:hover:shadow-[0_24px_60px_-24px_rgba(56,189,248,0.45)]">
      {/* Visual — scales 1 → 1.04, clipped */}
      <div className="relative overflow-hidden border-b border-slate-200/70 bg-gradient-to-br from-sky-500/[0.08] via-transparent to-indigo-500/[0.08] dark:border-white/[0.07]">
        {/* TODO: swap mock for real screenshot once available:
            <Image src={project.image} alt={`${project.title} screenshot`} ... />
        */}
        <div className="project-visual flex aspect-[16/10] items-center justify-center p-6 transition-transform duration-300 ease-out group-hover:scale-[1.04]">
          <ProjectVisualMock visual={project.visual} />
        </div>
        <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-[#070b14]/80 px-3 py-1 text-[11px] font-medium text-slate-300 backdrop-blur">
          <Icon className="h-3.5 w-3.5 text-sky-300" aria-hidden="true" />
          {project.category}
        </span>
        <span
          className="absolute right-4 bottom-3 text-xs font-bold tracking-widest text-white/20"
          aria-hidden="true"
        >
          {project.index}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <p className="text-[11px] font-semibold tracking-[0.22em] text-sky-600/90 uppercase dark:text-sky-300/80">
          Featured Project {project.index}
        </p>
        <h3 className="mt-2 text-xl font-bold tracking-tight text-slate-900 dark:text-white">
          {project.title}
        </h3>
        <p className="mt-2.5 text-sm leading-6 text-slate-600 dark:text-slate-400">{project.summary}</p>

        <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies used">
          {project.tech.map((t) => (
            <li
              key={t}
              className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 transition-colors duration-150 hover:border-sky-500/40 hover:text-slate-900 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300 dark:hover:border-sky-400/40 dark:hover:text-white"
            >
              {t}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex items-center gap-4 border-t border-slate-200/70 pt-5 mt-auto dark:border-white/[0.07]">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-sky-600 transition-colors hover:text-sky-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded dark:text-sky-300 dark:hover:text-sky-200"
            aria-label={`View case study for ${project.title}`}
          >
            Case Study
            <ArrowRight
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </article>
  );
}
