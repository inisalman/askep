"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BorderBeamProps {
  className?: string;
  size?: number;
  duration?: number;
  delay?: number;
  colorFrom?: string;
  colorTo?: string;
  borderWidth?: number;
}

export function BorderBeam({
  className,
  size = 100,
  duration = 3,
  delay = 0,
  colorFrom = "hsl(var(--primary))",
  colorTo = "hsl(160 70% 45%)",
  borderWidth = 2,
}: BorderBeamProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 rounded-[inherit] border border-transparent [mask-clip:padding-box,border-box] [mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)]",
        className
      )}
    >
      <motion.div
        className={cn(
          "absolute h-full w-0",
          "bg-gradient-to-r",
        )}
        style={{
          height: borderWidth,
          top: 0,
          left: 0,
          background: `linear-gradient(to right, transparent, ${colorFrom}, ${colorTo}, transparent)`,
        }}
        initial={{ x: "-100%", width: size }}
        animate={{ x: "100%" }}
        transition={{
          duration,
          repeat: Infinity,
          repeatDelay: 0.5,
          delay,
          ease: "linear",
        }}
      />
    </div>
  );
}

interface ShimmerBorderProps {
  className?: string;
  shimmerWidth?: number;
  shimmerColor?: string;
  duration?: number;
}

export function ShimmerBorder({
  className,
  shimmerWidth = 100,
  shimmerColor = "hsla(0, 0%, 100%, 0.8)",
  duration = 2,
}: ShimmerBorderProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 rounded-[inherit]",
        "before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-primary/50",
        "before:[background:linear-gradient(90deg,transparent,hsl(var(--primary)),transparent)_0%_0%/200%_100%]",
        "before:[mask:linear-gradient(#000,#000)_content-box,linear-gradient(#000,#000)]",
        "before:[mask-composite:xor]",
        "before:animate-shimmer-border",
        className
      )}
      style={{
        ["--shimmer-duration" as string]: `${duration}s`,
      }}
    />
  );
}

interface BorderShineProps {
  className?: string;
  color?: string;
}

export function BorderShine({
  className,
  color = "hsl(var(--primary) / 0.5)",
}: BorderShineProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 rounded-[inherit]",
        "opacity-0 group-hover:opacity-100 transition-opacity duration-500",
        className
      )}
      style={{
        boxShadow: `inset 0 0 0 1px ${color}`,
      }}
    />
  );
}
