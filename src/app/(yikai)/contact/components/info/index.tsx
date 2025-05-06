import ContactCard from '@/components/ContactCard';

const Info = () => {
  return (
    <div id='contact' className='flex grid grid-cols-12 gap-4'>
      <div className='col-span-6 shadow-[0px_0px_20px_rgba(0,0,0,0.1)] rounded-lg p-8 flex flex-col gap-8'>
        <div className='flex flex-col items-center justify-center gap-2'>
          <div className='flex flex-col items-center justify-center border-2 border-dotted border-[var(--accent)] rounded-full h-14 w-14'>
            <i className='bi bi-envelope text-2xl text-[var(--accent)]'></i>
          </div>

          <h3 className='text-xl font-bold text-[var(--heading)]'>Email Us</h3>
          <p className='text-sm text-[var(--heading)]'>newright_hpp@163.com</p>
        </div>

        <div className='flex flex-col items-center justify-center gap-2'>
          <div className='flex flex-col items-center justify-center border-2 border-dotted border-[var(--accent)] rounded-full h-14 w-14'>
            <i className='bi bi-telephone text-2xl text-[var(--accent)]'></i>
          </div>

          <h3 className='text-xl font-bold text-[var(--heading)]'>Call Us</h3>
          <p className='text-sm text-[var(--heading)]'>+86 13906503693</p>
        </div>
      </div>

      <div className='col-span-6 shadow-[0px_0px_20px_rgba(0,0,0,0.1)] rounded-lg p-8'>
        <ContactCard buttonText='Send Message' />
      </div>
    </div>
  );
};

export default Info;
