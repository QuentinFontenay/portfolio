import { Link } from 'react-router-dom';
import React from 'react';
import { Container, Home, Navbar, NavLink, Span } from './HeaderStyles';

const menuItems = [
    { title: "Accueil", link: "/" },
    { title: "Travaux", link: "projects" },
    { title: "Qui suis je ?", link: "about_me" },
    { title: "Processus", link: "process" },
    { title: "Contact", link: "contact" }
]

const Header = () => (
    <Container>
        <Home>
            <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
                <Span>Fontenay Quentin</Span>
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
    </Container>
);

export default Header;