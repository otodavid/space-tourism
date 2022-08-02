import { Html, Head, Main, NextScript } from 'next/document';
import theme from '../utils/theme';

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name='theme-color' content={theme.palette.neutral.dark} />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin="true" />
        <link
          href='https://fonts.googleapis.com/css2?family=Barlow&family=Barlow+Condensed:wght@300;400;700&family=Bellefair&display=swap'
          rel='stylesheet'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
