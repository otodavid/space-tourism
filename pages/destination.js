import { Box } from '@mui/system';
import { useState } from 'react';
import Layout from '../components/Layout';
import Typography from '@mui/material/Typography';
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
      <Box sx={{ px: 3 }}>
        <HeadlineText pageId='01' text='pick your destination' />

        <Box sx={{ width: '70%', mx: 'auto' }}>
          {data.destinations.map((data, index) => (
            <TabPanel key={data.name} value={value} index={index}>
              <Box>
                <CustomImage src={data.images.png} alt={data.name} />
              </Box>
            </TabPanel>
          ))}
        </Box>

        <Tabs
          value={value}
          onChange={handleChange}
          sx={styledTabs}
          aria-label='destination tabs'
          className='tabs'
        >
          {data.destinations.map((data, index) => (
            <Tab
              key={data.name}
              label={data.name}
              sx={styledSingleTab}
              {...a11yProps(index)}
              disableRipple
            />
          ))}
        </Tabs>

        {data.destinations.map((data, index) => (
          <TabPanel key={data.name} value={value} index={index}>
            <Typography variant='h2' color='neutral.light'>
              {data.name}
            </Typography>
            <Typography variant='body1' align='center' color='primary.main'>
              {data.description}
            </Typography>
          </TabPanel>
        ))}

        {data.destinations.map((data, index) => (
          <TabPanel key={data.name} value={value} index={index}>
            <Box
              sx={{
                borderTop: 1,
                borderColor: '#383B4B',
                mt: 4,
                pt: 4,
                pb: 2,
              }}
            >
              <Box>
                <Typography variant='subtitle2' color='primary.main'>
                  avg. distance
                </Typography>
                <Typography variant='subtitle1' color='neutral.light'>
                  {data.distance}
                </Typography>
              </Box>

              <Box sx={{ mt: 3 }}>
                <Typography variant='subtitle2' color='primary.main'>
                  est. travel time
                </Typography>
                <Typography variant='subtitle1' color='neutral.light'>
                  {data.travel}
                </Typography>
              </Box>
            </Box>
          </TabPanel>
        ))}
      </Box>
    </Layout>
  );
}

const styledLayout = {
  background:
    'url(assets/destination/background-destination-tablet.jpg) center / cover no-repeat',
};

const styledTabs = (theme) => ({
  width: '83%',
  mx: 'auto',
  mt: 2,
  mb: 1,

  '&.tabs .MuiTabs-indicator': {
    display: 'block',
    width: '2.15rem !important',
    ml: '16px',
    bottom: '.5rem',
    bgcolor: theme.palette.neutral.light,
  },
});

const styledSingleTab = (theme) => ({
  color: theme.palette.primary.main,
  fontFamily: theme.typography.navText,
  fontSize: '.875rem',
  letterSpacing: '2.36px',
  minWidth: '0',

  '&.Mui-selected': {
    color: theme.palette.neutral.light,
  },
});
