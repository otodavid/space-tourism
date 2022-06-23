import { ThemeProvider } from '@mui/material/styles';
import Head from 'next/head';
import '../styles/globals.css';
import theme from '../utils/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;