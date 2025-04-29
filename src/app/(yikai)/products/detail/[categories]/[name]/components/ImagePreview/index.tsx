import Image from 'next/image';
import ImageZoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css'; // 引入样式文件

function ImagePreview({ image }: { image: string }) {
  return (
    <div>ImagePreview{image}</div>
    <ImageZoom>
      <Image src={image} width={800} height={600} alt='' className='object-cover' />
    </ImageZoom>
  );
}

export default ImagePreview;
