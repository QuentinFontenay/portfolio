import React from 'react';
import { CardDescription, Container, Card, Text } from './ExperienceStyles';
import { FaCalendarAlt } from 'react-icons/fa';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';

export const Experience = ({ experience, education }) => {
    return (
        <Section>
            <SectionDivider />
            <SectionTitle main>Mes experiences</SectionTitle>
            <Container>
                <Card className="experience">
                    <Text size="1.5rem" weight={600} margin="0 0 1rem 0">
                        Experience Professionel
                    </Text>
                    {experience.map((item, key) => (
                        <CardDescription key={key}>
                            <Text size="1rem" weight={600} padding="1rem 0 0 0">
                                {item.role}
                            </Text>

                            <Text size="0.8rem">
                                <FaCalendarAlt width={12} style={{ margin: '0 0.5rem 0.2rem 0' }} />
                                {item.period} | {item.company}
                            </Text>
                            <Text padding="0.5rem 0" weight={300}>
                                {item.description}
                            </Text>
                        </CardDescription>
                    ))}
                </Card>
                <Card className="education">
                    <Text size="1.5rem" weight={600} margin="0 0 1rem 0">
                        Parcours scolaire
                    </Text>
                    {education.map((item, key) => (
                        <CardDescription key={key}>
                            <Text size="1rem" weight={600} padding="1rem 0 0 0">
                                {item.role}
                            </Text>

                            <Text size="0.8rem">
                                <FaCalendarAlt width={12} style={{ margin: '0 0.5rem 0.2rem 0' }} />
                                {item.period} | {item.company}
                            </Text>
                            <Text padding="0.5rem 0" weight={300}>
                                {item.description}
                            </Text>
                        </CardDescription>
                    ))}
                </Card>
            </Container>
        </Section>
    );
};

export default Experience;