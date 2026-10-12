import type { ReactNode } from "react";
import {
  Sparkles,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { WarpHeading } from "@/components/ui/warp-heading";

interface SkillItem {
  name: string;
  category: string;
  tag: string;
  accent: string;
  glow: string;
  logo: ReactNode;
}

const skillsRow1: SkillItem[] = [
  {
    name: "Flutter",
    category: "Mobile",
    tag: "Cross-Platform",
    accent: "text-[#02569B] dark:text-[#29B6F6]",
    glow: "bg-[#02569B]/20",
    logo: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none">
        <path d="M14.2 2.5L3.8 12.9l3.2 3.2L20.6 2.5h-6.4z" fill="#02569B" />
        <path d="M14.2 13.5l-4.4 4.4 3.2 3.2 7.6-7.6h-6.4z" fill="#0175C2" />
        <path d="M9.8 17.9l3.2-3.2 4.4 4.4-3.2 3.2-4.4-4.4z" fill="#29B6F6" />
        <path d="M14.2 19.1l-1.2 1.2 1.2 1.2 3.2-3.2-1.2-1.2-2 2z" fill="#01579B" />
      </svg>
    ),
  },
  {
    name: "Dart",
    category: "Language",
    tag: "Core Language",
    accent: "text-[#0175C2] dark:text-[#00B0FF]",
    glow: "bg-[#0175C2]/20",
    logo: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none">
        <path d="M4.1 4.1h7.8L20 12.2l-3.9 7.7-12-3.9V4.1z" fill="#0175C2" />
        <path d="M4.1 4.1L12 12l-7.9 3.9V4.1z" fill="#29B6F6" />
        <path d="M11.9 4.1L20 12.2l-4.2.8-5.9-4.8 2-4.1z" fill="#00B0FF" />
        <path d="M4.1 15.9L16.1 19.9l-3.9 3.9-8.1-7.9z" fill="#02569B" />
      </svg>
    ),
  },
  {
    name: "Android",
    category: "Mobile",
    tag: "Native OS",
    accent: "text-[#3DDC84]",
    glow: "bg-[#3DDC84]/20",
    logo: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="#3DDC84">
        <path d="M17.5 8.5l1.6-2.7a.6.6 0 00-.2-.8.6.6 0 00-.8.2l-1.6 2.8A10 10 0 0012 7.5a10 10 0 00-4.5.5L5.9 5.2a.6.6 0 00-.8-.2.6.6 0 00-.2.8L6.5 8.5A7.8 7.8 0 003.5 15h17a7.8 7.8 0 00-3-6.5zM8 12.5a1 1 0 110-2 1 1 0 010 2zm8 0a1 1 0 110-2 1 1 0 010 2zM3.5 16.5v4a1.5 1.5 0 003 0v-4h-3zm14 0v4a1.5 1.5 0 003 0v-4h-3z" />
      </svg>
    ),
  },
  {
    name: "React",
    category: "Frontend",
    tag: "UI Library",
    accent: "text-[#61DAFB]",
    glow: "bg-[#61DAFB]/20",
    logo: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="#61DAFB" strokeWidth="1.5">
        <circle cx="12" cy="12" r="2.2" fill="#61DAFB" />
        <ellipse cx="12" cy="12" rx="9" ry="3.8" />
        <ellipse cx="12" cy="12" rx="9" ry="3.8" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="9" ry="3.8" transform="rotate(120 12 12)" />
      </svg>
    ),
  },
  {
    name: "Next.js",
    category: "Full Stack",
    tag: "React Framework",
    accent: "text-slate-900 dark:text-white",
    glow: "bg-slate-500/20",
    logo: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor">
        <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm3.8 14.8L9.5 8.2V7h1.4l5.3 7.3v1.5h-1.4zm-1.1-7.9v5.2l-1.3-1.8V8.9h1.3z" />
      </svg>
    ),
  },
  {
    name: "TypeScript",
    category: "Language",
    tag: "Type Safe",
    accent: "text-[#3178C6]",
    glow: "bg-[#3178C6]/20",
    logo: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none">
        <rect width="24" height="24" rx="4" fill="#3178C6" />
        <path d="M4 11h6m-3 0v8M13 19c2 1 4 1 5-1s0-3-2-3-3-1-3-3 1-3 4-3c1 0 2 0 3 .6" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "JavaScript",
    category: "Language",
    tag: "Web Scripting",
    accent: "text-[#F7DF1E]",
    glow: "bg-[#F7DF1E]/20",
    logo: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none">
        <rect width="24" height="24" rx="4" fill="#F7DF1E" />
        <path d="M6 15c.5 1.5 1.5 2.5 3 2.5 1.8 0 2.5-1 2.5-2.8V9h-2v5.7c0 .6-.2.9-.8.9-.6 0-.8-.3-1-.8L6 15zm8.5-.2c.7 1 1.7 1.8 3.2 1.8 1.4 0 2.3-.7 2.3-1.8 0-1.2-.8-1.7-2.2-2.3l-.7-.3c-2-.8-3.2-1.8-3.2-3.8 0-1.9 1.5-3.4 3.8-3.4 1.7 0 2.8.6 3.6 2l-1.7 1.1c-.4-.8-1-1.2-1.9-1.2-1 0-1.7.6-1.7 1.5 0 1 .6 1.4 2 2l.7.3c2.3 1 3.4 1.9 3.4 4.1 0 2.3-1.8 3.6-4.4 3.6-2.5 0-3.9-1.2-4.7-2.6l1.5-1.4z" fill="#000" />
      </svg>
    ),
  },
  {
    name: "Kotlin",
    category: "Language",
    tag: "Android Native",
    accent: "text-[#7F52FF]",
    glow: "bg-[#7F52FF]/20",
    logo: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none">
        <path d="M22 2H2v20h20L12 12 22 2z" fill="#7F52FF" />
        <path d="M2 22l10-10L2 2v20z" fill="#C757BC" />
        <path d="M2 22h10l10-10H12L2 22z" fill="#E24462" />
      </svg>
    ),
  },
  {
    name: "Java",
    category: "Language",
    tag: "Backend & Android",
    accent: "text-[#ED8B00]",
    glow: "bg-[#ED8B00]/20",
    logo: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none">
        <path d="M4 14a4 4 0 004 4h4a4 4 0 004-4V9H4v5zm12-3h2a2 2 0 010 4h-2v-4zM7 6c0-2 2-3 2-3s0 1-1 2c-.8.8-.5 1.5-.5 2M11 6c0-2 2-3 2-3s0 1-1 2c-.8.8-.5 1.5-.5 2M3 20h14" stroke="#ED8B00" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "BLoC / Cubit",
    category: "Architecture",
    tag: "State Management",
    accent: "text-[#8B5CF6]",
    glow: "bg-[#8B5CF6]/20",
    logo: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none">
        <rect x="3" y="3" width="8" height="8" rx="2" fill="#7C3AED" />
        <rect x="13" y="3" width="8" height="8" rx="2" fill="#8B5CF6" />
        <rect x="3" y="13" width="8" height="8" rx="2" fill="#A78BFA" />
        <rect x="13" y="13" width="8" height="8" rx="2" fill="#C4B5FD" />
        <path d="M7 11v2m10-2v2m-6-6h2m-2 10h2" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    category: "Styling",
    tag: "Utility CSS",
    accent: "text-[#38BDF8]",
    glow: "bg-[#38BDF8]/20",
    logo: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none">
        <path d="M6 10c1.5-2.5 3.5-3 5.5-2 1.4.7 2.4 1.8 3.5 2.8 1.8 1.8 3.8 3.2 7 2.2-1.5 2.5-3.5 3-5.5 2-1.4-.7-2.4-1.8-3.5-2.8-1.8-1.8-3.8-3.2-7-2.2z" fill="#38BDF8" />
        <path d="M2 16c1.5-2.5 3.5-3 5.5-2 1.4.7 2.4 1.8 3.5 2.8 1.8 1.8 3.8 3.2 7 2.2-1.5 2.5-3.5 3-5.5 2-1.4-.7-2.4-1.8-3.5-2.8-1.8-1.8-3.8-3.2-7-2.2z" fill="#38BDF8" opacity="0.8" />
      </svg>
    ),
  },
];

