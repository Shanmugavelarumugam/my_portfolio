"use client";

import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { navigation } from "@/data/navigation";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/layout/theme-toggle";

interface MobileMenuProps {
  open: boolean;
  activeId: string | null;
  onClose: () => void;
}

export function MobileMenu({ open, activeId, onClose }: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  // Close on Escape + lock body scroll while open
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panelRef.current?.querySelector("a")?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="md:hidden">
      {/* Backdrop */}
      <button
        aria-label="Close menu"
        onClick={onClose}
        className="fixed inset-0 z-40 cursor-default bg-black/60 backdrop-blur-sm"
      />
      {/* Panel */}
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className="mobile-menu-panel fixed inset-x-3 top-[84px] z-50 overflow-hidden rounded-3xl border border-slate-200/90 bg-white/95 shadow-2xl backdrop-blur-2xl dark:border-white/10 dark:bg-[#0c0a20]/95"
      >
        <div className="flex items-center justify-between border-b border-slate-100 px-5 py-3.5 dark:border-white/5">
          <span className="text-xs font-semibold tracking-wider text-slate-500 uppercase dark:text-slate-400">
            Navigation
          </span>
          <ThemeToggle />
        </div>

        <nav aria-label="Mobile" className="max-h-[70vh] overflow-y-auto p-3">
          <ul className="flex flex-col gap-1">
            {navigation.map((item) => {
              const id = item.href.replace("#", "");
              const isActive = activeId === id;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={onClose}
                    aria-current={isActive ? "true" : undefined}
                    className={cn(
                      "flex items-center justify-between rounded-2xl px-4 py-3 text-[15px] font-medium transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400",
                      isActive
                        ? "bg-[#7952f5] text-white shadow-md shadow-purple-900/30"
                        : "text-slate-600 hover:bg-slate-900/5 hover:text-slate-900 dark:text-zinc-300 dark:hover:bg-white/5 dark:hover:text-white"
                    )}
                  >
                    {item.label}
                    {isActive && (
                      <span
                        className="h-2 w-2 rounded-full bg-white"
                        aria-hidden="true"
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="mt-3 flex flex-col gap-2 border-t border-slate-200 p-2 dark:border-white/10">
            <a
              href="#contact"
              onClick={onClose}
              className="inline-flex h-11 w-full items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white transition-colors hover:bg-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-100 dark:focus-visible:ring-white"
            >
              Hire Me
            </a>
            {profile.resumeHref && (
              <a
                href={profile.resumeHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="inline-flex h-10 w-full items-center justify-center gap-1.5 rounded-full border border-slate-300 bg-slate-100 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-200 hover:text-slate-900 dark:border-white/10 dark:bg-white/5 dark:text-zinc-300 dark:hover:bg-white/10 dark:hover:text-white"
              >
                Resume
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
}
