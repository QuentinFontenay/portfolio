import React, { useContext } from 'react';
import {
  AiFillGithub,
  AiFillMediumSquare,
  AiFillLinkedin,
} from 'react-icons/ai';
import ThemeContext from '../../../context/ThemeContext';
import {
  FooterWrapper,
  SocialContainer,
  SocialIconsContainer,
  SocialIcons,
  Copyright,
} from './FooterStyles';

function Footer() {
  const { mode } = useContext(ThemeContext);

  return (
    <FooterWrapper>
      <SocialIconsContainer>
        <Copyright>© 2023 Quentin Fontenay</Copyright>
        <SocialContainer>
          <SocialIcons href="https://github.com/QuentinFontenay">
            <AiFillGithub
              size="3.5rem"
              color={mode === 'dark' ? 'white' : 'black'}
            />
          </SocialIcons>

          <SocialIcons href="https://www.linkedin.com/in/quentin-fontenay/">
            <AiFillLinkedin
              size="3.5rem"
              color={mode === 'dark' ? 'white' : 'black'}
            />
          </SocialIcons>

          <SocialIcons href="https://medium.com/@quentinfontenay">
            <AiFillMediumSquare
              size="3.5rem"
              color={mode === 'dark' ? 'white' : 'black'}
            />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
}

export default Footer;
