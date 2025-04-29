import Image from 'next/image';
import YKTrade from './components/YKTrade';
import Achievements from '../home/components/Achievements';
import ServiceEcosystem from './components/ServiceEcosystem';
import StrategicAchievements from './components/StrategicAchievements';
import ExhibitionShowcasing from './components/ExhibitionShowcasing';

const About = () => {
  return (
    <div className='bg-white'>
      <div className='relative w-full h-[369px]'>
        <Image src={'/images/about/header.png'} alt='about' fill className='object-cover' />
      </div>
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
