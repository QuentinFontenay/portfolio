import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { Container, Home, Navbar, NavLink, Span, NavBarItems, BurgWrap } from './HeaderStyles';
import { Squash as Hamburger } from 'hamburger-react';

const menuItems = [
    { title: "Accueil", link: "/" },
    { title: "Travaux", link: "projects" },
    { title: "Qui suis je ?", link: "about_me" },
    { title: "Processus", link: "process" },
    { title: "Contact", link: "contact" }
]

const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <Container>
            <BurgWrap>
                <Hamburger
                    color='#faf7ff'
                    open={open}
                    toggle={setOpen}
                    toggled={open}
                    duration={0.8}
                />
            </BurgWrap>
            <Home>
                <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
                    <Span>Fontenay Quentin</Span>
                </Link>
            </Home>

            <Navbar>
                <NavBarItems open={open}>
                    {menuItems.map(item => (
                        <li key={item.title}>
                            <Link to={item.link}>
                                <NavLink>{item.title}</NavLink>
                            </Link>
                        </li>
                    ))}
                </NavBarItems>
            </Navbar>
        </Container>
    )
};

export default Header;