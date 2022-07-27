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
          <ListItem key={item} sx={styledNavItem}>
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

/*** DEFAULT PROPS ***/
Navbar.defaultProps = {
  closeDrawer: undefined,
};

/*** CUSTOM STYLES ****/
const styledNav = (theme) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  width: '100%',

  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
    py: 3.75,
    px: 3,
    bgcolor: 'hsla(0,0%,100%, .04)',

    '@supports (backdrop-filter: blur())': {
      backdropFilter: 'blur(100px)',
    },
  },

  [theme.breakpoints.up('md')]: {
    position: 'relative',
    justifyContent: 'center',
    // gap: '.1rem'
  },

  '& a': {
    color: theme.palette.neutral.light,
    textDecoration: 'none',
  },

  '&:after': {
    [theme.breakpoints.up('md')]: {
      content: "''",
      position: 'absolute',
      top: '50%',
      right: '97%',
      width: 'calc(100vw - 100% - 8rem)',
      height: '1px',
      bgcolor: 'hsla(0, 0%, 100%, 0.25)',
      transform: 'translateY(-50%)',
    },

    [theme.breakpoints.up('lg')]: {
      right: '95%',
    },
  },
});

const styledNavItem = {
  width: { md: 'auto' },
};

const styledNavNumber = (theme) => ({
  fontWeight: '700',
  mr: 1,

  [theme.breakpoints.between('sm', 'md')]: {
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
