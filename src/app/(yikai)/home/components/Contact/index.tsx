import ContactCard from '@/components/ContactCard';
import ContentCard from '@/components/ContentCard';
import EnterAnimate from '@/components/EnterAnimate';

const ContactContent = () => {
  return (
    <EnterAnimate type='slideRight'>
      <p>
        Looking to achieve your goals faster and more effectively? Partner with a team that delivers innovative, tailored solutions to meet your unique needs. Whether you’re
        planning your next big project or seeking expert advice, we are here to make it happen.
      </p>
      <p className='opacity-0'>111</p>
      <p>
        Don’t let opportunities slip away. With our experienced team by your side, you’ll enjoy personalized service, cutting-edge tools, and actionable strategies to reach new
        heights. Get in touch today, and let’s build a brighter future together!
      </p>
      <p className='opacity-0'>111</p>
      <p className='font-bold'>Contact us now and take the first step toward success!</p>
    </EnterAnimate>
  );
};

const Contact = () => {
  return (
    <ContentCard
      title='Transform Your Vision into Reality'
      titlePosition='left'
      backgroundColor='#fff'
      content={<ContactContent />}
      rightContent={
        <EnterAnimate type='slideLeft' className='bg-[var(--default)]/3 p-8 rounded-md'>
          <ContactCard title='Get a quote' subTitle='Get Your Tailored Solutions Today!' buttonText='Get a quote' />
        </EnterAnimate>
      }
    />
  );
};

export default Contact;
