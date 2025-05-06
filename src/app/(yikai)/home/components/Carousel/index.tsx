'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface CarouselProps {
  interval?: number;
}

const images = ['/images/hero-carousel/1.jpg', '/images/hero-carousel/2.jpg', '/images/hero-carousel/3.jpg', '/images/hero-carousel/4.jpg', '/images/hero-carousel/5.jpg'];

const Carousel = ({ interval = 5000 }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const timerRef = useRef<ReturnType<typeof setInterval>>(undefined);
  const isTransitioning = useRef(false);

  // 自动轮播效果
  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(timerRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [interval]);

  const startAutoSlide = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(() => {
      if (!isTransitioning.current) {
        nextSlide();
      }
    }, interval);
  };

  // 处理无缝循环
  useEffect(() => {
    if (currentIndex === images.length) {
      isTransitioning.current = true;
      const timer = setTimeout(() => {
        setTransitionEnabled(false);
        setCurrentIndex(0);
        requestAnimationFrame(() => {
          setTransitionEnabled(true);
          isTransitioning.current = false;
        });
      }, 500);
      return () => clearTimeout(timer);
    } else if (currentIndex === -1) {
      isTransitioning.current = true;
      const timer = setTimeout(() => {
        setTransitionEnabled(false);
        setCurrentIndex(images.length - 1);
        requestAnimationFrame(() => {
          setTransitionEnabled(true);
          isTransitioning.current = false;
        });
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [currentIndex]);

  // 上一张
  const prevSlide = () => {
    if (isTransitioning.current) return;
    startAutoSlide();
    setCurrentIndex((prev) => prev - 1);
  };

  // 下一张
  const nextSlide = () => {
    if (isTransitioning.current) return;
    startAutoSlide();
    setCurrentIndex((prev) => prev + 1);
  };

  return (
    <div className='relative w-screen min-h-screen overflow-hidden'>
      {/* 轮播图 */}
      <div
        className={`absolute h-full flex inset-0 ${transitionEnabled ? 'transition-transform duration-500 ease-in-out' : ''}`}
        style={{ transform: `translateX(-${(currentIndex + 1) * 100}%)` }}
      >
        {/* 在开头添加最后一张图片 */}
        <div className='w-full h-full flex-shrink-0 relative'>
          <Image fill className='object-cover' src={images[images.length - 1]} alt='Last Slide' sizes='100vw' />
          <div className='w-full h-full bg-background opacity-[.8]'></div>
        </div>

        {/* 主要图片 */}
        {images.map((image, index) => (
          <div key={index} className='w-full h-full flex-shrink-0 relative'>
            <Image fill className='object-cover' src={image} alt={`Slide ${index}`} priority={index === currentIndex} sizes='100vw' />
            <div className='w-full h-full bg-background opacity-[.8]'></div>
          </div>
        ))}

        {/* 在末尾添加第一张图片 */}
        <div className='w-full h-full flex-shrink-0 relative'>
          <Image fill className='object-cover' src={images[0]} alt='First Slide' sizes='100vw' />
          <div className='w-full h-full bg-background opacity-[.8]'></div>
        </div>
      </div>

      {/* 轮播图上方的内容 */}
      <div className='relative max-w-7xl m-auto min-h-screen flex flex-col items-center'>
        <div className='flex flex-col items-center m-auto w-[60%] pt-[110px] pb-[60px] px-12 text-center text-white'>
          <h2 className='relative mb-8 pb-8 text-6xl font-bold after:content-[""] after:block after:w-[80px] after:h-[4px] after:bg-[var(--accent)] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2'>
            Welcome to <br /> YIKAI
          </h2>
          <p className='text-xl opacity-80 font-default'>EXPORT DELIVERS PREMIUM HYDRAULIC SYSTEMS FOR CONSTRUCTION MACHINERY</p>
          <Link href='/about'>
            <button className='inline-block mt-6 text-base font-bold font-roboto text-white px-10 py-3 rounded-full hover:bg-[var(--accent)] hover:text-black transition-colors border-[2px] border-[var(--accent)]'>
              Explore more
            </button>
          </Link>
        </div>
      </div>

      {/* 左右控制按钮 */}
      <button
        onClick={prevSlide}
        className='absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 text-white/50 h-12 w-12 text-2xl rounded-full hover:bg-black/50 transition-colors'
        aria-label='Previous slide'
      >
        <i className='bi bi-arrow-left-short'></i>
      </button>
      <button
        onClick={nextSlide}
        className='absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 text-white/50 h-12 w-12 text-2xl rounded-full hover:bg-black/50 transition-colors'
        aria-label='Next slide'
      >
        <i className='bi bi-arrow-right-short'></i>
      </button>
    </div>
  );
};

export default Carousel;
