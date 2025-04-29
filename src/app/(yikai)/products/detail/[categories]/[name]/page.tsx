// 产品详情页

import productsMap from '@/public/ProductsConstant/type';
import ProductDetailSwiper from './components/ProductDetailSwiper';
import ProductInformation from './components/ProductInformation';
import PageBanner from '@/components/PageBanner';
import ImagePreview from './components/ImagePreview';
type productType = keyof typeof productsMap;

export async function generateStaticParams() {
  const data = [];
  for (const categories of Object.keys(productsMap)) {
    for (const product of productsMap[categories as productType]) {
      data.push({ name: product.model, categories: categories });
    }
  }
  return data;
}

interface ProductDetailProps {
  params: Promise<{ name: string; categories: string }>;
}

export async function generateMetadata({ params }: ProductDetailProps) {
  const { name, categories: _categories } = await params;
  const categories = decodeURIComponent(_categories) as productType;
  return {
    title: `YIKAI-${name}`,
    description: `YIKAI-${categories}-${name}`,
  };
}

const ProductDetail = async ({ params }: ProductDetailProps) => {
  const { name, categories: _categories } = await params;

  const categories = decodeURIComponent(_categories) as productType;

  const data = productsMap[categories]?.find((item) => item?.name === name);

  return (
    <div className='bg-white'>
      <PageBanner src='/images/product/header.jpg' alt={`${categories}-${name}`} title={name.toLocaleUpperCase()} />
      <div className='flex flex-col gap-4 py-15 max-w-7xl mx-auto'>
        <div className='grid grid-cols-12 gap-4 flex items-center'>
          <div className='col-span-8'>
            <ProductDetailSwiper images={data?.images?.main?.map((image) => ({ name: image, image: image })) || []} />
          </div>
          <div className='col-span-4 '>
            <ProductInformation data={data} />
          </div>
        </div>

        {data && data.images.secondary.length > 0 && (
          <div className='grid grid-cols-12 gap-4'>
            {data?.images?.secondary?.map((item) => (
              <div key={item} className='col-span-6 shadow-[0_2px_30px_rgba(0,0,0,0.1)] flex items-center'>
                <ImagePreview image={item} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
