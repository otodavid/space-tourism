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

const styledContainer = theme => ({
  mx:'auto',

  [theme.breakpoints.up('sm')]: {
    mx: 0,
    mt: 6
  },

  [theme.breakpoints.up('lg')]: {
    ml: 11.5,
  }
});

const styledHeadlineText = (theme) => ({
  pb: 4,
  color: 'neutral.light',
  textAlign: 'center',

  [theme.breakpoints.up('sm')]: {
    fontSize: '1.25rem',
    letterSpacing: '3.38px',
    pb: 8,
    textAlign: 'left',
  },

  [theme.breakpoints.up('md')]: {
    letterSpacing: '4px',
    fontSize: '1.5rem',
  },

  [theme.breakpoints.up('lg')]: {
    letterSpacing: '4.72px',
    fontSize: '1.75rem',
  },
});

const styledNumber = {
  fontWeight: '700',
  mr: 1.5,
  color: 'hsla(0,0%,100%, .25)',
};
