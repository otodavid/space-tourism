import { Box } from '@mui/system';
import Image from 'next/image';
import React from 'react';
import { shimmer, toBase64 } from '../utils/blurPlaceholder';

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
        placeholder='blur'
        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
        priority
      />
    </Box>
  );
};

export default CustomImage;

const styledImage = {
  width: '100%',
  overflow: 'hidden',

  '& img': { color: '#fff' },
};
