import GlobalStyles from './globals';
import React, { useState } from 'react';
import CustomThemeProvider from './CustomThemeProvider';

const Theme = ({ children }) => {

  return (
    <CustomThemeProvider>
      <GlobalStyles />
      {children}
    </CustomThemeProvider>
  )
};

export default Theme;