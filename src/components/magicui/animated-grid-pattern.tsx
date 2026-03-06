"use client";

import { useEffect, useId, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GridPatternProps {
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  strokeDasharray?: any;
  numSquares?: number;
  className?: string;
  maxOpacity?: number;
  duration?: number;
  repeatDelay?: number;
}

export function GridPattern({
  width = 40,
  height = 40,
  x = -1,
  y = -1,
  strokeDasharray = 0,
  numSquares = 50,
  className,
  maxOpacity = 0.5,
  duration = 4,
  repeatDelay = 0.5,
  ...props
}: GridPatternProps) {
  const id = useId();
  const containerRef = useRef<SVGSVGElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [squares, setSquares] = useState(() => generateSquares(numSquares));

  function getPos(num: number) {
    return Math.floor((num * 10000) % 100);
  }

  function generateSquares(numSquares: number) {
    return Array.from({ length: numSquares }, (_, i) => ({
      x: getPos(i * 17),
      y: getPos(i * 23),
    }));
  }

  const animateSquare = (i: number) => {
    setTimeout(() => {
      setSquares((currentSquares) => {
        const newSquares = [...currentSquares];
        newSquares[i] = {
          ...newSquares[i],
          x: getPos(i * (i + 1) * 17),
          y: getPos(i * (i + 1) * 23),
        };
        return newSquares;
      });
    }, (i * 1000) / 10);
  };

  useEffect(() => {
    if (dimensions.width && dimensions.height) {
      setSquares(generateSquares(numSquares));
    }
  }, [dimensions, numSquares]);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.clientWidth,
          height: containerRef.current.clientHeight,
        });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <svg
      ref={containerRef}
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full",
        className
      )}
      {...props}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path
            d={`M.5 ${height}V0H${width}`}
            fill="none"
            stroke="currentColor"
            strokeDasharray={strokeDasharray}
            className="text-border/50 dark:text-border/30"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
      <svg x={x} y={y} className="overflow-visible">
        {squares.map(({ x, y }, i) => (
          <motion.rect
            initial={{ opacity: 0 }}
            animate={{
              opacity: maxOpacity,
              x: x * (dimensions.width / 100),
              y: y * (dimensions.height / 100),
            }}
            transition={{
              duration,
              repeat: Infinity,
              repeatDelay,
              ease: "easeInOut",
              repeatType: "reverse",
            }}
            key={`${i}-${x}-${y}`}
            width={width - 1}
            height={height - 1}
            fill="currentColor"
            className="text-primary/10 dark:text-primary/5"
          />
        ))}
      </svg>
    </svg>
  );
}

interface AnimatedGridPatternProps {
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  strokeDasharray?: number;
  numSquares?: number;
  className?: string;
  maxOpacity?: number;
  duration?: number;
  repeatDelay?: number;
}

export function AnimatedGridPattern({
  width = 40,
  height = 40,
  x = -1,
  y = -1,
  strokeDasharray = 0,
  numSquares = 50,
  className,
  maxOpacity = 0.5,
  duration = 4,
  repeatDelay = 0.5,
  ...props
}: AnimatedGridPatternProps) {
  const id = useId();
  const containerRef = useRef<SVGSVGElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [squares, setSquares] = useState(() => generateSquares(numSquares));

  function getPos(num: number) {
    return Math.floor((num * 10000) % 100);
  }

  function generateSquares(numSquares: number) {
    return Array.from({ length: numSquares }, (_, i) => ({
      x: getPos(i * 17),
      y: getPos(i * 23),
    }));
  }

  useEffect(() => {
    if (dimensions.width && dimensions.height) {
      setSquares(generateSquares(numSquares));
    }
  }, [dimensions, numSquares]);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.clientWidth,
          height: containerRef.current.clientHeight,
        });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <svg
      ref={containerRef}
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full",
        className
      )}
      {...props}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path
            d={`M.5 ${height}V0H${width}`}
            fill="none"
            stroke="currentColor"
            strokeDasharray={strokeDasharray}
            className="text-border/50 dark:text-border/30"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
      <svg x={x} y={y} className="overflow-visible">
        {squares.map(({ x, y }, i) => (
          <motion.rect
            key={`${i}-${x}-${y}`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: Math.random() * maxOpacity,
              scale: 1,
              x: x * (dimensions.width / 100),
              y: y * (dimensions.height / 100),
            }}
            transition={{
              duration,
              repeat: Infinity,
              repeatDelay,
              ease: "easeInOut",
              repeatType: "reverse",
              delay: i * 0.05,
            }}
            width={width - 1}
            height={height - 1}
            fill="currentColor"
            className="text-primary/10 dark:text-primary/5"
          />
        ))}
      </svg>
    </svg>
  );
}
