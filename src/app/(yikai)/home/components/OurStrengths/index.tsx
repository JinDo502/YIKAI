import ContentCard from '@/components/ContentCard';
import EnterAnimate from '@/components/EnterAnimate';

const Card = (props: { title: string; description: string; icon: string }) => {
  const { title, description, icon } = props;
  return (
    <div className='p-8 bg-white shadow-[0px_0px_30px_rgba(0,0,0,0.1)] flex flex-col items-start gap-8 group'>
      <div className='relative'>
        <i className={`${icon} relative z-20 flex-shrink-0 text-6xl text-[var(--heading)]`} />
        <div className='absolute top-1/2 -right-1/2 -translate-y-1/2 -translate-x-1/4 rounded-full h-12 w-12 bg-[var(--heading)] opacity-10 group-hover:opacity-100 group-hover:bg-[var(--accent)] group-hover:scale-110 group-hover:-translate-x-1/2 transition-all duration-300 z-10' />
      </div>
      <div className='space-y-2'>
        <h3 className='text-2xl font-bold text-[var(--heading)] opacity-80 inline-block after:block after:w-full after:h-1 after:bg-[var(--heading)] after:opacity-10 after:mt-2 after:transition-all after:duration-300 group-hover:after:opacity-100 group-hover:after:bg-[var(--accent)]'>
          {title}
        </h3>
        <p className='text-sm text-[var(--heading)]'>{description}</p>
      </div>
    </div>
  );
};

const OurStrengthsContent = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
      <EnterAnimate type='slideRight'>
        <Card title='Data Insights' description='Optimizing strategies with advanced analytics for better efficiency and outcomes.' icon='bi bi-clipboard-data-fill' />
      </EnterAnimate>
      <EnterAnimate type='slideLeft'>
        <Card title='Supply Chain' description='Strong partnerships ensure seamless operations and consistent product delivery.' icon='bi bi-diagram-3-fill' />
      </EnterAnimate>
      <EnterAnimate type='slideRight'>
        <Card title='Experience' description='Over a decade of success in hydraulic systems and custom engineering solutions.' icon='bi bi-chat-left-dots-fill' />
      </EnterAnimate>
      <EnterAnimate type='slideLeft'>
        <Card title='Excellence' description='Renowned for high-quality products, tailored solutions, and customer satisfaction.' icon='bi bi-trophy-fill' />
      </EnterAnimate>
    </div>
  );
};

const OurStrengths = () => {
  return (
    <ContentCard
      title='Our Strengths'
      titlePosition='center'
      subTitle='Showcasing our expertise, robust supply chain, and extensive industry experience.'
      backgroundColor='#fff'
      content={<OurStrengthsContent />}
    />
  );
};

export default OurStrengths;
