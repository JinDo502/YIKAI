import EnterAnimate from '@/components/EnterAnimate';
import Link from 'next/link';

interface InfoProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
  categories: string;
}

const ProductInformation = (props: InfoProps) => {
  const { data, categories } = props;

  const keys = Object.keys(data)?.filter((key) => key != 'images' && key != 'name');

  const afterClass = 'after:absolute after:bottom-0 after:left-0 after:block after:h-1 after:w-full after:bg-[var(--accent)]';

  return (
    <div className='min-h-96 w-full text-nowrap'>
      <EnterAnimate type='slideLeft' className={`relative inline-block text-2xl text-[var(--heading)] font-roboto font-bold pb-4 mb-5 ${afterClass}`}>
        Product Information
      </EnterAnimate>
      <div className='space-y-5'>
        <EnterAnimate type='slideUp' delay={0.5} className='text-[var(--heading)]'>
          <div className='font-blod opacity-50'>Categories:</div>
          <div className='font-blod'>{categories}</div>
        </EnterAnimate>
        {keys?.map((key, index) => {
          const item = data[key];
          return (
            <EnterAnimate type='slideUp' delay={0.5 + index * 0.1} key={key} className='text-[var(--heading)]'>
              <div className='font-blod opacity-50'>{key?.toUpperCase()}:</div>
              <div className='font-blod'>{item}</div>
            </EnterAnimate>
          );
        })}
      </div>

      <EnterAnimate type='slideUp' delay={0.5 + keys?.length * 0.1}>
        <Link href='/contact'>
          <button className='mt-5 bg-[var(--accent)] text-white px-16 py-2 rounded-full font-roboto font-bold hover:opacity-80'>Contact Us</button>
        </Link>
      </EnterAnimate>
    </div>
  );
};

export default ProductInformation;
