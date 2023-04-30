import React, { useState, useEffect, useMemo } from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import ThemeContext from '../context/ThemeContext';
import shared from '../themes/default';
import themes from '../themes/darkLight';

function CustomThemeProvider({ children }) {
  const [mode, setMode] = useState(localStorage.getItem('mode') || 'dark');

  useEffect(() => {
    document.querySelector('body').style.background = themes[mode].background1;
  }, [mode]);

  const themeProviderValue = useMemo(
    () => ({ setMode, mode, theme: themes[mode] }),
    [mode],
  );

  return (
    <ThemeContext.Provider value={themeProviderValue}>
      <ThemeProvider theme={{ mode, ...shared, ...themes[mode] }}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

CustomThemeProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default CustomThemeProvider;
