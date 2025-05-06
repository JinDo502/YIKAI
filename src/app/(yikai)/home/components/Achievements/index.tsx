import AnimateNumber from '@/components/AnimateNumber';
import ContentCard from '@/components/ContentCard';

const Card = (props: { title: string; value: number; icon: string }) => {
  const { title, value, icon } = props;
  return (
    <div className='p-8 bg-white shadow-[0px_0px_30px_rgba(0,0,0,0.1)] flex items-center group'>
      <i className={`${icon} flex-shrink-0 text-5xl text-[var(--accent)] mr-4 group-hover:scale-110 transition-all duration-300`} />
      <div className='gap-2 flex flex-col'>
        <AnimateNumber value={value} className='text-4xl font-bold text-[var(--heading)]' />
        <h3 className='text-base'>{title}</h3>
      </div>
    </div>
  );
};

const AchievementsContent = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
      <Card title='Years of Expertise' value={30} icon='bi bi-heart' />
      <Card title='Solutions Delivered' value={1000} icon='bi bi-gear' />
      <Card title='Global Market Reach' value={10} icon='bi bi-buildings' />
      <Card title='Sales Annually' value={20000} icon='bi bi-cash-coin' />
    </div>
  );
};

const Achievements = () => {
  return (
    <ContentCard
      title='Our Achievements at a Glance'
      titlePosition='center'
      backgroundColor='white'
      content={<AchievementsContent />}
      animationProps={{ type: 'scale', delay: 0.5, duration: 1, threshold: 0.3 }}
    />
  );
};

export default Achievements;
