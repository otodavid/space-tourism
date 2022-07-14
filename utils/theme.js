import { createTheme } from '@mui/material/styles';

const headingFont1 = ['Bellefair', 'serif'].join(',');
const headingFont2 = ['Barlow Condensed', 'sans-serif'].join(',');
const bodyFont = ['Barlow', 'sans-serif'].join(',');

let theme = createTheme({
  typography: {
    htmlFontSize: 16,
    fontFamily: bodyFont,
  },

  palette: {
    primary: {
      main: 'hsl(231, 77%, 90%)',
    },
    neutral: {
      main: 'hsl(0,0%, 59%)',
      light: 'hsl(0,0%,100%)',
      dark: 'hsl(230,35%, 7%)',
    },
  },
});

const { breakpoints } = theme;

theme = createTheme(theme, {
  typography: {
    h1: {
      fontSize: '5rem',
      fontFamily: headingFont1,
      fontWeight: 400,
      textTransform: 'uppercase',

      [breakpoints.up('sm')]: {
        fontSize: '7.5rem',
      },
      [breakpoints.up('md')]: {
        fontSize: '9.375rem',
      },
    },

    h2: {
      fontSize: '3.5rem',
      fontFamily: headingFont1,
      fontWeight: 400,
      textTransform: 'uppercase',
      [breakpoints.up('sm')]: {
        fontSize: '5rem',
      },
      [breakpoints.up('md')]: {
        fontSize: '6.25rem',
      },
    },

    h3: {
      fontSize: '1.5rem',
      fontFamily: headingFont1,
      fontWeight: 400,
      textTransform: 'uppercase',
      [breakpoints.up('sm')]: {
        fontSize: '2.5rem',
      },
      [breakpoints.up('md')]: {
        fontSize: '3.5rem',
      },
    },

    h4: {
      fontSize: '1rem',
      fontFamily: headingFont1,
      fontWeight: 400,
      textTransform: 'uppercase',
      [breakpoints.up('sm')]: {
        fontSize: '1.5rem',
      },
      [breakpoints.up('md')]: {
        fontSize: '2rem',
      },
    },

    h5: {
      fontSize: '1rem',
      fontFamily: headingFont2,
      letterSpacing: '2.7px',
      textTransform: 'uppercase',

      [breakpoints.up('sm')]: {
        fontSize: '1.25rem',
        letterSpacing: '3.38px',
      },
      [breakpoints.up('md')]: {
        fontSize: '1.75rem',
        letterSpacing: '4.72px',
      },
    },

    subtitle1: {
      fontFamily: headingFont1,
      fontSize: '1.75rem',
      textTransform: 'uppercase',
    },

    subtitle2: {
      fontSize: '0.875rem',
      fontFamily: headingFont2,
      letterSpacing: '2.36px',
      textTransform: 'uppercase',
    },

    // This is the style for all paragraph text
    body1: {
      fontSize: '15px',
      lineHeight: '1.67',

      [breakpoints.up('sm')]: {
        fontSize: '1rem',
      },
      [breakpoints.up('md')]: {
        fontSize: '1.125rem',
      },
    },

    // This is the style for the nav text
    navText: {
      fontSize: '1rem',
      fontFamily: headingFont2,
      letterSpacing: '2.7px',
      textTransform: 'uppercase',
      fontWeight: '300',

      [breakpoints.between('sm', 'md')]: {
        fontSize: '0.875rem',
        letterSpacing: '2.36px',
      },
    },
  },
});

export default theme;
