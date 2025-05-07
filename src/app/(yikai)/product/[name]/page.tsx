/* eslint-disable @typescript-eslint/no-explicit-any */
// 产品详情页

import productsMap from '@/public/ProductsConstant';
import ProductDetailSwiper from './components/ProductDetailSwiper';
import ProductInformation from './components/ProductInformation';
import PageBanner from '@/components/PageBanner';
import ImagePreview from './components/ImagePreview';
import EnterAnimate from '@/components/EnterAnimate';

export async function generateStaticParams() {
  const data: { name: string }[] = [];

  productsMap.forEach((item) => {
    item.products.forEach((product) => {
      data.push({ name: product.model });
    });
  });

  return data;
}

interface ProductDetailProps {
  params: Promise<{ name: string }>;
}

export async function generateMetadata({ params }: ProductDetailProps) {
  const { name: _name } = await params;
  const name = decodeURIComponent(_name);
  return {
    title: `YIKAI-${name}`,
    description: `YIKAI-${name}`,
  };
}

const ProductDetail = async ({ params }: ProductDetailProps) => {
  const { name: _name } = await params;

  const name = decodeURIComponent(_name);

  let data: any = {};

  let categories: string[] = [];

  productsMap.forEach((item) => {
    item.products.forEach((product) => {
      if (product.name === name) {
        data = product;
        categories = item.name;
      }
    });
  });

  const colSpan = `col-span-${data?.images?.secondary?.length && data?.images?.secondary?.length > 1 ? '1' : '2'}`;

  return (
    <div className='bg-white'>
      <PageBanner src='/images/product/header.jpg' alt={`${name}`} title='Products' />
      <div className='flex flex-col gap-4 py-5 md:py-15 md:max-w-7xl mx-auto px-4 md:px-0'>
        <div className='grid grid-cols-12 gap-4 flex items-center flex-col md:flex-row'>
          <EnterAnimate type='scale' className='col-span-12 md:col-span-7'>
            <ProductDetailSwiper images={data?.images?.main?.map((image: string) => ({ name: image, image: image })) || []} />
          </EnterAnimate>
          <div className='col-span-12 md:col-span-5'>
            <ProductInformation data={data} categories={categories} />
          </div>
        </div>

        {data && data.images.secondary.length > 0 && (
          <div className='grid grid-cols-2 gap-4 mt-2 md:mt-4'>
            {data?.images?.secondary?.map((item: string) => (
              <EnterAnimate type='slideUp' key={item} className={`${colSpan} shadow-[0_2px_30px_rgba(0,0,0,0.1)] flex items-center`}>
                <ImagePreview image={item} />
              </EnterAnimate>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
