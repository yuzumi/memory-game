import React, { FunctionComponent, HTMLAttributes } from 'react';

interface ImageProps extends HTMLAttributes<HTMLImageElement> {
  src: string;
  alt?: string;
};

const Image: FunctionComponent<ImageProps> = ({ src, alt, ...restProps }) => (
  <img 
    src={src}
    alt={alt}
    {...restProps}
  />
);

export default Image;