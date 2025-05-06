'use client';

import { motion, useAnimation, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect } from 'react';

interface AnimateNumberProps {
  value: number;
  duration?: number;
  className?: string;
}

const AnimateNumber = ({ value, duration = 1, className = '' }: AnimateNumberProps) => {
  const controls = useAnimation();
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    controls.start({
      opacity: [0, 1],
      transition: {
        duration: 0.5,
      },
    });

    const animation = animate(count, value, {
      duration,
      ease: 'easeOut',
    });

    return () => animation.stop();
  }, [controls, count, value, duration]);

  return (
    <motion.div className={className} animate={controls}>
      <motion.span>{rounded}</motion.span>
    </motion.div>
  );
};

export default AnimateNumber;
