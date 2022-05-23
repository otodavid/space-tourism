import { List, ListItem, Typography } from '@mui/material';
import { Box } from '@mui/system';

const Navbar = () => {
  const navItems = ['home', 'destination', 'crew', 'technology'];

  return (
    <List sx={styledLinks}>
      {navItems.map((item, index) => (
        <ListItem key={item}>
          <Typography variant='navText'>
            <Box component='span' sx={styledNavNumber}>
              0{index}
            </Box>
            {item}
          </Typography>
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
