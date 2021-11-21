import React from 'react';
import Hero from '../../components/hero/Hero';
import { Layout } from '../../components/layout/LayoutContainer';
import Project from '../../components/project/Project';
import Testimonial from '../../components/testimonial/Testimonial';
import { TESTIMONIALS } from '../../constants/testimonials';
import { projects } from '../../constants/projects';
import { services } from '../../constants/services';
import CardsWithImage from '../../components/cards/CardsWithImage';
import '../../components/heroBanner/ScrollAnimation.css';
import Scroll from '../../components/heroBanner/ScrollSvg';

const TITLE_PART_PROJET_EN_COURS = "Projet en cours";
const TITLE_PART_SERVICE = "Mes services"

const HomePage = () => {
    return (
        <>
            <Layout>
                <Hero />
                <CardsWithImage titlePart={TITLE_PART_SERVICE} nb data={services} />
                <Project titlePart={TITLE_PART_PROJET_EN_COURS} projects={projects.slice(0, 1)} />
                <Testimonial testimonials={TESTIMONIALS} />
            </Layout>
            <Scroll />
        </>
    );
};

export default HomePage;