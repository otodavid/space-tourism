import { Box } from '@mui/system';
import { useState } from 'react';
import Layout from '../components/Layout';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Tab, Tabs } from '@mui/material';
import data from '../data.json';
import CustomImage from '../components/CustomImage';
import TabPanel, { a11yProps } from '../components/TabPanel';
import HeadlineText from '../components/HeadlineText';

export default function Destination() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Layout title='Destination' sx={styledLayout}>
      <Box sx={styledContainer}>
        <HeadlineText pageId='01' text='pick your destination' />

        <Grid container sx={styledGridContainer}>
          <Grid item xs={7} sm={6} md={5} lg={5}>
            {data.destinations.map((data, index) => (
              <TabPanel key={data.name} value={value} index={index}>
                <Box>
                  <CustomImage src={data.images.png} alt={data.name} />
                </Box>
              </TabPanel>
            ))}
          </Grid>

          <Grid item xs={12} sm={10} md={5.7} lg={5.2}>
            <Tabs
              aria-label='destination tabs'
              className='tabs'
              value={value}
              onChange={handleChange}
              sx={styledTabList}
              variant='scrollable'
              selectionFollowsFocus
            >
              {data.destinations.map((data, index) => (
                <Tab
                  key={data.name}
                  label={data.name}
                  sx={styledTab}
                  {...a11yProps(index)}
                />
              ))}
            </Tabs>

            {data.destinations.map((data, index) => (
              <TabPanel
                key={data.name}
                value={value}
                index={index}
                sx={styledTabDescription}
              >
                <Typography variant='h2' color='neutral.light'>
                  {data.name}
                </Typography>
                <Typography variant='body1' color='primary.main'>
                  {data.description}
                </Typography>
              </TabPanel>
            ))}

            {data.destinations.map((data, index) => (
              <TabPanel key={data.name} value={value} index={index}>
                <Grid container sx={styledTabMetrics}>
                  <Grid item xs={12} sm={5}>
                    <Typography variant='subtitle2' color='primary.main'>
                      avg. distance
                    </Typography>
                    <Typography variant='subtitle1' color='neutral.light'>
                      {data.distance}
                    </Typography>
                  </Grid>

                  <Grid item xs={12} sm={5}>
                    <Typography variant='subtitle2' color='primary.main'>
                      est. travel time
                    </Typography>
                    <Typography variant='subtitle1' color='neutral.light'>
                      {data.travel}
                    </Typography>
                  </Grid>
                </Grid>
              </TabPanel>
            ))}
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
}

const styledLayout = (theme) => ({
  backgroundImage: 'url(assets/destination/background-destination-mobile.jpg)',

  [theme.breakpoints.up('sm')]: {
    backgroundImage:
      'url(assets/destination/background-destination-tablet.jpg)',
  },

  [theme.breakpoints.up('md')]: {
    backgroundImage:
      'url(assets/destination/background-destination-desktop.jpg)',
  },
});

const styledContainer = (theme) => ({ px: { xs: 3, sm: 5, lg: 8 } });

const styledGridContainer = (theme) => ({
  justifyContent: 'center',
  pb: 5,

  [theme.breakpoints.up('md')]: {
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '55rem',
    mx: 'auto',
  },

  [theme.breakpoints.up('lg')]: {
    maxWidth: '65rem',
    pl: 5,
  },
});

const styledTabList = (theme) => ({
  width: 'max-content',
  mx: 'auto',
  my: 1,

  [theme.breakpoints.up('sm')]: {
    mt: 4,
    mb: 2,
  },

  [theme.breakpoints.up('md')]: {
    mx: 0,
  },

  '&.tabs .MuiTabs-indicator': {
    background: `linear-gradient(to right, 
      transparent 25%,
      ${theme.palette.neutral.light} 0, 
      ${theme.palette.neutral.light} 74%, 
      transparent 0)`,
    bottom: '4px',

    [theme.breakpoints.up('sm')]: {
      background: `linear-gradient(to right, 
        transparent 20%,
        ${theme.palette.neutral.light} 0, 
        ${theme.palette.neutral.light} 80%, 
        transparent 0)`,
    },

    [theme.breakpoints.up('md')]: {
      background: `linear-gradient(to right, 
        transparent 15%,
        ${theme.palette.neutral.light} 0, 
        ${theme.palette.neutral.light} 85%, 
        transparent 0)`,
    },
  },

  '& .MuiTabs-flexContainer': {
    [theme.breakpoints.up('sm')]: {
      width: '20rem',
      justifyContent: 'space-between',
    },
    [theme.breakpoints.up('md')]: {
      width: '19rem',
    },
  },
});

const styledTab = (theme) => ({
  color: theme.palette.primary.main,
  fontFamily: theme.typography.navText,
  fontSize: '.875rem',
  letterSpacing: '2.36px',
  minWidth: '0',
  p: 1.5,

  [theme.breakpoints.up('sm')]: {
    fontSize: '1rem',
  },

  '&.Mui-selected': {
    color: theme.palette.neutral.light,
  },
});

const styledTabDescription = (theme) => ({
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
  },
});

const styledTabMetrics = (theme) => ({
  borderTop: 1,
  borderColor: '#383B4B',
  mt: 3.5,
  pt: 3.5,
  pb: 4,
  gap: '2rem',

  [theme.breakpoints.up('sm')]: {
    justifyContent: 'center',
    mt: 6,
    pt: 3,
    gap: 0,
  },

  [theme.breakpoints.up('md')]: {
    justifyContent: 'flex-start',
    textAlign: 'left',
    gap: '2rem',
  },
});
