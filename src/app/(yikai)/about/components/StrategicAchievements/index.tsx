import ContentCard from '@/components/ContentCard';
import EnterAnimate from '@/components/EnterAnimate';
import Image from 'next/image';

const iconBoxes = [
  {
    icon: 'bi bi-easel',
    title: 'Strategic partnerships with 20+ leading enterprises globally',
  },
  {
    icon: 'bi bi-patch-check',
    title: 'Delivered 3000+ specialized cylinders for Vietnam port automation projects',
  },
  {
    icon: 'bi bi-brightness-high',
    title: 'Annual supply exceeding 20,000 sets for Saudi Arabian mining equipment',
  },
  {
    icon: 'bi bi-brightness-high',
    title: 'German TÜV certified 100,000 hours safe operation record for hydraulic systems',
  },
];

const StrategicAchievementsContent = () => {
  return (
    <EnterAnimate type='slideRight' className='grid grid-cols-2 gap-8'>
      {iconBoxes.map((item) => {
        return (
          <div key={item.icon + item.title} className='flex gap-4 items-start group'>
            <div className='flex items-center justify-center rounded-sm h-14 w-14 bg-transparent group-hover:shadow-[0_2px_30px_rgba(0,0,0,0.1)] group-hover:bg-[var(--accent)] transition-all duration-300'>
              <i className={`${item.icon} text-2xl text-[var(--accent)] group-hover:text-white transition-all duration-300`} />
            </div>
            <div className='flex-1'>
              <p className='text-sm mt-2'>{item.title}</p>
            </div>
          </div>
        );
      })}
    </EnterAnimate>
  );
};

const StrategicAchievements = () => {
  return (
    <ContentCard
      title='Strategic Achievements'
      titlePosition='left'
      subTitle='Over the years, with strong production capabilities and excellent service, Zhejiang YIKAI Import and Export Co., Ltd. has established long-term stable partnerships with numerous renowned engineering machinery enterprises both domestically and internationally. By optimizing the supply chain system, we achieve efficient product supply and effective cost control, winning market recognition with high-quality products and competitive prices.'
      content={<StrategicAchievementsContent />}
      rightContent={
        <EnterAnimate type='scale' className='relative w-full h-full'>
          <Image src='/images/about/about2.png' alt='Strategic Achievements' fill className='object-cover' sizes='(max-width: 768px) 100vw, 50vw' />
        </EnterAnimate>
      }
    />
  );
};

export default StrategicAchievements;
