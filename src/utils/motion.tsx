"use client";

// This file is a workaround for the "export *" issue with framer-motion in Next.js client boundaries
// Re-exporting the needed components from framer-motion with named exports

import {
  motion,
  AnimatePresence,
  LazyMotion,
  domAnimation,
  useInView,
  useAnimation,
  useScroll,
  useTransform,
  animate,
  useReducedMotion,
  m,
} from 'framer-motion';

export {
  motion,
  AnimatePresence,
  LazyMotion,
  domAnimation,
  useInView,
  useAnimation,
  useScroll,
  useTransform,
  animate,
  useReducedMotion,
  m,
};

// Add any other framer-motion exports you need in your project here

// Shared, subtle variants to prevent jarring animations and layout shifts
export const fadeInUp = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.25, ease: 'easeOut' } },
};

export const stableSlide = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.2, ease: 'easeOut' } },
};

export const noLayoutShift = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.2 } },
};
