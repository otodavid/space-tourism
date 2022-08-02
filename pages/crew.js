import { Divider, Grid, Tab, Tabs, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';
import { useState } from 'react';
import CustomImage from '../components/CustomImage';
import HeadlineText from '../components/HeadlineText';
import Layout from '../components/Layout';
import TabPanel, { a11yProps } from '../components/TabPanel';
import data from '../data.json';

export default function Crew() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Layout title='Crew' sx={styledLayout}>
      <Box sx={styledContainer}>
        <Box sx={styledHeading}>
          <HeadlineText pageId='02' text='meet your crew' />
        </Box>

        <Box sx={styledImageContainer}>
          {data.crew.map((data, index) => (
            <TabPanel key={data.name} value={value} index={index} sx={{ p: 0 }}>
              <Box>
                <CustomImage src={data.images.png} alt={data.name} />
              </Box>
            </TabPanel>
          ))}
        </Box>

        <Divider
          sx={{
            borderColor: 'hsl(231, 15%, 26%)',
            display: { sm: 'none' },
          }}
        />

        <Tabs
          value={value}
          onChange={handleChange}
          sx={styledControlWrapper}
          aria-label='crew tabs'
        >
          {data.destinations.map((data, index) => (
            <Tab
              key={data.name}
              label=''
              sx={styledTabControl}
              {...a11yProps(index)}
              disableRipple
            />
          ))}
        </Tabs>

        <Box sx={styledTabDescription}>
          {data.crew.map((data, index) => (
            <TabPanel key={data.name} value={value} index={index}>
              <Typography variant='h4' sx={styledDescriptionRole}>
                {data.role}
              </Typography>
              <Typography variant='h3' sx={styledDescriptionName}>
                {data.name}
              </Typography>
              <Typography variant='body1' sx={styledDescriptionBio}>
                {data.bio}
              </Typography>
            </TabPanel>
          ))}
        </Box>
      </Box>
    </Layout>
  );
}

const styledLayout = (theme) => ({
  backgroundImage: 'url(assets/crew/background-crew-mobile.jpg)',

  [theme.breakpoints.up('sm')]: {
    backgroundImage: 'url(assets/crew/background-crew-tablet.jpg)',
  },

  [theme.breakpoints.up('md')]: {
    backgroundImage: 'url(assets/crew/background-crew-desktop.jpg)',
  },
});

const styledContainer = (theme) => ({
  px: 3,

  [theme.breakpoints.up('sm')]: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    px: 5,
  },

  [theme.breakpoints.up('md')]: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: 'repeat(3, auto)',
    rowGap: '4rem',
    justifyContent: 'center',
  },

  [theme.breakpoints.up('lg')]: {
    rowGap: '5rem',
    px: 8,
  },
});

const styledHeading = (theme) => ({
  [theme.breakpoints.up('sm')]: {
    alignSelf: 'flex-start',
  },

  [theme.breakpoints.up('md')]: {
    gridColumn: '1/2',
    pl: 1.5,
  },
});

const styledImageContainer = (theme) => ({
  width: '70%',
  mx: 'auto',

  [theme.breakpoints.up('sm')]: {
    width: 'min(80%, 35rem)',
    order: 3,
  },

  [theme.breakpoints.up('md')]: {
    gridColumn: '2/3',
    gridRow: '1/4',
    width: '100%',
    mx: 0,
    alignSelf: 'center',
  },

  [theme.breakpoints.up('lg')]: {
    alignSelf: 'end',
  },

  '@media (min-width: 1200px) and (max-width: 1300px)': {
    alignSelf: 'center',
  },
});

const styledControlWrapper = (theme) => ({
  width: '80%',
  mx: 'auto',
  my: 4,
  minHeight: 0,

  [theme.breakpoints.up('sm')]: {
    order: 2,
    my: 5,
  },

  [theme.breakpoints.up('md')]: {
    width: '100%',
    gridColumn: '1/2',
    gridRow: '3/4',
    marginBlock: '1rem 4.5rem',
  },

  [theme.breakpoints.up('lg')]: {
    paddingInline: '6.5rem',
    marginBlock: '2rem 5.3rem',
  },

  '& .MuiTabs-flexContainer': {
    justifyContent: 'center',
    alignItems: 'center',

    [theme.breakpoints.up('md')]: {
      justifyContent: 'flex-start',
    },
  },

  '& .MuiTabs-indicator': {
    display: 'none',
  },

  '& .MuiButtonBase-root': {
    [theme.breakpoints.up('md')]: {
      width: '15px',
      height: '15px',
      mr: 3,
    },
  },
});

const styledTabControl = (theme) => ({
  minWidth: '0',
  color: 'hsla(0,0%,100%,.17)',
  bgcolor: 'hsla(0,0%,100%,.17)',
  padding: 0,
  minHeight: 0,
  borderRadius: '50%',
  width: '10px',
  height: '10px',
  alignSelf: 'center',
  mr: 2,

  '&.Mui-selected': {
    color: theme.palette.neutral.light,
    bgcolor: theme.palette.neutral.light,
  },
});

const styledTabDescription = (theme) => ({
  [theme.breakpoints.up('sm')]: {
    alignSelf: 'center',
    width: 'min(70%, 40rem)',
  },

  [theme.breakpoints.up('md')]: {
    width: '100%',
    gridColumn: '1/2',
    gridRow: '2/3',
  },

  [theme.breakpoints.up('lg')]: {
    margin: '4.625rem 0 .625rem 0',
    pl: 13,
  },
});

const styledDescriptionRole = (theme) => ({
  color: 'hsla(0,0%,100%, .5)',

  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
  },

  [theme.breakpoints.only('md')]: {
    fontSize: '1.75rem',
  },
});

const styledDescriptionName = (theme) => ({
  my: 2,
  color: 'neutral.light',
  textAlign: 'center',

  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
    my: 2.5,
    lineHeight: '1',
  },

  [theme.breakpoints.only('md')]: {
    fontSize: '3rem',
  },
  [theme.breakpoints.up('lg')]: {
    my: 3.375,
  },
});

const styledDescriptionBio = (theme) => ({
  color: theme.palette.primary.main,
  textAlign: 'center',

  [theme.breakpoints.up('sm')]: {
    width: 'min(100% - 1rem, 65ch)',
    mx: 'auto',
  },

  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
    width: '100%',
    mx: 0,
  },

  [theme.breakpoints.up('lg')]: {
    width: '45ch',
  },
});
