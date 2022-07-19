import { Divider, Tab, Tabs, Typography } from '@mui/material';
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
      <Box sx={{ px: 3 }}>
        <HeadlineText pageId='02' text='meet your crew' />

        <Box sx={{ width: '70%', mx: 'auto' }}>
          {data.crew.map((data, index) => (
            <TabPanel key={data.name} value={value} index={index} sx={{ p: 0 }}>
              <Box
                sx={{
                  width: '100%',
                  minHeight: '200px',
                  pl: 1,
                }}
              >
                <Image
                  src={data.images.png}
                  alt={data.name}
                  width={200}
                  height={200}
                  layout='responsive'
                  objectFit='contain'
                  objectPosition='center center'
                />
              </Box>
            </TabPanel>
          ))}
        </Box>

        <Divider sx={{ borderColor: 'hsl(231, 15%, 26%)' }} />

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

        <Box>
          {data.crew.map((data, index) => (
            <TabPanel key={data.name} value={value} index={index}>
              <Typography variant='h4' sx={{ color: 'hsla(0,0%,100%, .5)' }}>
                {data.role}
              </Typography>
              <Typography
                variant='h3'
                sx={{ my: '.3em', color: 'neutral.light', align: 'center' }}
              >
                {data.name}
              </Typography>
              <Typography
                variant='body1'
                color='primary.main'
                align='center'
                sx={{ mt: '.8em' }}
              >
                {data.bio}
              </Typography>
            </TabPanel>
          ))}
        </Box>
      </Box>
    </Layout>
  );
}

const styledLayout = {
  background:
    'url(assets/crew/background-crew-mobile.jpg) center / cover no-repeat',
};

const styledControlWrapper = (theme) => ({
  width: '80%',
  mx: 'auto',
  my: 4,
  minHeight: 0,

  '& .MuiTabs-flexContainer': {
    justifyContent: 'center',
    alignItems: 'center',
  },

  '& .MuiTabs-indicator': {
    display: 'none',
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
