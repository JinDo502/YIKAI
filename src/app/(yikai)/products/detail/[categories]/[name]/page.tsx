// 产品详情页

import productsMap from '@/public/ProductsConstant/type';
import ProductDetailSwiper from './components/ProductDetailSwiper';
import ProductInformation from './components/ProductInformation';
import PageBanner from '@/components/PageBanner';
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

  const data = productsMap[categories]?.find((item) => item?.model === name);

  return (
    <div className='bg-white'>
      <PageBanner src='/images/product/header.jpg' alt={`${categories}-${name}`} title={name.toLocaleUpperCase()} />
      <div className='grid grid-cols-12 gap-4 max-w-7xl mx-auto'>
        <div className='col-span-8'>
          <ProductDetailSwiper images={data?.images?.main?.map((image) => ({ name: image, image: image })) || []} />
        </div>
        <div className='col-span-4 flex items-center'>
          <ProductInformation data={data} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
