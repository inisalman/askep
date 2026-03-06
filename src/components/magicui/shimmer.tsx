"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ShimmerButtonProps {
  children: ReactNode;
  className?: string;
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  shimmerDuration?: string;
  background?: string;
  asChild?: boolean;
  onClick?: () => void;
}

export function ShimmerButton({
  children,
  className,
  shimmerColor = "hsl(var(--primary))",
  shimmerSize = "2px",
  borderRadius = "var(--radius)",
  shimmerDuration = "3s",
  background = "var(--background)",
  asChild = false,
  onClick,
}: ShimmerButtonProps) {
  const Component = asChild ? "div" : "button";

  return (
    <Component
      onClick={onClick}
      className={cn(
        "relative flex cursor-pointer items-center justify-center overflow-hidden rounded-lg border border-border bg-background px-6 py-3 text-foreground shadow-sm",
        "before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent",
        "before:[background:linear-gradient(90deg,transparent,hsl(var(--primary)),transparent)_0%_0%/200%_100%]",
        "before:[mask:linear-gradient(#000,#000)_content-box,linear-gradient(#000,#000)]",
        "before:[mask-composite:xor]",
        "before:animate-shimmer",
        "hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5",
        "transition-all duration-300",
        className
      )}
      style={
        {
          "--shimmer-duration": shimmerDuration,
        } as React.CSSProperties
      }
    >
      {children}
    </Component>
  );
}

interface ShimmerTextProps {
  children: ReactNode;
  className?: string;
  shimmerColor?: string;
}

export function ShimmerText({
  children,
  className,
  shimmerColor = "hsl(var(--primary))",
}: ShimmerTextProps) {
  return (
    <span
      className={cn(
        "relative inline-block bg-clip-text text-transparent",
        "bg-[linear-gradient(90deg,hsl(var(--foreground))_0%,hsl(var(--foreground))_50%,hsl(var(--primary))_100%)]",
        "bg-[length:200%_auto]",
        "animate-shimmer-text",
        className
      )}
    >
      {children}
    </span>
  );
}

interface ShimmerLineProps {
  className?: string;
  width?: string | number;
  height?: string | number;
}

export function ShimmerLine({
  className,
  width = "100%",
  height = "1rem",
}: ShimmerLineProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded bg-muted/50",
        "after:absolute after:inset-0 after:-translate-x-full",
        "after:bg-gradient-to-r after:from-transparent after:via-muted-foreground/20 after:to-transparent",
        "after:animate-shimmer-line",
        className
      )}
      style={{ width, height }}
    />
  );
}

interface ShimmerCardSkeletonProps {
  className?: string;
}

export function ShimmerCardSkeleton({ className }: ShimmerCardSkeletonProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-card p-6",
        className
      )}
    >
      <div className="mb-4 flex items-center gap-3">
        <ShimmerLine width="48px" height="48px" className="rounded-lg" />
        <div className="flex-1 space-y-2">
          <ShimmerLine width="60%" height="1rem" />
          <ShimmerLine width="40%" height="0.75rem" />
        </div>
      </div>
      <ShimmerLine width="100%" height="4rem" className="rounded" />
    </div>
  );
}

export function ShimmerTextSkeleton({
  lines = 3,
  className,
}: {
  lines?: number;
  className?: string;
}) {
  return (
    <div className={cn("space-y-2", className)}>
      {Array.from({ length: lines }).map((_, i) => (
        <ShimmerLine
          key={i}
          width={i === lines - 1 ? "60%" : "100%"}
          height="1rem"
        />
      ))}
    </div>
  );
}
