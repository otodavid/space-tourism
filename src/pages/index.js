import { Typography, Button } from '@mui/material';
import Layout from '../components/Layout';
import { Box } from '@mui/system';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeInUpVariant } from '../utils/animations';

export default function Home() {
  return (
    <Layout title='Space Travel | Homepage' sx={styledLayout}>
      <Box sx={styledHeroSection}>
        <Box sx={styledHeroText}>
          <Typography
            variant='h5'
            component='h5'
            color='primary.main'
            sx={{ mt: { xs: 7, sm: 14 } }}
          >
            so you want to travel to
          </Typography>
          <Typography
            variant='h1'
            sx={{ my: 1.8, color: 'neutral.light' }}
            component={motion.h1}
            variants={fadeInUpVariant}
            initial='initial'
            animate={{
              ...fadeInUpVariant.animate,
              transition: { delay: 0.3, ease: 'easeOut', duration: '.6' },
            }}
          >
            space
          </Typography>
          <Typography
            variant='body1'
            color='primary.main'
            sx={styledHeroDescription}
          >
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </Typography>
        </Box>
        <Box sx={styledButtonWrapper}>
          <Link href='/destination' passHref>
            <Button
              variant='contained'
              sx={styledExploreButton}
              disableRipple
              disableElevation
              component='a'
            >
              <Typography sx={styledButtonText}>explore</Typography>
            </Button>
          </Link>
        </Box>
      </Box>
    </Layout>
  );
}

const styledLayout = (theme) => ({
  backgroundImage: 'url(assets/home/background-home-mobile.jpg)',

  [theme.breakpoints.up('sm')]: {
    backgroundImage: 'url(assets/home/background-home-tablet.jpg)',
  },

  [theme.breakpoints.up('md')]: {
    backgroundImage: 'url(assets/home/background-home-desktop.jpg)',
  },
});

const styledHeroSection = (theme) => ({
  px: 2,

  [theme.breakpoints.up('md')]: {
    width: '90%',
    maxWidth: '71rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    gap: '2rem',
    mx: 'auto',
    my: 10,
  },

  [theme.breakpoints.up('lg')]: {
    width: '78%',
  },
});

const styledHeroText = (theme) => ({
  width: '100%',
  mx: 'auto',
  textAlign: 'center',

  [theme.breakpoints.up('md')]: {
    flex: '0 1 40%',
    mx: 0,
    textAlign: 'left',
  },
});

const styledHeroDescription = (theme) => ({
  width: 'min(100% - 1rem, 27.5rem)',
  mx: 'auto',

  [theme.breakpoints.up('md')]: {
    mx: 0,
    width: '100%',
  },
});

const styledButtonWrapper = (theme) => ({
  width: 'max-content',
  margin: ' 4rem auto',
  isolation: 'isolate',

  [theme.breakpoints.up('sm')]: {
    mt: '9.5rem',
  },

  [theme.breakpoints.up('md')]: {
    m: 0,
  },
});

const styledExploreButton = (theme) => ({
  width: '10rem',
  height: '10rem',
  borderRadius: '50%',
  bgcolor: theme.palette.neutral.light,

  [theme.breakpoints.up('sm')]: {
    width: '15.125rem',
    height: '15.125rem',
  },

  [theme.breakpoints.up('md')]: {
    width: '17.125rem',
    height: '17.125rem',
  },

  // override default material UI button hover style
  '&:hover': {
    bgcolor: theme.palette.neutral.light,
  },

  '&::after': {
    content: '""',
    position: 'absolute',
    inset: 0,
    bgcolor: 'hsla(0, 0%, 100%, .1)',
    borderRadius: '50%',
    transform: 'scale(0)',
    zIndex: -1,
    transition: 'all .4s ease',
  },

  '&:hover::after, &.Mui-focusVisible::after': {
    transform: 'scale(1.4)',

    [theme.breakpoints.up('sm')]: {
      transform: 'scale(1.6)',
    },
  },
});

const styledButtonText = (theme) => ({
  fontFamily: 'Bellefair',
  fontSize: '20px',
  textTransform: 'uppercase',
  letterSpacing: '1.25px',
  color: theme.palette.neutral.dark,

  [theme.breakpoints.up('sm')]: {
    fontSize: '2rem',
    letterSpacing: '2px',
  },
});
