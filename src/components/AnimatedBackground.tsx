"use client";

import { cn } from "@/lib/utils";
import { GridPattern } from "./magicui/animated-grid-pattern";

interface AnimatedBackgroundProps {
  children?: React.ReactNode;
  className?: string;
  showGrid?: boolean;
  showGradient?: boolean;
  gradientFrom?: string;
  gradientTo?: string;
}

export function AnimatedBackground({
  children,
  className,
  showGrid = true,
  showGradient = true,
  gradientFrom = "from-primary/5",
  gradientTo = "to-background",
}: AnimatedBackgroundProps) {
  return (
    <div className={cn("relative min-h-screen", className)}>
      {/* Gradient background */}
      {showGradient && (
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-b",
            gradientFrom,
            gradientTo,
            "-z-20"
          )}
        />
      )}

      {/* Animated grid pattern */}
      {showGrid && (
        <GridPattern
          width={40}
          height={40}
          numSquares={30}
          maxOpacity={0.15}
          duration={6}
          repeatDelay={1}
          className={cn(
            "absolute inset-0 -z-10",
            "dark:opacity-50"
          )}
        />
      )}

      {/* Subtle orb decorations */}
      <div className="pointer-events-none absolute inset-0 -z-5 overflow-hidden">
        <div className="absolute -left-1/4 -top-1/4 h-[50vw] w-[50vw] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -right-1/4 -bottom-1/4 h-[50vw] w-[50vw] rounded-full bg-primary/5 blur-3xl" />
      </div>

      {/* Content */}
      {children}
    </div>
  );
}

interface SectionBackgroundProps {
  children?: React.ReactNode;
  className?: string;
  gradient?: string;
  showGrid?: boolean;
}

export function SectionBackground({
  children,
  className,
  gradient = "from-primary/5 via-transparent to-transparent",
  showGrid = false,
}: SectionBackgroundProps) {
  return (
    <div className={cn("relative", className)}>
      {showGrid && (
        <GridPattern
          width={30}
          height={30}
          numSquares={20}
          maxOpacity={0.1}
          duration={8}
          className="absolute inset-0 -z-10"
        />
      )}
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-br",
          gradient,
          "-z-5"
        )}
      />
      {children}
    </div>
  );
}
