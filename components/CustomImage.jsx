import { Box } from '@mui/system';
import Image from 'next/image';
import React from 'react';

const CustomImage = ({ src, alt }) => {
  return (
    <Box sx={styledImage}>
      <Image
        src={src}
        width={200}
        height={200}
        alt={alt}
        objectFit='cover'
        objectPosition='center center'
        layout='responsive'
      />
    </Box>
  );
};

export default CustomImage;

const styledImage = {
  postion: 'relative',
  overflow: 'hidden',
  inset: 0,
};
