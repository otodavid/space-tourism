import { Container } from '@mui/material';
import { Box } from '@mui/system';
import Head from 'next/head';
import React from 'react';
import Header from './Header';

const Layout = ({ children, title, description }) => {
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

      <Header />

      <Container component='main' disableGutters>
        {children}
      </Container>
    </Box>
  );
};

export default Layout;