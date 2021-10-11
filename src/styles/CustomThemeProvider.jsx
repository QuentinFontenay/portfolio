import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

function CustomThemeProvider({ children }) {
    const [mode, setMode] = useState(localStorage.getItem('mode') || 'light');
  
    useEffect(() => {
      document.querySelector('body').style.background = themes[mode].background;
    }, [mode]);
  
    return (
      <ThemeContext.Provider
        value={{
          setMode,
          mode,
          theme: themes[mode],
        }}
      >
        <ThemeProvider theme={{ mode, ...shared, ...themes[mode] }}>
          {children}
        </ThemeProvider>
      </ThemeContext.Provider>
    );
  }
  
  export default CustomThemeProvider;