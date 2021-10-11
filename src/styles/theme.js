import { ThemeProvider } from 'styled-components';
import theme from "../themes/default";
import GlobalStyles from './globals';
import React from 'react';
import CustomThemeProvider from './CustomThemeProvider';

const Theme = ({ children }) => (
  <CustomThemeProvider>
    <GlobalStyles />
    {children}
  </CustomThemeProvider>
);

export default Theme;