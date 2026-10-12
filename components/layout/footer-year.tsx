"use client";

import { useEffect, useState } from "react";

/**
 * Dynamic copyright year. Read inside useEffect so the value is computed
 * on each visit rather than frozen at prerender time (Next 16 cacheComponents).
 */
export function FooterYear() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    const t = window.setTimeout(() => {
      setYear(new Date().getFullYear());
    }, 0);
    return () => window.clearTimeout(t);
  }, []);

  return <>{year ?? 2026}</>;
}
