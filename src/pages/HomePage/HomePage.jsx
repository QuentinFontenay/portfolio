import React from 'react';
import HeroBanner from '../../components/heroBanner/Hero';
import HeroImage from '../../components/heroImage/HeroImage';
import { Layout } from '../../components/layout/LayoutContainer';
import MyService from '../../components/myService/MyService';
import Project from '../../components/project/Project';
import Slider from '../../components/slider/Slider';
import { Section } from '../../styles/GlobalComponents';
import { TESTIMONIALS } from '../../constants/testimonials';

const HomePage = () => {
    return (
        <Layout>
            <Section grid>
                <HeroBanner />
                <HeroImage />
            </Section>
            <MyService />
            <Project />
            <Slider testimonials={TESTIMONIALS.slice(2)} large />
        </Layout>
    );
};

export default HomePage;