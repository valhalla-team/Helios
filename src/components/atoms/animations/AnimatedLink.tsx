"use client";

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedLinkProps {
  href: string;
  children: ReactNode;
  whileHover?: object;
  whileTap?: object;
  className?: string;
  onClick?: () => void;
}

export const AnimatedLink = ({
  href,
  children,
  whileHover = { scale: 1.05 },
  whileTap = { scale: 0.95 },
  className = "",
  onClick,
}: AnimatedLinkProps) => {
  return (
    <motion.a
      href={href}
      className={className}
      whileHover={whileHover}
      whileTap={whileTap}
      onClick={onClick}
    >
      {children}
    </motion.a>
  );
};
