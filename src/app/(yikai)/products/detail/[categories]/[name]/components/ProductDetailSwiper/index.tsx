'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface ProductImages {
  name: string;
  image: string;
}

interface ProductSwiperProps {
  images: ProductImages[];
}

const ProductDetailSwiper = (props: ProductSwiperProps) => {
  const { images } = props;
  const isSingleProduct = images?.length === 1;

  return (
    <div className='w-full px-4 py-8 relative'>
      <div className='shadow-xl'>
        <Swiper
          loop={!isSingleProduct}
          speed={600}
          slidesPerView={1}
          modules={isSingleProduct ? [] : [Pagination, Autoplay, Navigation]}
          spaceBetween={30}
          pagination={isSingleProduct ? false : { clickable: true }}
          autoplay={isSingleProduct ? false : { delay: 2000 }}
          navigation={isSingleProduct ? false : true}
        >
          {images.map((item) => (
            <SwiperSlide key={item.name} className='px-[70px] pb-[50px]'>
              <div className='bg-surface rounded-lg overflow-hidden relative aspect-square'>
                <div className='relative w-full h-full flex items-center justify-center'>
                  <Image src={item.image} alt={item.name} className='object-contain w-full h-full' width={400} height={400} sizes='(max-width: 768px) 100vw, 25vw' />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .swiper {
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
        .swiper-button-next,
        .swiper-button-prev {
          color: white;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background-color: var(--heading);
          opacity: 0.3;
          transition: all 0.3s ease;
        }
        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 24px;
        }
        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          opacity: 0.5;
        }
      `}</style>
    </div>
  );
};

export default ProductDetailSwiper;
