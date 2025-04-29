import ProductCard from '@/components/ProductCard';
import productsMap from '@/public/ProductsConstant/type';

interface ListProps {
  selectType: string;
}

type productType = keyof typeof productsMap;

const List = ({ selectType }: ListProps) => {
  const type = productsMap[selectType as productType];
  return (
    <div className='flex-1'>
      <div className='flex flex-col gap-4 grid grid-cols-3'>
        {type.map((item) => (
          <ProductCard name={item?.name} type={selectType} key={item.model} title={item.model} image={item.images.main[0]} showShadow={true} />
        ))}
      </div>
    </div>
  );
};

export default List;
