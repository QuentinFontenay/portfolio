import React from 'react';

import { ProjectPreview, Tags, ProjectContent, ProjectDetail, ProjectWrapper, Img } from './ProjectStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { SiMaterialUi, SiMongodb, SiReact, SiTailwindcss } from 'react-icons/si';
import PropTypes from 'prop-types'

const Project = () => (
    <Section nopadding id="projects">
        <SectionDivider />
        <SectionTitle main>Projet en cours</SectionTitle>
        <ProjectWrapper>
            <ProjectContent>
                <ProjectDetail>
                    <div className="project__detail-container">
                        <h2>viluShop</h2>
                        <p>Using React and CSS libraries such as TailwindCSS, Material UI to make an E-commerce web app. User can search, choose products into cart and pay via fake Paypal API.",</p>
                    </div>
                </ProjectDetail>
                <ProjectPreview>
                    <Img src="/images/image_projet.png"></Img>
                    <Tags>
                        <SiReact fontSize="4rem" color="#79d8f7" />
                        <SiTailwindcss fontSize="4rem" color="#07b0ce" />
                        <SiMaterialUi fontSize="4rem" color="#00aaf7" />
                        <SiMongodb fontSize="4rem" color="#00a540" />
                    </Tags>
                </ProjectPreview>
            </ProjectContent>
        </ProjectWrapper>
    </Section>
);

export default Project;
