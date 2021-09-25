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
            <div className="about">
                <Text size="3rem" weight={600}>
                    Quentin Fontenay
                </Text>
                <Text size="1.5rem" padding="0.5rem 0 0 0">
                    <FaMapMarkedAlt size="2rem" style={{ margin: '0 1rem 0 0' }} />
                    Nantes
                </Text>
                <Text padding="2rem 0 1rem 0">Je suis passionné d’informatique et des nouvelles technologies.
                    J'ai aussi développer une grande passion pour le tennis depuis quelque année que je pratique en compétition.
                    L’informatique est un domaine que j'ai choisis car il permet de comprendre comment réaliser des
                    logiciels, des objets connectés, des robots et tous les objets qui construiront
                    notre futur. 
                </Text>
                <BlocButton>
                    <Button alt>
                        <a href={new URL('../../../public/pdf/cv.pdf', import.meta.url)} download="cv.pdf" style={{ color: 'white' }}>
                            Télécharger mon CV
                        </a>
                    </Button>
                </BlocButton>
            </div>
        </Card>
    </Section>
);

export default AboutMe;