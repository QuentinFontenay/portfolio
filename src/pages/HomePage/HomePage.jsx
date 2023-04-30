import React from 'react';
import Hero from '../../components/hero/Hero';
import Layout from '../../components/layout/LayoutContainer';
import Project from '../../components/project/Project';
import Testimonial from '../../components/testimonial/Testimonial';
import testimonials from '../../constants/testimonials';
import services from '../../constants/services';
import projects from '../../constants/projects';
import CardsWithImage from '../../components/cards/CardsWithImage';
import '../../components/hero/ScrollAnimation.css';
import Scroll from '../../components/hero/ScrollSvg';

const TITLE_PART_PROJET_EN_COURS = 'Projet en cours';
const TITLE_PART_SERVICE = 'Mes services';

function HomePage() {
  return (
    <>
      <Layout>
        <Hero />
        <CardsWithImage titlePart={TITLE_PART_SERVICE} data={services} />
        <Project
          titlePart={TITLE_PART_PROJET_EN_COURS}
          projects={projects.slice(0, 1)}
        />
        <Testimonial testimonials={testimonials} />
      </Layout>
      <Scroll />
    </>
  );
}

export default HomePage;
