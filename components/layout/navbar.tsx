"use client";

import { useEffect, useMemo, useState } from "react";
import { Menu, X } from "lucide-react";
import { navigation } from "@/data/navigation";
import { profile } from "@/data/profile";
import { useActiveSection } from "@/hooks/use-active-section";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";
import { MobileMenu } from "@/components/layout/mobile-menu";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import RubberSegment from "@/components/ui/rubber-segment";
import { useThemeContext } from "@/components/providers/theme-provider";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const ids = useMemo(
    () => navigation.map((n) => n.href.replace("#", "")),
    []
  );
  const activeId = useActiveSection(ids);
  const currentActive = activeId || "home";
  const { theme } = useThemeContext();
  const isLight = theme === "light";

  // Links shown in the desktop segment (Contact lives on the CTA button)
  const desktopNav = useMemo(
    () => navigation.filter((item) => item.href !== "#contact"),
    []
  );

  // Thumb follows scroll-spy; pinned so it never points at a missing slot
  // (e.g. while the Contact section is visible).
  const activeLabel = desktopNav.find(
    (item) => item.href === `#${currentActive}`
  )?.label;
  const [pinnedLabel, setPinnedLabel] = useState("Home");
  useEffect(() => {
    if (!activeLabel) return;
    const t = window.setTimeout(() => setPinnedLabel(activeLabel), 0);
    return () => window.clearTimeout(t);
  }, [activeLabel]);

  const handleSegmentChange = (val: string) => {
    const item = desktopNav.find((n) => n.label === val);
    if (!item) return;
    document
      .getElementById(item.href.slice(1))
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", item.href);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300 w-full",
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-slate-200/80 shadow-lg shadow-slate-900/5 dark:bg-[#070b14]/80 dark:border-white/[0.06] dark:shadow-black/20"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <Container className="max-w-7xl">
        <nav
          aria-label="Primary"
          className="relative flex h-20 items-center justify-between gap-4"
        >
          {/* ── Logo: Cursive handwritten signature ────────────────── */}
          <a
            href="#home"
            aria-label={`Back to top — ${profile.name}`}
            className="group flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 rounded-lg py-1"
          >
            <span className="font-brand text-2xl md:text-3xl tracking-wide text-slate-900 transition-opacity duration-200 group-hover:opacity-85 select-none dark:text-white">
              {profile.name}
            </span>
          </a>

          {/* ── Desktop Center Navigation: Rubber Segment ─────────── */}
          <div className="pointer-events-none absolute inset-x-0 hidden justify-center md:flex">
            <div className="pointer-events-auto">
              <RubberSegment
                items={desktopNav.map((item) => item.label)}
                value={pinnedLabel}
                onChange={handleSegmentChange}
                animateExternal
                trackColor={isLight ? "rgba(255,255,255,0.8)" : "rgba(18,15,38,0.8)"}
                thumbColor="#7952f5"
                textColor={isLight ? "#64748b" : "#d4d4d8"}
                activeTextColor="#ffffff"
                size="lg"
                radius={22}
                inset={6}
                equalSlots={false}
                className="navbar-segment border border-slate-200 shadow-[0_8px_32px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:shadow-[0_8px_32px_rgba(0,0,0,0.37)]"
                aria-label="Primary"
              />
            </div>
          </div>

          {/* ── Right Actions: Theme Toggle + "Contact" Button ────── */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle Button */}
            <ThemeToggle />

            {/* Contact Pill Button */}
            <a
              href="#contact"
              className="relative hidden h-9 items-center justify-center rounded-full bg-slate-900 px-5 text-sm font-semibold text-white shadow-[0_0_20px_rgba(15,23,42,0.2)] transition-all duration-200 hover:bg-slate-700 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 dark:bg-white dark:text-zinc-950 dark:shadow-[0_0_20px_rgba(255,255,255,0.25)] dark:hover:bg-zinc-100 dark:focus-visible:ring-white sm:inline-flex"
            >
              Contact
            </a>

            {/* Mobile Menu Hamburger */}
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 bg-slate-100 text-slate-600 backdrop-blur-sm transition-colors hover:border-slate-400 hover:bg-slate-200 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 dark:border-white/10 dark:bg-white/[0.05] dark:text-zinc-300 dark:hover:border-purple-400/30 dark:hover:bg-white/[0.08] dark:hover:text-white md:hidden"
            >
              {menuOpen ? (
                <X className="h-4 w-4" aria-hidden="true" />
              ) : (
                <Menu className="h-4 w-4" aria-hidden="true" />
              )}
            </button>
          </div>
        </nav>
      </Container>

      <MobileMenu
        open={menuOpen}
        activeId={currentActive}
        onClose={() => setMenuOpen(false)}
      />
    </header>
  );
}
