import React, { useEffect, useState, useContext, useRef } from 'react';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
function ThemeButton() {
    const lastScrollTop = useRef(0);
    const [visibility, setVisibility] = useState(false);
    const theme = useContext(ThemeContext);
    const isLightTheme = theme.mode === 'light';
    const invertedTheme = () => (isLightTheme ? 'dark' : 'light');

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
                background={`var(--${invertedTheme()}-bg-color)`}
                aria-label="Toggle theme"
            >
                {(isLightTheme == 'light'
                    ? <BsFillSunFill size="2rem" />
                    : <BsFillMoonFill size="2rem" />
                )}
            </Button>
        </ButtonContainer>
    );
}

export default ThemeButton;