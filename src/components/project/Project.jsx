import React, { useContext } from 'react';
import { FiExternalLink } from 'react-icons/fi';
import { AiFillGithub } from 'react-icons/ai';
import PropTypes from 'prop-types';
import {
  Section,
  SectionDivider,
  SectionTitle,
} from '../../styles/GlobalComponents';
import ThemeContext from '../../context/ThemeContext';
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
  BoxText,
} from './ProjectStyles';

function Project({ projects, titlePart }) {
  const { mode } = useContext(ThemeContext);

  return (
    <Section id="projects">
      {projects.length === 1 && (
        <div>
          <SectionTitle main>{titlePart}</SectionTitle>
          <SectionDivider />
        </div>
      )}

      <PortfolioContent>
        {projects.map((project) => (
          <ProjectContainer key={project.id}>
            <CustomImage
              src={project.image}
              alt={project.alt}
              height="280px"
              width="200px"
              loading="lazy"
            />
            <ProjectCaptionContainer>
              <ProjectTitleContainer>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectHorizontalLine />
                {project.visit.length !== 0 && (
                  <ProjectLink
                    href={project.visit}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="website link"
                  >
                    <FiExternalLink
                      size="3rem"
                      color={mode === 'dark' ? 'white' : 'black'}
                    />
                  </ProjectLink>
                )}
                {project.source.length !== 0 && (
                  <ProjectLink
                    href={project.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="code repository"
                  >
                    <AiFillGithub
                      size="3rem"
                      color={mode === 'dark' ? 'white' : 'black'}
                    />
                  </ProjectLink>
                )}
              </ProjectTitleContainer>
              <p>{project.description}</p>
              <Boxes>
                {project.tags.map((tag) => (
                  <Box key={tag.id}>
                    <BoxText>{tag.icon}</BoxText>
                  </Box>
                ))}
              </Boxes>
            </ProjectCaptionContainer>
          </ProjectContainer>
        ))}
      </PortfolioContent>
    </Section>
  );
}

Project.propTypes = {
  titlePart: PropTypes.string.isRequired,
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.func.isRequired,
      image: PropTypes.string,
      visit: PropTypes.string,
      source: PropTypes.string,
      description: PropTypes.string,
      tags: PropTypes.arrayOf(
        PropTypes.shape({
          icon: PropTypes.element,
          id: PropTypes.number,
        }),
      ),
      alt: PropTypes.string,
      id: PropTypes.number,
    }),
  ).isRequired,
};

export default Project;
