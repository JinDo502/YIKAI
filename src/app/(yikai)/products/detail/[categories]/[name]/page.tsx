// 产品详情页

import productsMap from '@/public/ProductsConstant/type';
import ProductDetailSwiper from './components/ProductDetailSwiper';
import ProductInformation from './components/ProductInformation';
import PageBanner from '@/components/PageBanner';
import ImagePreview from './components/ImagePreview';
import EnterAnimate from '@/components/EnterAnimate';
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
  const { name: _name, categories: _categories } = await params;

  const categories = decodeURIComponent(_categories) as productType;

  const name = decodeURIComponent(_name);

  const data = productsMap[categories]?.find((item) => item?.name === name);

  const colSpan = `col-span-${data?.images?.secondary?.length && data?.images?.secondary?.length > 1 ? '6' : '12'}`;

  return (
    <div className='bg-white'>
      <PageBanner src='/images/product/header.jpg' alt={`${categories}-${name}`} title='Products' />
      <div className='flex flex-col gap-4 py-15 max-w-7xl mx-auto'>
        <div className='grid grid-cols-12 gap-4 flex items-cneter'>
          <EnterAnimate type='scale' className='col-span-8'>
            <ProductDetailSwiper images={data?.images?.main?.map((image) => ({ name: image, image: image })) || []} />
          </EnterAnimate>
          <ProductInformation data={data} categories={categories} />
        </div>

        {data && data.images.secondary.length > 0 && (
          <EnterAnimate type='slideUp' className='grid grid-cols-12 gap-4'>
            {data?.images?.secondary?.map((item) => (
              <div key={item} className={`${colSpan} shadow-[0_2px_30px_rgba(0,0,0,0.1)] flex items-center`}>
                <ImagePreview image={item} />
              </div>
            ))}
          </EnterAnimate>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
