import ContactCard from '@/components/ContactCard';
import EnterAnimate from '@/components/EnterAnimate';

const Info = () => {
  return (
    <div id='contact' className='flex grid grid-cols-12 gap-4 px-4 md:px-0'>
      <div className='col-span-12 md:col-span-6 shadow-[0px_0px_20px_rgba(0,0,0,0.1)] rounded-lg p-8 flex flex-col gap-8 justify-center'>
        <div className='flex flex-col items-center justify-center gap-2'>
          <EnterAnimate type='scale' className='flex flex-col items-center justify-center border-2 border-dotted border-[var(--accent)] rounded-full h-14 w-14'>
            <i className='bi bi-envelope text-2xl text-[var(--accent)]'></i>
          </EnterAnimate>

          <EnterAnimate type='slideUp' className='text-xl font-bold text-[var(--heading)]'>
            Email Us
          </EnterAnimate>
          <EnterAnimate type='slideUp' className='text-sm text-[var(--heading)]'>
            WYC@ZHEJIANGYIKAI.COM
          </EnterAnimate>
        </div>

        <div className='flex flex-col items-center justify-center gap-2'>
          <EnterAnimate type='scale' className='flex flex-col items-center justify-center border-2 border-dotted border-[var(--accent)] rounded-full h-14 w-14'>
            <i className='bi bi-telephone text-2xl text-[var(--accent)]'></i>
          </EnterAnimate>

          <EnterAnimate type='slideUp' className='text-xl font-bold text-[var(--heading)]'>
            Call Us
          </EnterAnimate>
          <EnterAnimate type='slideUp' className='text-sm text-[var(--heading)]'>
            +86 13906503693
          </EnterAnimate>
        </div>
      </div>

      <div className='col-span-12 md:col-span-6 shadow-[0px_0px_20px_rgba(0,0,0,0.1)] rounded-lg p-8'>
        <EnterAnimate type='bounce' className='w-full'>
          <ContactCard buttonText='Send Message' />
        </EnterAnimate>
      </div>
    </div>
  );
};

export default Info;
