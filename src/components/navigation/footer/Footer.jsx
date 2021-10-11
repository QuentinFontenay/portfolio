import React from 'react';
import { AiFillGithub, AiFillMediumSquare, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../header/HeaderStyles';
import { FooterWrapper, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
    return (
        <FooterWrapper>
            <SocialIconsContainer>
                <p style={{ flex:'1 1 50%', textAlign: 'left', marginLeft: '6vh' }}>© 2021 Quentin Fontenay</p>
                <SocialContainer>
                    <SocialIcons href="https://github.com/QuentinFontenay">
                        <AiFillGithub size="3.5rem" />
                    </SocialIcons>

                    <SocialIcons href="https://www.linkedin.com/in/quentin-fontenay/">
                        <AiFillLinkedin size="3.5rem" />
                    </SocialIcons>

                    <SocialIcons href="https://medium.com/@quentinfontenay">
                        <AiFillMediumSquare size="3.5rem" />
                    </SocialIcons>
                </SocialContainer>
            </SocialIconsContainer>
        </FooterWrapper>
    );
};

export default Footer;