import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  label,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <p className="flex items-center gap-3 text-xs font-semibold tracking-[0.28em] text-sky-600 uppercase dark:text-sky-300/90">
        {align === "center" && (
          <span className="inline-block h-px w-8 bg-sky-400/70" aria-hidden="true" />
        )}
        <span
          className={cn(align === "left" && "flex items-center gap-3")}
        >
          {align === "left" && (
            <span className="inline-block h-px w-8 bg-sky-400/70" aria-hidden="true" />
          )}
          {label}
        </span>
      </p>
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
        {title}
      </h2>
      <span
        aria-hidden="true"
        className={cn(
          "about-underline mt-4 block h-[3px] w-16 origin-left rounded-full bg-gradient-to-r from-sky-400 to-indigo-500",
          align === "center" && "mx-auto origin-center"
        )}
      />
      {description && (
        <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-400">{description}</p>
      )}
    </Reveal>
  );
}
