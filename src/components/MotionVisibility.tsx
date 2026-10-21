"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion, type HTMLMotionProps } from "motion/react";

type MotionVisibilityProps = Omit<
  HTMLMotionProps<"div">,
  "animate" | "children" | "initial" | "transition"
> & {
  children: ReactNode;
  direction: "bottom" | "right";
  visible: boolean;
};

const SMOOTH_EASE = [0.22, 1, 0.36, 1] as const;

export function MotionVisibility({
  children,
  direction,
  visible,
  ...props
}: MotionVisibilityProps) {
  const reduceMotion = useReducedMotion();
  const hiddenPosition = direction === "right" ? { x: "100%" } : { y: "110%" };
  const visiblePosition = direction === "right" ? { x: 0 } : { y: 0 };

  return (
    <motion.div
      {...props}
      aria-hidden={props["aria-hidden"] ?? !visible}
      inert={visible ? undefined : true}
      initial={false}
      animate={visible ? visiblePosition : hiddenPosition}
      transition={
        reduceMotion
          ? { duration: 0 }
          : { duration: 0.42, ease: SMOOTH_EASE }
      }
    >
      {children}
    </motion.div>
  );
}
