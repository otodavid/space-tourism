import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const HeadlineText = ({ pageId, text}) => {
  return (
    <Box sx={{ mx: 'auto' }}>
      <Typography
        variant='navText'
        component='p'
        align='center'
        sx={{ pb: 4 }}
      >
        <Box component='span' sx={styledNumber}>
          {pageId}
        </Box>
        {text}
      </Typography>

    </Box>
  );
};

export default HeadlineText;

const styledNumber = {
  fontWeight: '700',
  mr: 1,
  color: 'hsla(0,0%,100%, .25)',
};
