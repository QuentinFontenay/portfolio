import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
// import themes from "../themes/default";
// import lightDark from '../themes/darkLight';
import ThemeContext from '../context/ThemeContext';

const themes = {
    light: {
        background1: 'var(--light-bg-color)',
        titleColor: '#333',
        backgroundCard: '#317AC1',
        text: '#1F2024',
        backgroundText: '#fff',
        dividerSection: '#317AC1',
        socialIcon: '#DDDDDD',
        dotTestimonial: '#317AC1',
        backgroundButton: '#F5B851',
        project: {
            line: 'black',
            icon: 'black',
            colorTag: '#317AC1'
        },
        nav: {
            span: 'rgba(0, 0, 0, 0.75)',
            icon: 'rgba(0, 0, 0, 0.75)',
        },
        contact: {
            backgroundForm: '#317AC1',
            backgroundLeft: '#F5B851',
            backgroundDispo: '#317AC1',
            placeholder: '',
            label: 'white',
            backgroundInput: '#2f5b87'
        },
        cards: {
            text: 'rgba(0, 0, 0, 0.75)',
            divider: 'rgba(0, 0, 0, 0.52)',
            subText: '#C7C7C8'
        },
    },
    dark: {
        text: '#fff',
        background1: '#1F2937',
        backgroundCard: '#317AC1',
        titleColor: '#fff',
        socialIcon: '#17181d',
        backgroundText: '#fff',
        dividerSection: '#317AC1',
        dotTestimonial: '#317AC1',
        backgroundButton: '#F5B851',
        project: {
            line: 'white',
            icon: 'white',
            colorTag: '#317AC1'
        },
        nav: {
            span: 'rgba(255, 255, 255, 0.75)',
            icon: 'rgba(255, 255, 255, 0.75)',
        },
        contact: {
            backgroundForm: '#317AC1',
            backgroundLeft: '#F5B851',
            backgroundDispo: '#317AC1',
            placeholder: '',
            label: 'white',
            backgroundInput: '#2f5b87'
        },
        cards: {
            text: 'rgba(255, 255, 255, 0.75)',
            divider: 'rgba(255, 255, 255, 0.12)',
            subText: '#C7C7C8'
        },
    },
};

/**
 * Shared styles that we want accessible in the theme provider
 */
const shared = {
    // Temp fonts
    fonts: {
        title: "Source Sans Pro, sans-serif",
        main: "Space Grotesk, sans-serif"
    },
    // Colors for layout
    colors: {
        primary1: "hsl(204,23.8%,95.9%)",
        // background1: "#1F2024",
        accent1: "hsl(34.9,98.6%,72.9%)",
        button: "hsl(205.1,100%,36.1%)",
        background2: "red",
    },
    // Breakpoints for responsive design
    breakpoints: {
        sm: 'screen and (max-width: 640px)',
        md: 'screen and (max-width: 768px)',
        lg: 'screen and (max-width: 1024px)',
        xl: 'screen and (max-width: 1280px)'
    },
};

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