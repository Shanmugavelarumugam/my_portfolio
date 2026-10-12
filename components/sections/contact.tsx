import { ArrowUpRight, Mail } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { ContactForm } from "@/components/ui/contact-form";
import { profile } from "@/data/profile";
import { socialLinks } from "@/data/social-links";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

// TODO: replace placeholder email, GitHub, and LinkedIn URLs with real ones
const contactChannels = [
  {
    title: "Email",
    description: profile.email,
    href: `mailto:${profile.email}`,
    Icon: Mail,
  },
  {
    title: "LinkedIn",
    description: "Connect professionally",
    href: socialLinks.find((l) => l.label === "LinkedIn")?.href ?? "https://www.linkedin.com/",
    Icon: LinkedinIcon,
  },
  {
    title: "GitHub",
    description: "Explore my code and projects",
    href: socialLinks.find((l) => l.label === "GitHub")?.href ?? "https://github.com/",
    Icon: GithubIcon,
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      aria-label="Contact"
      className="relative overflow-hidden border-t border-slate-200/70 bg-white text-slate-900 dark:border-white/5 dark:bg-[#070b14] dark:text-slate-100"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="hero-orb absolute -top-24 left-1/3 h-[380px] w-[380px] rounded-full bg-sky-300/40 blur-[130px] dark:bg-sky-500/10" />
      </div>

      <Container className="relative">
        <div className="py-20 sm:py-24 lg:py-28">
          <SectionHeading
            label="Let's Connect"
            title="Have a project in mind?"
            description="I'm open to discussing software development opportunities, interesting projects, and collaborations."
          />

          <div className="mt-12 grid gap-8 sm:mt-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
            {/* LEFT — contact info */}
            <ul className="space-y-4">
              {contactChannels.map((channel, i) => (
                <Reveal as="li" key={channel.title} delay={150 + i * 100}>
                  <a
                    href={channel.href}
                    target={channel.href.startsWith("http") ? "_blank" : undefined}
                    rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-[3px] hover:border-sky-500/30 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 dark:border-white/10 dark:bg-white/[0.02] dark:shadow-none dark:hover:border-sky-400/30 dark:hover:bg-white/[0.04]"
                  >
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-500/10 text-sky-600 ring-1 ring-sky-500/20 dark:bg-sky-400/10 dark:text-sky-300 dark:ring-white/10">
                      <channel.Icon className="h-5 w-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-semibold text-slate-900 dark:text-white">
                        {channel.title}
                      </span>
                      <span className="block truncate text-sm text-slate-500 dark:text-slate-400">
                        {channel.description}
                      </span>
                    </span>
                    <ArrowUpRight
                      className="ml-auto h-4 w-4 shrink-0 text-slate-400 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-sky-600 dark:text-slate-500 dark:group-hover:text-sky-300"
                      aria-hidden="true"
                    />
                  </a>
                </Reveal>
              ))}
              <Reveal delay={450}>
                <p className="flex items-center gap-2 rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.07] p-5 text-sm text-emerald-700 dark:border-emerald-400/15 dark:bg-emerald-400/[0.06] dark:text-emerald-200/90">
                  <span className="relative flex h-2 w-2 shrink-0" aria-hidden="true">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>
                  {profile.availability} — I usually reply within a day or two.
                </p>
              </Reveal>
            </ul>

            {/* RIGHT — form */}
            <Reveal delay={250}>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8 dark:border-white/10 dark:bg-white/[0.02] dark:shadow-none">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Send me a message</h3>
                <div className="mt-5">
                  <ContactForm />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
