import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { FiExternalLink } from 'react-icons/fi';
import { AiFillGithub } from 'react-icons/ai';
import PropTypes from 'prop-types'
import {
    ProjectContainer,
    ProjectLink,
    ProjectCaptionContainer,
    ProjectHorizontalLine,
    ProjectTitle,
    ProjectTitleContainer,
    PortfolioContent,
    CustomImage,
    Boxes,
    Box,
    BoxText
} from "./ProjectStyles";

const Project = (props) => {
    return (
        <Section id="projects">
            {props.projects.length === 1 &&
                <div>
                    <SectionTitle main>{props.titlePart}</SectionTitle>
                    <SectionDivider />
                </div>
            }

            <PortfolioContent>
                {
                    props.projects.map((project, index) => (
                        <ProjectContainer key={index}>
                            <CustomImage
                                src={project.image}
                                alt={project.title}
                                height="280px"
                                width="200px"
                                loading="lazy"
                            />
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
                                <Boxes>
                                    {
                                        project.tags.map((tag, index) => (
                                            <Box key={index}>
                                                <BoxText>{tag}</BoxText>
                                            </Box>
                                        ))
                                    }
                                </Boxes>
                                {/* <ChipContainer>{project.tags}</ChipContainer> */}
                            </ProjectCaptionContainer>
                        </ProjectContainer>
                    ))
                }
            </PortfolioContent>
        </Section>
    );
};

Project.propTypes = {
    titlePart: PropTypes.string,
}

export default Project;
