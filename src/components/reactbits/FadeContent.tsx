import type { CSSProperties, ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';

// Equivalente a gsap "power2.out".
const EASE_POWER2_OUT = [0.25, 0.46, 0.45, 0.94] as const;

// La API original aceptaba milisegundos (600) o segundos (0.6); se conserva.
const toSeconds = (value: number) => (value > 10 ? value / 1000 : value);

interface FadeContentProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  blur?: boolean;
  duration?: number;
  delay?: number;
  /** Fracción del elemento visible que dispara la animación (0–1). */
  threshold?: number;
  initialOpacity?: number;
}

export default function FadeContent({
  children,
  className = '',
  style,
  blur = false,
  duration = 1000,
  delay = 0,
  threshold = 0.1,
  initialOpacity = 0,
}: FadeContentProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      style={style}
      initial={{
        opacity: initialOpacity,
        filter: blur ? 'blur(10px)' : 'blur(0px)',
      }}
      whileInView={{ opacity: 1, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: Math.min(Math.max(threshold, 0), 1) }}
      transition={{
        duration: toSeconds(duration),
        delay: toSeconds(delay),
        ease: EASE_POWER2_OUT,
      }}
    >
      {children}
    </motion.div>
  );
}