const skillsRow2: SkillItem[] = [
  {
    name: "Spring Boot",
    category: "Backend",
    tag: "Java Framework",
    accent: "text-[#6DB33F]",
    glow: "bg-[#6DB33F]/20",
    logo: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none">
        <path d="M12 2C6.5 2 2 6.5 2 12c0 3.8 2.2 7.1 5.4 8.7L12 15l4.6 5.7C19.8 19.1 22 15.8 22 12c0-5.5-4.5-10-10-10z" fill="#6DB33F" />
        <path d="M12 4a8 8 0 018 8c0 2.8-1.5 5.3-3.7 6.7L12 13.5l-4.3 5.2A7.9 7.9 0 014 12a8 8 0 018-8z" fill="#fff" opacity="0.3" />
        <circle cx="12" cy="10" r="3" fill="#fff" />
      </svg>
    ),
  },
  {
    name: "PostgreSQL",
    category: "Database",
    tag: "Relational SQL",
    accent: "text-[#336791]",
    glow: "bg-[#336791]/20",
    logo: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none">
        <path d="M12 3a9 9 0 00-9 9c0 4.1 2.8 7.6 6.6 8.7l.8-2.6A6.2 6.2 0 015.8 12a6.2 6.2 0 1112.4 0c0 2.7-1.7 5.1-4.2 6l.8 2.7A9 9 0 0012 3z" fill="#336791" />
        <circle cx="10" cy="11" r="1.5" fill="#fff" />
        <path d="M13 14c-1 1-3 1-4 0" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "SQLite",
    category: "Database",
    tag: "Local Offline DB",
    accent: "text-[#003B57] dark:text-[#29B6F6]",
    glow: "bg-[#29B6F6]/20",
    logo: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none">
        <ellipse cx="12" cy="6" rx="8" ry="3" fill="#003B57" />
        <path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6" fill="#003B57" opacity="0.8" />
        <path d="M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" fill="#003B57" />
        <ellipse cx="12" cy="6" rx="8" ry="3" stroke="#29B6F6" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    name: "Firebase",
    category: "Cloud",
    tag: "Backend as a Service",
    accent: "text-[#FFA000]",
    glow: "bg-[#FFA000]/20",
    logo: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none">
        <path d="M4.5 17.5L7.2 4.2a.5.5 0 01.9-.2l3.4 6.3-7 7.2z" fill="#FFA000" />
        <path d="M13.6 8.5l2.2-4.1a.5.5 0 01.9.1l2.8 13-5.9-9z" fill="#F57C00" />
        <path d="M4.5 17.5l7 4a1.2 1.2 0 001 0l7-4-5.9-9-9.1 9z" fill="#FFCA28" />
      </svg>
    ),
  },
  {
    name: "Redis",
    category: "Database",
    tag: "In-Memory Cache",
    accent: "text-[#DC382D]",
    glow: "bg-[#DC382D]/20",
    logo: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none">
        <path d="M12 2l8.5 4.5v11L12 22l-8.5-4.5v-11L12 2z" fill="#DC382D" />
        <path d="M12 2v20M3.5 6.5l17 9M20.5 6.5l-17 9" stroke="#fff" strokeWidth="1.2" opacity="0.3" />
      </svg>
    ),
  },
  {
    name: "Docker",
    category: "DevOps",
    tag: "Containerization",
    accent: "text-[#2496ED]",
    glow: "bg-[#2496ED]/20",
    logo: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none">
        <path d="M22 13c-.3 0-1.8-.2-2.7.5-.9.7-1.5 2-3.8 2-1.5 0-2.3-.7-3.5-.7-1.2 0-2 .7-3.5.7-1.5 0-2.3-.7-3.5-.7S3 15.5 2 15c0 3 2.5 6 8.5 6 6.5 0 10.5-3.5 11.5-8z" fill="#2496ED" />
        <rect x="5" y="10" width="2" height="2" fill="#2496ED" />
        <rect x="8" y="10" width="2" height="2" fill="#2496ED" />
        <rect x="11" y="10" width="2" height="2" fill="#2496ED" />
        <rect x="8" y="7" width="2" height="2" fill="#2496ED" />
        <rect x="11" y="7" width="2" height="2" fill="#2496ED" />
      </svg>
    ),
  },
  {
    name: "Kubernetes",
    category: "DevOps",
    tag: "Orchestration",
    accent: "text-[#326CE5]",
    glow: "bg-[#326CE5]/20",
    logo: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none">
        <path d="M12 2l7.8 4.5v9L12 20l-7.8-4.5v-9L12 2z" stroke="#326CE5" strokeWidth="2" strokeLinejoin="round" />
        <circle cx="12" cy="11" r="3" stroke="#326CE5" strokeWidth="2" />
        <path d="M12 2v6M12 14v6M4.2 6.5l5.2 3M14.6 12.5l5.2 3M4.2 15.5l5.2-3M14.6 9.5l5.2-3" stroke="#326CE5" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    name: "Figma",
    category: "Design",
    tag: "UI / UX Prototyping",
    accent: "text-[#A259FF]",
    glow: "bg-[#A259FF]/20",
    logo: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none">
        <path d="M8 12a4 4 0 110-8h4v8H8z" fill="#F24E1E" />
        <path d="M12 4h4a4 4 0 110 8h-4V4z" fill="#FF7262" />
        <path d="M12 12h4a4 4 0 110 8h-4v-8z" fill="#1ABCFE" />
        <path d="M8 20a4 4 0 010-8h4v4a4 4 0 01-4 4z" fill="#0ACF83" />
        <circle cx="8" cy="12" r="4" fill="#A259FF" />
      </svg>
    ),
  },
  {
    name: "Git & GitHub",
    category: "Tools",
    tag: "Version Control",
    accent: "text-[#F05032]",
    glow: "bg-[#F05032]/20",
    logo: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none">
        <rect x="2" y="12" width="14" height="14" rx="2" transform="rotate(-45 2 12)" fill="#F05032" />
        <circle cx="12" cy="7" r="1.8" fill="#fff" />
        <circle cx="9" cy="12" r="1.8" fill="#fff" />
        <circle cx="15" cy="14" r="1.8" fill="#fff" />
        <path d="M12 7v7M9 12h2a4 4 0 014 4" stroke="#fff" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    name: "REST APIs",
    category: "Networking",
    tag: "HTTP / Client-Server",
    accent: "text-[#0284C7]",
    glow: "bg-[#0284C7]/20",
    logo: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="#0284C7" strokeWidth="1.8">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c3 3.5 4.5 6.5 4.5 9s-1.5 5.5-4.5 9c-3-3.5-4.5-6.5-4.5-9s1.5-5.5 4.5-9z" />
      </svg>
    ),
  },
];

