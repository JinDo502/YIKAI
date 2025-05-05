import Image from 'next/image';

interface Props {
  src: string;
  title?: string;
  alt: string;
}

const PageBanner = (props: Props) => {
  const { src, alt, title } = props;

  const divBaseClass = '-skew-x-24 px-8 py-4';
  const textBaseClass = 'text-7xl font-bold leading-none';
  const positionBaseClass = 'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2';
  const positionClass = 'absolute top-0 left-0 transform translate-x-2 translate-y-2';
  const textPositionClass = 'absolute top-0 left-0';
  const textTransformClass = 'transform translate-x-1.5 translate-y-1.5';

  return (
    <div className={`relative w-full h-[30vh]`}>
      <Image src={src} alt={alt} fill priority className='object-cover' />
      {title && (
        <div className={positionBaseClass}>
          <div className={`${divBaseClass} z-10 relative bg-[var(--accent)]`}>
            <span className={`${textBaseClass} ${textPositionClass} px-8 py-4 z-10 text-white`}>{title}</span>
            <div className={`${textBaseClass} ${textTransformClass} blur-[2px] text-[#383838]`}>{title}</div>
          </div>
          <div className={`${divBaseClass} ${positionClass} bg-[#383838]`}>
            <span className={`${textBaseClass} text-[#383838]`}>{title}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default PageBanner;
