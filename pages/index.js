import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Typography, Button } from '@mui/material';
import Layout from '../components/Layout';
import { heading5 } from '../styles/headingStyles';
import { Box } from '@mui/system';

export default function Home() {
  return (
    <Layout title='Space Travel | Homepage'>
      <Box sx={background}>
        <Box sx={{ p: 2, w: 1, mx: 'auto', textAlign: 'center' }}>
          <Typography variant='h5' component='h5' color='primary.main'>
            so you want to travel to
          </Typography>
          <Typography variant='h1' textTransform='uppercase'>
            space
          </Typography>
          <Typography variant='body1' color='primary.main'>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </Typography>
        </Box>
        <Button variant='contained' sx={exploreButton}>
          explore
        </Button>
      </Box>
    </Layout>
  );
}

const exploreButton = {
  display: 'block',
  width: 'min(40vw, 300px)',
  height: 'min(40vw, 400px)',
  textTransform: 'uppercase',
  color: 'hsl(230,35%, 7%)',
  borderRadius: '50%',
  bgcolor: 'hsl(0,0%,100%)',
  fontSize: '20px',
  border: 2,
  borderColor: 'hsl(230,35%, 7%)',
  mx: 'auto',
};

const background = {
  background:
    'url(assets/home/background-home-mobile.jpg) center / cover no-repeat',
  // backgroundPosition: 'center center',
  // backgroundSize: 'cover',
  // backgroundRepeat: 'no-repeat',
};
