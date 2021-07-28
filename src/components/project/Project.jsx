import React from 'react';

import { ProjectPreview, Tags, ProjectContent, ProjectDetail, ProjectWrapper, Img } from './ProjectStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { SiMaterialUi, SiMongodb, SiReact, SiTailwindcss } from 'react-icons/si';
import PropTypes from 'prop-types'

const Project = (props) => (
    <Section nopadding id="projects">
        <SectionDivider />
        <SectionTitle main>{props.titlePart}</SectionTitle>
        {
            props.projects.map((index, project) => (
                <ProjectWrapper>
                    <ProjectContent key={index}>
                        <ProjectDetail>
                            <div className="project__detail-container">
                                <h2>{project.title}</h2>
                                <p>{project.description}</p>
                            </div>
                        </ProjectDetail>
                        <ProjectPreview>
                            <Img src={project.image}></Img>
                            {/* <Tags>
                            <SiReact fontSize="4rem" color="#79d8f7" />
                            <SiTailwindcss fontSize="4rem" color="#07b0ce" />
                            <SiMaterialUi fontSize="4rem" color="#00aaf7" />
                            <SiMongodb fontSize="4rem" color="#00a540" />
                        </Tags> */}
                        </ProjectPreview>
                    </ProjectContent>
                </ProjectWrapper>
            ))
        }
    </Section>
);

Project.propTypes = {
    titlePart: PropTypes.string,
}

export default Project;
