import { Box } from '@mui/system';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import logo from '/public/assets/shared/logo.svg';
import menuIcon from '/public/assets/shared/icon-hamburger.svg';
import { Button, IconButton, useMediaQuery, useTheme } from '@mui/material';
import Navbar from './Navbar';
import { List, ListItem } from '@mui/material';
import { Close } from '@mui/icons-material';

const Header = () => {
  const [drawerStatus, setDrawerStatus] = useState(false);
  const theme = useTheme();
  const mobileView = useMediaQuery(theme.breakpoints.down('sm'));

  const openDrawer = () => setDrawerStatus(true);
  const closeDrawer = () => setDrawerStatus(false);

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

      <IconButton
        aria-label='Hamburger button'
        component='button'
        onClick={openDrawer}
        color='primary'
        sx={styledMenuButton}
      >
        <Image src={menuIcon} alt='hamburger icon' />
      </IconButton>

      <Drawer
        anchor='right'
        open={drawerStatus}
        onClose={closeDrawer}
        sx={styledDrawer}
        hideBackdrop={false}
      >
        <IconButton
          aria-label='Close button'
          component='span'
          onClick={closeDrawer}
          sx={styledCloseButton}
        >
          <Close sx={{ color: 'neutral.light', fontSize: '2rem' }} />
        </IconButton>

        <Navbar closeDrawer={closeDrawer} />
      </Drawer>

      {!mobileView && (
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          <Navbar />
        </Box>
      )}
    </Box>
  );
};

export default Header;

const styledHeader = (theme) => ({
  width: 1,
  bgcolor: 'transparent',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  mb: 1,
  p: 3,

  [theme.breakpoints.up('sm')]: {
    p: 0,
    pl: 5
  },
});

const styledLogo = {
  bgcolor: 'neutral.light',
  width: '2rem',
  height: '2rem',
  borderRadius: '50%',

  '&:focus': {
    border: '1px solid red',
  },
};

const styledMenuButton = (theme) => ({
  minWidth: 'max-content',
  p: 0,
  borderRadius: 0,

  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
});

const styledDrawer = ({ palette }) => ({
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

  '& .MuiBackdrop-root': {
    opacity: '0 !important',
  },
});

const styledCloseButton = {
  display: 'block',
  width: 'max-content',
  margin: '0 0 2.5rem auto',
};
