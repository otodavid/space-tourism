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
      <Box>
        <HeadlineText pageId='01' heroText='pick your destination' />

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
            <Typography variant='h2'>{data.name}</Typography>
            <Typography variant='body1' align='center'>
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
                mt: 2,
                pt: 4,
                pb: 2,
              }}
            >
              <Box>
                <Typography variant='subtitle2'>avg. distance</Typography>
                <Typography variant='subtitle1'>{data.distance}</Typography>
              </Box>

              <Box sx={{ mt: 3 }}>
                <Typography variant='subtitle2'>est. travel time</Typography>
                <Typography variant='subtitle1'>{data.travel}</Typography>
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
    'url(assets/destination/background-destination-mobile.jpg) center center / 100% 100% no-repeat',
};

const styledTabs = (theme) => ({
  width: '80%',
  mx: 'auto',
  my: 2,

  '& .MuiTabs-indicator': {
    display: 'block',
    width: '25px !important',
    ml: '17px',
  },
});

const styledSingleTab = (theme) => ({
  color: theme.palette.neutral.light,
  minWidth: '0',
});