export function Skills() {
  return (
    <section
      id="skills"
      aria-label="Skills and technologies"
      className="relative isolate overflow-hidden border-t border-slate-200/80 bg-slate-50/50 text-slate-900 transition-colors duration-300 dark:border-white/5 dark:bg-[#070b14] dark:text-slate-100"
    >
      {/* ── Ambient Background Lighting ──────────────────────────────── */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="hero-orb absolute top-1/4 right-1/4 h-[440px] w-[440px] rounded-full bg-purple-500/15 blur-[150px] dark:bg-purple-600/15" />
        <div
          className="hero-orb absolute bottom-10 left-10 h-[380px] w-[380px] rounded-full bg-sky-500/15 blur-[140px] dark:bg-sky-500/10"
          style={{ animationDelay: "-8s" }}
        />

        {/* Dotted grid */}
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

        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />
      </div>

      <Container className="relative max-w-7xl">
        <div className="flex flex-col justify-center py-16 sm:py-20 lg:py-14 lg:min-h-[calc(100svh-80px)]">
          {/* ── Section Header ─────────────────────────────────────── */}
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div>
              <Reveal>
                <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-3.5 py-1 text-xs font-semibold tracking-wider text-purple-700 uppercase backdrop-blur-md dark:border-purple-400/30 dark:bg-purple-500/10 dark:text-purple-300">
                  <Sparkles className="h-3.5 w-3.5 text-purple-500 dark:text-purple-400" />
                  <span>Technical Arsenal</span>
                </div>
              </Reveal>

              <Reveal delay={100}>
                <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-[40px] lg:leading-[1.15]">
                  <WarpHeading
                    text="Skills & Technologies"
                    fontSize={40}
                    height={88}
                  />
                </h2>
              </Reveal>

              <Reveal delay={200}>
                <p className="mt-2 text-sm text-slate-600 sm:text-base dark:text-slate-400">
                  Auto-scrolling showcase of each technology with its authentic logo and stack role.
                </p>
              </Reveal>
            </div>
          </div>

          {/* ── Auto-Scrolling Dual Marquee Rows ─────────────────────── */}
          <div className="relative mt-10 space-y-5 overflow-hidden py-2">
            {/* Left Edge Fog / Gradient Mask */}
            <div
              className="pointer-events-none absolute top-0 bottom-0 left-0 z-20 w-16 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent sm:w-28 dark:from-[#070b14] dark:via-[#070b14]/80"
              aria-hidden="true"
            />
            {/* Right Edge Fog / Gradient Mask */}
            <div
              className="pointer-events-none absolute top-0 bottom-0 right-0 z-20 w-16 bg-gradient-to-l from-slate-50 via-slate-50/80 to-transparent sm:w-28 dark:from-[#070b14] dark:via-[#070b14]/80"
              aria-hidden="true"
            />

            {/* ──── ROW 1: Swiping Right ──── */}
            <div className="overflow-hidden">
              <div
                className="pause-on-hover flex gap-4 animate-marquee-right"
                style={{
                  animationDuration: "36s",
                }}
              >
                {[...skillsRow1, ...skillsRow1].map((skill, idx) => (
                  <div
                    key={`row1-${skill.name}-${idx}`}
                    className="group relative flex h-[125px] w-[190px] shrink-0 flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/90 bg-white/85 p-3.5 shadow-md shadow-slate-200/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-400/60 hover:shadow-[0_12px_40px_-12px_rgba(34,211,238,0.45)] sm:h-[135px] sm:w-[215px] sm:p-4 dark:border-white/10 dark:bg-[#0c0f1f]/85 dark:shadow-none dark:hover:border-cyan-400/50 dark:hover:shadow-[0_12px_40px_-12px_rgba(34,211,238,0.35)]"
                  >
                    {/* Hover Glow Pill */}
                    <span
                      aria-hidden="true"
                      className={`pointer-events-none absolute -top-10 -right-10 h-24 w-24 rounded-full ${skill.glow} opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100`}
                    />

                    {/* Card Top: Logo & Category Badge */}
                    <div className="flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 p-1.5 transition-all duration-300 group-hover:scale-105 group-hover:brightness-110 dark:bg-white/[0.05]">
                        {skill.logo}
                      </div>

                      <span className="rounded-full border border-slate-200 bg-slate-100 px-2 py-0.5 text-[10px] font-semibold tracking-wider text-slate-600 uppercase dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300">
                        {skill.category}
                      </span>
                    </div>

                    {/* Card Bottom: Name & Subtitle */}
                    <div className="mt-2">
                      <h3 className="text-sm font-bold text-slate-900 transition-colors group-hover:text-purple-600 dark:text-white dark:group-hover:text-purple-300 sm:text-[15px]">
                        {skill.name}
                      </h3>
                      <p className="truncate text-[11px] font-medium text-slate-500 dark:text-slate-400">
                        {skill.tag}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ──── ROW 2: Swiping in Opposite Direction ──── */}
            <div className="overflow-hidden">
              <div
                className="pause-on-hover flex gap-4 animate-marquee-left"
                style={{
                  animationDuration: "34s",
                }}
              >
                {[...skillsRow2, ...skillsRow2].map((skill, idx) => (
                  <div
                    key={`row2-${skill.name}-${idx}`}
                    className="group relative flex h-[125px] w-[190px] shrink-0 flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/90 bg-white/85 p-3.5 shadow-md shadow-slate-200/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-400/60 hover:shadow-[0_12px_40px_-12px_rgba(34,211,238,0.45)] sm:h-[135px] sm:w-[215px] sm:p-4 dark:border-white/10 dark:bg-[#0c0f1f]/85 dark:shadow-none dark:hover:border-cyan-400/50 dark:hover:shadow-[0_12px_40px_-12px_rgba(34,211,238,0.35)]"
                  >
                    {/* Hover Glow Pill */}
                    <span
                      aria-hidden="true"
                      className={`pointer-events-none absolute -top-10 -right-10 h-24 w-24 rounded-full ${skill.glow} opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100`}
                    />

                    {/* Card Top: Logo & Category Badge */}
                    <div className="flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 p-1.5 transition-all duration-300 group-hover:scale-105 group-hover:brightness-110 dark:bg-white/[0.05]">
                        {skill.logo}
                      </div>

                      <span className="rounded-full border border-slate-200 bg-slate-100 px-2 py-0.5 text-[10px] font-semibold tracking-wider text-slate-600 uppercase dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300">
                        {skill.category}
                      </span>
                    </div>

                    {/* Card Bottom: Name & Subtitle */}
                    <div className="mt-2">
                      <h3 className="text-sm font-bold text-slate-900 transition-colors group-hover:text-purple-600 dark:text-white dark:group-hover:text-purple-300 sm:text-[15px]">
                        {skill.name}
                      </h3>
                      <p className="truncate text-[11px] font-medium text-slate-500 dark:text-slate-400">
                        {skill.tag}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Footer Guidance Note ─────────────────────────────────── */}
          <Reveal delay={350}>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-center text-xs font-medium text-slate-500 sm:gap-6 dark:text-slate-400">
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-purple-500 animate-pulse" />
                Cards auto-scroll in seamless loop
              </span>
              <span className="hidden sm:inline">&bull;</span>
              <span>Hover any card to freeze and explore details</span>
              <span className="hidden sm:inline">&bull;</span>
              <span>Includes Flutter, Dart, React, Next.js, Spring Boot & Cloud Tools</span>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
