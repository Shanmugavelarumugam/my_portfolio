import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Project } from "@/types/project";
import { Container } from "@/components/ui/container";

export function ProjectDetails({ project }: { project: Project }) {
  return (
    <article className="relative overflow-hidden bg-white text-slate-900 dark:bg-[#070b14] dark:text-slate-100">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -top-24 left-1/4 h-[360px] w-[360px] rounded-full bg-sky-300/40 blur-[130px] dark:bg-sky-500/10" />
      </div>
      <Container className="relative">
        <div className="max-w-3xl py-14 sm:py-20">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 transition-colors hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded dark:text-slate-400 dark:hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to projects
          </Link>

          <p className="mt-8 text-[11px] font-semibold tracking-[0.22em] text-sky-600/90 uppercase dark:text-sky-300/80">
            {project.category} · Featured Project {project.index}
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
            {project.title}
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8 dark:text-slate-400">
            {project.summary}
          </p>
          <p className="mt-3 text-sm text-slate-500">{project.role}</p>

          <ul
            className="mt-6 flex flex-wrap gap-2"
            aria-label="Technologies used"
          >
            {project.tech.map((t) => (
              <li
                key={t}
                className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300"
              >
                {t}
              </li>
            ))}
          </ul>

          <div className="mt-12 space-y-10 text-slate-600 dark:text-slate-400">
            <section aria-label="Problem">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">Problem</h2>
              <p className="mt-3 text-[15px] leading-7">
                {project.problem}
              </p>
            </section>
            <section aria-label="Solution">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">Solution</h2>
              <p className="mt-3 text-[15px] leading-7">
                {project.solution}
              </p>
            </section>
            <section aria-label="Key features">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">Key features</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-[15px] leading-7">
                {project.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </section>
            <section aria-label="Architecture">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">Architecture</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-[15px] leading-7">
                {project.architecture.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </section>
            <section aria-label="My contribution">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">My contribution</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-[15px] leading-7">
                {project.contribution.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </Container>
    </article>
  );
}
