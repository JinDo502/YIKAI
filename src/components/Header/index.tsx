'use client';

import Image from 'next/image';
import logo from '@/public/images/logo.png';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { UsefulLinks } from '@/common/menu';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [active, setActive] = useState('');
  const [scrollBg, setScrollBg] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMdScreen, setIsMdScreen] = useState(false);
  const isActive = (item: string) => active === item;
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrollBg(window.scrollY > 90);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMdScreen(window.innerWidth >= 768);
    };
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setActive(pathname.split('/')[1]);
  }, [pathname]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-screen top-0 z-30 px-4 md:px-0 transition-colors duration-300 ${scrollBg ? 'bg-white/95' : 'bg-transparent'}`}
    >
      <div className='flex items-center justify-between py-5 m-auto md:max-w-7xl'>
        <motion.div whileHover={{ scale: 1.05 }} className='flex items-center text-2xl font-roboto font-[700]'>
          <Image src={logo} width={32} height={32} alt='logo' priority />
          <div className={`ml-2 text-2xl font-roboto whitespace-nowrap ${scrollBg ? 'text-black' : 'text-white'}`}>YIKAI</div>
          <span className='text-[#feb900]'>.</span>
        </motion.div>
        <div className='relative'>
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className='h-screen w-screen fixed top-0 right-0 bg-black/50 z-0 md:hidden'
                onClick={() => setIsMobileMenuOpen(false)}
              />
            )}
          </AnimatePresence>
          <motion.div
            whileTap={{ scale: 0.95 }}
            className={`flex items-center flex-col md:hidden text-2xl ${scrollBg ? 'text-black' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <i className='bi bi-x-lg'></i> : <i className='bi bi-three-dots'></i>}
          </motion.div>
          <motion.div
            initial={false}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              display: isMobileMenuOpen || isMdScreen ? 'flex' : 'none',
            }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className={`items-center flex-col absolute top-[100%] right-0 bg-white shadow-lg rounded-lg mt-2 md:bg-transparent md:mt-0 md:flex md:relative md:flex-row md:shadow-none md:rounded-none`}
          >
            {UsefulLinks.map((item, index) => {
              return (
                <motion.div
                  key={item?.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.05, ease: 'easeOut' }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href={item.href} className='p-4 group block' onClick={() => setIsMobileMenuOpen(false)}>
                    <div
                      className={`font-poppins font-[600] text-sm text-black whitespace-nowrap ${scrollBg ? 'md:text-black' : 'md:text-white'} leading-none ${
                        isActive(item?.path) ? '' : 'opacity-[.55]'
                      } group-hover:opacity-100 transition-all duration-300`}
                    >
                      {item?.name}
                    </div>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: isActive(item?.path) ? '100%' : 0 }}
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.2 }}
                      className='bg-[#feb900] h-[2px] mt-[6px]'
                    />
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
