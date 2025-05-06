import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  name: string;
  title: string;
  image: string;
  showShadow?: boolean;
  type?: string;
}

const ProductCard = ({ name, title, image, showShadow = false, type }: ProductCardProps) => {
  return (
    <Link href={`/products/detail/${type}/${name}`} className='h-full col-span-1 '>
      <div className={`flex flex-col group ${showShadow ? 'shadow-lg' : ''} rounded-lg overflow-hidden h-full`}>
        <div className='overflow-hidden border-b-2 border-[var(--accent)]'>
          <div className='bg-white group-hover:scale-110 w-full h-auto transition-all duration-300 aspect-square flex items-center justify-center'>
            <Image src={image} width={800} height={600} alt={title} className='object-cover' />
          </div>
        </div>
        <div className='flex flex-col gap-2 bg-white p-2 md:p-5 flex-1'>
          <h3 className='block text-xl font-bold group-hover:text-[var(--accent)] transition-all duration-300 flex-1 h-full'>{title}</h3>
          <hr className='bg-[var(--default)] my-1 md:my-5 opacity-[.05]' />
          <span className='text-[var(--default)] font-bold opacity-40 flex items-center gap-2 group-hover:text-[var(--accent)] group-hover:opacity-100 transition-all duration-300'>
            <span className='leading-none'>View Details</span>
            <i className='bi bi-arrow-right'></i>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
