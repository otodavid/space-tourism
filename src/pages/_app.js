import { ThemeProvider } from '@mui/material/styles';
import Head from 'next/head';
import '../styles/globals.css';
import theme from '../utils/theme';
import NextProgress from 'next-progress';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
        <meta name='theme-color' content='hsl(230,35%, 7%)' />
      </Head>

      <NextProgress
        delay={300}
        color='hsl(231, 77%, 90%)'
        options={{ showSpinner: false }}
      />

      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
