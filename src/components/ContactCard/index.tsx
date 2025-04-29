interface ContactCardProps {
  title?: string;
  subTitle?: string;
  buttonText: string;
}

const inputClass = 'w-full bg-white p-2 border-1 border-[var(--default)]/20 outline-none placeholder:text-[var(--default)]/30';
const inputFocusClass = 'focus:border-[var(--accent)]';
const buttonClass = 'bg-[var(--accent)] font-bold text-white px-6 py-2 rounded-md hover:bg-[var(--accent)]/80 transition-all duration-300';

const ContactCard = (props: ContactCardProps) => {
  const { title, subTitle, buttonText } = props;
  return (
    <form>
      {title && <h3 className='font-roboto font-bold text-[var(--heading)] text-base'>{title}</h3>}
      {subTitle && <p className='text-[var(--heading)] text-sm'>{subTitle}</p>}
      <div className='pt-4 grid grid-cols-2 gap-4'>
        <input type='text' name='name' className={`${inputClass} ${inputFocusClass} col-span-1`} placeholder='Name' required />
        <input type='text' className={`${inputClass} ${inputFocusClass} col-span-1`} name='subject' placeholder='Subject' required />
        <input type='email' className={`${inputClass} ${inputFocusClass} col-span-1`} name='email' placeholder='Email' required />
        <input type='tel' className={`${inputClass} ${inputFocusClass} col-span-1`} name='phone' placeholder='Phone' required />
        <textarea className={`${inputClass} ${inputFocusClass} col-span-2`} name='message' rows={6} placeholder='Message' required />

        <div className='text-center col-span-2'>
          {/* <div className='loading'>Loading</div> */}
          {/* <div className='error-message'></div> */}
          {/* <div className='sent-message'>Your quote request has been sent successfully. Thank you!</div> */}
          <button type='submit' className={buttonClass}>
            {buttonText}
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactCard;
