import { ThemeProvider } from 'styled-components';
import theme from "../themes/default";
import GlobalStyles from './globals';
import React, { useState } from 'react';
import CustomThemeProvider from './CustomThemeProvider';

const Theme = ({ children }) => {
  const [mode, setMode] = useState(localStorage.getItem('mode') || 'dark');

  return (
    // <ThemeProvider theme={mode == 'light' ? light : dark}>
    <CustomThemeProvider>
      <GlobalStyles />
      {children}
    </CustomThemeProvider>
    // </ThemeProvider>
  )
};

export default Theme;