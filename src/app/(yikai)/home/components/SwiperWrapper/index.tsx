'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import ContentCard from '@/components/ContentCard';
import topCategories from '@/public/HomeConstant/Top Categories';
import Link from 'next/link';

const ProductSwiperContent = () => {
  return (
    <div className='w-full md:px-4 md:py-8 relative'>
      <div>
        <Swiper
          loop
          speed={600}
          slidesPerView='auto'
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2000 }}
          breakpoints={{
            768: { slidesPerView: 4, spaceBetween: 20 },
            0: { slidesPerView: 1, spaceBetween: 10 },
          }}
        >
          {topCategories.map((product) => (
            <SwiperSlide key={product.name}>
              <Link href={product.url}>
                <div className='bg-surface rounded-lg overflow-hidden relative group cursor-pointer aspect-square'>
                  <div className='relative w-full h-full transition-transform duration-300 group-hover:scale-110'>
                    <Image src={product.image} alt={product.name} className='object-contain w-full h-full' width={400} height={400} sizes='(max-width: 768px) 100vw, 25vw' />
                  </div>
                  <div className='opacity-0 group-hover:opacity-100 transition-all duration-300 absolute inset-0 bg-black/50 flex flex-col justify-end p-4'>
                    <h3 className='text-center m-auto text-[var(--accent)] text-2xl font-bold'>{product.name}</h3>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .swiper {
          padding-bottom: 50px;
          position: relative;
        }
        .swiper-pagination {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 4px;
        }
        .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background-color: transparent;
          border: 1px solid var(--accent);
          opacity: 1;
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 0;
          margin: 0;
        }
        .swiper-pagination-bullet-active {
          background-color: var(--accent);
        }
      `}</style>
    </div>
  );
};

const ProductSwiper = () => {
  return (
    <ContentCard
      title='Top Categories'
      subTitle='Explore our most popular parts and products for all your needs.'
      titlePosition='center'
      backgroundColor='white'
      content={<ProductSwiperContent />}
      animationProps={{ type: 'fade', delay: 0.5, duration: 1, threshold: 0.3 }}
    />
  );
};
export default ProductSwiper;
