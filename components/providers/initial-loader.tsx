"use client";

import { useEffect, useState } from "react";
import { LoadingScreen } from "@/components/ui/loading-screen";

type Phase = "visible" | "fading" | "hidden";

const MIN_MS = 500;
const MAX_MS = 2500;
const FADE_MS = 500;

/**
 * Initial-load splash. Dismisses when the page is genuinely ready
 * (window load + fonts), with a short minimum to avoid flicker and a
 * cap so it never lingers. Skipped entirely under reduced motion.
 */
export function InitialLoader() {
  const [phase, setPhase] = useState<Phase>("visible");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const t = window.setTimeout(() => setPhase("hidden"), 0);
      return () => window.clearTimeout(t);
    }

    let settled = false;
    const start = performance.now();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const hide = () => {
      const wait = Math.max(0, MIN_MS - (performance.now() - start));
      window.setTimeout(() => {
        setPhase("fading");
        window.setTimeout(() => {
          document.body.style.overflow = prevOverflow;
          setPhase("hidden");
        }, FADE_MS);
      }, wait);
    };
    const finish = () => {
      if (!settled) {
        settled = true;
        hide();
      }
    };
    const onLoad = () => {
      try {
        document.fonts.ready.then(finish).catch(finish);
      } catch {
        finish();
      }
    };

    if (document.readyState === "complete") {
      onLoad();
    } else {
      window.addEventListener("load", onLoad);
    }
    const cap = window.setTimeout(finish, MAX_MS);

    return () => {
      window.removeEventListener("load", onLoad);
      window.clearTimeout(cap);
      document.body.style.overflow = prevOverflow;
    };
  }, []);

  if (phase === "hidden") return null;
  return <LoadingScreen fading={phase === "fading"} />;
}
