import type { Transition, Variants } from "framer-motion";

/** Shared easing curves — engineered, precise motion. */
export const easings = {
  outExpo: [0.16, 1, 0.3, 1] as const,
  inOutSmooth: [0.4, 0, 0.2, 1] as const,
  outQuart: [0.25, 1, 0.5, 1] as const,
  springSoft: { type: "spring", stiffness: 280, damping: 28 } as const,
  springSnappy: { type: "spring", stiffness: 420, damping: 32 } as const,
};

export const durations = {
  instant: 0.08,
  fast: 0.15,
  base: 0.25,
  slow: 0.45,
  slower: 0.7,
} as const;

export const defaultTransition: Transition = {
  duration: durations.base,
  ease: easings.outExpo,
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: defaultTransition,
  },
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: durations.slow,
      ease: easings.outExpo,
    },
  },
};

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: durations.slow,
      ease: easings.outExpo,
    },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.985 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: durations.base,
      ease: easings.outExpo,
    },
  },
};

export const softRise: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: durations.slower,
      ease: easings.outExpo,
    },
  },
};

export const slideInFromLeft: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: durations.slow,
      ease: easings.outExpo,
    },
  },
};

export const slideInFromRight: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: durations.slow,
      ease: easings.outExpo,
    },
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.06,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: durations.slow,
      ease: easings.outExpo,
    },
  },
};

export const reducedMotionVariants: Variants = {
  hidden: { opacity: 1 },
  visible: { opacity: 1 },
};

/** Soft page enter — opacity + minimal rise. */
export const pageEnter: Variants = {
  initial: { opacity: 0, y: 10 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: durations.slow,
      ease: easings.outExpo,
    },
  },
};

/** Soft clip + scale image reveal — transform/clip only. */
export const imageReveal: Variants = {
  hidden: { clipPath: "inset(6% 6% 6% 6%)", scale: 1.03 },
  visible: {
    clipPath: "inset(0% 0% 0% 0%)",
    scale: 1,
    transition: {
      duration: durations.slower,
      ease: easings.outExpo,
    },
  },
};

/** Masked line rise for headlines. */
export const textRevealLine: Variants = {
  hidden: { y: "110%" },
  visible: {
    y: "0%",
    transition: {
      duration: durations.slower,
      ease: easings.outExpo,
    },
  },
};

export const textRevealContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.04,
    },
  },
};

/** Word-level fade/rise for supporting copy. */
export const textRevealWord: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: durations.slow,
      ease: easings.outExpo,
    },
  },
};
