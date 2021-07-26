import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
    return (
        <FooterWrapper>
            <LinkList>
                <LinkColumn>
                    <LinkTitle>Téléphone</LinkTitle>

                    <LinkItem href="tel:0383870350">(+84) 383-870-350</LinkItem>
                </LinkColumn>
                
                <LinkColumn>
                    <LinkTitle>Email</LinkTitle>

                    <LinkItem href="mailto:quentin.fontenay@hotmail.com">quentin.fontenay@hotmail.com</LinkItem>
                </LinkColumn>
            </LinkList>

            <SocialIconsContainer>
                <CompanyContainer>
                    <Slogan>Make it better</Slogan>
                </CompanyContainer>

                <SocialContainer>
                    <SocialIcons href="https://github.com/QuentinFontenay">
                        <AiFillGithub size="3rem" />
                    </SocialIcons>

                    <SocialIcons href="https://www.linkedin.com/in/quentin-fontenay-907091156/">
                        <AiFillLinkedin size="3rem" />
                    </SocialIcons>

                    <SocialIcons href="https://www.instagram.com/_nttrungg_/">
                        <AiFillInstagram size="3rem" />
                    </SocialIcons>
                </SocialContainer>
            </SocialIconsContainer>
        </FooterWrapper>
    );
};

export default Footer;