import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { FiExternalLink } from 'react-icons/fi';
import { AiFillGithub } from 'react-icons/ai';
import LinkedImage from './LinkedImage';
import PropTypes from 'prop-types'
import {
    ProjectContainer,
    ProjectLink,
    ProjectCaptionContainer,
    ProjectHorizontalLine,
    ProjectTitle,
    ProjectTitleContainer,
    PortfolioContent,
    CustomImage
} from "./ProjectStyles";

const Project = (props) => (
    <Section nopadding id="projects">
        <SectionDivider />
        <SectionTitle main>{props.titlePart}</SectionTitle>
        <PortfolioContent>
            {
                props.projects.map((project, index) => (
                    <ProjectContainer key={index}>
                        <LinkedImage url={project.visit} maxWidth="35em" overlayText={project.title}>
                            <CustomImage
                                src={project.image}
                                alt={project.title}
                                height="280px"
                                width="500px"
                                loading="lazy"
                            />
                        </LinkedImage>
                        <ProjectCaptionContainer>
                            <ProjectTitleContainer>
                                <ProjectTitle>{project.title}</ProjectTitle>
                                <ProjectHorizontalLine />
                                <ProjectLink
                                    href={project.visit}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="website link"
                                >
                                    <FiExternalLink size="3rem" />
                                </ProjectLink>
                                <ProjectLink
                                    href={project.source}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="code repository"
                                >
                                    <AiFillGithub size="3rem" />
                                </ProjectLink>
                            </ProjectTitleContainer>
                            <p>{project.description}</p>
                            {/* <ChipContainer>{project.tags}</ChipContainer> */}
                        </ProjectCaptionContainer>
                    </ProjectContainer>
                ))
            }
        </PortfolioContent>
    </Section>
);

Project.propTypes = {
    titlePart: PropTypes.string,
}

export default Project;
