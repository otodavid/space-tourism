import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const HeadlineText = ({ pageId, text }) => {
  return (
    <Box sx={styledContainer}>
      <Typography
        variant='navText'
        component='p'
        align='center'
        sx={styledHeadlineText}
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

const styledContainer = {
  mx: { xs: 'auto', sm: '0' },
  mt: { sm: 5 },
};

const styledHeadlineText = (theme) => ({
  pb: { xs: 4, sm: 8 },
  color: 'neutral.light',
  textAlign: { xs: 'center', sm: 'left' },
  fontSize: { sm: '1rem' },
});

const styledNumber = {
  fontWeight: '700',
  mr: 1.5,
  color: 'hsla(0,0%,100%, .25)',
};
