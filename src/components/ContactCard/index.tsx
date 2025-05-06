'use client';

import { useState } from 'react';

interface ContactCardProps {
  title?: string;
  subTitle?: string;
  buttonText: string;
}

interface FormData {
  name: string;
  subject: string;
  email: string;
  phone: string;
  message: string;
}

type Status = 'initial' | 'success' | 'error' | 'loading';

const inputClass = 'w-full bg-white p-2 border-1 border-[var(--default)]/20 outline-none placeholder:text-[var(--default)]/30';
const inputFocusClass = 'focus:border-[var(--accent)]';
const buttonClass = 'bg-[var(--accent)] font-bold text-white px-6 py-2 rounded-md hover:bg-[var(--accent)]/80 transition-all duration-300';

const ContactCard = (props: ContactCardProps) => {
  const { title, subTitle, buttonText } = props;

  const [formData, setFormData] = useState<FormData>({ name: '', subject: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState<Status>('initial');

  const handleSubmit = async (e: React.FormEvent) => {
    if (status === 'loading') return;
    setStatus('loading');
    e.preventDefault();
    const response = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    await response.json();
    setStatus(response.ok ? 'success' : 'error');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      {title && <h3 className='font-roboto font-bold text-[var(--heading)] text-base'>{title}</h3>}
      {subTitle && <p className='text-[var(--heading)] text-sm'>{subTitle}</p>}
      <div className='pt-4 grid grid-cols-2 gap-4'>
        <input onChange={handleChange} type='text' name='name' className={`${inputClass} ${inputFocusClass} col-span-1`} placeholder='Name' required />
        <input onChange={handleChange} type='text' className={`${inputClass} ${inputFocusClass} col-span-1`} name='subject' placeholder='Subject' required />
        <input onChange={handleChange} type='email' className={`${inputClass} ${inputFocusClass} col-span-1`} name='email' placeholder='Email' required />
        <input onChange={handleChange} type='tel' className={`${inputClass} ${inputFocusClass} col-span-1`} name='phone' placeholder='Phone' required />
        <textarea onChange={handleChange} className={`${inputClass} ${inputFocusClass} col-span-2`} name='message' rows={6} placeholder='Message' required />

        <div className='text-center col-span-2'>
          <button type='submit' className={buttonClass}>
            {status === 'loading' ? (
              <div className='flex items-center justify-center gap-2'>
                <div className='w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin'></div>
                Loading...
              </div>
            ) : (
              buttonText
            )}
          </button>
          {status === 'error' && <div className='error-message'>Error</div>}
          {status === 'success' && <div className='sent-message'>Your quote request has been sent successfully. Thank you!</div>}
        </div>
      </div>
    </form>
  );
};

export default ContactCard;
