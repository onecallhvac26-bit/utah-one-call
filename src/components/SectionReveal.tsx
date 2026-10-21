"use client";

import { useSyncExternalStore, type ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

type SectionRevealProps = {
  children: ReactNode;
  index: number;
};

const REVEAL_EASE = [0.22, 1, 0.36, 1] as const;
const VISIBLE_STATE = { opacity: 1, x: 0 } as const;

function subscribeToClientReady() {
  return () => undefined;
}

/** Alternates major page sections in from the right, then the left. */
export function SectionReveal({ children, index }: SectionRevealProps) {
  const reduceMotion = useReducedMotion();
  // The server snapshot stays visible; motion activates after hydration completes.
  const animationEnabled = useSyncExternalStore(
    subscribeToClientReady,
    () => true,
    () => false,
  );
  const startsOnRight = index % 2 === 0;
  const shouldAnimate = animationEnabled && !reduceMotion;

  return (
    <motion.div
      data-scroll-reveal={startsOnRight ? "right" : "left"}
      initial={false}
      animate={
        shouldAnimate
          ? { opacity: 0, x: startsOnRight ? 64 : -64 }
          : VISIBLE_STATE
      }
      whileInView={shouldAnimate ? VISIBLE_STATE : undefined}
      viewport={{ once: true, amount: 0.08 }}
      transition={
        shouldAnimate
          ? { duration: 0.72, ease: REVEAL_EASE }
          : { duration: 0 }
      }
    >
      {children}
    </motion.div>
  );
}
