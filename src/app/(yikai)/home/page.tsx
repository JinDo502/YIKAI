import Carousel from './components/Carousel';
import ProductSwiper from './components/SwiperWrapper';
import Achievements from './components/Achievements';
import WhyChooseUs from './components/WhyChooseUs';
import OurStrengths from './components/OurStrengths';
import HydraulicSolution from './components/HydraulicSolution';
import EfficiencyMeetsPerformance from './components/EfficiencyMeetsPerformance';
import TopSellingHydraulicSolutions from './components/TopSellingHydraulicSolutions';
import Contact from './components/Contact';

export async function generateMetadata() {
  return {
    title: 'YIKAI-Home',
    description:
      'Zhejiang YIKAI Import and Export Co., Ltd. specializes in hydraulic systems for construction machinery, focusing on supplying core components such as pumps, cylinders, and control valves for dump trucks, forklifts, and excavators. We have established a global hydraulic system service network covering research and development, production, and sales, with business extending to over 30 countries worldwide.',
  };
}

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
