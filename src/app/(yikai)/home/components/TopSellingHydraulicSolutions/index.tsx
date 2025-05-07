import ContentCard from '@/components/ContentCard';
import EnterAnimate from '@/components/EnterAnimate';
import ProductCard from '@/components/ProductCard';
import topSellingHydraulicSolutions from '@/public/HomeConstant/Top Selling Hydraulic Solutions';

const TopSellingHydraulicSolutionsContent = () => {
  return (
    <EnterAnimate type='slideUp' className='grid grid-cols-2 md:grid-cols-4 gap-4'>
      {topSellingHydraulicSolutions.map((item) => (
        <ProductCard name={item?.name} key={item.name} title={item.model} image={item.image} />
      ))}
    </EnterAnimate>
  );
};

const TopSellingHydraulicSolutions = () => {
  return <ContentCard title='Top Selling Hydraulic Solutions' titlePosition='center' backgroundColor='#f4f7f6' content={<TopSellingHydraulicSolutionsContent />} />;
};

export default TopSellingHydraulicSolutions;
