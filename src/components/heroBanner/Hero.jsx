import React, { useContext } from "react"
import { Box, TextContainer, HeaderText, SubText, SocialBlock, Image, HeaderSubText } from "./HeroStyles"
import { Section } from '../../styles/GlobalComponents';
import { AiFillGithub, AiFillMediumSquare, AiFillLinkedin } from 'react-icons/ai';
import { FiMail } from 'react-icons/fi';
import ThemeContext from '../../context/ThemeContext';
import ReactTypingEffect from "react-typing-effect"

const Hero = ({ props }) => {
    const theme = useContext(ThemeContext);
    return (
        <Section hero nopadding>
            <Box>
                <TextContainer>
                    <HeaderSubText>
                        Bonjour, je m'appelle
                    </HeaderSubText>
                    <HeaderText>
                        Quentin Fontenay
                    </HeaderText>
                    <SubText>
                        Je suis {" "}
                        <ReactTypingEffect
                            typingDelay={400}
                            eraseSpeed={200}
                            eraseDelay={500}
                            text={["Développeur FullStack", "Développeur Mobile", "Data Scientist"]}
                        />
                    </SubText>
                </TextContainer>
                <SocialBlock>
                    <a href="https://github.com/QuentinFontenay">
                        <AiFillGithub size="3.5rem" color={theme.mode == 'dark' ? 'white' : 'black'} />
                    </a>
                    <a href="https://medium.com/@quentinfontenay">
                        <AiFillMediumSquare size="3.5rem" color={theme.mode == 'dark' ? 'white' : 'black'} />
                    </a>
                    <a href="https://www.linkedin.com/in/quentin-fontenay/">
                        <AiFillLinkedin size="3.5rem" color={theme.mode == 'dark' ? 'white' : 'black'} />
                    </a>
                    <a href="mailto:quentin.fontenay@hotmail.com">
                        <FiMail size="3.5rem" color={theme.mode == 'dark' ? 'white' : 'black'} />
                    </a>
                </SocialBlock>
            </Box>
        </Section>
    )
};

export default Hero;