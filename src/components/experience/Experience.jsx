import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { CardDescription, Container, Card, Text } from './ExperienceStyles';
import {
  Section,
  SectionDivider,
  SectionTitle,
} from '../../styles/GlobalComponents';

function Experience({ experience, education }) {
  return (
    <Section>
      <SectionTitle main>Mes experiences</SectionTitle>
      <SectionDivider />
      <Container>
        <Card className="experience">
          <Text size="3rem" weight={600} margin="0 0 1rem 0">
            Expérience Professionel
          </Text>
          {experience.map((item) => (
            <CardDescription key={item.id}>
              <Text size="2rem" weight={600} padding="1rem 0 1rem 0">
                {item.role}
              </Text>

              <Text size="1.3rem">
                <FaCalendarAlt
                  size="2rem"
                  style={{ margin: '0 0.5rem -0.4rem 0' }}
                />
                {item.period} | {item.company}
              </Text>
              <Text padding="1rem 0" weight={300}>
                {item.description}
              </Text>
            </CardDescription>
          ))}
        </Card>
        <Card className="education">
          <Text size="3rem" weight={600} margin="0 0 1rem 0">
            Expérience scolaire
          </Text>
          {education.map((item) => (
            <CardDescription key={item.id}>
              <Text size="2rem" weight={600} padding="1rem 0 1rem 0">
                {item.role}
              </Text>

              <Text size="1.3rem">
                <FaCalendarAlt
                  size="2rem"
                  style={{ margin: '0 0.5rem -0.4rem 0' }}
                />
                {item.period} | {item.company}
              </Text>
              <Text padding="1rem 0" weight={300}>
                {item.description}
              </Text>
            </CardDescription>
          ))}
        </Card>
      </Container>
    </Section>
  );
}

Experience.propTypes = {
  education: PropTypes.arrayOf(
    PropTypes.shape({
      company: PropTypes.string,
      period: PropTypes.string,
      role: PropTypes.string,
      description: PropTypes.string,
      id: PropTypes.number,
    }),
  ).isRequired,
  experience: PropTypes.arrayOf(
    PropTypes.shape({
      company: PropTypes.string,
      period: PropTypes.string,
      role: PropTypes.string,
      description: PropTypes.string,
      id: PropTypes.number,
    }),
  ).isRequired,
};

export default Experience;
