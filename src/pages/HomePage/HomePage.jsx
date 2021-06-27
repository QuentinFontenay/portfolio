import React from 'react';
import HeroBanner from '../../components/heroBanner/Hero';
import HeroImage from '../../components/heroImage/HeroImage';
import { Layout } from '../../components/layout/LayoutContainer';
import { Section } from '../../styles/GlobalComponents';

const HomePage = () => {
    return (
        <Layout>
            <Section grid>
                <HeroBanner />
                <HeroImage/>
            </Section>
        </Layout>
    );
};

export default HomePage;