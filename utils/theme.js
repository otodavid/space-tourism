import { createTheme } from '@mui/material/styles';

const headingFont = ['Bellefair', 'serif'].join(',');
const bodyFont = ['Barlow Condensed', 'sans-serif'].join(',');

const theme = createTheme({
  typography: {
    htmlFontSize: 16,

    h1: {
      fontSize: '5rem',
      fontFamily: headingFont,
      '@media (min-width: 600px)': {
        fontSize: '7.5rem',
      },
      '@media (min-width: 1000px)': {
        fontSize: '9.375rem',
      },
    },
    h2: {
      fontSize: '3.5rem',
      fontFamily: headingFont,
      '@media (min-width: 600px)': {
        fontSize: '5rem',
      },
      '@media (min-width: 1000px)': {
        fontSize: '6.25rem',
      },
    },
    h3: {
      fontSize: '1.5rem',
      fontFamily: headingFont,
      '@media (min-width: 600px)': {
        fontSize: '2.5rem',
      },
      '@media (min-width: 1000px)': {
        fontSize: '3.5rem',
      },
    },
    h4: {
      fontSize: '1rem',
      fontFamily: headingFont,
      '@media (min-width: 600px)': {
        fontSize: '1.5rem',
      },
      '@media (min-width: 1000px)': {
        fontSize: '2rem',
      },
    },
    h5: {
      fontSize: '1rem',
      fontFamily: bodyFont,
      letterSpacing: '2.7px',
      '@media (min-width: 600px)': {
        fontSize: '1.25rem',
        letterSpacing: '3.38px',
      },
      '@media (min-width: 1000px)': {
        fontSize: '1.75rem',
        letterSpacing: '4.72px',
      },
    },
    subtitle1: {
      fontFamily: headingFont,
      fontSize: '1.75rem',
      textTransform: 'uppercase',
    },
    subtitle2: {
      fontSize: '0.875rem',
      fontFamily: bodyFont,
      letterSpacing: '2.36px',
      textTransform: 'uppercase',
    },
    // This is the style for all paragraph text
    body1: {
      fontSize: '15px',
      lineHeight: '1.67',

      '@media (min-width: 600px)': {
        fontSize: '1rem',
      },
      '@media (min-width: 1000px)': {
        fontSize: '1.125rem',
      },
    },
    // This is the style for the nav text
    navText: {
      fontSize: '1rem',
      fontFamily: bodyFont,
      letterSpacing: '2.7px',
      textTransform: 'uppercase',
      fontWeight: '300',

      '@media (min-width: 600px) and (max-width: 999px)': {
        fontSize: '0.875rem',
        letterSpacing: '2.36px',
      },
    },
    fontFamily: bodyFont,
    // color: ' '
  },

  //   colors
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

export default theme;
