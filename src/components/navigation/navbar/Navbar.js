import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

const menuItems = [{ title: "Accueil", link: "/" }, { title: "Contact", link: "/contact" }, { title: "Travaux", link: "/work/projects" }]

const NavbarMain = () => {
    return (
        <header>
            <nav class="header-menu">
                <ul class="header-inner">
                    <span class="header-logo">Quentin Fontenay</span>
                    {menuItems.map(item => (
                        <li class="header-item" key={item.title}>
                            <Link class="header-link" to={item.link}>{item.title}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default NavbarMain