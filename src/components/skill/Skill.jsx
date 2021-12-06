import React from 'react';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxSubText, BoxText, Divider, BoxTitleText } from './SkillStyles';
import { GoBrowser } from 'react-icons/go';
import { BiCodeAlt } from 'react-icons/bi';
import { GiPencilBrush } from 'react-icons/gi';

const frontEndSkills = ['HTML', 'CSS', 'JavaScript', 'React', 'Styled-component', 'Boostrap'];
const backEndSkills = ['NodeJS', 'ExpressJS', 'MongoDB', 'NextJS', 'PostgreSQL', 'Symfony'];
const designSkills = [
  'Adobe XD',
  'Figma',
  'Photoshop',
  'Illustrator',
  'Canva'
];

const Skill = () => (
  <Section>
    <SectionTitle main>Mes compétences</SectionTitle>
    <SectionDivider />
    <Boxes>
      <Box>
        <GiPencilBrush style={{ color: 'white' }} fontSize="3rem"></GiPencilBrush>
        <BoxTitleText>Designer</BoxTitleText>
        <BoxSubText>
          J'ai pu développer ses compétences grâce à mes différents projets personnels ce qui me
          de désigner des application mobiles ou web.
        </BoxSubText>
        <Divider />
        <BoxText>
          Outils utilisés:
        </BoxText>
        {designSkills.map((item) => (
          <BoxText key={item}>
            {item}
          </BoxText>
        ))}
      </Box>
      <Box>
        <GoBrowser style={{ color: 'white' }} fontSize="3rem"></GoBrowser>
        <BoxTitleText>Développeur Front-end</BoxTitleText>
        <BoxSubText>
          Ses compétences me permettent de créer des interfaces responsive et au goût du jour.
        </BoxSubText>
        <Divider />
        <BoxText>
          Outils utilisés:
        </BoxText>
        {frontEndSkills.map((item) => (
          <BoxText key={item}>
            {item}
          </BoxText>
        ))}
      </Box>
      <Box>
        <BiCodeAlt style={{ color: 'white' }} fontSize="3rem"></BiCodeAlt>
        <BoxTitleText>Développeur Back-end</BoxTitleText>
        <BoxSubText>
          Ses compétences me permettent de récupérer des données à partir d'une bdd afin de
          pouvoir les manipuler.
        </BoxSubText>
        <Divider />
        <BoxText>
          Outils utilisés:
        </BoxText>
        {backEndSkills.map((item) => (
          <BoxText key={item}>
            {item}
          </BoxText>
        ))}
      </Box>
    </Boxes>
  </Section>
);


export default Skill;