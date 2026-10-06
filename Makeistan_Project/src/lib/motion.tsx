"use client";

import React from "react";
import { motion, Variant, Variants, useReducedMotion } from "framer-motion";

export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.2, 0.8, 0.2, 1] } },
};

export const subtleScaleVariant: Variants = {
  hidden: { opacity: 0, scale: 0.98 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

export function MotionContainer({
  as: Component = motion.div,
  children,
  className,
  ...rest
}: React.ComponentProps<any> & { as?: any; className?: string }) {
  const shouldReduce = useReducedMotion();
  if (shouldReduce) {
    return (
      <div className={className} {...rest}>
        {children}
      </div>
    );
  }

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={containerVariants}
      {...rest}
    >
      {children}
    </Component>
  );
}

export function MotionItem({ children, variants = fadeUpVariant, ...rest }: any) {
  const shouldReduce = useReducedMotion();
  if (shouldReduce) return <div {...rest}>{children}</div>;
  return (
    <motion.div variants={variants} {...rest}>
      {children}
    </motion.div>
  );
}

export const hoverLift = {
  whileHover: { y: -4, boxShadow: "0 10px 24px rgba(2,6,23,0.08)", transition: { duration: 0.25 } },
  whileTap: { y: -2, transition: { duration: 0.15 } },
};
