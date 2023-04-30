import React, { useContext } from 'react';
import {
  AiFillGithub,
  AiFillMediumSquare,
  AiFillLinkedin,
} from 'react-icons/ai';
import { FiMail } from 'react-icons/fi';
import { TypeAnimation } from 'react-type-animation';
import {
  Box,
  TextContainer,
  HeaderText,
  SocialBlock,
  HeaderSubText,
  BoxBackground,
} from './HeroStyles';
import { Section } from '../../styles/GlobalComponents';
import ThemeContext from '../../context/ThemeContext';

function Hero() {
  const { mode } = useContext(ThemeContext);
  return (
    <Section hero nopadding>
      <BoxBackground />
      <Box>
        <TextContainer>
          <HeaderSubText>Bonjour, je m&rsquo;appelle</HeaderSubText>
          <HeaderText>Quentin Fontenay</HeaderText>
          <TypeAnimation
            sequence={[
              // Same String at the start will only be typed once, initially
              'Je suis Développeur FullStack',
              1000,
              'Je suis Développeur Mobile',
              1000,
              'Je suis Data Scientist',
              1000,
            ]}
            speed={20}
            style={{
              fontSize: '18px',
              fontWeight: 400,
              lineHeight: 1,
              marginBottom: '0px',
            }}
            repeat={Infinity}
          />
        </TextContainer>
        <SocialBlock>
          <a href="https://github.com/QuentinFontenay">
            <AiFillGithub
              size="3.5rem"
              color={mode === 'dark' ? 'white' : 'black'}
            />
          </a>
          <a href="https://medium.com/@quentinfontenay">
            <AiFillMediumSquare
              size="3.5rem"
              color={mode === 'dark' ? 'white' : 'black'}
            />
          </a>
          <a href="https://www.linkedin.com/in/quentin-fontenay/">
            <AiFillLinkedin
              size="3.5rem"
              color={mode === 'dark' ? 'white' : 'black'}
            />
          </a>
          <a href="mailto:quentin.fontenay@hotmail.com">
            <FiMail size="3.5rem" color={mode === 'dark' ? 'white' : 'black'} />
          </a>
        </SocialBlock>
      </Box>
    </Section>
  );
}

export default Hero;
