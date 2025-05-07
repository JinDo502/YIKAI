import Menu from './components/Menu';
import { ProductMenu } from '@/common/menu';
import List from './components/List';
import PageBanner from '@/components/PageBanner';

export async function generateStaticParams() {
  const params: { name: string[] }[] = [];

  ProductMenu?.forEach((item) => {
    if (item.children) {
      item.children.forEach((child) => params.push({ name: [item.name, child.name] }));
    } else {
      params.push({ name: [item.name] });
    }
  });

  return params;
}

interface ProductProps {
  params: Promise<{ name: string[] }>;
}

export async function generateMetadata({ params }: ProductProps) {
  const { name } = await params;
  const pathDecode = name.map((item) => decodeURIComponent(item));
  return {
    title: `YIKAI-${pathDecode.join(' ')}`,
    description: `YIKAI-${pathDecode.join(' ')}`,
  };
}

const Product = async ({ params }: ProductProps) => {
  const { name } = await params;
  // url解码
  const path = name.map((item) => decodeURIComponent(item));

  return (
    <div className='bg-white'>
      <PageBanner src='/images/product/header.jpg' alt='Products' title='Products' />
      <div className='max-w-7xl mx-auto py-5 md:py-15 flex flex-col md:flex-row gap-4 md:gap-10 px-4 md:px-0'>
        <Menu path={path} />

        <List path={path} />
      </div>
    </div>
  );
};

export default Product;
