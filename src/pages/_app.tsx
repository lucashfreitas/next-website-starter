import type { AppProps /*, AppContext */ } from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/global';
import theme from '../styles/theme';
/* eslint-disable react/jsx-props-no-spreading, react/prop-types */

const App: React.FunctionComponent<AppProps> = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <Component {...pageProps} />
    <GlobalStyle />
  </ThemeProvider>
);

export default App;
