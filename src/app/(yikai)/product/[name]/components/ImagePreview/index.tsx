'use client';

import Image from 'next/image';
import { PhotoProvider, PhotoView } from 'react-image-previewer';
import { CloseButton } from 'react-image-previewer/ui';

function ImagePreview({ image }: { image: string }) {
  return (
    <PhotoProvider
      photoClosable
      maskOpacity={0.5}
      overlayRender={({ onClose }) => {
        return <CloseButton onClick={onClose} />;
      }}
    >
      <PhotoView src={image}>
        <div className='w-full h-full flex items-center justify-center'>
          <Image src={image} width={800} height={600} alt='' className='object-cover' />
        </div>
      </PhotoView>
    </PhotoProvider>
  );
}

export default ImagePreview;
