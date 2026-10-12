import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant;
  children: ReactNode;
}

const baseStyles =
  "inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#070b14] active:translate-y-0";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-sky-500 text-white shadow-[0_8px_30px_-8px_rgba(14,165,233,0.7)] hover:-translate-y-[2px] hover:bg-sky-400 hover:shadow-[0_12px_36px_-8px_rgba(14,165,233,0.8)] dark:bg-sky-400 dark:text-[#04121f] dark:hover:bg-sky-300",
  secondary:
    "border border-slate-300 bg-white text-slate-900 shadow-sm backdrop-blur hover:-translate-y-[2px] hover:border-slate-400 hover:bg-slate-50 dark:border-white/15 dark:bg-white/5 dark:text-slate-100 dark:shadow-none dark:hover:border-white/30 dark:hover:bg-white/10",
};

export function Button({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <a className={cn(baseStyles, variantStyles[variant], className)} {...props}>
      {children}
    </a>
  );
}
