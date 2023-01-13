import ImageBase from 'next/image';

import { ImageWrapper } from './index.style';

import type { ImageProps } from './index.type';

const Image = (props: ImageProps) => {
  const { width, height, src, alt, className, ...imageProps } = props;

  return (
    <ImageWrapper className={className}>
      <ImageBase alt={alt} width={width} height={height} src={src} {...imageProps} />
    </ImageWrapper>
  );
};

export default Image;
