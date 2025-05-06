'use client';
import { motion, Variants, useInView } from 'framer-motion';
import { ReactNode, useRef } from 'react';

type AnimationType = 'fade' | 'slideUp' | 'slideDown' | 'slideLeft' | 'slideRight' | 'scale' | 'bounce' | 'flip';

interface EnterAnimateProps {
  children: ReactNode;
  type?: AnimationType;
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
}

const variants: Record<AnimationType, Variants> = {
  fade: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
  },
  slideUp: {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  },
  slideDown: {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  },
  slideLeft: {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  },
  slideRight: {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  },
  bounce: {
    hidden: { opacity: 0, scale: 0.3 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        type: 'spring',
        stiffness: 260,
        damping: 20,
      },
    },
  },
  flip: {
    hidden: {
      opacity: 0,
      rotateX: 90,
      transformOrigin: 'top',
    },
    visible: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.5,
        type: 'spring',
        stiffness: 100,
      },
    },
  },
};

const EnterAnimate = ({ children, type = 'fade', delay = 0.5, duration = 1, className = '', threshold = 0.3 }: EnterAnimateProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: threshold,
  });

  const selectedVariant = variants[type];

  // 更新所有动画的持续时间
  const updatedVariant: Variants = {
    hidden: selectedVariant.hidden,
    visible: {
      ...selectedVariant.visible,
      transition: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ...(selectedVariant.visible as any).transition,
        duration,
        delay,
      },
    },
  };

  return (
    <motion.div ref={ref} initial='hidden' animate={isInView ? 'visible' : 'hidden'} variants={updatedVariant} className={className}>
      {children}
    </motion.div>
  );
};

export default EnterAnimate;
