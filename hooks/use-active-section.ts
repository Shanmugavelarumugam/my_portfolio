"use client";

import { useEffect, useState } from "react";

/**
 * Scroll-spy for navbar active-link indicator.
 * Observes section ids and returns the currently visible one.
 * Updates on scroll (not just on click).
 */
export function useActiveSection(ids: string[]): string | null {
  const [active, setActive] = useState<string | null>(null);
  const idsKey = ids.join("|");

  useEffect(() => {
    const idList = idsKey.split("|").filter(Boolean);
    const elements = idList
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        }
      },
      {
        // Active when section crosses the middle band of the viewport
        rootMargin: "-40% 0px -55% 0px",
        threshold: 0,
      }
    );

    elements.forEach((el) => observer.observe(el));

    // Fallback: top of page -> first id (home)
    const onScroll = () => {
      if (window.scrollY < 200) setActive((prev) => prev ?? idList[0] ?? null);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [idsKey]);

  return active;
}
