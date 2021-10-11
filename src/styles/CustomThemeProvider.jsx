import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import themes from "../themes/default";
import lightDark from '../themes/darkLight';
import ThemeContext from '../context/ThemeContext';

function CustomThemeProvider({ children }) {
    const [mode, setMode] = useState(localStorage.getItem('mode') || 'dark');

    useEffect(() => {
        console.log(lightDark);
        document.querySelector('body').style.background = lightDark[mode].background1;
    }, [mode]);

    return (
        <ThemeContext.Provider
            value={{
                setMode,
                mode,
                theme: lightDark[mode],
            }}
        >
            <ThemeProvider theme={{ mode, ...themes, ...lightDark[mode] }}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
}

export default CustomThemeProvider;