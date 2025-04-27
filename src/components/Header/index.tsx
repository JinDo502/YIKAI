'use client'

import Image from "next/image";
import logo from "@/public/images/logo.png"
import Link from "next/link";
import { useTranslations } from 'next-intl';
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const menu = [
  { name: "home", href: "/" },
  { name: "about", href: "/about" },
  { name: "product", href: "/product" },
  { name: "contact", href: "/contact" }
]

const Header = () => {
  const t = useTranslations('menu');
  const [active, setActive] = useState('home');
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
    <header className={`fixed w-full top-0 z-30 transition-colors duration-300 ${scrollBg ? 'bg-white/90' : 'bg-transparent'
      }`}>
      <div className="flex items-center justify-between py-5 m-auto max-w-7xl">
        <div className="flex items-center text-2xl font-roboto font-[700]">
          <Image src={logo} width={32} height={32} alt="logo" />
          <div className="ml-2 text-2xl font-roboto text-white">
            YIKAI
          </div>
          <span className="text-[#feb900]">.</span>
        </div>
        <div className="flex items-center">
          {menu.map((item, index) => {
            return <Link key={index} href={item.href} className="p-4">
              <div>
                <div className={`font-poppins font-[600] text-sm text-white leading-none ${isActive(item?.name) ? '' : 'opacity-[.55]'}`}>
                  {t(item?.name)}
                </div>
                <div className={`bg-[#feb900] h-[2px] mt-[6px] ${isActive(item?.name) ? '' : 'opacity-0'}`}></div>
              </div>
            </Link>
          })}
        </div>
      </div>
    </header>
  );
}

export default Header;