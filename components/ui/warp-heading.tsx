"use client";

import WarpText from "@/components/ui/warp-text";
import { useThemeContext } from "@/components/providers/theme-provider";

interface WarpHeadingProps {
  text: string;
  /** Raster font size in px — the canvas auto-fits down to the container. */
  fontSize: number;
  /** Container height in px (also overrides the 220px CSS minimum). */
  height: number;
  className?: string;
}

/**
 * Section heading rendered through the WarpText glass effect.
 * Typography (sans, extrabold, tight tracking) and theme color match the
 * surrounding design; only the warp/pointer interaction is added.
 */
export function WarpHeading({ text, fontSize, height, className }: WarpHeadingProps) {
  const { theme } = useThemeContext();
  return (
    <WarpText
      text={text}
      color={theme === "light" ? "#0f172a" : "#f8fafc"}
      fontSize={fontSize}
      fontWeight={800}
      fontFamily="inherit"
      letterSpacing="-0.025em"
      lineHeight={1.15}
      className={className}
      style={{ height, minHeight: height }}
    />
  );
}
