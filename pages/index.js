import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Typography, Button } from '@mui/material';
import Layout from '../components/Layout';
import { Box } from '@mui/system';

export default function Home() {
  return (
    <Layout title='Space Travel | Homepage' sx={styledLayout}>
      <Box>
        <Box sx={{ w: 1, mx: 'auto', textAlign: 'center' }}>
          <Typography
            variant='h5'
            component='h5'
            color='primary.main'
            sx={{ mt: 7 }}
          >
            so you want to travel to
          </Typography>
          <Typography variant='h1' textTransform='uppercase' sx={{ my: 1.8 }}>
            space
          </Typography>
          <Typography variant='body1' color='primary.main'>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </Typography>
        </Box>
        <Box sx={styledButtonWrapper}>
          <Button
            variant='contained'
            sx={styledExploreButton}
            disableRipple
            disableElevation
          >
            <Typography sx={styledButtonText}>explore</Typography>
          </Button>
        </Box>
      </Box>
    </Layout>
  );
}

const styledLayout = {
  background:
    'url(assets/home/background-home-mobile.jpg) center center / 100% 100% no-repeat',
};

const styledButtonWrapper = ({ palette }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 'min(40vw, 400px)',
  height: 'min(40vw, 400px)',
  position: 'relative',
  color: palette.neutral.dark,
  mx: 'auto',
  mt: 14,
  borderRadius: '50%',
  isolation: 'isolate',

  '&::after': {
    content: '""',
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    bgcolor: 'hsla(0, 0%, 100%, .1)',
    borderRadius: '50%',
    transform: 'translate(0, 0)',
    zIndex: -1,
    transition: 'all .3s ease-in-out',
  },

  '&:hover::after': {
    width: '164.23%',
    height: '164.23%',
    transform: 'translate(-19.5%, -19.5%)',
  },
});

const styledExploreButton = ({ palette }) => ({
  width: 'inherit',
  height: 'inherit',
  borderRadius: 'inherit',
  bgcolor: palette.neutral.light,

  '&:hover': {
    bgcolor: palette.neutral.light,
  },
});

const styledButtonText = {
  fontFamily: 'Bellefair',
  fontSize: '20px',
  textTransform: 'uppercase',
  letterSpacing: '1.25px',
};
