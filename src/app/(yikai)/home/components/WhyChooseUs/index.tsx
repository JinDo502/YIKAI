import ContentCard from '@/components/ContentCard';
import Image from 'next/image';

const circleImages = ['/images/why-us/1.png', '/images/why-us/2.png', '/images/why-us/3.png', '/images/why-us/4.png'];

const WhyChooseUsContent = () => {
  return (
    <div className='flex flex-col gap-8'>
      <div className='flex gap-8 items-center group transition-all duration-300'>
        <div className='flex items-center justify-center rounded-sm h-14 w-14 shadow-[0_2px_30px_rgba(0,0,0,0.1)]  bg-white group-hover:bg-[var(--accent)] transition-all duration-300'>
          <i className='bi bi-patch-check text-2xl text-[var(--accent)] group-hover:text-white transition-all duration-300' />
        </div>
        <div className='flex-1'>
          <h4 className='text-xl font-bold text-[var(--heading)] group-hover:text-[var(--accent)] transition-all duration-300'>Experiences</h4>
          <p className='text-sm mt-2'>
            With decades of experience, we proudly serve leading markets like Thailand (TSA), Malaysia (Jindou), Indonesia (BN, BUA, Yutasu), and Japan (Jiyang, CAT).
          </p>
        </div>
      </div>

      <div className='flex gap-8 items-center group transition-all duration-300'>
        <div className='flex items-center justify-center rounded-sm h-14 w-14 shadow-[0_2px_30px_rgba(0,0,0,0.1)]  bg-white group-hover:bg-[var(--accent)] transition-all duration-300'>
          <i className='bi bi-globe-central-south-asia text-2xl text-[var(--accent)] group-hover:text-white transition-all duration-300' />
        </div>
        <div className='flex-1'>
          <h4 className='text-xl font-bold text-[var(--heading)] group-hover:text-[var(--accent)] transition-all duration-300'>Globalization</h4>
          <p className='text-sm mt-2'>
            With 30+ years of manufacturing expertise, YIKAI Export delivers global hydraulic solutions for dump trucks, excavators and heavy equipment operations worldwide.
          </p>
        </div>
      </div>

      <div className='flex gap-8 mt-5'>
        {circleImages.map((image, index) => (
          <div className='h-8 w-8 relative rounded-full overflow-hidden shadow-[0_4px_6px_rgba(0,0,0,0.1)]' key={image}>
            <Image src={image} alt={`Image ${index + 1}`} fill style={{ objectFit: 'contain' }} />
          </div>
        ))}
      </div>
    </div>
  );
};

const WhyChooseUs = () => {
  return (
    <ContentCard
      title='Why Businesses Choose Us'
      titlePosition='left'
      backgroundColor='#f4f7f6'
      content={<WhyChooseUsContent />}
      rightContent={<Image src='/images/why-us/why-us.png' alt='Why Businesses Choose Us' width={800} height={600} />}
    />
  );
};

export default WhyChooseUs;
