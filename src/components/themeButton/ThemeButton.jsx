import React, { useEffect, useState, useContext, useRef } from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';
import ThemeContext from '../../context/ThemeContext';
import { ButtonContainer, Button } from './ThemeButtonStyles';

function ThemeButton() {
    const lastScrollTop = useRef(0);
    const [visibility, setVisibility] = useState(false);
    const theme = useContext(ThemeContext);
    const isDarkTheme = theme.mode === 'dark';

    const invertedTheme = () => (isDarkTheme ? 'light' : 'dark');
    const scrollListener = () => {
        const position = window.pageYOffset || document.documentElement.scrollTop;
        position > lastScrollTop.current
            ? setVisibility(position > 300)
            : setVisibility(false);
        lastScrollTop.current = position;
    };
    useEffect(() => {
        document.addEventListener('scroll', scrollListener);
        return () => document.removeEventListener('scroll', scrollListener);
    }, []);

    return (
        <ButtonContainer>
            <Button
                onFocus={() => setVisibility(false)}
                onClick={() => {
                    theme.setMode(invertedTheme());
                    localStorage.setItem('mode', invertedTheme());
                }}
                background={`var(--${invertedTheme}-bg-color)`}
                aria-label="Toggle theme"
            >
                {isDarkTheme ?
                    <BsSun size="2rem" />
                    :
                    <BsMoon size="2rem" />
                }
            </Button>
        </ButtonContainer>
    );
}

export default ThemeButton;