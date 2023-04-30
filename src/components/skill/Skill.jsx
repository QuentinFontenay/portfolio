import React from 'react';
import { GoBrowser } from 'react-icons/go';
import { BiCodeAlt } from 'react-icons/bi';
import { GiPencilBrush } from 'react-icons/gi';
import {
  Box,
  Boxes,
  BoxSubText,
  BoxText,
  Divider,
  BoxTitleText,
} from './SkillStyles';
import {
  Section,
  SectionDivider,
  SectionTitle,
} from '../../styles/GlobalComponents';

const frontEndSkills = ['HTML', 'CSS', 'React', 'Styled-component', 'Tailwind'];
const backEndSkills = [
  'NodeJS',
  'ExpressJS',
  'MongoDB',
  'NextJS',
  'PostgreSQL',
  'Symfony',
];
const designSkills = ['Adobe XD', 'Figma', 'Photoshop', 'Illustrator', 'Canva'];

function Skill() {
  return (
    <Section>
      <SectionTitle main>Mes compétences</SectionTitle>
      <SectionDivider />
      <Boxes>
        <Box>
          <GiPencilBrush style={{ color: 'white' }} fontSize="3rem" />
          <BoxTitleText>Designer</BoxTitleText>
          <BoxSubText>
            J&rsquo;ai pu développer ses compétences grâce à mes différents
            projets projets personnels ce qui me de désigner des application
            mobiles ou web.
          </BoxSubText>
          <Divider />
          <BoxText>Outils utilisés:</BoxText>
          {designSkills.map((item) => (
            <BoxText key={item}>{item}</BoxText>
          ))}
        </Box>
        <Box>
          <GoBrowser style={{ color: 'white' }} fontSize="3rem" />
          <BoxTitleText>Développeur Front-end</BoxTitleText>
          <BoxSubText>
            Ses compétences me permettent de créer des interfaces responsive et
            au goût du jour.
          </BoxSubText>
          <Divider />
          <BoxText>Outils utilisés:</BoxText>
          {frontEndSkills.map((item) => (
            <BoxText key={item}>{item}</BoxText>
          ))}
        </Box>
        <Box>
          <BiCodeAlt style={{ color: 'white' }} fontSize="3rem" />
          <BoxTitleText>Développeur Back-end</BoxTitleText>
          <BoxSubText>
            Ses compétences me permettent de récupérer des données à partir
            &rsquo;une bdd afin de pouvoir les manipuler.
          </BoxSubText>
          <Divider />
          <BoxText>Outils utilisés:</BoxText>
          {backEndSkills.map((item) => (
            <BoxText key={item}>{item}</BoxText>
          ))}
        </Box>
      </Boxes>
    </Section>
  );
}

export default Skill;
