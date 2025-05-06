import EnterAnimate from '../EnterAnimate';

interface ContentCardProps {
  // 标题
  title: string | React.ReactNode;
  // 副标题
  subTitle?: string;
  // 标题位置
  titlePosition?: 'left' | 'center' | 'right';
  // 背景颜色
  backgroundColor?: string;
  // 内容
  content: React.ReactNode;
  // 右侧图片
  rightContent?: React.ReactNode;
  // 左侧图片
  leftContent?: React.ReactNode;
  // 动画类型
  animationProps?: {
    type?: 'fade' | 'slideUp' | 'slideDown' | 'slideLeft' | 'slideRight' | 'scale' | 'bounce' | 'flip';
    delay?: number;
    duration?: number;
    threshold?: number;
  };
}

const ContentCard = (props: ContentCardProps) => {
  const { title, subTitle, titlePosition = 'center', backgroundColor = '#fff', content, rightContent, leftContent, animationProps } = props;

  const handleTitlePosition = (titlePosition: ContentCardProps['titlePosition']) => {
    switch (titlePosition) {
      case 'left':
      case 'right':
        return 'pb-5 after:block after:w-[80px] after:h-[4px] after:bg-[var(--accent)] after:absolute after:bottom-0 after:left-0';
      case 'center':
        return ` leading-none 
        after:hidden
        before:hidden
       after:md:block after:w-[50px] after:h-[2px] after:bg-[var(--accent)] after:absolute after:top-1/2 after:right-0 after:translate-x-[60px] after:-translate-y-1/2 
      before:md:block before:w-[50px] before:h-[2px] before:bg-[var(--accent)] before:absolute before:top-1/2 before:left-0 before:-translate-x-[60px] before:-translate-y-1/2
        `;
    }
  };

  const contentWrapper = (
    <>
      {titlePosition === 'right' && leftContent && <div className='col-span-1 h-full md:min-h-[400px] relative'>{leftContent}</div>}
      <div className={`px-4 md:px-3 col-span-${titlePosition !== 'center' ? '1' : '2'}`}>
        <div className={`pb-4 md:pb-15 flex flex-col items-${titlePosition} justify-center font-roboto`}>
          <EnterAnimate type='fade' className={`relative text-2xl md:text-3xl font-bold text-wrap text-[var(--heading)] ${handleTitlePosition(titlePosition)}`}>
            {title}
          </EnterAnimate>
          {subTitle && (
            <EnterAnimate type='slideUp' className='mt-2 text-base text-[var(--default)] text-center px-10 md:px-0'>
              {subTitle}
            </EnterAnimate>
          )}
        </div>
        {content}
      </div>
      {titlePosition === 'left' && rightContent && <div className='col-span-1 h-full md:min-h-[400px] relative'>{rightContent}</div>}
    </>
  );

  return (
    <div style={{ backgroundColor: `${backgroundColor}` }}>
      {animationProps ? (
        <EnterAnimate {...animationProps} className={`w-full h-full md:max-w-7xl m-auto py-8 md:py-15 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8`}>
          {contentWrapper}
        </EnterAnimate>
      ) : (
        <div className={`w-full h-full md:max-w-7xl m-auto py-8 md:py-15 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8`}>{contentWrapper}</div>
      )}
    </div>
  );
};

export default ContentCard;
