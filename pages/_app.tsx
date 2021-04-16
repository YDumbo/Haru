import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import {
  useState, useEffect, createContext, useCallback,
} from 'react';
import { darkTheme, lightTheme } from '../styles/theme';
import GlobalStyle from '../styles/globals';

const defaultState = {
  dark: false,
  onToggleDark: () => {
    // setting darkMode
  },
};
export const ThemeContext = createContext(defaultState);

function MyApp({ Component, pageProps }: AppProps):JSX.Element {
  const [isMounted, setIsMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const onHandleToggleDark = useCallback(
    () => {
      setIsDark(!isDark);
    }, [isDark],
  );

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <ThemeContext.Provider value={{ dark: isDark, onToggleDark: onHandleToggleDark }}>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <Head>
          <title>하루</title>
          <link href="/images/logo.png" rel="shortcut icon" type="image/x-icon" />
        </Head>
        <GlobalStyle />
        { isMounted && <Component {...pageProps}/> }
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default MyApp;
