import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import CustomImage from './CustomImage';
import TabPanel from './TabPanel';

const HeadlineText = ({ pageId, heroText}) => {
  return (
    <Box sx={{ mx: 'auto' }}>
      <Typography
        variant='navText'
        component='p'
        align='center'
        sx={{ pt: 1, pb: 4 }}
      >
        <Box component='span' sx={styledNumber}>
          {pageId}
        </Box>
        {heroText}
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
