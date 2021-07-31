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
import { services } from '../../constants/services';

const TITLE_PART_PROJET_EN_COURS = "Projet en cours";
const TITLE_PART_SERVICE = "Mes services"

const HomePage = () => {
    return (
        <Layout>
            <HeroBanner/>
            <HeroImage />
            {/* <Section grid>
                <HeroBanner />
                <HeroImage />
            </Section> */}
            <MyService titlePart={TITLE_PART_SERVICE} data={services} />
            <Project titlePart={TITLE_PART_PROJET_EN_COURS} projects={projects.slice(0, 1)} />
            <Slider testimonials={TESTIMONIALS.slice(2)} large />
        </Layout>
    );
};

export default HomePage;