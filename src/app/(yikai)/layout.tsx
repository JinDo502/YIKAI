import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Layout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='w-screen overflow-x-hidden'>
      <Header />
      <main className='bg-white min-h-screen'>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
