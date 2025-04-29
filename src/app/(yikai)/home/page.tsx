import Carousel from './components/Carousel';
import ProductSwiper from './components/SwiperWrapper';
import Achievements from './components/Achievements';
import WhyChooseUs from './components/WhyChooseUs';
import OurStrengths from './components/OurStrengths';
import HydraulicSolution from './components/HydraulicSolution';
import EfficiencyMeetsPerformance from './components/EfficiencyMeetsPerformance';
import TopSellingHydraulicSolutions from './components/TopSellingHydraulicSolutions';
import Contact from './components/Contact';

export default function Home() {
  return (
    <div className='bg-black/90'>
      <div className='relative w-screen max-h-screen'>
        <Carousel />
      </div>
      <ProductSwiper />
      <Achievements />
      <WhyChooseUs />
      <OurStrengths />
      <HydraulicSolution />
      <EfficiencyMeetsPerformance />
      <TopSellingHydraulicSolutions />
      <Contact />
    </div>
  );
}
