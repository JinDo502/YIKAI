import ContentCard from '@/components/ContentCard';
import EnterAnimate from '@/components/EnterAnimate';
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
    <div className='flex flex-wrap space-y-16 justify-center'>
      {iconBoxes.map((item, index) => {
        return (
          <div key={item.title + index} className='flex flex-col items-center gap-2 md:gap-4 w-[calc(100%/3)]'>
            <EnterAnimate type='scale' className='relative w-[75%] md:w-[50%] h-auto aspect-square rounded-full overflow-hidden'>
              <Image src={item.image} alt='' fill className='object-cover' />
            </EnterAnimate>
            <EnterAnimate type='slideUp' className='flex flex-col gap-2 items-center'>
              <h4 className='text-sm md:text-xl font-bold text-[var(--heading)] text-center'>{item.title}</h4>
            </EnterAnimate>
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
