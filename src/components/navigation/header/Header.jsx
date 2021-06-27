import { Link } from 'react-router-dom';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import { Container, Home, Navbar, SocialContainer, NavLink, SocialIcons, Span } from './HeaderStyles';

const menuItems = [{ title: "Accueil", link: "/" }, { title: "Contact", link: "/contact" }, { title: "Travaux", link: "/work/projects" }]
const socialItems = [
    { balise: <AiFillGithub size="3rem" />, link: "https://github.com/QuentinFontenay" },
    { balise: <AiFillLinkedin size="3rem" />, link: "https://www.linkedin.com/in/quentin-fontenay-907091156/" },
    { balise: <AiFillInstagram size="3rem" />, link: "https://www.instagram.com/_nttrungg_/" }
]
const Header = () => (
    <Container>
        <Home>
            <Link href="/">
                <a style={{ display: 'flex', alignItems: 'center', color: 'white', marginBottom: '20px' }}>
                    <DiCssdeck size="3rem" /> <Span>Fontenay Quentin</Span>
                </a>
            </Link>
        </Home>

        <Navbar>
            {menuItems.map(item => (
                <li key={item.title}>
                    <Link to={item.link}>
                        <NavLink>{item.title}</NavLink>
                    </Link>
                </li>
            ))}
        </Navbar>
        <SocialContainer>
        {socialItems.map(item => (
                <SocialIcons href={item.link}>
                    {item.balise}
                </SocialIcons>
            ))}
        </SocialContainer>
    </Container>
);

export default Header;