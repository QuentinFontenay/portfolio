import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { CgMenu, CgClose } from 'react-icons/cg';
import {
  Container,
  Home,
  Navbar,
  NavLink,
  Span,
  NavBarItems,
  BurgWrap,
} from './HeaderStyles';

const menuItems = [
  { title: 'Accueil', link: '/' },
  { title: 'Travaux', link: '/projects' },
  { title: 'Qui suis je ?', link: '/about_me' },
  { title: 'Processus', link: '/process' },
  { title: 'Contact', link: '/contact' },
];

function Header() {
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen((prev) => !prev);
  };
  return (
    <Container>
      <BurgWrap>
        <button
          type="button"
          style={{
            border: 'none',
            background: 'none',
            width: '4rem',
            height: '4rem',
          }}
          onClick={handleToggle}
        >
          {open ? (
            <CgClose color="white" size="3rem" />
          ) : (
            <CgMenu color="white" size="4rem" />
          )}
        </button>
      </BurgWrap>
      <Home>
        <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
          <Span>Fontenay Quentin</Span>
        </Link>
      </Home>

      <Navbar>
        <NavBarItems open={open}>
          {menuItems.map((item) => (
            <li key={item.title}>
              <Link to={item.link}>
                <NavLink>{item.title}</NavLink>
              </Link>
            </li>
          ))}
        </NavBarItems>
      </Navbar>
    </Container>
  );
}

export default Header;
