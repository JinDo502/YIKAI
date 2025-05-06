'use client';

import Image from 'next/image';
import logo from '@/public/images/logo.png';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { UsefulLinks } from '@/common/menu';

const Header = () => {
  const [active, setActive] = useState('');
  const [scrollBg, setScrollBg] = useState(false);
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
    setActive(pathname.split('/')[1]);
  }, [pathname]);

  return (
    <header className={`fixed w-full top-0 z-30 transition-colors duration-300 ${scrollBg ? 'bg-white/95' : 'bg-transparent'}`}>
      <div className='flex items-center justify-between py-5 m-auto max-w-7xl'>
        <div className='flex items-center text-2xl font-roboto font-[700]'>
          <Image src={logo} width={32} height={32} alt='logo' />
          <div className={`ml-2 text-2xl font-roboto ${scrollBg ? 'text-black' : 'text-white'}`}>YIKAI</div>
          <span className='text-[#feb900]'>.</span>
        </div>
        <div className='flex items-center'>
          {UsefulLinks.map((item) => {
            return (
              <Link key={item?.name} href={item.href} className='p-4 group'>
                <div>
                  <div
                    className={`font-poppins font-[600] text-sm ${scrollBg ? 'text-black' : 'text-white'} leading-none ${
                      isActive(item?.path) ? '' : 'opacity-[.55]'
                    } group-hover:opacity-100 transition-all duration-300`}
                  >
                    {item?.name}
                  </div>
                  <div className={`bg-[#feb900] h-[2px] mt-[6px] ${isActive(item?.path) ? 'w-full' : 'w-0'} group-hover:w-full transition-all duration-300`} />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
};

export default Header;
