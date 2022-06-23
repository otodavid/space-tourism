import { List, ListItem, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

const Navbar = ({ closeDrawer }) => {
  const navItems = ['home', 'destination', 'crew', 'technology'];

  return (
    <List sx={styledLinks}>
      {navItems.map((item, index) => (
        <ListItem key={item}>
          <Link href={item === 'home' ? '/' : item}>
            <a onClick={() => closeDrawer()}>
              <Typography variant='navText'>
                <Box component='span' sx={styledNavNumber}>
                  0{index}
                </Box>
                {item}
              </Typography>
            </a>
          </Link>
        </ListItem>
      ))}
    </List>
  );
};

export default Navbar;

const styledLinks = (theme) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',

  '& a': {
    color: theme.palette.neutral.light,
    textDecoration: 'none',
  },
});

const styledNavNumber = {
  fontWeight: '700',
  mr: 1,
};
