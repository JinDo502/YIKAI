import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Layout = async ({ children }: { children: React.ReactNode }) => {

  return (
    <div className='w-screen'>
      <Header />
      <main className='bg-dark-300'>{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
