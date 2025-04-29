import Link from 'next/link';

interface InfoProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
}

const ProductInformation = (props: InfoProps) => {
  const { data } = props;

  const keys = Object.keys(data)?.filter((key) => key != 'images');

  const afterClass = 'after:absolute after:bottom-0 after:left-0 after:block after:h-1 after:w-full after:bg-[var(--accent)]';

  return (
    <div className='portfolio-info'>
      <h3 className={`relative inline-block text-2xl text-[var(--heading)] font-roboto font-bold pb-4 mb-5 ${afterClass}`}>Product Information</h3>
      <div className='space-y-3'>
        {keys?.map((key) => {
          const item = data[key];
          return (
            <div key={key} className='text-[var(--heading)]'>
              <div className='font-blod opacity-50'>{key?.toUpperCase()}:</div>
              <div className='font-blod'>{item}</div>
            </div>
          );
        })}
      </div>

      <Link href='/contact'>
        <button className='mt-5 bg-[var(--accent)] text-white px-4 py-2 rounded-full font-roboto font-bold hover:opacity-80'>Contact Us</button>
      </Link>
    </div>
  );
};

export default ProductInformation;
