import Link from 'next/link';

const usefulLinks = [
  {
    name: 'Home',
    href: '/home',
  },
  {
    name: 'About us',
    href: '/about',
  },
  {
    name: 'Solution',
    href: '/solution',
  },
  {
    name: 'Terms of service',
    href: '/terms-of-service',
  },
  {
    name: 'Privacy policy',
    href: '/privacy-policy',
  },
];

const ourProduct = [
  {
    name: 'Hydraulic Cylinders',
    href: '/hydraulic-cylinders',
  },
  {
    name: 'Internal Gear Pumps',
    href: '/internal-gear-pumps',
  },
  {
    name: 'Parker Pumps',
    href: '/parker-pumps',
  },
  {
    name: 'Gear Pumps',
    href: '/gear-pumps',
  },
  {
    name: 'PTO',
    href: '/pto',
  },
  {
    name: 'Hoist Frames',
    href: '/hoist-frames',
  },
];

const company = [
  {
    name: 'Join Us',
    href: '/join-us',
  },
  {
    name: 'Blog',
    href: '/blog',
  },
  {
    name: 'Contact Us',
    href: '/contact-us',
  },
  {
    name: 'Whatsapp',
    href: '/whatsapp',
  },
  {
    name: 'Facebook',
    href: '/facebook',
  },
];

const socialLinks = [
  {
    name: 'Twitter',
    icon: 'bi-twitter-x',
  },
  {
    name: 'Facebook',
    icon: 'bi-facebook',
  },
  {
    name: 'Instagram',
    icon: 'bi-instagram',
  },
  {
    name: 'Linkedin',
    icon: 'bi-linkedin',
  },
];

const Footer = () => {
  return (
    <footer className='bg-[url(/images/footer-bg.jpg)] text-white'>
      <div className='w-full h-full bg-background opacity-[.8]'>
        <div className='m-auto max-w-7xl pt-12 font-roboto'>
          <div className='grid grid-cols-12 gap-4 '>
            <div className='col-span-6 '>
              <Link href='/home'>
                <div className='font-[700] text-3xl mb-6'>YIKAI</div>
              </Link>
              <div className='text-sm mt-3'>
                <p className='mb-1'>A108 Adam Street</p>
                <p className='mb-1'>New York, NY 535022</p>
                <p className='mt-3 mb-1'>
                  <strong>Phone:</strong> <span>+1 5589 55488 55</span>
                </p>
                <p className='mb-1'>
                  <strong>Email:</strong> <span>info@example.com</span>
                </p>
              </div>
              <div className='flex mt-6 gap-4'>
                {socialLinks.map((item) => (
                  <a
                    key={item.name}
                    href=''
                    className='flex items-center justify-center w-10 h-10 rounded-md border border-white/80 text-2xl text-white/80 transition-all duration-300 hover:text-[var(--accent)] hover:border-[var(--accent)]'
                  >
                    <i className={`${item.icon} text-base`}></i>
                  </a>
                ))}
              </div>
            </div>

            <div className='col-span-2'>
              <h4 className='text-base font-roboto font-bold pb-3'>Useful Links</h4>
              <ul className='mt-3'>
                {usefulLinks.map((link) => (
                  <li key={link.name} className='pb-2.5'>
                    <Link className='text-sm text-white/75 hover:text-[var(--accent)] transition-all duration-300' href={link.href}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className='col-span-2'>
              <h4 className='text-base font-roboto font-bold pb-3'>Our Product</h4>
              <ul className='mt-3'>
                {ourProduct.map((product) => (
                  <li key={product.name} className='pb-2.5'>
                    <Link className='text-sm text-white/75 hover:text-[var(--accent)] transition-all duration-300' href={product.href}>
                      {product.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className='col-span-2'>
              <h4 className='text-base font-roboto font-bold pb-3'>Company</h4>
              <ul className='mt-3'>
                {company.map((item) => (
                  <li key={item.name} className='pb-2.5'>
                    <Link className='text-sm text-white/75 hover:text-[var(--accent)] transition-all duration-300' href={item.href}>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className='m-auto max-w-7xl text-center mt-4 border-t border-white/20'>
          <p className='py-6 font-roboto text-sm'>
            © <span>Copyright</span> <strong className='px-1'>YIKAI</strong> <span>All Rights Reserved</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
