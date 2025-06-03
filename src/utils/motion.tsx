"use client";

// This file is a workaround for the "export *" issue with framer-motion in Next.js client boundaries
// Re-exporting the needed components from framer-motion with named exports

import {
  motion,
  AnimatePresence,
  useInView,
  useAnimation,
  useScroll,
  useTransform,
  animate,
  m,
} from 'framer-motion';

export {
  motion,
  AnimatePresence,
  useInView,
  useAnimation,
  useScroll,
  useTransform,
  animate,
  m,
};

// Add any other framer-motion exports you need in your project here
