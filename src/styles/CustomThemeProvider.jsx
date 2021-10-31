import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import ThemeContext from '../context/ThemeContext';
import { shared } from '../themes/default';
import { themes } from '../themes/darkLight';

function CustomThemeProvider({ children }) {
    const [mode, setMode] = useState(localStorage.getItem('mode') || 'dark');

    useEffect(() => {
        document.querySelector('body').style.background = themes[mode].background1;
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