'use client';
import { motion, Variants, useInView } from 'framer-motion';
import { ReactNode, useRef } from 'react';

type AnimationType = 'fade' | 'slideUp' | 'slideDown' | 'slideLeft' | 'slideRight' | 'scale' | 'bounce' | 'flip';

interface EnterAnimateProps {
  /** 要添加动画效果的内容 */
  children: ReactNode;
  /**
   * 动画类型
   * - fade: 淡入效果
   * - slideUp: 从下往上滑入
   * - slideDown: 从上往下滑入
   * - slideLeft: 从右往左滑入
   * - slideRight: 从左往右滑入
   * - scale: 缩放效果
   * - bounce: 弹跳效果
   * - flip: 翻转效果
   * @default 'fade'
   */
  type?: AnimationType;
  /**
   * 动画延迟时间，单位秒
   * @default 0.5
   * @example
   * // 延迟1秒后开始动画
   * delay={1}
   */
  delay?: number;
  /**
   * 动画持续时间，单位秒
   * @default 1
   * @example
   * // 动画持续2秒
   * duration={2}
   */
  duration?: number;
  /**
   * 自定义样式类名
   * @example
   * className="text-xl font-bold"
   */
  className?: string;
  /**
   * 触发动画的视口阈值（0-1之间）
   * 表示元素进入视口的比例达到多少时触发动画
   * @default 0.2
   * @example
   * // 当元素20%进入视口时触发动画
   * threshold={0.2}
   * // 当元素完全进入视口时触发动画
   * threshold={1}
   */
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

/**
 * 进入动画组件
 * 当元素进入视口时触发动画效果
 * @example
 * // 基本使用 - 淡入效果
 * <EnterAnimate>
 *   <div>内容</div>
 * </EnterAnimate>
 *
 * // 从下往上滑入
 * <EnterAnimate type="slideUp">
 *   <div>从下往上滑入的内容</div>
 * </EnterAnimate>
 *
 * // 自定义动画时间和延迟
 * <EnterAnimate
 *   type="bounce"
 *   duration={1.5}
 *   delay={0.5}
 * >
 *   <div>弹跳效果的内容</div>
 * </EnterAnimate>
 *
 * // 自定义触发阈值
 * <EnterAnimate
 *   type="flip"
 *   threshold={0.5}
 * >
 *   <div>当50%进入视口时触发翻转效果</div>
 * </EnterAnimate>
 */
const EnterAnimate = ({ children, type = 'fade', delay = 0.5, duration = 1, className = '', threshold = 0.2 }: EnterAnimateProps) => {
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
