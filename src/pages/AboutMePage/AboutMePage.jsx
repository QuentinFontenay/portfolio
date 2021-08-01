import React from 'react';
import AboutMe from '../../components/aboutMe/AboutMe';
import Box from '../../components/cards/Cards';
import { Layout } from '../../components/layout/LayoutContainer';
import Skill from '../../components/skill/Skill';
import { passions } from '../../constants/passions';

const TITLE_PART_PASSIONS = "Mes passions"

const AboutMePage = () => {
    return (
        <Layout>
            <AboutMe />
            <Skill />
            <Box titlePart={TITLE_PART_PASSIONS} data={passions} />
        </Layout>
    );
};

export default AboutMePage;