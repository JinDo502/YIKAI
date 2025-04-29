import Image from 'next/image';
import Menu from './components/Menu';
import { menu } from '@/public/ProductsConstant/menu';
import List from './components/List';

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
      <div className='relative w-full h-[369px]'>
        <Image src={'/images/product/header.png'} alt='about' fill priority className='object-cover' />
      </div>
      <div className='max-w-7xl mx-auto py-15 flex gap-10'>
        <Menu selected={selectType} />

        <List selectType={selectType} />
      </div>
    </div>
  );
};

export default Product;
