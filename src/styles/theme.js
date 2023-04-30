import React from 'react';
import PropTypes from 'prop-types';
import GlobalStyles from './globals';
import CustomThemeProvider from './CustomThemeProvider';

function Theme({ children }) {
  return (
    <CustomThemeProvider>
      <GlobalStyles />
      {children}
    </CustomThemeProvider>
  );
}

Theme.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Theme;
