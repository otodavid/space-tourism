import { Typography, Button } from '@mui/material';
import Layout from '../components/Layout';
import { Box } from '@mui/system';

export default function Home() {
  return (
    <Layout title='Space Travel | Homepage' sx={styledLayout}>
      <Box sx={{ px: 2 }}>
        <Box sx={{ w: '100%', mx: 'auto', textAlign: 'center' }}>
          <Typography
            variant='h5'
            component='h5'
            color='primary.main'
            sx={{ mt: { xs: 7, sm: 14 } }}
          >
            so you want to travel to
          </Typography>
          <Typography variant='h1' sx={{ my: 1.8, color: 'neutral.light' }}>
            space
          </Typography>
          <Typography variant='body1' color='primary.main' sx={styledHeroText}>
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

const styledLayout = (theme) => ({
  backgroundImage: 'url(assets/home/background-home-mobile.jpg)',
  backgroundColor: theme.palette.neutral.dark,
  backgroundPosition: 'center center',
  backgroundSize: '100% 100%',
  backgroundRepeat: 'no-repeat',

  [theme.breakpoints.up('sm')]: {
    backgroundImage: 'url(assets/home/background-home-tablet.jpg)',
  },
});

const styledHeroText = {
  width: 'min(100% - 1rem, 27.5rem)',
  mx: 'auto',
};

const styledButtonWrapper = (theme) => ({
  width: 'max-content',
  margin: ' 4rem auto',
  isolation: 'isolate',

  [theme.breakpoints.up('sm')]: {
    mt: '9.5rem',
  },
});

const styledExploreButton = (theme) => ({
  width: '10rem',
  height: '10rem',
  borderRadius: '50%',
  bgcolor: theme.palette.neutral.light,

  [theme.breakpoints.up('sm')]: {
    width: '15rem',
    height: '15rem',
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

  '&:hover::after': {
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
  },
});
