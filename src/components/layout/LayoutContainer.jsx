import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../navigation/footer/Footer';
import Header from '../navigation/header/Header';
import Container from './LayoutStyles';

function Layout({ children }) {
  return (
    <Container>
      <Header />
      <main>{children}</main>
      <Footer />
    </Container>
  );
}

Layout.propTypes = {
  children: PropTypes.func.isRequired,
};

export default Layout;
