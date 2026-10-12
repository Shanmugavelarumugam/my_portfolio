"use client";

import { ArrowUpRight, Building2, MapPin, Sparkles, Terminal } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { aboutContent, profile } from "@/data/profile";

export function About() {
  const edu = aboutContent.education;

  return (
    <section
      id="about"
      aria-label="About me"
      className="relative isolate flex min-h-[85vh] flex-col justify-center overflow-hidden border-t border-slate-200/80 bg-slate-50/50 py-16 text-slate-900 transition-colors duration-300 sm:py-20 lg:py-24 lg:min-h-[calc(100svh-80px)] dark:border-white/5 dark:bg-[#070b16] dark:text-slate-100"
    >
      {/* ── Ambient Background Glows ─────────────────────────────────── */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        {/* Purple nebula aura on left */}
        <div className="hero-orb absolute top-1/3 left-1/4 h-[460px] w-[460px] -translate-x-1/2 rounded-full bg-purple-500/15 blur-[160px] dark:bg-purple-600/15" />
        {/* Cyan nebula aura on right */}
        <div
          className="hero-orb absolute top-1/2 right-12 h-[420px] w-[420px] rounded-full bg-cyan-500/15 blur-[150px] dark:bg-cyan-500/10"
          style={{ animationDelay: "-9s" }}
        />

        {/* Subtle technical dot grid */}
        <div
          className="absolute inset-0 opacity-[0.1] dark:opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(148,163,184,0.6) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 50% 50%, black 20%, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 60% at 50% 50%, black 20%, transparent 80%)",
          }}
        />

        {/* Top accent hairline */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />
      </div>

      <Container className="relative max-w-7xl">
        {/* ── Section Header ───────────────────────────────────────── */}
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/25 bg-purple-500/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-purple-700 uppercase shadow-sm backdrop-blur-md dark:border-purple-400/30 dark:bg-purple-950/40 dark:text-purple-300">
              <Sparkles className="h-3.5 w-3.5 text-purple-500 dark:text-purple-400" />
              <span>About Me</span>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-[42px] dark:text-white">
              Who{" "}
              <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-sky-600 bg-clip-text text-transparent dark:from-purple-400 dark:via-indigo-300 dark:to-sky-400">
                I Am
              </span>
            </h2>
          </Reveal>

          <Reveal delay={150}>
            <div className="mx-auto mt-3.5 flex items-center justify-center gap-2" aria-hidden="true">
              <span className="h-[2px] w-10 rounded-full bg-gradient-to-r from-transparent via-purple-500 to-indigo-500" />
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.9)]" />
              <span className="h-[2px] w-10 rounded-full bg-gradient-to-l from-transparent via-sky-500 to-indigo-500" />
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid items-stretch gap-10 sm:mt-14 lg:grid-cols-12 lg:gap-14">
          {/* ── LEFT: about_me.dart Window Card (7 Cols) ─────────────── */}
          <div className="lg:col-span-7">
            <Reveal className="h-full">
              <div className="relative h-full overflow-hidden rounded-[28px] border border-slate-200/90 bg-white/85 p-7 shadow-2xl shadow-slate-200/50 backdrop-blur-2xl transition-all duration-300 hover:border-purple-400/40 sm:p-9 dark:border-white/[0.08] dark:bg-[#0c0d22]/85 dark:shadow-none dark:hover:border-purple-500/40">
                {/* Window Header Bar */}
                <div className="flex items-center justify-between border-b border-slate-200/80 pb-4 dark:border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-[#ef4444]" />
                    <span className="h-3 w-3 rounded-full bg-[#f59e0b]" />
                    <span className="h-3 w-3 rounded-full bg-[#10b981]" />
                    <span className="ml-2.5 flex items-center gap-1.5 font-mono text-xs font-medium text-slate-500 dark:text-slate-400">
                      <Terminal className="h-3.5 w-3.5 text-purple-500 dark:text-purple-400" />
                      &gt;_ about_me.dart
                    </span>
                  </div>

                  <div className="inline-flex items-center gap-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-xs font-bold text-purple-700 uppercase tracking-wider backdrop-blur-md dark:border-purple-400/30 dark:bg-purple-950/40 dark:text-purple-300">
                    <Sparkles className="h-3 w-3 text-purple-500 dark:text-purple-400" />
                    <span>About Me</span>
                  </div>
                </div>

                {/* Main Headline */}
                <h2 className="mt-6 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-[36px] lg:leading-[1.2] dark:text-white">
                  Crafting Reliable Software{" "}
                  <span className="block bg-gradient-to-r from-purple-600 via-indigo-600 to-sky-600 bg-clip-text text-transparent dark:from-purple-400 dark:via-indigo-300 dark:to-sky-400">
                    with Clean Architecture
                  </span>
                </h2>

                {/* Body Paragraphs */}
                <div className="mt-5 space-y-4 text-sm leading-relaxed text-slate-600 sm:text-base sm:leading-7 dark:text-slate-300">
                  <p>
                    I am a passionate{" "}
                    <strong className="font-semibold text-slate-900 dark:text-white">
                      Flutter Developer
                    </strong>{" "}
                    focused on building practical, high-performance applications with clean code, robust state management, and thoughtful user experiences.
                  </p>

                  <p>
                    My experience includes developing real-world systems like{" "}
                    <strong className="font-semibold text-slate-900 dark:text-white">
                      Hospital Management
                    </strong>
                    ,{" "}
                    <strong className="font-semibold text-slate-900 dark:text-white">
                      Pharmacy Point of Sale
                    </strong>
                    , and{" "}
                    <strong className="font-semibold text-slate-900 dark:text-white">
                      Desktop Weighbridge Billing
                    </strong>{" "}
                    apps — implementing BLoC architecture, REST APIs, and modular components that are easy to maintain and scale.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* ── RIGHT: Education Card ──────────────────────────────── */}
          <div className="lg:col-span-5">
            <Reveal delay={200} className="h-full">
              <div className="relative flex h-full flex-col overflow-hidden rounded-[28px] border border-slate-200/90 bg-white/85 p-7 shadow-2xl shadow-slate-200/50 backdrop-blur-2xl transition-all duration-300 hover:border-purple-400/40 sm:p-9 dark:border-white/[0.08] dark:bg-[#0c0d22]/85 dark:shadow-none dark:hover:border-purple-500/40">
                {/* Card Header */}
                <div className="flex items-center justify-between border-b border-slate-200/80 pb-4 dark:border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-[#ef4444]" />
                    <span className="h-3 w-3 rounded-full bg-[#f59e0b]" />
                    <span className="h-3 w-3 rounded-full bg-[#10b981]" />
                    <span className="ml-2.5 flex items-center gap-1.5 font-mono text-xs font-medium text-slate-500 dark:text-slate-400">
                      <Terminal className="h-3.5 w-3.5 text-purple-500 dark:text-purple-400" />
                      &gt;_ education.dart
                    </span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-xs font-semibold text-purple-700 uppercase backdrop-blur-md dark:border-purple-400/30 dark:bg-purple-500/10 dark:text-purple-300">
                    <Sparkles className="h-3 w-3 text-purple-500 dark:text-purple-400" />
                    <span>Education</span>
                  </div>
                </div>

                {/* Education timeline */}
                <div className="mt-5 flex-1">
                  <ol className="relative pl-7">
                    <span
                      aria-hidden="true"
                      className="timeline-line absolute top-2 bottom-2 left-[5px] w-px bg-gradient-to-b from-purple-500/60 via-purple-500/25 to-transparent dark:from-purple-400/60 dark:via-purple-400/25"
                    />
                    <li className="relative">
                      <span
                        aria-hidden="true"
                        className="absolute top-1 left-[-2px] h-3.5 w-3.5 rounded-full bg-purple-500 ring-4 ring-purple-500/25 dark:bg-purple-400 dark:ring-purple-400/25"
                      />
                      <span className="inline-block rounded-full border border-purple-500/30 bg-purple-500/15 px-3.5 py-1 text-xs font-bold text-purple-700 dark:text-purple-300">
                        {edu.year}
                      </span>
                      <h4 className="mt-3 text-lg font-bold tracking-tight text-slate-900 sm:text-xl dark:text-white">
                        {edu.degree}
                      </h4>
                      <p className="mt-1 text-sm font-medium text-slate-600 dark:text-slate-400">
                        {edu.field}
                      </p>
                      <p className="mt-4 flex items-center gap-2.5 text-sm text-slate-600 dark:text-slate-400">
                        <Building2 className="h-4 w-4 shrink-0 text-purple-500 dark:text-purple-400" aria-hidden="true" />
                        <span>{edu.school}</span>
                      </p>
                      <p className="mt-2 flex items-center gap-2.5 text-sm text-slate-600 dark:text-slate-400">
                        <MapPin className="h-4 w-4 shrink-0 text-cyan-500 dark:text-cyan-400" aria-hidden="true" />
                        <span>{edu.location}</span>
                      </p>
                      <p className="mt-3 text-xs leading-relaxed text-slate-500 sm:text-[13px] dark:text-slate-400">
                        Completed in 2024, where I built a strong foundation in engineering, developed my problem-solving skills, and learned to approach challenges with logical and analytical thinking.
                      </p>
                    </li>
                  </ol>
                </div>

                {/* Action Buttons */}
                <div className="mt-6 flex items-center gap-3 border-t border-slate-200/80 pt-5 dark:border-white/10">
                  <a
                    href="#contact"
                    className="flex-1 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 py-2.5 text-center text-xs font-semibold text-white shadow-md shadow-purple-600/20 transition-all hover:opacity-95 sm:text-sm"
                  >
                    Get in Touch
                  </a>

                  {profile.resumeHref && (
                    <a
                      href={profile.resumeHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-1 rounded-2xl border border-slate-200 bg-white px-4 py-2.5 text-xs font-semibold text-slate-700 transition-all hover:bg-slate-50 sm:text-sm dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-200 dark:hover:bg-white/[0.08]"
                    >
                      <span>Resume</span>
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
