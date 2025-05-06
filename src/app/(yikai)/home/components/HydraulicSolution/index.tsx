import ContentCard from '@/components/ContentCard';
import EnterAnimate from '@/components/EnterAnimate';
import Image from 'next/image';
import Link from 'next/link';

const HydraulicSolutionContent = () => {
  return (
    <EnterAnimate type='slideRight' className='flex flex-col gap-4 md:gap-8'>
      <span className='text-base md:text-lg text-[var(--heading)]'>
        Tailor your hydraulic systems with our premium components: Pumps, PTOs, Cylinders, and Custom Assemblies. Perfectly engineered for your excavators, forklifts, dump trucks,
        and specialty vehicles.
      </span>
      <Link href='/products'>
        <button className='md:m-3 w-fit text-base md:text-lg text-[var(--accent)] font-bold font-heading px-12 py-2 rounded-md border-2 border-[var(--accent)] hover:bg-[var(--accent)] hover:text-white transition-all duration-300'>
          Explore more
        </button>
      </Link>
    </EnterAnimate>
  );
};

const HydraulicSolution = () => {
  return (
    <ContentCard
      title={
        <>
          Build <span className='text-[var(--accent)]'>Your Own</span> Hydraulic Solution Today
        </>
      }
      titlePosition='left'
      backgroundColor='#fff'
      content={<HydraulicSolutionContent />}
      rightContent={
        <EnterAnimate type='slideLeft'>
          <Image src='/images/hydraulic-solution.png' alt='Hydraulic Solution' width={800} height={600} />
        </EnterAnimate>
      }
    />
  );
};

export default HydraulicSolution;
