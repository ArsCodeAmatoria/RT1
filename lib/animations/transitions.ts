import type { Transition } from "framer-motion";

import { durations, easings } from "./variants";

export const pageTransition: Transition = {
  duration: durations.slow,
  ease: easings.outExpo,
};

export const overlayTransition: Transition = {
  duration: durations.base,
  ease: easings.inOutSmooth,
};

export const hoverLift = {
  y: -2,
  transition: { duration: durations.fast, ease: easings.outExpo },
} as const;

export const hoverLiftCard = {
  y: -4,
  transition: { duration: durations.base, ease: easings.outExpo },
} as const;

export const hoverLiftMedia = {
  y: -6,
  transition: { duration: 0.3, ease: easings.outExpo },
} as const;

export const tapPress = {
  scale: 0.98,
  transition: { duration: durations.fast, ease: easings.inOutSmooth },
} as const;

export const buttonHover = {
  y: -1,
  transition: { duration: durations.fast, ease: easings.outExpo },
} as const;

export const viewportOnce = {
  once: true,
  amount: 0.2,
  margin: "0px 0px -10% 0px",
} as const;

export const viewportImage = {
  once: true,
  amount: 0.25,
  margin: "0px 0px -8% 0px",
} as const;
