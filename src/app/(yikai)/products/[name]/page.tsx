import Menu from './components/Menu';
import { ProductMenu } from '@/common/menu';
import List from './components/List';
import PageBanner from '@/components/PageBanner';

export async function generateStaticParams() {
  return ProductMenu.map((item) => ({ name: item.name }));
}

interface ProductProps {
  params: Promise<{ name: string }>;
}

export async function generateMetadata({ params }: ProductProps) {
  const { name } = await params;
  const selectType = decodeURIComponent(name);
  return {
    title: `YIKAI-${selectType}`,
    description: `YIKAI-${selectType}`,
  };
}

const Product = async ({ params }: ProductProps) => {
  const { name } = await params;
  // url解码
  const selectType = decodeURIComponent(name);

  return (
    <div className='bg-white'>
      <PageBanner src='/images/product/header.jpg' alt='Products' title='Products' />
      <div className='max-w-7xl mx-auto py-5 md:py-15 flex flex-col md:flex-row gap-4 md:gap-10 px-4 md:px-0'>
        <Menu selected={selectType} />

        <List selectType={selectType} />
      </div>
    </div>
  );
};

export default Product;
