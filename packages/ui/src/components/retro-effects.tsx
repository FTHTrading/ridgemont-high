import * as React from "react";
import { cn } from "../lib/utils";

/**
 * Subtle CRT-scanline overlay — used sparingly for retro ambience.
 * Apply as a fixed overlay on major layout wrappers, not on every card.
 */
export function ScanlineOverlay({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none fixed inset-0 z-50 opacity-[0.03]",
        "bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(255,255,255,0.05)_2px,rgba(255,255,255,0.05)_4px)]",
        className
      )}
    />
  );
}

/**
 * Neon glow border effect for hero sections, panels, or selected cards.
 */
export function NeonBorder({
  color = "magenta",
  children,
  className,
}: {
  color?: "magenta" | "blue" | "gold" | "green";
  children: React.ReactNode;
  className?: string;
}) {
  const shadowMap = {
    magenta: "shadow-neon-magenta",
    blue: "shadow-neon-blue",
    gold: "shadow-neon-gold",
    green: "shadow-neon-green",
  };

  const borderMap = {
    magenta: "border-ridgemont-neonMagenta-500/40",
    blue: "border-ridgemont-electricBlue-500/40",
    gold: "border-ridgemont-warmGold-500/40",
    green: "border-ridgemont-arcadeGreen-500/40",
  };

  return (
    <div
      className={cn(
        "rounded-xl border-2 p-[1px]",
        borderMap[color],
        shadowMap[color],
        className
      )}
    >
      {children}
    </div>
  );
}

/**
 * VHS-style tracking-distortion bar — decorative only, used in section dividers.
 */
export function VhsDivider({ className }: { className?: string }) {
  return (
    <div className={cn("relative h-px w-full overflow-hidden", className)}>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-ridgemont-neonMagenta-500/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-ridgemont-electricBlue-500/30 to-transparent translate-x-1/4" />
    </div>
  );
}

/**
 * Retro badge label — for tags, categories, era markers.
 */
export function RetroBadge({
  children,
  variant = "default",
  className,
}: {
  children: React.ReactNode;
  variant?: "default" | "neon" | "gold" | "outline";
  className?: string;
}) {
  const variants = {
    default: "bg-ridgemont-cassetteGray-600 text-ridgemont-cassetteGray-100",
    neon: "bg-ridgemont-neonMagenta-500/20 text-ridgemont-neonMagenta-300 border border-ridgemont-neonMagenta-500/30",
    gold: "bg-ridgemont-warmGold-500/20 text-ridgemont-warmGold-300 border border-ridgemont-warmGold-500/30",
    outline: "bg-transparent text-ridgemont-cassetteGray-200 border border-ridgemont-cassetteGray-400",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
