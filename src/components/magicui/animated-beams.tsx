"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useEffect, useId, useState } from "react";

interface BeamProps {
  className?: string;
  duration?: number;
  delay?: number;
  reverse?: boolean;
}

export function AnimatedBeam({
  className,
  duration = 2,
  delay = 0,
  reverse = false,
}: BeamProps) {
  return (
    <motion.div
      className={cn(
        "absolute h-[2px] w-[2px] rounded-full bg-primary shadow-[0_0_8px_2px_rgba(20,184,166,0.6)]",
        className
      )}
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0, 1, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        repeatDelay: 0.5,
        ease: "easeInOut",
      }}
    />
  );
}

interface AnimatedBeamsProps {
  className?: string;
  numBeams?: number;
  beamDuration?: number;
  reverse?: boolean;
}

export function AnimatedBeams({
  className,
  numBeams = 3,
  beamDuration = 2,
  reverse = false,
}: AnimatedBeamsProps) {
  const id = useId();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      const element = document.getElementById(`beams-${id}`);
      if (element) {
        setDimensions({
          width: element.clientWidth,
          height: element.clientHeight,
        });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [id]);

  const generateBeamPath = (index: number) => {
    const totalBeams = numBeams;
    const spacing = dimensions.width / (totalBeams + 1);
    const startX = spacing * (index + 1);

    return {
      startX,
      endX: startX,
      startY: 0,
      endY: dimensions.height,
    };
  };

  return (
    <div
      id={`beams-${id}`}
      className={cn("absolute inset-0 overflow-hidden", className)}
    >
      <svg
        className="absolute inset-0 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={`beam-gradient-${id}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
          </linearGradient>
        </defs>
        {Array.from({ length: numBeams }).map((_, i) => {
          const beam = generateBeamPath(i);
          return (
            <motion.line
              key={i}
              x1={beam.startX}
              y1={beam.startY}
              x2={beam.endX}
              y2={beam.endY}
              stroke={`url(#beam-gradient-${id})`}
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: 1,
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: beamDuration,
                delay: i * 0.5,
                repeat: Infinity,
                repeatDelay: 1,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </svg>
    </div>
  );
}

interface ConnectionBeamsProps {
  className?: string;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  numBeams?: number;
  delay?: number;
}

export function ConnectionBeams({
  className,
  startX,
  startY,
  endX,
  endY,
  numBeams = 3,
  delay = 0,
}: ConnectionBeamsProps) {
  const id = useId();

  return (
    <div className={cn("absolute pointer-events-none", className)}>
      <svg
        className="absolute inset-0 h-full w-full overflow-visible"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={`connection-gradient-${id}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="1" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
          </linearGradient>
        </defs>
        {Array.from({ length: numBeams }).map((_, i) => (
          <motion.line
            key={i}
            x1={startX}
            y1={startY}
            x2={endX}
            y2={endY}
            stroke={`url(#connection-gradient-${id})`}
            strokeWidth="1.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: 1,
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 1.5,
              delay: delay + i * 0.3,
              repeat: Infinity,
              repeatDelay: 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>
    </div>
  );
}
