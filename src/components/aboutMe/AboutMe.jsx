import React from 'react';
import { Section, SectionDivider, SectionTitle, SectionText, SectionSubText } from '../../styles/GlobalComponents';
import { Card, Text, Image } from './AboutMeStyles';
import { FaMapMarkedAlt } from 'react-icons/fa';

const AboutMe = () => (
    <Section>
        <SectionDivider />
        <SectionTitle main>A propos de moi</SectionTitle>
        <Card>
            <div className="image-profile">
                <Image
                    alt="user image"
                    src={process.env.PUBLIC_URL + '/images/heroProfile.jpg'}
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
                <Text padding="2rem 0 0 0">Je suis passionné d’informatique et des nouvelles technologies.
                    J'ai aussi développer une grande passion pour le tennis depuis quelque année que je pratique en compétition.
                    L’informatique est un domaine que j'ai choisis car il permet de comprendre comment réaliser des
                    logiciels, des objets connectés, des robots et tous les objets qui construiront
                    notre futur. Je m'interesse aussi au domaine financier ainsi qu'au différent investissement que l'on puisse
                    réalisé afin de réaliser mon rêve de devenir rentier à 40 ans.
                </Text>
            </div>
        </Card>
        {/* <SectionText>Salut, Je m'appelle Quentin Fontenay, Passionnée de Tech</SectionText>
        <SectionSubText>
            Nam blandit consequat leo, vel blandit elit malesuada in. Aliquam erat volutpat. Vestibulum egestas velit vestibulum tristique auctor. 
            Praesent aliquam imperdiet mauris sodales dignissim. Quisque eget elit laoreet neque maximus auctor ut nec lectus. 
            Aliquam a velit ut lectus scelerisque sodales. Fusce efficitur urna eget erat bibendum placerat. Proin at cursus eros. 
            Maecenas id erat rhoncus, auctor sem a, gravida leo. Phasellus tincidunt, nisl vitae aliquet euismod, metus quam congue arcu, 
            sit amet lobortis massa libero at tortor. Nam ullamcorper fringilla purus, vitae aliquet elit commodo et. 
            Cras elementum metus in massa feugiat, quis suscipit orci ultrices. 
            Pellentesque in nisi odio. Donec tortor magna, sodales ut elit sed, suscipit semper nisl.
        </SectionSubText> */}
    </Section>
);

export default AboutMe;