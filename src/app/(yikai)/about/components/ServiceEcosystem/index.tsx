import ContentCard from '@/components/ContentCard';
import EnterAnimate from '@/components/EnterAnimate';
import Image from 'next/image';

const iconBoxes = [
  {
    icon: 'bi bi-clock',
    title: 'Rapid Response',
    description: '24-hour global emergency order channel',
  },
  {
    icon: 'bi bi-patch-check',
    title: 'Technical Support',
    description: 'Hydraulic system simulation optimization/intelligent fault diagnosis',
  },
  {
    icon: 'bi bi-box-seam',
    title: 'After-sales Guarantee',
    description: 'Established spare parts warehouses in Europe/Southeast Asia/Middle East',
  },
];

const ServiceEcosystemContent = () => {
  return (
    <div className='flex flex-col gap-8'>
      {iconBoxes.map((item, index) => {
        return (
          <EnterAnimate
            type='slideUp'
            delay={0.5 + 0.1 * index}
            duration={0.5 + 0.1 * index}
            threshold={0.3}
            key={item.icon + item.title}
            className='flex gap-4 md:gap-8 items-center group transition-all duration-300'
          >
            <div className='flex items-center justify-center rounded-sm h-14 w-14 shadow-[0_2px_30px_rgba(0,0,0,0.1)]  bg-white group-hover:bg-[var(--accent)] transition-all duration-300'>
              <i className={`${item.icon} text-2xl text-[var(--accent)] group-hover:text-white transition-all duration-300`} />
            </div>
            <div className='flex-1'>
              <h4 className='text-xl font-bold text-[var(--heading)] group-hover:text-[var(--accent)] transition-all duration-300'>{item.title}</h4>
              <p className='text-sm mt-2'>{item.description}</p>
            </div>
          </EnterAnimate>
        );
      })}
    </div>
  );
};

const ServiceEcosystem = () => {
  return (
    <ContentCard
      title='Service Ecosystem'
      titlePosition='right'
      subTitle='The company is equipped with professional and experienced sales and technical teams. The sales team is knowledgeable about various hydraulic products, can precisely match customer needs and provide comprehensive solutions; the technical team provides all-round technical support and after-sales service, following through from installation and commissioning to troubleshooting, giving customers complete peace of mind.'
      content={<ServiceEcosystemContent />}
      leftContent={
        <EnterAnimate type='scale' className='relative w-full h-full'>
          <Image src='/images/about/about1.png' alt='Enim quis est voluptatibus aliquid consequatur fugiat' fill className='object-cover' sizes='(max-width: 768px) 100vw, 50vw' />
        </EnterAnimate>
      }
    />
  );
};

export default ServiceEcosystem;
