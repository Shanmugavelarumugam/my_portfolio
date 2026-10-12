import { ArrowUpRight, ChevronDown, FileText, MapPin } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { SocialLinks } from "@/components/ui/social-links";
import FoldText from "@/components/ui/fold-text";
import { profile } from "@/data/profile";

/**
 * Hero — aurora glass aesthetic.
 * Two-column on desktop, stacked on mobile.
 * Replace the placeholder avatar block with a real <Image /> when ready (see TODO).
 */
export function Hero() {
  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative isolate overflow-hidden bg-slate-50 text-slate-900 dark:bg-[#05070f] dark:text-slate-100"
    >
      {/* ── Ambient background: aurora + noise + vignette ───────────── */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        {/* Aurora blobs */}
        <div className="hero-orb absolute -top-40 left-1/4 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-sky-300/50 blur-[140px] dark:bg-sky-500/25" />
        <div
          className="hero-orb absolute top-10 right-0 h-[560px] w-[560px] rounded-full bg-fuchsia-300/40 blur-[150px] dark:bg-fuchsia-500/15"
          style={{ animationDelay: "-7s" }}
        />
        <div
          className="hero-orb absolute bottom-0 left-1/3 h-[480px] w-[480px] rounded-full bg-indigo-300/50 blur-[140px] dark:bg-indigo-500/20"
          style={{ animationDelay: "-14s" }}
        />

        {/* Fine grid */}
        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(148,163,184,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.6) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 50% 40%, black 20%, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 60% at 50% 40%, black 20%, transparent 75%)",
          }}
        />

        {/* Top spotlight */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/40 to-transparent" />

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-slate-50 via-slate-50/80 to-transparent dark:from-[#05070f] dark:via-[#05070f]/80" />
      </div>

      <Container className="relative">
        <div className="grid items-center gap-14 py-20 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 lg:py-14 lg:min-h-[calc(100svh-72px)]">
          {/* ── LEFT ───────────────────────────────────────────────── */}
          <div className="relative max-w-2xl">
            {/* Eyebrow pill */}
            <div
              className="hero-anim inline-flex items-center gap-2.5 rounded-full border border-slate-200 bg-white/70 px-3.5 py-1.5 backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.04]"
              style={{ animationDelay: "0ms" }}
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              <span className="text-[11px] font-semibold tracking-[0.22em] text-slate-600 uppercase dark:text-slate-300">
                {profile.greeting}
              </span>
            </div>

            {/* Headline */}
            <h1
              className="hero-anim font-display mt-6 text-[2.75rem] leading-[1.05] tracking-tight text-slate-900 sm:text-6xl lg:text-[4.25rem] dark:text-white"
              style={{ animationDelay: "80ms" }}
            >
              Hi, I&apos;m{" "}
              <span className="relative inline-block">
                <span className="relative inline-block">
                  <FoldText
                    text={profile.name}
                    splitBy="char"
                    hinge="top"
                    trigger="mount"
                    duration={0.65}
                    stagger={0.045}
                    ease="power3.out"
                    perspective={700}
                    creaseShading={0.55}
                    fontSize="clamp(2.75rem, 7vw, 4.25rem)"
                    fontWeight={900}
                    className="fold-text-gradient"
                    repeatAfter={15}
                    style={{ letterSpacing: "-0.025em", lineHeight: 1.05 }}
                  />
                </span>
                {/* underline flourish */}
                <svg
                  className="hero-underline absolute -bottom-2 left-0 h-3 w-full text-sky-400/70"
                  viewBox="0 0 200 12"
                  fill="none"
                  aria-hidden="true"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 8C50 2 150 2 198 8"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Role */}
            <p
              className="hero-anim mt-6 text-xl font-medium tracking-tight text-slate-600 sm:text-2xl dark:text-slate-300"
              style={{ animationDelay: "160ms" }}
            >
              <span className="mr-2 inline-block h-1.5 w-1.5 -translate-y-0.5 rounded-full bg-sky-400" />
              {profile.title}
            </p>

            {/* Description */}
            <p
              className="hero-anim mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-[17px] sm:leading-8 dark:text-slate-400"
              style={{ animationDelay: "240ms" }}
            >
              {profile.description}
            </p>

            {/* CTAs */}
            <div
              className="hero-anim mt-9 flex flex-wrap items-center gap-3"
              style={{ animationDelay: "320ms" }}
            >
              <Button href={profile.projectsHref}>
                View Projects
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Button>
              <Button variant="secondary" href={profile.contactHref}>
                Contact Me
              </Button>
            </div>

            {/* Social + resume */}
            <div
              className="hero-anim mt-9 flex flex-wrap items-center gap-x-6 gap-y-4"
              style={{ animationDelay: "400ms" }}
            >
              <SocialLinks />
              <span className="hidden h-5 w-px bg-slate-300 sm:inline-block dark:bg-white/10" aria-hidden="true" />
              <a
                href={profile.resumeHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded dark:text-slate-300 dark:hover:text-white"
              >
                <FileText className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" aria-hidden="true" />
                <span className="underline decoration-slate-300 underline-offset-4 transition-colors group-hover:decoration-sky-500/60 dark:decoration-white/20 dark:group-hover:decoration-sky-400/60">
                  Download Resume
                </span>
              </a>
            </div>

            {/* Meta row */}
            <div
              className="hero-anim mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-slate-500"
              style={{ animationDelay: "480ms" }}
            >
              <span className="inline-flex items-center gap-2">
                <span className="relative flex h-2 w-2" aria-hidden="true">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                {profile.availability}
              </span>
              <span className="h-3 w-px bg-slate-300 dark:bg-white/10" aria-hidden="true" />
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                {profile.location}
              </span>
            </div>
          </div>

          {/* ── RIGHT — profile card ───────────────────────────────── */}
          <div className="hero-portrait relative mx-auto w-full max-w-sm lg:max-w-md">
            <div className="hero-float relative">
            {/* Glow */}
            <div
              className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-sky-500/30 via-indigo-500/20 to-fuchsia-500/20 blur-3xl"
              aria-hidden="true"
            />

            {/* Gradient border wrapper */}
            <div className="relative rounded-[2rem] bg-gradient-to-br from-slate-300 via-slate-200 to-slate-300 p-[1px] shadow-[0_30px_80px_-30px_rgba(14,165,233,0.35)] dark:from-white/20 dark:via-white/5 dark:to-white/10 dark:shadow-[0_30px_100px_-30px_rgba(56,189,248,0.5)]">
              <div className="relative overflow-hidden rounded-[2rem] bg-white/90 backdrop-blur-xl dark:bg-[#080d1a]/90">
                {/* Inner glow */}
                <div
                  className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-sky-500/25 blur-[90px]"
                  aria-hidden="true"
                />
                <div
                  className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-indigo-500/20 blur-[90px]"
                  aria-hidden="true"
                />

                <div className="relative flex flex-col gap-8 p-8">
                  {/* Top chips */}
                  <div className="flex items-center justify-between">
                    <span className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-[10px] font-semibold tracking-[0.2em] text-slate-600 uppercase dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300">
                      Portfolio
                    </span>
                    <span className="flex items-center gap-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-semibold tracking-wide text-emerald-600 uppercase dark:border-emerald-400/25 dark:bg-emerald-400/10 dark:text-emerald-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
                      Open to work
                    </span>
                  </div>

                  {/* Avatar / placeholder */}
                  <div className="flex flex-col items-center text-center">
                    <div className="relative">
                      <div className="absolute -inset-2 rounded-[1.75rem] bg-gradient-to-br from-sky-400/40 to-indigo-500/40 opacity-60 blur-md" aria-hidden="true" />
                      {/* TODO: replace with real photo:
                          <Image src="/images/profile/profile.webp" alt="Portrait of Shanmugavel A"
                            fill className="object-cover" priority sizes="(max-width:1024px) 100vw, 380px" />
                      */}
                      <div className="relative flex h-28 w-28 items-center justify-center rounded-[1.5rem] bg-gradient-to-br from-sky-400 via-sky-500 to-indigo-600 text-3xl font-bold text-[#04121f] shadow-xl ring-1 ring-white/20">
                        SA
                      </div>
                      {/* Corner accent */}
                      <span className="absolute -right-1 -bottom-1 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400 ring-4 ring-white dark:ring-[#080d1a]">
                        <span className="h-2 w-2 rounded-full bg-[#04121f]" />
                      </span>
                    </div>

                    <p className="mt-6 text-lg font-semibold tracking-tight text-slate-900 dark:text-white">
                      {profile.name}
                    </p>
                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{profile.title}</p>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent dark:via-white/10" aria-hidden="true" />

                  {/* Tech stack */}
                  <div className="flex flex-wrap justify-center gap-2">
                    {["Flutter", "Dart", "REST APIs", "Clean Architecture"].map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600 transition-colors hover:border-sky-500/40 hover:bg-sky-500/10 hover:text-sky-700 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-300 dark:hover:border-sky-400/40 dark:hover:bg-sky-400/10 dark:hover:text-sky-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge (desktop only) */}
            <div className="pointer-events-none absolute -top-4 -left-6 hidden lg:block">
              <div className="hero-badge-a rotate-[-6deg] rounded-2xl border border-slate-200 bg-white/80 px-4 py-2.5 shadow-lg shadow-slate-900/5 backdrop-blur-md dark:border-white/10 dark:bg-white/[0.05] dark:shadow-none">
                <p className="text-[10px] font-semibold tracking-[0.2em] text-slate-500 uppercase dark:text-slate-400">
                  Building
                </p>
                <p className="text-sm font-semibold text-slate-900 dark:text-white">Mobile experiences</p>
              </div>
            </div>
            <div className="pointer-events-none absolute -right-6 -bottom-4 hidden lg:block">
              <div className="hero-badge-b rotate-[5deg] rounded-2xl border border-slate-200 bg-white/80 px-4 py-2.5 shadow-lg shadow-slate-900/5 backdrop-blur-md dark:border-white/10 dark:bg-white/[0.05] dark:shadow-none">
                <p className="text-[10px] font-semibold tracking-[0.2em] text-slate-500 uppercase dark:text-slate-400">
                  Focus
                </p>
                <p className="text-sm font-semibold text-slate-900 dark:text-white">Craft &amp; detail</p>
              </div>
            </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <a
          href="#about"
          aria-label="Scroll to About section"
          className="hero-anim absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1.5 text-slate-500 transition-colors hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-full p-1.5 lg:flex dark:hover:text-slate-200"
          style={{ animationDelay: "600ms" }}
        >
          <span className="text-[10px] font-medium tracking-[0.3em] uppercase">Scroll</span>
          <span className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 bg-white/70 dark:border-white/10 dark:bg-white/[0.03]">
            <ChevronDown className="hero-scroll-hint h-3.5 w-3.5" aria-hidden="true" />
          </span>
        </a>
      </Container>
    </section>
  );
}
