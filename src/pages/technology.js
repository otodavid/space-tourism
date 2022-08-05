import { Tab, Tabs, Typography, useMediaQuery } from '@mui/material';
import { Box, useTheme } from '@mui/system';
import Image from 'next/image';
import React, { useState } from 'react';
import HeadlineText from '../components/HeadlineText';
import Layout from '../components/Layout';
import TabPanel, { a11yProps } from '../components/TabPanel';
import { motion } from 'framer-motion';
import { shimmer, toBase64 } from '../utils/blurPlaceholder';
import data from '../data.json';
import { fadeInUpVariant } from '../utils/animations';

export default function Technology() {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const mediaDesktop = useMediaQuery(theme.breakpoints.up('md'));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Layout title='technology' sx={styledLayout}>
      <Box>
        <Box sx={styledHeading}>
          <HeadlineText text='space launch 101' pageId='03' />
        </Box>

        <Box sx={styledGrid}>
          <Box sx={styledImageContainer}>
            {data.technology.map((data, index) => (
              <TabPanel key={data.name} value={value} index={index}>
                <Box
                  component={motion.div}
                  key={data.name}
                  variants={fadeInUpVariant}
                  initial={mediaDesktop ? 'initial' : { opacity: 0 }}
                  animate={'animate'}
                  sx={[
                    styledImageContainer,
                    { ml: { lg: 0 }, '& img': { color: '#fff' } },
                  ]}
                >
                  <Image
                    src={
                      mediaDesktop
                        ? data.images.portrait
                        : data.images.landscape
                    }
                    alt={data.name}
                    layout='fill'
                    objectFit='cover'
                    objectPosition='center'
                    priority
                    placeholder='blur'
                    blurDataURL={`data:image/svg+xml;base64,${toBase64(
                      shimmer(700, 475)
                    )}`}
                  />
                </Box>
              </TabPanel>
            ))}
          </Box>

          <Tabs
            value={value}
            onChange={handleChange}
            sx={styledTabControlContainer}
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

          <Box sx={styledTabDetailsContainer}>
            {data.technology.map((data, index) => (
              <TabPanel key={data.name} value={value} index={index}>
                <Typography
                  variant='navText'
                  component='p'
                  sx={styledTabSubHeading}
                >
                  the terminology...
                </Typography>
                <Typography variant='h3' sx={styledTabHeading}>
                  {data.name}
                </Typography>
                <Typography variant='body1' sx={styledTabDescription}>
                  {data.description}
                </Typography>
              </TabPanel>
            ))}
          </Box>
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

  [theme.breakpoints.up('md')]: {
    backgroundImage: 'url(assets/technology/background-technology-desktop.jpg)',
  },
});

const styledHeading = (theme) => ({
  pl: 5,

  [theme.breakpoints.up('md')]: {
    pb: 10,
  },

  [theme.breakpoints.up('lg')]: {
    pb: 3.25,
    pl: 9.3,
  },

  [theme.breakpoints.between('lg', '1300')]: {
    pl: 2.3,
  },
});

const styledGrid = (theme) => ({
  mb: 10,

  [theme.breakpoints.up('md')]: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: 'auto auto',
    alignItems: 'start',
    gap: '2rem',
    pl: 5,
  },

  [theme.breakpoints.up('lg')]: {
    gridTemplateColumns: 'auto 1fr 1fr',
    gridTemplateRows: '1fr',
    alignItems: 'center',
    gap: '4.8rem',
    pl: 20.6,
  },

  [theme.breakpoints.between('lg', '1300')]: {
    pl: 13.6,
    gap: '2rem',
  },
});

const styledImageContainer = (theme) => ({
  width: '100%',
  minHeight: '170px',
  overflow: 'hidden',
  position: 'relative',

  [theme.breakpoints.between('400', 'sm')]: {
    minHeight: '15rem',
  },

  [theme.breakpoints.up('sm')]: {
    minHeight: '20rem',
  },

  [theme.breakpoints.up('md')]: {
    minHeight: '33rem',
    gridColumn: '2/3',
    gridRow: '1/3',
  },

  [theme.breakpoints.up('lg')]: {
    gridColumn: '3/4',
    gridRow: '1/2',
    ml: 4,
  },
});

const styledTabControlContainer = (theme) => ({
  width: '80%',
  mx: 'auto',
  my: 4,
  mb: 3,
  minHeight: 0,

  [theme.breakpoints.up('sm')]: {
    my: 6,
  },

  [theme.breakpoints.up('md')]: {
    width: '100%',
    gridColumn: '1/2',
    gridRow: '2/3',
    alignSelf: 'start',
    my: 0,
  },

  [theme.breakpoints.up('lg')]: {
    width: '100%',
    gridColumn: '1/2',
    gridRow: '1/2',
    alignSelf: 'center',
    my: 6,
  },

  '& .MuiTabs-flexContainer': {
    justifyContent: 'center',
    alignItems: 'center',

    [theme.breakpoints.up('md')]: {
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      gap: '2rem',
    },

    [theme.breakpoints.up('lg')]: {
      flexDirection: 'column',
    },
  },

  '& .MuiTabs-indicator': {
    display: 'none',
  },

  '& .MuiButtonBase-root': {
    ...theme.typography.h4,

    [theme.breakpoints.up('md')]: {
      mr: 0,
    },

    [theme.breakpoints.up('lg')]: {
      ...theme.typography.h4,
    },

    '&:hover': {
      border: 1,
      borderColor: theme.palette.neutral.light,
    },
  },
});

const styledTabControl = (theme) => ({
  width: '2.5rem',
  height: '2.5rem',
  minWidth: '0',
  minHeight: 0,
  padding: 0,
  mr: 2,
  lineHeight: '1',
  color: theme.palette.neutral.light,
  bgcolor: 'transparent',
  border: 1,
  borderColor: 'hsla(0,0%,100%,0.25)',
  borderRadius: '50%',
  alignSelf: 'center',

  [theme.breakpoints.up('sm')]: {
    height: '3.75rem',
    width: '3.75rem',
  },

  [theme.breakpoints.up('lg')]: {
    height: '5rem',
    width: '5rem',
  },

  '&.Mui-selected': {
    color: theme.palette.neutral.dark,
    bgcolor: theme.palette.neutral.light,
  },
});

const styledTabDetailsContainer = (theme) => ({
  width: 'min(100% - 3rem, 55ch)',
  mx: 'auto',

  [theme.breakpoints.up('md')]: {
    gridColumn: '1/2',
    gridRow: '1/2',
    alignSelf: 'end',
    width: '100%',
    mx: 0,
    px: 0,
    minHeight: '22rem',
  },

  [theme.breakpoints.between('1024', '1124')]: {
    minHeight: '19.85rem',
  },

  [theme.breakpoints.up('lg')]: {
    gridColumn: '2/3',
    width: '100%',
    alignSelf: 'center',
    mx: 0,
    px: 0,
  },
});

const styledTabSubHeading = (theme) => ({
  color: theme.palette.primary.main,
  textAlign: 'center',

  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
  },
});

const styledTabHeading = (theme) => ({
  my: '.3em',
  color: theme.palette.neutral.light,
  textAlign: 'center',

  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
  },
});

const styledTabDescription = (theme) => ({
  my: '1em',
  textAlign: 'center',
  color: theme.palette.primary.main,

  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
    width: '90%',
  },

  [theme.breakpoints.up('lg')]: {
    width: '85.5%',
  },
});
