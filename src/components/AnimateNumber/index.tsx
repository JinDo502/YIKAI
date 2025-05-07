'use client';

import { motion, useAnimation, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface AnimateNumberProps {
  value: number;
  // 动画延迟
  delay?: number;
  // 动画持续时间
  duration?: number;
  // 动画类名
  className?: string;
  // 进入视图才开始动画
  triggerOnView?: boolean;
}

const AnimateNumber = ({ value, duration = 1, className = '', delay = 0, triggerOnView = false }: AnimateNumberProps) => {
  const controls = useAnimation();
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (triggerOnView && !isInView) return;

    controls.start({
      opacity: [0, 1],
      transition: {
        duration: 0.5,
        delay: 0,
      },
    });

    const animation = animate(count, value, {
      duration,
      ease: 'easeOut',
      delay,
    });

    return () => animation.stop();
  }, [controls, count, value, duration, delay, triggerOnView, isInView]);

  return (
    <motion.div ref={ref} className={className} animate={controls}>
      <motion.span>{rounded}</motion.span>
    </motion.div>
  );
};

export default AnimateNumber;
