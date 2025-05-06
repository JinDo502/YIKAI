import Link from 'next/link';
import { Company, ProductMenu, SocialLinks, UsefulLinks } from '@/common/menu';

const ourProduct = ProductMenu.map((item) => ({
  name: item.name,
  href: `/products/${item.name}`,
}));

const Footer = () => {
  return (
    <footer className='bg-[url(/images/footer-bg.jpg)] text-white'>
      <div className='w-full h-full bg-background opacity-[.8]'>
        <div className='m-auto px-4 md:px-0 md:max-w-7xl pt-12 font-roboto'>
          <div className='grid grid-cols-6 md:grid-cols-12 gap-4 '>
            <div className='col-span-6 mb-6 md:mb-0'>
              <Link href='/home'>
                <div className='font-[700] text-3xl mb-6'>YIKAI</div>
              </Link>

              <div className='text-sm mt-3'>
                <p className='mb-1'>Tel&Whatsapp ：+86 13906503693</p>
                <p className='mb-1'>Email ：newright_hpp@163.com</p>
                <p className='mt-3 mb-1'>
                  <strong>Office address:</strong> <span>No.5 Xingxing Road,Lin ping District,Hangzhou City,Zhejiang Province,China</span>
                </p>
                <p className='mb-1'>
                  <strong>Factory address:</strong> <span>Hongqiao Industry ,Huzhou City, Zhejiang Province,China</span>
                </p>
              </div>
              <div className='flex mt-4 md:mt-6 gap-4 '>
                {SocialLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item?.href}
                    target='_blank'
                    aria-disabled={!item?.href}
                    className='flex items-center justify-center w-10 h-10 rounded-md border border-white/80 text-2xl text-white/80 transition-all duration-300 hover:text-[var(--accent)] hover:border-[var(--accent)]'
                  >
                    <i className={`${item.icon} text-base`}></i>
                  </a>
                ))}
              </div>
            </div>

            <div className='col-span-2'>
              <h4 className='text-base font-roboto font-bold pb-3'>Navigation links</h4>
              <ul className='mt-3'>
                {UsefulLinks.map((link) => (
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
                {Company.map((item) => (
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

        <div className='m-auto md: max-w-7xl text-center mt-4 border-t border-white/20'>
          <p className='py-6 font-roboto text-sm'>
            © <span>Copyright</span> <strong className='px-1'>YIKAI</strong> <span>All Rights Reserved</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
