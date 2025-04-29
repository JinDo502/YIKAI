import ContentCard from '@/components/ContentCard';
import Image from 'next/image';

const iconBoxes = [
  {
    icon: 'bi bi-easel',
    title: 'Custom Hydraulic Systems',
    description: 'Tailored systems to meet specific applications and vehicle requirements.',
  },
  {
    icon: 'bi bi-brightness-high',
    title: 'Energy-Saving Technology',
    description: 'Innovative solutions that reduce energy consumption.',
  },
  {
    icon: 'bi bi-patch-check',
    title: 'Durable &amp; Reliable',
    description: 'Products built for long-term reliability in tough environments.',
  },
  {
    icon: 'bi bi-arrows-fullscreen',
    title: 'Comprehensive Range',
    description: 'Hydraulic pumps, cylinders, PTOs, and more for various industries.',
  },
];

const EfficiencyMeetsPerformanceContent = () => {
  return (
    <div className='flex flex-col gap-8'>
      {iconBoxes.map((item) => {
        return (
          <div key={item.icon} className='flex gap-8 items-center group transition-all duration-300'>
            <div className='flex items-center justify-center rounded-sm h-14 w-14 shadow-[0_2px_30px_rgba(0,0,0,0.1)]  bg-white group-hover:bg-[var(--accent)] transition-all duration-300'>
              <i className={`${item.icon} text-2xl text-[var(--accent)] group-hover:text-white transition-all duration-300`} />
            </div>
            <div className='flex-1'>
              <h4 className='text-xl font-bold text-[var(--heading)] group-hover:text-[var(--accent)] transition-all duration-300'>{item.title}</h4>
              <p className='text-sm mt-2'>{item.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const EfficiencyMeetsPerformance = () => {
  return (
    <ContentCard
      title={
        <>
          Efficiency Meets <span className='text-[var(--accent)]'>Performance!</span>
        </>
      }
      titlePosition='right'
      subTitle='We deliver energy-saving hydraulic solutions designed to optimize performance and sustainability for all your equipment needs.'
      backgroundColor='#f4f7f6'
      content={<EfficiencyMeetsPerformanceContent />}
      leftContent={
        <div className='relative w-full h-full'>
          <Image src='/images/efficiency-meets-performance.gif' alt='Efficiency Meets Performance' fill className='object-cover' sizes='(max-width: 768px) 100vw, 50vw' />
        </div>
      }
    />
  );
};

export default EfficiencyMeetsPerformance;
