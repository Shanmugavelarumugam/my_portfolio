import { ArrowUp } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SocialLinks } from "@/components/ui/social-links";
import { FooterYear } from "@/components/layout/footer-year";
import { profile } from "@/data/profile";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="relative bg-slate-50 text-slate-500 dark:bg-[#070b14] dark:text-slate-400">
      {/* Subtle blue-tinted top divider */}
      <div
        aria-hidden="true"
        className="h-px bg-gradient-to-r from-transparent via-sky-500/50 to-transparent dark:via-sky-400/40"
      />
      <Container>
        <div className="flex flex-col gap-8 py-10 sm:py-12 lg:flex-row lg:items-center lg:justify-between">
          {/* Identity */}
          <div className="max-w-sm">
            <a
              href="#home"
              aria-label="Back to top — Shanmugavel A"
              className="inline-flex items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 to-indigo-500 text-lg font-bold text-[#04121f]">
                S.
              </span>
              <span className="text-sm font-semibold text-slate-900 dark:text-white">
                {profile.name}
              </span>
            </a>
            <p className="mt-3 text-sm leading-6">
              Building reliable applications with Flutter.
            </p>
            <p className="mt-2 text-xs">
              © <FooterYear /> {profile.name}. All rights reserved.
            </p>
          </div>

          {/* Quick links + socials */}
          <div className="flex flex-col gap-5 lg:items-end">
            <nav aria-label="Footer">
              <ul className="flex items-center gap-1">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-150 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 dark:hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="flex items-center gap-3">
              <SocialLinks />
              <span className="h-5 w-px bg-slate-300 dark:bg-white/10" aria-hidden="true" />
              <a
                href="#home"
                aria-label="Back to top"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-500 transition-all duration-200 hover:-translate-y-[2px] hover:border-sky-500/50 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:border-sky-400/40 dark:hover:text-white"
              >
                <ArrowUp className="h-[18px] w-[18px]" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
