import ContentCard from '@/components/ContentCard';
import ProductCard from '@/components/ProductCard';

const itemList = [
  {
    title: 'PTO B05',
    image: '/images/top-selling-hydraulic-solutions/1.png',
  },
  {
    title: 'Hoist Frames KRM92',
    image: '/images/top-selling-hydraulic-solutions/2.png',
  },
  {
    title: 'Parker Pumps C101 Series',
    image: '/images/top-selling-hydraulic-solutions/3.png',
  },
  {
    title: 'Gear Pumps KP35B',
    image: '/images/top-selling-hydraulic-solutions/4.png',
  },
];

const TopSellingHydraulicSolutionsContent = () => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
      {itemList.map((item) => (
        <ProductCard type='Hydraulic Solutions' key={item.title} title={item.title} image={item.image} />
      ))}
    </div>
  );
};

const TopSellingHydraulicSolutions = () => {
  return <ContentCard title='Top Selling Hydraulic Solutions' titlePosition='center' backgroundColor='#f4f7f6' content={<TopSellingHydraulicSolutionsContent />} />;
};

export default TopSellingHydraulicSolutions;
