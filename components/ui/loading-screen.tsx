import { cn } from "@/lib/utils";
import { profile } from "@/data/profile";

/**
 * Branded loading screen — SA initials, name, indeterminate progress.
 * Shown on initial load (until content is ready) and as the route
 * Suspense fallback. No fake progress: the bar is indeterminate.
 */
export function LoadingScreen({ fading = false }: { fading?: boolean }) {
  return (
    <div
      role="status"
      aria-label="Loading portfolio"
      className={cn(
        "fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6 bg-[#070b14] transition-opacity duration-500",
        fading ? "pointer-events-none opacity-0" : "opacity-100"
      )}
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 left-1/2 h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-sky-500/15 blur-[120px]"
      />

      {/* Initials with animated ring */}
      <div className="relative">
        <div
          aria-hidden="true"
          className="absolute -inset-2 rounded-[1.75rem] bg-gradient-to-br from-sky-400/40 via-indigo-500/30 to-purple-500/40 opacity-60 blur-md"
        />
        <div className="relative flex h-20 w-20 items-center justify-center rounded-[1.5rem] bg-gradient-to-br from-sky-400 via-sky-500 to-indigo-600 text-2xl font-bold text-[#04121f] shadow-xl ring-1 ring-white/20">
          SA
        </div>
        <div
          aria-hidden="true"
          className="loading-ring absolute -inset-3 animate-spin rounded-[2rem] border border-dashed border-sky-400/40 [animation-duration:2.5s]"
        />
      </div>

      <p className="font-brand text-3xl text-white">{profile.name}</p>

      {/* Indeterminate progress */}
      <div
        aria-hidden="true"
        className="h-[3px] w-40 overflow-hidden rounded-full bg-white/10"
      >
        <div className="loading-bar h-full w-16 rounded-full bg-gradient-to-r from-sky-400 to-purple-500" />
      </div>

      <p className="text-xs font-medium tracking-[0.25em] text-slate-500 uppercase">
        Loading...
      </p>
    </div>
  );
}
