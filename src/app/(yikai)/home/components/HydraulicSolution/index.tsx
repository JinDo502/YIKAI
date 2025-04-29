import ContentCard from '@/components/ContentCard';
import Image from 'next/image';
import Link from 'next/link';

const HydraulicSolutionContent = () => {
  return (
    <div className='flex flex-col gap-8'>
      <span className='text-base text-[var(--heading)]'>
        Tailor your hydraulic systems with our premium components: Pumps, PTOs, Cylinders, and Custom Assemblies. Perfectly engineered for your excavators, forklifts, dump trucks,
        and specialty vehicles.
      </span>
      <Link href='/products'>
        <button className='m-3 w-fit text-base text-[var(--accent)] font-bold font-heading px-12 py-2 rounded-md border-2 border-[var(--accent)] hover:bg-[var(--accent)] hover:text-white transition-all duration-300'>
          Explore more
        </button>
      </Link>
    </div>
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
      rightContent={<Image src='/images/hydraulic-solution.png' alt='Hydraulic Solution' width={800} height={600} />}
    />
  );
};

export default HydraulicSolution;
