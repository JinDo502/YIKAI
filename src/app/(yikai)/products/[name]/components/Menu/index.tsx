import Link from 'next/link';
import { ProductMenu } from '@/common/menu';
import EnterAnimate from '@/components/EnterAnimate';

interface MenuProps {
  selected: string;
}

const Menu = ({ selected }: MenuProps) => {
  return (
    <EnterAnimate type='slideRight' className='flex gap-4 flex-col bg-[var(--default)]/3 rounded-lg'>
      <div className='text-xl md:text-2xl font-bold text-[var(--heading)] border-b border-[var(--default)]/5 p-2 md:p-5'>Categories</div>
      <div className='flex flex-col space-y-2 divide-y divide-[var(--default)]/5 px-2 md:px-5'>
        {ProductMenu.map((item) => {
          const isActive = selected === item.name;
          const href = `/products/${item.name}`;
          const isActiveClass = isActive ? 'text-[var(--accent)] bg-[var(--default)]/5 scale-105 border-b-width-0 font-bold' : 'text-[var(--default)] font-medium';
          const hoverClass = 'hover:text-[var(--accent)] hover:bg-[var(--default)]/5 hover:scale-105';
          return (
            <Link key={item.name} href={href} className='px-2 md:px-0'>
              <div className={`${isActiveClass} p-2 md:p-3 mb-2 rounded-lg relative ${hoverClass}`}>
                <span className=''>{item.name}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </EnterAnimate>
  );
};

export default Menu;
