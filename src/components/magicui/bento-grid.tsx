import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

interface BentoGridProps {
  children: ReactNode;
  className?: string;
}

export function BentoGrid({ children, className }: BentoGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
        className
      )}
    >
      {children}
    </div>
  );
}

interface BentoCardProps {
  name: string;
  description: string;
  header: ReactNode;
  className?: string;
  icon?: ReactNode;
  href?: string;
  cta?: ReactNode;
  background?: ReactNode;
}

export function BentoCard({
  name,
  description,
  header,
  className,
  icon,
  href,
  cta,
  background,
}: BentoCardProps) {
  return (
    <div
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden rounded-xl border border-border bg-card p-6",
        "hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10",
        "transition-all duration-300",
        className
      )}
    >
      {background && (
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          {background}
        </div>
      )}

      <div className="relative z-10">
        <div className="mb-4">{header}</div>

        {icon && (
          <div className="mb-3 text-primary">{icon}</div>
        )}

        <h3 className="heading-md mb-1">{name}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>

      {cta && (
        <div className="relative z-10 mt-4">
          {cta}
        </div>
      )}

      {href && (
        <a
          href={href}
          className="absolute inset-0 z-0"
          aria-label={`Navigate to ${name}`}
        />
      )}
    </div>
  );
}

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
  gradient?: string;
  href?: string;
}

export function FeatureCard({
  icon,
  title,
  description,
  className,
  gradient = "from-teal-500 to-emerald-500",
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl",
        "bg-gradient-to-br from-card via-card to-muted/30",
        "border border-border/50",
        "transition-all duration-300 ease-out cursor-pointer",
        "hover:shadow-2xl hover:shadow-primary/10",
        "hover:-translate-y-1 hover:border-primary/30",
        "hover:scale-[1.02]",
        className
      )}
    >
      {/* Animated gradient background */}
      <div className={cn(
        "absolute inset-0 opacity-0 group-hover:opacity-100",
        "bg-gradient-to-br",
        gradient,
        "transition-opacity duration-500",
        "[mask-image:radial-gradient(ellipse_at_top_right,black_20%,transparent_70%)]"
      )} />

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.015] group-hover:opacity-[0.03] transition-opacity duration-500">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }} />
      </div>

      {/* Glowing orb */}
      <div className={cn(
        "absolute -right-8 -top-8 w-32 h-32 rounded-full",
        "bg-gradient-to-br",
        gradient,
        "opacity-20 group-hover:opacity-40 group-hover:scale-150",
        "blur-2xl transition-all duration-500"
      )} />

      {/* Content */}
      <div className="relative p-6">
        {/* Icon container with glow */}
        <div className="relative mb-5 inline-block">
          <div className={cn(
            "absolute inset-0 rounded-xl",
            "bg-gradient-to-br",
            gradient,
            "opacity-50 blur-lg",
            "group-hover:opacity-80 group-hover:scale-110",
            "transition-all duration-300"
          )} />
          <div className={cn(
            "relative w-14 h-14 rounded-xl flex items-center justify-center",
            "bg-gradient-to-br",
            gradient,
            "text-white shadow-lg",
            "group-hover:scale-110 group-hover:rotate-3",
            "transition-all duration-300"
          )}>
            {icon}
          </div>
        </div>

        {/* Title and description */}
        <h3 className="font-semibold text-lg leading-snug mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-muted-foreground/80 transition-colors">
          {description}
        </p>

        {/* Arrow indicator */}
        <div className="mt-4 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 translate-x-[-8px] group-hover:translate-x-0 transition-all duration-300">
          <span className="text-sm font-medium">Buka</span>
          <ChevronRight className="w-4 h-4" />
        </div>
      </div>

      {/* Bottom gradient line */}
      <div className={cn(
        "absolute bottom-0 left-0 right-0 h-[3px]",
        "bg-gradient-to-r",
        gradient,
        "opacity-60 group-hover:opacity-100",
        "transform origin-left scale-x-0 group-hover:scale-x-100",
        "transition-transform duration-500"
      )} />
    </div>
  );
}

interface StepCardProps {
  number: string | number;
  title: string;
  description: string;
  className?: string;
}

interface ResultCardProps {
  icon: ReactNode;
  badge?: string;
  title: string;
  description: string;
  className?: string;
  gradient?: string;
  href?: string;
}

