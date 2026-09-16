import type { CSSProperties, ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';

// Equivalente a gsap "power3.out" — mismo perfil de salida que tenía la versión GSAP.
const EASE_POWER3_OUT = [0.215, 0.61, 0.355, 1] as const;

interface AnimatedContentProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  distance?: number;
  direction?: 'vertical' | 'horizontal';
  reverse?: boolean;
  duration?: number;
  initialOpacity?: number;
  animateOpacity?: boolean;
  scale?: number;
  /** Fracción del elemento visible que dispara la animación (0–1). */
  threshold?: number;
  delay?: number;
}

export default function AnimatedContent({
  children,
  className = '',
  style,
  distance = 100,
  direction = 'vertical',
  reverse = false,
  duration = 0.8,
  initialOpacity = 0,
  animateOpacity = true,
  scale = 1,
  threshold = 0.1,
  delay = 0,
}: AnimatedContentProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  }

  const axis = direction === 'horizontal' ? 'x' : 'y';
  const offset = reverse ? -distance : distance;

  return (
    <motion.div
      className={className}
      style={style}
      initial={{
        [axis]: offset,
        scale,
        opacity: animateOpacity ? initialOpacity : 1,
      }}
      whileInView={{ [axis]: 0, scale: 1, opacity: 1 }}
      viewport={{ once: true, amount: Math.min(Math.max(threshold, 0), 1) }}
      transition={{ duration, delay, ease: EASE_POWER3_OUT }}
    >
      {children}
    </motion.div>
  );
}
