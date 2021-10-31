import React, { useContext } from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';
import ThemeContext from '../../context/ThemeContext';
import { ButtonContainer, Button } from './ThemeButtonStyles';

const ThemeButton = () => {
    const theme = useContext(ThemeContext);
    const isDarkTheme = theme.mode === 'dark';

    const invertedTheme = () => (isDarkTheme ? 'light' : 'dark');

    return (
        <ButtonContainer>
            <Button
                onClick={() => {
                    theme.setMode(invertedTheme());
                    localStorage.setItem('mode', invertedTheme());
                }}
                background={`var(--${invertedTheme}-bg-color)`}
                aria-label="Toggle theme"
            >
                {isDarkTheme ?
                    <BsSun size="2.5rem" />
                    :
                    <BsMoon size="2.5rem" />
                }
            </Button>
        </ButtonContainer>
    );
}

export default ThemeButton;