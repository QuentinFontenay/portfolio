import React from 'react';
import HeroBanner from '../../components/heroBanner/Hero';
import HeroImage from '../../components/heroImage/HeroImage';
import { Layout } from '../../components/layout/LayoutContainer';
import Project from '../../components/project/Project';
import Testimonial from '../../components/testimonial/Testimonial';
import { TESTIMONIALS } from '../../constants/testimonials';
import { projects } from '../../constants/projects';
import { services } from '../../constants/services';
import CardsWithImage from '../../components/cards/CardsWithImage';
import { Section } from '../../styles/GlobalComponents';
import '../../components/heroBanner/ScrollAnimation.css';
import ThemeButton from '../../components/themeButton/themeButton';

const TITLE_PART_PROJET_EN_COURS = "Projet en cours";
const TITLE_PART_SERVICE = "Mes services"

const HomePage = () => {
    return (
        <Layout>
            <Section grid hero nopadding>
                <HeroBanner />
                <HeroImage />
            </Section>
            <CardsWithImage titlePart={TITLE_PART_SERVICE} nb data={services} />
            <Project titlePart={TITLE_PART_PROJET_EN_COURS} projects={projects.slice(0, 1)} />
            <Testimonial testimonials={TESTIMONIALS} />
        </Layout>
    );
};

export default HomePage;