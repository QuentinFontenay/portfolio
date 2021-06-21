import React from 'react';
import HeroBanner from '../../components/heroBanner/Hero';
import NavbarMain from '../../components/navigation/header/Navbar';
import { Layout } from '../../components/layout/LayoutContainer';
import { Section } from '../../styles/GlobalComponents';

const HomePage = () => {
    return (
        <Layout>
            <Section grid>
                <HeroBanner />
            </Section>
        </Layout>
    );
};

export default HomePage;