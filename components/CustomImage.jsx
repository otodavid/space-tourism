import { Box } from '@mui/system';
import Image from 'next/image';
import React from 'react';

const CustomImage = ({ src, alt }) => {
  return (
    <Box sx={styledImage}>
      <Image
        src={src}
        alt={alt}
        width={200}
        height={200}
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
  minHeight: '200px',
  overflow: 'hidden',
};
