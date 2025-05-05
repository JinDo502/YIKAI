import ContentCard from '@/components/ContentCard';
import Image from 'next/image';

const iconBoxes = [
  {
    title: 'INAPA',
    image: '/images/exhibition-showcasing/INAPA.jpg',
  },
  {
    title: 'M-Tech Tokyo',
    image: '/images/exhibition-showcasing/M-Tech Tokyo.png',
  },
  {
    title: 'Canton Fair',
    image: '/images/exhibition-showcasing/Canton Fair.png',
  },
  {
    title: 'bauma China',
    image: '/images/exhibition-showcasing/bauma China.png',
  },
  {
    title: 'Automechanika Shanghai',
    image: '/images/exhibition-showcasing/Automechanika Shanghai.png',
  },
];

const ExhibitionShowcasingContent = () => {
  return (
    <div className='grid grid-cols-3 gap-8'>
      {iconBoxes.map((item, index) => {
        return (
          <div key={item.title + index} className='flex flex-col items-center col-span-1 gap-4'>
            <div className='relative w-[75%] h-auto aspect-square rounded-full overflow-hidden'>
              <Image src={item.image} alt='' fill className='object-cover' />
            </div>
            <div className='flex flex-col gap-2 items-center'>
              <h4 className='text-xl font-bold text-[var(--heading)]'>{item.title}</h4>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const ExhibitionShowcasing = () => {
  return (
    <ContentCard
      title='Exhibition Showcasing'
      titlePosition='center'
      subTitle='Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit'
      content={<ExhibitionShowcasingContent />}
    />
  );
};

export default ExhibitionShowcasing;
