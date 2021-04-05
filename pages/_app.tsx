import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import GlobalStyle from '../styles/globals';

function MyApp({ Component }: AppProps):JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>하루</title>
        <link href="/images/logo.jpeg" rel="shortcut icon" type="image/x-icon" />
      </Head>
      <GlobalStyle />
      <Component />
    </ThemeProvider>
  );
}

export default MyApp;
