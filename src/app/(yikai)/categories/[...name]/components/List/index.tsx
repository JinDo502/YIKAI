import EnterAnimate from '@/components/EnterAnimate';
import ProductCard from '@/components/ProductCard';
import productsMap from '@/public/ProductsConstant';

interface ListProps {
  path: string[];
}

const List = ({ path }: ListProps) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const products: any[] = [];

  productsMap?.forEach((item) => {
    if (item.name.join(' ') === path.join(' ')) {
      products.push(...item.products);
    }
  });

  return (
    <div className='flex-1'>
      <div className='flex flex-col gap-4 grid grid-cols-2 md:grid-cols-3'>
        {products.map((item) => (
          <EnterAnimate type='slideUp' key={item.model}>
            <ProductCard name={item.name} key={item.model} title={item.model} image={item.images.main[0]} showShadow={true} />
          </EnterAnimate>
        ))}
      </div>
    </div>
  );
};

export default List;
