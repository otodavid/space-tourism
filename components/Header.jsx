import { Box } from '@mui/system';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import logo from '/public/assets/shared/logo.svg';
import menuIcon from '/public/assets/shared/icon-hamburger.svg';
import { Button, IconButton, useMediaQuery } from '@mui/material';
import Navbar from './Navbar';
import { List, ListItem } from '@mui/material';
import { Close } from '@mui/icons-material';

const Header = () => {
  const [drawerStatus, setDrawerStatus] = useState(false);

  const openDrawer = () => setDrawerStatus(true);
  const closeDrawer = () => setDrawerStatus(false);

  const mediaMobile = useMediaQuery('(max-width: 599px)');

  return (
    <Box sx={styledHeader}>
      <Link href='/'>
        <a>
          <Box sx={styledLogo}>
            <Image
              src={logo}
              layout='intrinsic'
              objectFit='cover'
              objectPosition='center'
              alt='logo'
            />
          </Box>
        </a>
      </Link>

      {mediaMobile ? (
        <>
          <IconButton
            aria-label='Hamburger button'
            component='button'
            onClick={openDrawer}
            sx={{ minWidth: 'max-content', p: 0 }}
          >
            <Image src={menuIcon} alt='hamburger icon' />
          </IconButton>

          <Drawer
            anchor='right'
            open={drawerStatus}
            onClose={closeDrawer}
            sx={styledDrawer}
          >
            <IconButton
              aria-label='Close button'
              component='span'
              onClick={closeDrawer}
              sx={styledCloseButton}
            >
              <Close sx={{ color: 'neutral.light', fontSize: '1.5rem' }} />
            </IconButton>

            <Navbar />
          </Drawer>
        </>
      ) : (
        <Navbar />
      )}
    </Box>
  );
};

export default Header;

const styledHeader = {
  width: 1,
  bgcolor: 'transparent',
  display: 'flex',
  justifyContent: 'space-between',
  mb: 3,
};

const styledLogo = {
  bgcolor: 'neutral.light',
  width: '2rem',
  height: '2rem',
  borderRadius: '50%',
};

const styledDrawer = ({ palette }) => ({
  '& .MuiBackdrop-root': {
    bgcolor: 'transparent',
  },

  '& .MuiDrawer-paper': {
    width: 'clamp(10rem, 65vw + 1rem, 30rem)',
    display: 'block',
    bgcolor: palette.neutral.dark,
    color: palette.neutral.light,
    p: 2,

    '&::backdrop': {
      bgcolor: 'red',
    },

    '@supports (backdrop-filter: blur())': {
      bgcolor: 'transparent',
      backdropFilter: 'blur(42.5px)',
    },
  },
});

const styledCloseButton = {
  display: 'block',
  width: 'max-content',
  margin: '0 0 1rem auto',
};
