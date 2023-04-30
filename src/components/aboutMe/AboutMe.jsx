import React from 'react';
import { FaMapMarkedAlt } from 'react-icons/fa';
import { Section } from '../../styles/GlobalComponents';
import { Card, Text, Image, BlocCv, LinkCV } from './AboutMeStyles';

function AboutMe() {
  return (
    <Section>
      <Card>
        <div className="image-profile">
          <Image
            alt="user image"
            src={
              new URL('../../../public/images/heroProfile.jpg', import.meta.url)
            }
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
            Remote
          </Text>
          <Text padding="2rem 0 1rem 0">
            J&rsquo;aime travailler dans un environnement dynamique et
            stimulant. Je m&rsquo;efforce d&rsquo;avoir l&rsquo;esprit
            d&rsquo;équipe et de conserver une attitude positive face aux
            nouveaux défis. Mes plus grandes forces sont ma capacité à sortir
            des sentiers battus, mon désir d&rsquo;apprendre et de progresser,
            et mon souci du détail. J&rsquo;ai aussi développer une grande
            passion pour le tennis depuis quelque année que je pratique en
            compétition. J&rsquo;aime apprendre et je crois que pour réussir à
            long terme, il faut toujours apprendre.
          </Text>
          <BlocCv>
            <LinkCV
              href="https://quentinfontenay.notion.site/Fontenay-Quentin-fdf3f6d12836439eaa6442706dfaaaa8"
              rel="noreferrer"
              target="_blank"
            >
              Voir mon CV
            </LinkCV>
          </BlocCv>
        </article>
      </Card>
    </Section>
  );
}

export default AboutMe;
