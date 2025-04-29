import Image from 'next/image';
import Info from './components/info';
import Map from './components/map';

const Contact = () => {
  return (
    <div className='bg-white'>
      <div className='relative w-full h-[369px]'>
        <Image src={'/images/contact/header.png'} alt='about' fill priority className='object-cover' />
      </div>
      <div className='max-w-7xl mx-auto py-15 space-y-10'>
        <Info />
        <Map />
      </div>
    </div>
  );
};

export default Contact;
