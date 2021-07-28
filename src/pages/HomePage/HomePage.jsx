import React from 'react';
import HeroBanner from '../../components/heroBanner/Hero';
import HeroImage from '../../components/heroImage/HeroImage';
import { Layout } from '../../components/layout/LayoutContainer';
import MyService from '../../components/myService/MyService';
import Project from '../../components/project/Project';
import Slider from '../../components/slider/Slider';
import { Section } from '../../styles/GlobalComponents';
import { TESTIMONIALS } from '../../constants/testimonials';
import { projects } from '../../constants/projects';

const TITLE_PART = "Projet en cours";

const HomePage = () => {
    return (
        <Layout>
            <Section grid>
                <HeroBanner />
                <HeroImage />
            </Section>
            <MyService />
            <Project titlePart={TITLE_PART} projects={projects.slice(0, 1)} />
            <Slider testimonials={TESTIMONIALS.slice(2)} large />
        </Layout>
    );
};

export default HomePage;