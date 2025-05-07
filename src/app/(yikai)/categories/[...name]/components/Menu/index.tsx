'use client';
import Link from 'next/link';
import { ProductMenu } from '@/common/menu';
import EnterAnimate from '@/components/EnterAnimate';
import { useState } from 'react';

interface MenuProps {
  path: string[];
}

interface MenuItemProps {
  name: string;
  isFold?: boolean;
  path: string[];
  fullPath?: string[];
  children?: React.ReactNode;
}

const MenuItem = ({ name, path, isFold, fullPath, children }: MenuItemProps) => {
  const [isOpen, setIsOpen] = useState(true);
  const isActive = path.join('/') === fullPath?.join('/');
  const href = `/categories/${fullPath?.join('/') || name}`;
  const isActiveClass = isActive ? 'text-[var(--accent)] bg-[var(--default)]/5 scale-105 border-b-width-0 font-bold' : 'text-[var(--default)] font-medium';
  const hoverClass = 'hover:text-[var(--accent)] hover:bg-[var(--default)]/5 hover:scale-105 transition-all duration-200';

  const content = (
    <div
      className={`${isActiveClass} py-2 px-3 md:px-4 md:py-3 mb-2 rounded-lg relative ${hoverClass} flex items-center justify-between`}
      role={isFold ? 'button' : 'link'}
      aria-current={isActive ? 'page' : undefined}
      onClick={isFold ? () => setIsOpen(!isOpen) : undefined}
    >
      <span>{name}</span>
      {isFold && <i className={`bi bi-caret-down-fill transition-transform duration-200 ${isOpen ? 'rotate-0' : '-rotate-90'}`} aria-hidden='true' />}
    </div>
  );

  if (isFold) {
    return (
      <div className='px-2 md:px-0 cursor-pointer' role='group' aria-label={`${name} category group`}>
        {content}
        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>{children}</div>
      </div>
    );
  }

  return (
    <Link key={fullPath?.join('/') || name} href={href} className='px-2 md:px-0 block' aria-label={`Navigate to ${name} category`}>
      {content}
    </Link>
  );
};

const Menu = ({ path }: MenuProps) => {
  const renderMenuItem = (item: (typeof ProductMenu)[0], parentPath: string[] = []) => {
    const currentPath = [...parentPath, item.name]?.filter((item) => item !== '');

    if (item.children) {
      return (
        <div key={currentPath.join('/')} className='space-y-1'>
          <MenuItem name={item.name} path={path} isFold={true} fullPath={currentPath}>
            <div className='ml-4 px-2 border-l-1 border-[var(--default)]/10'>{item.children.map((child) => renderMenuItem(child, currentPath))}</div>
          </MenuItem>
        </div>
      );
    }

    return <MenuItem key={currentPath.join('/')} name={item.name} path={path} fullPath={currentPath} />;
  };

  return (
    <EnterAnimate type='slideRight' className='flex gap-4 flex-col bg-[var(--default)]/3 rounded-lg shadow-sm'>
      <div className='text-xl md:text-2xl font-bold text-[var(--heading)] border-b border-[var(--default)]/5 p-2 md:p-5'>Categories</div>
      <nav className='flex flex-col space-y-2 divide-y divide-[var(--default)]/5 px-2 md:px-5 pb-4'>{ProductMenu.map((item) => renderMenuItem(item))}</nav>
    </EnterAnimate>
  );
};

export default Menu;
