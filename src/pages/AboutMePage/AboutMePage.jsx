import React from 'react';
import AboutMe from '../../components/aboutMe/AboutMe';
import Cards from '../../components/cards/Cards';
import Experience from '../../components/experience/Experience';
import Layout from '../../components/layout/LayoutContainer';
import Skill from '../../components/skill/Skill';
import education from '../../constants/education';
import experiences from '../../constants/experiences';
import passions from '../../constants/passions';

const TITLE_PART_PASSIONS = 'Mes passions';

function AboutMePage() {
  return (
    <Layout>
      <AboutMe />
      <Experience experience={experiences} education={education} />
      <Skill />
      <Cards titlePart={TITLE_PART_PASSIONS} data={passions} />
    </Layout>
  );
}

export default AboutMePage;
