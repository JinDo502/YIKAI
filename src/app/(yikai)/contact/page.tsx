import EnterAnimate from '@/components/EnterAnimate';
import Info from './components/info';
import Map from './components/map';
import PageBanner from '@/components/PageBanner';

export async function generateMetadata() {
  return {
    title: 'YIKAI-Contact',
    description: 'Contact YIKAI',
  };
}

const Contact = () => {
  return (
    <div className='bg-white'>
      <PageBanner src='/images/contact/header.jpg' alt='contact banner' title='Contact' />
      <div className='md:max-w-7xl mx-auto py-5 md:py-15 space-y-5 md:space-y-10'>
        <Info />
        <EnterAnimate type='slideUp' className='w-full'>
          <Map />
        </EnterAnimate>
      </div>
    </div>
  );
};

export default Contact;
