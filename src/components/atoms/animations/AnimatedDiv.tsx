"use client";

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedDivProps {
  children: ReactNode;
  direction?: 'left' | 'right' | 'up' | 'down';
  isScrollAnimation?: boolean;
  transition?: object;
}

const getInitialAnimate = (direction: string, isScrollAnimation: boolean) => {
  const baseInitial = { opacity: 0 };
  
  if (!isScrollAnimation) {
    return {
      ...baseInitial,
      ...(direction === "left" ? { x: -20 } : {}),
      ...(direction === "right" ? { x: 20 } : {}),
      ...(direction === "up" ? { y: -20 } : {}),
      ...(direction === "down" ? { y: 20 } : {}),
    };
  }
  
  return {
    ...baseInitial,
    scale: 0.95,
  };
};

const getAnimate = (direction: string, isScrollAnimation: boolean) => {
  const baseAnimate = { opacity: 1 };
  
  if (!isScrollAnimation) {
    return {
      ...baseAnimate,
      ...(direction === 'left' ? { x: 0 } : {}),
      ...(direction === 'right' ? { x: 0 } : {}),
      ...(direction === 'up' ? { y: 0 } : {}),
      ...(direction === 'down' ? { y: 0 } : {}),
    };
  }

  return {
    ...baseAnimate,
    scale: 1,
  };
};

export const AnimatedDiv = ({
  children,
  direction = 'left',
  isScrollAnimation = false,
  transition = { type: "spring", damping: 15 },
}: AnimatedDivProps) => {
  return (
    <motion.div
      initial={getInitialAnimate(direction, isScrollAnimation)}
      animate={getAnimate(direction, isScrollAnimation)}
      transition={transition}
    >
      {children}
    </motion.div>
  );
};
