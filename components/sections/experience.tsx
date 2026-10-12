import { Briefcase } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { experience } from "@/data/experience";
import { cn } from "@/lib/utils";

export function Experience() {
  return (
    <section
      id="experience"
      aria-label="Work experience"
      className="relative overflow-hidden border-t border-slate-200/70 bg-white text-slate-900 dark:border-white/5 dark:bg-[#070b14] dark:text-slate-100"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="hero-orb absolute top-20 left-1/5 h-[360px] w-[360px] rounded-full bg-sky-300/40 blur-[130px] dark:bg-sky-500/10" />
      </div>

      <Container className="relative">
        <div className="mx-auto max-w-3xl py-20 sm:py-24 lg:py-28">
          <SectionHeading
            align="center"
            label="Career"
            title="Work Experience"
            description="My professional journey in software development."
          />

          <Reveal className="mt-12 sm:mt-14">
            <ol className="relative space-y-6 pl-10 sm:pl-12">
              {/* Vertical line — draws top→bottom when section reveals */}
              <span
                aria-hidden="true"
                className="timeline-line absolute top-2 bottom-2 left-[13px] w-px bg-gradient-to-b from-sky-400/70 via-sky-400/25 to-transparent sm:left-[17px]"
              />
              {experience.map((job, i) => (
                <Reveal as="li" key={`${job.company}-${i}`} delay={Math.min(i * 120, 360)}>
                  <article
                    className={cn(
                      "group relative rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-[3px] hover:border-sky-500/30 hover:shadow-md sm:p-7 dark:border-white/10 dark:bg-white/[0.02] dark:shadow-none dark:hover:border-sky-400/30 dark:hover:bg-white/[0.04]",
                      job.current && "border-sky-500/30 bg-sky-500/[0.05] dark:border-sky-400/25 dark:bg-sky-400/[0.04]"
                    )}
                  >
                    {/* Marker */}
                    <span
                      aria-hidden="true"
                      className="absolute top-7 -left-10 flex h-7 w-7 items-center justify-center sm:-left-12"
                    >
                      {job.current ? (
                        <span className="relative flex h-3.5 w-3.5">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-50" />
                          <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-sky-400 ring-4 ring-sky-400/15" />
                        </span>
                      ) : (
                        <span className="h-3 w-3 rounded-full bg-slate-300 ring-4 ring-slate-900/5 transition-colors duration-200 group-hover:bg-sky-500 dark:bg-slate-600 dark:ring-white/5 dark:group-hover:bg-sky-300" />
                      )}
                    </span>

                    <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                      <p className="text-xs font-medium tracking-wide text-slate-500">
                        {job.period}
                      </p>
                      {job.current && (
                        <span className="rounded-full border border-sky-500/30 bg-sky-500/10 px-2.5 py-0.5 text-[11px] font-semibold text-sky-700 dark:border-sky-400/30 dark:bg-sky-400/10 dark:text-sky-300">
                          Current
                        </span>
                      )}
                      {job.focus && (
                        <span className="rounded-full border border-slate-200 bg-slate-100 px-2.5 py-0.5 text-[11px] font-medium text-slate-500 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-400">
                          {job.focus}
                        </span>
                      )}
                    </div>

                    <h3 className="mt-3 text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                      {job.role}
                    </h3>
                    <p className="mt-1 flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-300">
                      <Briefcase className="h-4 w-4 text-sky-600/80 dark:text-sky-300/80" aria-hidden="true" />
                      {job.company}
                    </p>

                    <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-600 dark:text-slate-400">
                      {job.responsibilities.map((r) => (
                        <li key={r}>{r}</li>
                      ))}
                    </ul>

                    <ul
                      className="mt-4 flex flex-wrap gap-2"
                      aria-label={`Technologies used at ${job.company}`}
                    >
                      {job.tech.map((t) => (
                        <li
                          key={t}
                          className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 transition-colors duration-150 hover:border-sky-500/40 hover:text-slate-900 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300 dark:hover:border-sky-400/40 dark:hover:text-white"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              ))}
            </ol>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
