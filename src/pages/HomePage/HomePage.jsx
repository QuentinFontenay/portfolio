import React from 'react';
import HeroBanner from '../../components/heroBanner/Hero';
import HeroImage from '../../components/heroImage/HeroImage';
import { Layout } from '../../components/layout/LayoutContainer';
import Project from '../../components/project/Project';
import Slider from '../../components/slider/Slider';
import { TESTIMONIALS } from '../../constants/testimonials';
import { projects } from '../../constants/projects';
import { services } from '../../constants/services';
import CardsWithImage from '../../components/cards/CardsWithImage';
import '../../components/loading/LoadingAnimation.css';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import '../../components/heroBanner/ScrollAnimation.css';

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
            <Slider testimonials={TESTIMONIALS.slice(2)} large />
        </Layout>
    );
};

export default HomePage;