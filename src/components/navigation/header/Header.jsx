import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { Container, Home, Navbar, NavLink, Span, NavBarItems, BurgWrap } from './HeaderStyles';
import { CgMenu, CgClose } from 'react-icons/cg';

const menuItems = [
    { title: "Accueil", link: "/" },
    { title: "Travaux", link: "projects" },
    { title: "Qui suis je ?", link: "about_me" },
    { title: "Processus", link: "process" },
    { title: "Contact", link: "contact" }
]

const Header = () => {
    const [open, setOpen] = useState(false);
    const handleToggle = () => {
        setOpen(prev => !prev)
    }
    return (
        <Container>
            <BurgWrap onClick={handleToggle}>
                {open
                    ? <CgClose size="3rem" />
                    : <CgMenu size="4rem" />
                }
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