import { Container } from '@mui/material';
import { Box } from '@mui/system';
import Head from 'next/head';
import React from 'react';
import Header from './Header';

const Layout = ({ children, title, sx, description }) => {
  return (
    <Box sx={{ position: 'relative' }}>
      <Head>
        <title>{title}</title>
        <meta
          name='description'
          content={
            description || 'Travel and Explore Space with a professional crew'
          }
        />
        <meta
          name='keywords'
          content='Space, exploration, moon, mars, travel'
        />
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </Head>

      <Container disableGutters sx={[sx, styledDefaultLayout]}>
        <Header />

        <Box component='main'>{children}</Box>
      </Container>
    </Box>
  );
};

export default Layout;

const styledDefaultLayout = (theme) => ({
  minHeight: '100vh',
  overflow: 'hidden',
  backgroundColor: theme.palette.neutral.dark,
  backgroundPosition: 'center center',
  backgroundSize: '100% 100%',
  backgroundRepeat: 'no-repeat',
});
