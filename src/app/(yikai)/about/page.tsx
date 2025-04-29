import YKTrade from './components/YKTrade';
import Achievements from '../home/components/Achievements';
import ServiceEcosystem from './components/ServiceEcosystem';
import StrategicAchievements from './components/StrategicAchievements';
import ExhibitionShowcasing from './components/ExhibitionShowcasing';
import PageBanner from '@/components/PageBanner';

export async function generateMetadata() {
  return {
    title: 'YIKAI-About',
    description: 'About YIKAI',
  };
}

const About = () => {
  return (
    <div className='bg-white'>
      <PageBanner src='/images/about/header.jpg' alt='About' title='About' />

      <div className='max-w-7xl mx-auto py-15'>
        <YKTrade />
        <Achievements />
        <ServiceEcosystem />
        <StrategicAchievements />
        <ExhibitionShowcasing />
      </div>
    </div>
  );
};

export default About;
