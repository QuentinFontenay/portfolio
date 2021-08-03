import React from 'react';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './SkillStyles';
import { FaMobileAlt } from 'react-icons/fa';
import { GoBrowser } from 'react-icons/go';
import { BiCodeAlt } from 'react-icons/bi';

const frontEndSkills = ['HTML', 'CSS', 'JavaScript', 'React', 'NextJS', 'Vue'];
const backEndSkills = ['NodeJS', 'Express', 'MongoDB', 'SQL', 'Serverless', 'AWS'];
const designSkills = [
  'UX/UI',
  'Figma',
  'Photoshop',
  'Illustrator',
  'Styled-Components',
  'Material-UI & Bulma',
];

const Skill = () => (
  <Section>
    <SectionDivider />

    <SectionTitle main>Mes compétences</SectionTitle>

    <Boxes>
      <Box>
        <FaMobileAlt fontSize="3rem"></FaMobileAlt>
        <BoxText>Développeur Mobile</BoxText>
      </Box>
      <Box>
        <GoBrowser fontSize="3rem"></GoBrowser>
        <BoxText>Développeur Front-end</BoxText>
      </Box>
      <Box>
        <BiCodeAlt fontSize="3rem"></BiCodeAlt>
        <BoxText>Développeur Back-end</BoxText>
      </Box>
    </Boxes>
  </Section>
);


export default Skill;