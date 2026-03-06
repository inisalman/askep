import { type Variants, type Transition, type Easing } from "framer-motion";

// Common easing curves
export const easeOut: Easing = [0.215, 0.61, 0.355, 1];
export const easeInOut: Easing = [0.65, 0, 0.35, 1];
export const easeIn: Easing = [0.55, 0, 1, 0.45];
export const easeOutBack: Easing = [0.34, 1.56, 0.64, 1];

// Default transition durations
export const fastDuration = 0.2;
export const normalDuration = 0.3;
export const slowDuration = 0.5;
export const verySlowDuration = 0.8;

// Fade variants
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: normalDuration, ease: easeOut },
  },
};

export const fadeOut: Variants = {
  visible: { opacity: 1 },
  hidden: {
    opacity: 0,
    transition: { duration: normalDuration, ease: easeOut },
  },
};

// Slide variants
export const slideUp: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: normalDuration, ease: easeOut },
  },
};

export const slideDown: Variants = {
  hidden: { y: -20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: normalDuration, ease: easeOut },
  },
};

export const slideLeft: Variants = {
  hidden: { x: 20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: normalDuration, ease: easeOut },
  },
};

export const slideRight: Variants = {
  hidden: { x: -20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: normalDuration, ease: easeOut },
  },
};

// Scale variants
export const scaleIn: Variants = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: normalDuration, ease: easeOutBack },
  },
};

export const scaleOut: Variants = {
  visible: { scale: 1, opacity: 1 },
  hidden: {
    scale: 0.95,
    opacity: 0,
    transition: { duration: normalDuration, ease: easeOut },
  },
};

// Blur fade variants
export const blurFade: Variants = {
  hidden: { y: 20, opacity: 0, filter: "blur(8px)" },
  visible: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: slowDuration, ease: easeOut },
  },
};

// Stagger container for sequential animations
export const staggerContainer = (
  staggerDuration = 0.1,
  delay = 0
): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggerDuration,
      delayChildren: delay,
    },
  },
});

// Common item variants for staggered children
export const staggerItem: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: normalDuration,
      ease: easeOut,
    },
  },
};

export const staggerItemBlur: Variants = {
  hidden: { y: 20, opacity: 0, filter: "blur(8px)" },
  visible: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: slowDuration,
      ease: easeOut,
    },
  },
};

export const staggerItemScale: Variants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: normalDuration,
      ease: easeOutBack,
    },
  },
};

// List item variants
export const listItem: Variants = {
  hidden: { x: -20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: normalDuration,
      ease: easeOut,
    },
  },
};

// Card variants
export const cardHover: Variants = {
  rest: {
    scale: 1,
    y: 0,
    transition: { duration: fastDuration },
  },
  hover: {
    scale: 1.02,
    y: -4,
    transition: { duration: normalDuration, ease: easeOut },
  },
};

export const cardTap: Variants = {
  rest: { scale: 1 },
  tap: {
    scale: 0.98,
    transition: { duration: fastDuration },
  },
};

// Icon animation variants
export const iconSpin: Variants = {
  hidden: { rotate: -180, opacity: 0 },
  visible: {
    rotate: 0,
    opacity: 1,
    transition: { duration: slowDuration, ease: easeOut },
  },
};

export const iconBounce: Variants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.2,
    transition: {
      duration: fastDuration,
      ease: easeOutBack,
    },
  },
};

// Page transition variants
export const pageTransition: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: slowDuration,
      ease: easeOut,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: fastDuration,
      ease: easeIn,
    },
  },
};

// Modal variants
export const modalBackdrop: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: normalDuration },
  },
  exit: {
    opacity: 0,
    transition: { duration: fastDuration },
  },
};

export const modalContent: Variants = {
  hidden: { scale: 0.95, opacity: 0, y: 20 },
  visible: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      duration: slowDuration,
      ease: easeOutBack,
    },
  },
  exit: {
    scale: 0.95,
    opacity: 0,
    y: 20,
    transition: { duration: fastDuration, ease: easeIn },
  },
};

// Tooltip variants
export const tooltip: Variants = {
  hidden: { opacity: 0, y: 5, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: fastDuration, ease: easeOut },
  },
  exit: {
    opacity: 0,
    y: 5,
    scale: 0.95,
    transition: { duration: fastDuration, ease: easeIn },
  },
};

// Dropdown variants
export const dropdown: Variants = {
  hidden: { opacity: 0, y: -10, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: fastDuration, ease: easeOut },
  },
  exit: {
    opacity: 0,
    y: -10,
    scale: 0.95,
    transition: { duration: fastDuration, ease: easeIn },
  },
};

// Text reveal variants
export const textReveal: Variants = {
  hidden: { y: "100%" },
  visible: {
    y: 0,
    transition: { duration: normalDuration, ease: easeOut },
  },
};

export const textRevealContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

// Progress bar variants
export const progressBar: Variants = {
  hidden: { width: 0 },
  visible: {
    width: "100%",
    transition: { duration: slowDuration, ease: easeOut },
  },
};

// Helper function to create staggered children
export function createStaggerChildren(
  count: number,
  baseDelay = 0,
  staggerDuration = 0.1
) {
  return Array.from({ length: count }, (_, i) => ({
    delay: baseDelay + i * staggerDuration,
  }));
}

// Common transition presets
export const fastTransition: Transition = {
  duration: fastDuration,
  ease: easeOut,
};

export const normalTransition: Transition = {
  duration: normalDuration,
  ease: easeOut,
};

export const slowTransition: Transition = {
  duration: slowDuration,
  ease: easeOut,
};

export const springTransition: Transition = {
  type: "spring",
  stiffness: 400,
  damping: 25,
  restDelta: 0.001,
};

export const gentleSpring: Transition = {
  type: "spring",
  stiffness: 200,
  damping: 20,
};
