import { Box } from '@mui/system';
import Image from 'next/image';
import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import logo from '/public/assets/shared/logo.svg';
import menuIcon from '/public/assets/shared/icon-hamburger.svg';
import { Button, IconButton, useMediaQuery } from '@mui/material';
import Navbar from './Navbar';
import SideMenu from './SideMenu';
import { List, ListItem } from '@mui/material';
import { Close } from '@mui/icons-material';

const Header = () => {
  const [drawerStatus, setDrawerStatus] = useState(false);

  const openDrawer = () => setDrawerStatus(true);
  const closeDrawer = () => setDrawerStatus(false);

  const mediaMobile = useMediaQuery('(max-width: 599px)');

  return (
    <Box
      sx={{
        width: 1,
        bgcolor: 'transparent',
        display: 'flex',
        justifyContent: 'space-between',
        position: 'absolute',
        mb: 5,
      }}
    >
      <Box sx={{ bgcolor: 'neutral.light' }}>
        <Image src={logo} width={20} height={20} alt='logo' />
      </Box>

      {mediaMobile ? (
        <>
          <Button variant='text' onClick={openDrawer}>
            <Image src={menuIcon} width={20} height={20} alt='hamburger icon' />
          </Button>

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
