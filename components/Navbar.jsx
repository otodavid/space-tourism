import { List, ListItem, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Link from 'next/link';

const Navbar = () => {
  const navItems = ['home', 'destination', 'crew', 'technology'];

  const activeLink = (link) => {
    if (link === 'home') return '';
    return link;
  };

  return (
    <List sx={styledLinks}>
      {navItems.map((item, index) => (
        <ListItem key={item}>
          <Link href={`/${activeLink(item)}`}>
            <a>
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

const styledLinks = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
};

const styledNavNumber = {
  fontWeight: '700',
  mr: 1,
};