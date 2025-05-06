'use client';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';

interface AnimatePrinterProps {
  /** 要显示的文本内容 */
  text: string;
  /**
   * 打字速度，单位毫秒
   * @default 100
   * @example
   * // 每100毫秒打一个字
   * speed={100}
   */
  speed?: number;
  /**
   * 开始打字前的延迟时间，单位秒
   * @default 0
   * @example
   * // 延迟1秒后开始打字
   * delay={1}
   */
  delay?: number;
  /**
   * 自定义样式类名
   * @example
   * className="text-xl font-bold text-blue-500"
   */
  className?: string;
  /**
   * 打字完成后的回调函数
   * @example
   * onComplete={() => console.log('打字完成！')}
   */
  onComplete?: () => void;
}

/**
 * 打字机效果组件
 * @example
 * // 基本使用
 * <AnimatePrinter text="Hello, World!" />
 *
 * // 自定义速度和延迟
 * <AnimatePrinter
 *   text="这是一个打字机效果"
 *   speed={100}
 *   delay={1}
 * />
 *
 * // 添加样式和完成回调
 * <AnimatePrinter
 *   text="打字完成后会触发回调"
 *   className="text-2xl font-bold"
 *   onComplete={() => console.log('打字完成！')}
 * />
 */
const AnimatePrinter = ({ text, speed = 100, delay = 0, className = '', onComplete }: AnimatePrinterProps) => {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    let currentIndex = 0;
    let timeout: NodeJS.Timeout;

    const startTyping = () => {
      timeout = setTimeout(() => {
        if (currentIndex < text.length) {
          setDisplayText(text.slice(0, currentIndex + 1));
          currentIndex++;
          startTyping();
        } else {
          setIsComplete(true);
          controls.start({ opacity: 1 });
          onComplete?.();
        }
      }, speed);
    };

    // 开始动画
    controls.start({
      opacity: 0.5,
      transition: { duration: 0.5 },
    });

    // 延迟开始打字
    const delayTimeout = setTimeout(() => {
      startTyping();
    }, delay * 1000);

    return () => {
      clearTimeout(timeout);
      clearTimeout(delayTimeout);
    };
  }, [text, speed, delay, controls, onComplete]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={controls} className={className}>
      <span>
        {displayText}
        {!isComplete && <motion.span animate={{ opacity: [1, 0] }} transition={{ duration: 0.5, repeat: Infinity }} className='inline-block w-[2px] h-[1em] bg-current ml-[2px]' />}
      </span>
    </motion.div>
  );
};

export default AnimatePrinter;
