import type { Variants } from "framer-motion";

export const fadeInUp = (delay = 0, duration = 0.6): Variants => ({
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay, duration, ease: "easeOut" },
  },
});

export const fadeIn = (delay = 0, duration = 0.6): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delay, duration, ease: "easeOut" },
  },
});

export const pageTransition: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    y: -16,
    transition: { duration: 0.35, ease: "easeInOut" },
  },
};

export const scaleIn = (delay = 0, duration = 0.6): Variants => ({
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { delay, duration, ease: "easeOut" },
  },
});

export const staggerChildren = (stagger = 0.12, delayChildren = 0): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger,
      delayChildren,
    },
  },
});

export const viewportSettings = { once: true, amount: 0.2 } as const;
