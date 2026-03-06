"use client";

import { motion, useInView, Transition } from "framer-motion";
import { useRef, Children } from "react";
import { cn } from "@/lib/utils";

interface BlurFadeProps {
  children: React.ReactNode;
  className?: string;
  variant?: {
    hidden: { y: number; opacity: number; filter: string };
    visible: { y: number; opacity: number; filter: string };
  };
  duration?: number;
  delay?: number;
  offset?: number;
  direction?: "up" | "down" | "left" | "right";
  inView?: boolean;
  inViewOnce?: boolean;
  threshold?: number;
  transition?: Transition;
}

export function BlurFade({
  children,
  className,
  variant = {
    hidden: { y: 20, opacity: 0, filter: "blur(8px)" },
    visible: { y: 0, opacity: 1, filter: "blur(0px)" },
  },
  duration = 0.5,
  delay = 0,
  offset = 0,
  direction = "up",
  inView = false,
  inViewOnce = true,
  threshold = 0.1,
  transition,
}: BlurFadeProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inViewResult = useInView(ref, {
    once: inViewOnce,
    amount: threshold,
  });
  const isInView = !inView || inViewResult;

  const defaultVariants = {
    hidden: () => ({
      y: direction === "up" ? offset : direction === "down" ? -offset : 0,
      x: direction === "left" ? offset : direction === "right" ? -offset : 0,
      opacity: 0,
      filter: "blur(8px)",
    }),
    visible: () => ({
      y: 0,
      x: 0,
      opacity: 1,
      filter: "blur(0px)",
    }),
  };

  const computedVariants = {
    hidden: variant.hidden || defaultVariants.hidden,
    visible: variant.visible || defaultVariants.visible,
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={computedVariants}
      transition={
        transition || {
          duration,
          delay,
          ease: "easeOut",
        }
      }
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

interface BlurFadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

export function BlurFadeIn({
  children,
  className,
  delay = 0,
  duration = 0.6,
}: BlurFadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
      animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  staggerDuration?: number;
}

export function StaggerContainer({
  children,
  className,
  delay = 0,
  staggerDuration = 0.1,
}: StaggerContainerProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.5,
        delay,
      }}
      className={cn(className)}
    >
      {Children.map(children, (child, index) => (
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: 0.5,
            delay: delay + index * staggerDuration,
            ease: "easeOut",
          }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
