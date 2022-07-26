import { Tab, Tabs, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';
import React, { useState } from 'react';
import HeadlineText from '../components/HeadlineText';
import Layout from '../components/Layout';
import TabPanel, { a11yProps } from '../components/TabPanel';
import data from '../data.json';

export default function Technology() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Layout title='technology' sx={styledLayout}>
      <Box>
        <Box sx={{ pl: { sm: 5 } }}>
          <HeadlineText text='space launch 101' pageId='03' />
        </Box>

        <Box>
          {data.technology.map((data, index) => (
            <TabPanel key={data.name} value={value} index={index}>
              <Box sx={styledImageContainer}>
                <Image
                  src={data.images.landscape}
                  alt={data.name}
                  layout='fill'
                  objectFit='cover'
                  objectPosition='center'
                />
              </Box>
            </TabPanel>
          ))}
        </Box>

        <Tabs
          value={value}
          onChange={handleChange}
          sx={styledTabList}
          aria-label='technology tabs'
          selectionFollowsFocus
        >
          {data.technology.map((data, index) => (
            <Tab
              key={data.name}
              label={index + 1}
              sx={styledTabControl}
              {...a11yProps(index)}
              disableRipple
            />
          ))}
        </Tabs>

        <Box sx={styledTabDescription}>
          {data.technology.map((data, index) => (
            <TabPanel key={data.name} value={value} index={index}>
              <Typography variant='navText' sx={{ color: 'primary.main' }}>
                the terminology...
              </Typography>
              <Typography
                variant='h3'
                align='center'
                sx={{ my: '.3em', color: 'neutral.light' }}
              >
                {data.name}
              </Typography>
              <Typography
                variant='body1'
                align='center'
                color='primary.main'
                sx={{ my: '1em' }}
              >
                {data.description}
              </Typography>
            </TabPanel>
          ))}
        </Box>
      </Box>
    </Layout>
  );
}

const styledLayout = (theme) => ({
  backgroundImage: 'url(assets/technology/background-technology-mobile.jpg)',

  [theme.breakpoints.up('sm')]: {
    backgroundImage: 'url(assets/technology/background-technology-tablet.jpg)',
  },
});

const styledImageContainer = (theme) => ({
  width: '100%',
  minHeight: '170px',
  overflow: 'hidden',
  position: 'relative',

  [theme.breakpoints.up('sm')]: {
    minHeight: '20rem',
  },
});

const styledTabList = (theme) => ({
  width: '80%',
  mx: 'auto',
  my: 4,
  mb: 3,
  minHeight: 0,

  [theme.breakpoints.up('sm')]: {
    my: 6,
  },

  '& .MuiTabs-flexContainer': {
    justifyContent: 'center',
    alignItems: 'center',
  },

  '& .MuiTabs-indicator': {
    display: 'none',
  },
});

const styledTabControl = (theme) => ({
  width: '40px',
  height: '40px',
  minWidth: '0',
  minHeight: 0,
  padding: 0,
  mr: 2,
  ...theme.typography.h4,
  lineHeight: '1',
  color: theme.palette.neutral.light,
  bgcolor: 'transparent',
  border: 1,
  borderColor: 'hsla(0,0%,100%,0.25)',
  borderRadius: '50%',
  alignSelf: 'center',

  [theme.breakpoints.up('sm')]: {
    height: '60px',
    width: '60px',
  },

  '&.Mui-selected': {
    color: theme.palette.neutral.dark,
    bgcolor: theme.palette.neutral.light,
  },
});

const styledTabDescription = (theme) => ({
  px: 3,

  [theme.breakpoints.up('sm')]: {
    width: 'min(100% - 1rem, 60ch)',
    mx: 'auto',
  },
});
