import React from 'react'
import Footer from '../navigation/footer/Footer'
import Header from '../navigation/header/Header'
import { Container, Copyright } from './LayoutStyles'

export const Layout = ({ children }) => {
  return (
    <Container>
      <Header />

      <main>{children}</main>
      <Footer />
      <Copyright> © 2021 Quentin Fontenay </Copyright>
    </Container>
  )
}