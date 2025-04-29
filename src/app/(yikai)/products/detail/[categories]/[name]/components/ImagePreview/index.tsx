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
        <Image src={image} width={800} height={600} alt='' className='object-cover' />
      </PhotoView>
    </PhotoProvider>
  );
}

export default ImagePreview;
