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

      <div className='max-w-7xl mx-auto py-15 space-y-10'>
        <Info />
        <Map />
      </div>
    </div>
  );
};

export default Contact;
