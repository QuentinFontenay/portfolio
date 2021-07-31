import React from 'react';
import AboutMe from '../../components/aboutMe/AboutMe';
import { Layout } from '../../components/layout/LayoutContainer';
import MyService from '../../components/myService/MyService';
import Skill from '../../components/skill/Skill';
import { passions } from '../../constants/passions';

const TITLE_PART_PASSIONS = "Mes passions"

const AboutMePage = () => {
    return (
        <Layout>
            <AboutMe />
            <Skill />
            <MyService titlePart={TITLE_PART_PASSIONS} data={passions} />
        </Layout>
    );
};

export default AboutMePage;