import React from 'react';
import { ThemeProvider } from 'styled-components';
import { MINIMAL_VIEWPORTS } from "@storybook/addon-viewport";
import theme from './styles/theme';
import GlobalStyle from '../styles/globals';

export const decorators = [
  (Story) => (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    </>
  )
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport : {
    viewports: MINIMAL_VIEWPORTS,
  }
}
