import Menu from './components/Menu';
import { menu } from '@/public/ProductsConstant/menu';
import List from './components/List';
import PageBanner from '@/components/PageBanner';

export async function generateStaticParams() {
  return menu.map((item) => ({ name: item.name }));
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
      <div className='max-w-7xl mx-auto py-15 flex gap-10'>
        <Menu selected={selectType} />

        <List selectType={selectType} />
      </div>
    </div>
  );
};

export default Product;
