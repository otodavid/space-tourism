import { List, ListItem, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = ({ closeDrawer }) => {
  const router = useRouter();

  const navItems = ['home', 'destination', 'crew', 'technology'];

  const activeLink = (link) => {
    if (router.pathname === '/' && navItems[0] === link) return true;
    if (router.pathname.startsWith(`/${link}`)) return true;

    return false;
  };

  return (
    <nav>
      <List sx={styledNav}>
        {navItems.map((item, index) => (
          <ListItem key={item}>
            <Link href={item === 'home' ? '/' : `/${item}`}>
              <Box sx={{ position: 'relative' }}>
                <a onClick={closeDrawer}>
                  <Typography variant='navText'>
                    <Box component='span' sx={styledNavNumber}>
                      0{index}
                    </Box>
                    {item}
                  </Typography>
                  {activeLink(item) && <Box sx={styledActiveLink}></Box>}
                </a>
              </Box>
            </Link>
          </ListItem>
        ))}
      </List>
    </nav>
  );
};

export default Navbar;

Navbar.defaultProps = {
  closeDrawer: undefined,
};

const styledNav = (theme) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',

  '& a': {
    color: theme.palette.neutral.light,
    textDecoration: 'none',
  },

  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
    bgcolor: 'hsla(0,0%,100%, .04)',
    py: 3.5,
    px: 3,
    backdropFilter: 'blur(100px)',
  },
});

const styledNavNumber = (theme) => ({
  fontWeight: '700',
  mr: 1,

  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
});

const styledActiveLink = (theme) => ({
  [theme.breakpoints.up('sm')]: {
    position: 'absolute',
    bottom: '-2.2rem',
    left: '0',
    bgcolor: 'white',
    width: '100%',
    height: '3px',
  },
});
