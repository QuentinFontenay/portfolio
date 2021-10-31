import React from 'react';
import { Section } from '../../styles/GlobalComponents';
import { Card, Text, Image, BlocButton } from './AboutMeStyles';
import { FaMapMarkedAlt } from 'react-icons/fa';
import Button from '../../styles/GlobalComponents/Button';

const AboutMe = () => (
    <Section>
        <Card>
            <div className="image-profile">
                <Image
                    alt="user image"
                    src={new URL('../../../public/images/heroProfile.jpg', import.meta.url)}
                    width={200}
                    height={200}
                    borderRadius="100%"
                    objectFit="cover"
                />
            </div>
            <article className="about">
                <Text size="3rem" weight={600}>
                    Quentin Fontenay
                </Text>
                <Text size="1.5rem" padding="0.5rem 0 0 0">
                    <FaMapMarkedAlt size="2rem" style={{ margin: '0 1rem 0 0' }} />
                    Nantes
                </Text>
                <Text padding="2rem 0 1rem 0">J'aime travailler dans un environnement dynamique et stimulant.
                    Je m'efforce d'avoir l'esprit d'équipe et de conserver une attitude positive face aux nouveaux défis.
                    Mes plus grandes forces sont ma capacité à sortir des sentiers battus, mon désir d'apprendre et de progresser,
                    et mon souci du détail. J'ai aussi développer une grande passion pour le tennis depuis quelque année que je pratique en compétition.
                    J'aime apprendre et je crois que pour réussir à long terme, il faut toujours apprendre.
                </Text>
                <BlocButton>
                    <Button alt="telecharger cv">
                        <a href={new URL('../../../public/pdf/cv.pdf', import.meta.url)} download="cv.pdf" style={{ color: 'white' }}>
                            Télécharger mon CV
                        </a>
                    </Button>
                </BlocButton>
            </article>
        </Card>
    </Section>
);

export default AboutMe;