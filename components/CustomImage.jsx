import { Box } from '@mui/system';
import Image from 'next/image';
import React from 'react';

const CustomImage = ({ src, alt }) => {
  return (
    <Box sx={styledImage}>
      <Image
        src={src}
        alt={alt}
        width={150}
        height={150}
        layout='responsive'
        objectFit='contain'
        objectPosition='center center'
      />
    </Box>
  );
};

export default CustomImage;

const styledImage = {
  width: '100%',
  overflow: 'hidden',
};
