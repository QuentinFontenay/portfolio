import React from 'react';
import HeroBanner from '../../components/heroBanner/Hero';
import HeroImage from '../../components/heroImage/HeroImage';
import { Layout } from '../../components/layout/LayoutContainer';
import MyService from '../../components/myService/MyService';
import Project from '../../components/project/Project';
import { Section } from '../../styles/GlobalComponents';

const HomePage = () => {
    return (
        <Layout>
            <Section grid>
                <HeroBanner />
                <HeroImage/>
            </Section>
            <MyService/>
            <Project/>
        </Layout>
    );
};

export default HomePage;