export function ResultCard({
  icon,
  badge,
  title,
  description,
  className,
  gradient = "from-teal-500 to-emerald-500",
  href,
}: ResultCardProps) {
  return (
    <Link
      href={href || "#"}
      className={cn(
        "group relative block overflow-hidden rounded-2xl",
        "bg-gradient-to-br from-card via-card to-muted/30",
        "border border-border/50",
        "transition-all duration-300 ease-out",
        "hover:shadow-2xl hover:shadow-primary/10",
        "hover:-translate-y-1 hover:border-primary/30",
        "hover:scale-[1.01]",
        className
      )}
    >
      {/* Animated gradient background */}
      <div className={cn(
        "absolute inset-0 opacity-0 group-hover:opacity-100",
        "bg-gradient-to-br",
        gradient,
        "transition-opacity duration-500",
        "[mask-image:radial-gradient(ellipse_at_top_right,black_20%,transparent_70%)]"
      )} />

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.015] group-hover:opacity-[0.03] transition-opacity duration-500">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }} />
      </div>

      {/* Glowing orb */}
      <div className={cn(
        "absolute -right-8 -top-8 w-24 h-24 rounded-full",
        "bg-gradient-to-br",
        gradient,
        "opacity-20 group-hover:opacity-40 group-hover:scale-150",
        "blur-2xl transition-all duration-500"
      )} />

      {/* Content */}
      <div className="relative p-5">
        <div className="flex items-start gap-4">
          {/* Icon container with glow */}
          <div className="relative">
            <div className={cn(
              "absolute inset-0 rounded-xl",
              "bg-gradient-to-br",
              gradient,
              "opacity-50 blur-lg",
              "group-hover:opacity-80 group-hover:scale-110",
              "transition-all duration-300"
            )} />
            <div className={cn(
              "relative w-12 h-12 rounded-xl flex items-center justify-center",
              "bg-gradient-to-br",
              gradient,
              "text-white shadow-lg",
              "group-hover:scale-110 group-hover:rotate-3",
              "transition-all duration-300"
            )}>
              {icon}
            </div>
          </div>

          {/* Text content */}
          <div className="flex-1 min-w-0">
            {badge && (
              <span className={cn(
                "inline-flex items-center px-2.5 py-1 rounded-md text-[10px] font-semibold uppercase tracking-wider mb-2",
                "bg-gradient-to-r",
                gradient,
                "text-white shadow-sm"
              )}>
                {badge}
              </span>
            )}
            <h3 className="font-semibold text-base leading-snug mb-1.5 group-hover:text-primary transition-colors line-clamp-2">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed group-hover:text-muted-foreground/80 transition-colors">
              {description}
            </p>
          </div>

          {/* Animated arrow */}
          <div className="flex-shrink-0 self-center opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300">
            <div className={cn(
              "w-8 h-8 rounded-full flex items-center justify-center",
              "bg-primary/10",
              "group-hover:bg-primary/20"
            )}>
              <ChevronRight className="w-4 h-4 text-primary" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient line */}
      <div className={cn(
        "absolute bottom-0 left-0 right-0 h-[3px]",
        "bg-gradient-to-r",
        gradient,
        "opacity-60 group-hover:opacity-100",
        "transform origin-left scale-x-0 group-hover:scale-x-100",
        "transition-transform duration-500"
      )} />
    </Link>
  );
}

export function StepCard({
  number,
  title,
  description,
  className,
}: StepCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl",
        "bg-gradient-to-br from-card via-card to-muted/30",
        "border border-border/50",
        "transition-all duration-300 ease-out",
        "hover:shadow-2xl hover:shadow-primary/10",
        "hover:-translate-y-1 hover:border-primary/30",
        "hover:scale-[1.02]",
        className
      )}
    >
      {/* Animated gradient background */}
      <div className={cn(
        "absolute inset-0 opacity-0 group-hover:opacity-100",
        "bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500",
        "transition-opacity duration-500",
        "[mask-image:radial-gradient(ellipse_at_top_right,black_20%,transparent_70%)]"
      )} />

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.015] group-hover:opacity-[0.03] transition-opacity duration-500">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }} />
      </div>

      {/* Glowing orb */}
      <div className={cn(
        "absolute -right-8 -top-8 w-32 h-32 rounded-full",
        "bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500",
        "opacity-20 group-hover:opacity-40 group-hover:scale-150",
        "blur-2xl transition-all duration-500"
      )} />

      {/* Content */}
      <div className="relative p-6">
        {/* Number badge with glow */}
        <div className="relative mb-5 inline-block">
          <div className={cn(
            "absolute inset-0 rounded-xl",
            "bg-gradient-to-br from-indigo-500 to-purple-500",
            "opacity-50 blur-lg",
            "group-hover:opacity-80 group-hover:scale-110",
            "transition-all duration-300"
          )} />
          <div className={cn(
            "relative w-12 h-12 rounded-xl flex items-center justify-center",
            "bg-gradient-to-br from-indigo-500 to-purple-500",
            "text-white font-semibold shadow-lg",
            "group-hover:scale-110 group-hover:rotate-3",
            "transition-all duration-300"
          )}>
            {number}
          </div>
        </div>

        <h3 className="font-semibold text-lg leading-snug mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-muted-foreground/80 transition-colors">
          {description}
        </p>
      </div>

      {/* Bottom gradient line */}
      <div className={cn(
        "absolute bottom-0 left-0 right-0 h-[3px]",
        "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500",
        "opacity-60 group-hover:opacity-100",
        "transform origin-left scale-x-0 group-hover:scale-x-100",
        "transition-transform duration-500"
      )} />
    </div>
  );
}
