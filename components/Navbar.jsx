import { List, ListItem, Typography, Button } from '@mui/material';
import { Box } from '@mui/system';
import Link from 'next/link';
import { useRouter } from 'next/router';
import ActiveLink from './ActiveLink';

const Navbar = ({ closeDrawer }) => {
  const router = useRouter();

  const navItems = ['home', 'destination', 'crew', 'technology'];

  const isActiveLink = (link) => {
    if (router.pathname === '/' && navItems[0] === link) return true;
    if (router.pathname.startsWith(`/${link}`)) return true;

    return false;
  };

  return (
    <nav>
      {/* <List sx={styledNav}>
      <a>Test</a>
        {navItems.map((item, index) => (
          <ListItem key={item} sx={styledNavItem}>
            <Link href={item === 'home' ? '/' : `/${item}`}>
              <Box
                component='a'
                onClick={closeDrawer}
                sx={[isActiveLink(item) ? styledActiveLink : styledHoveredLink]}
              >
                <Typography variant='navText'>
                  <Box component='span' sx={styledNavNumber}>
                    0{index}
                  </Box>
                  {item}
                </Typography>
              </Box>
            </Link>
          </ListItem>
        ))}
      </List>
 */}

      <List sx={styledNav}>
        {navItems.map((item, index) => (
          <ListItem key={item} sx={styledNavItem}>
            <ActiveLink
              href={item}
              as={item === navItems[0] ? '/' : item}
              passHref
            >
              <Box
                component='a'
                onClick={closeDrawer}
                sx={[isActiveLink(item) ? styledActiveLink : styledHoveredLink]}
              >
                <Typography variant='navText'>
                  <Box component='span' sx={styledNavNumber}>
                    0{index}
                  </Box>
                  {item}
                </Typography>
              </Box>
            </ActiveLink>
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
  gap: '.1rem',
  width: '100%',

  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
    py: 2.75,
    px: 3,
    bgcolor: 'hsla(0,0%,100%, .04)',

    '@supports (backdrop-filter: blur())': {
      backdropFilter: 'blur(81.55px)',
    },
  },

  [theme.breakpoints.up('md')]: {
    position: 'relative',
    justifyContent: 'center',
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

const styledNavItem = (theme) => ({
  width: { md: 'auto' },
});

const defaultLinkStyles = {
  position: 'relative',
  cursor: 'pointer',
  p: 1,
  color: '#fff',
};

const hoverStateStyles = {
  content: "''",
  position: 'absolute',
  bottom: '-1.9rem',
  left: '.5rem',
  width: 'calc(100% - 1rem)',
  height: '3px',
};

const styledActiveLink = (theme) => ({
  ...defaultLinkStyles,

  '&::after': {
    [theme.breakpoints.up('sm')]: {
      ...hoverStateStyles,
      bgcolor: theme.palette.neutral.light,
    },
  },
});

const styledHoveredLink = (theme) => ({
  ...defaultLinkStyles,

  '&::after': {
    [theme.breakpoints.up('sm')]: {
      ...hoverStateStyles,
      width: 0,
      transition: 'all .3s ease',
    },
  },
  
  '&:hover::after': {
    width: 'calc(100% - 1rem)',
    bgcolor: theme.palette.neutral.main,
    transition: 'all .3s ease',
  },
});

const styledNavNumber = (theme) => ({
  fontWeight: '700',
  mr: 1,

  [theme.breakpoints.between('sm', 'md')]: {
    display: 'none',
  },
});
