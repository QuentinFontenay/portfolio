import React, { useContext } from "react"
import { Box, TextContainer, HeaderText, SubText, SocialBlock, Image } from "./HeroStyles"
import Scroll from "./ScrollSvg";
import { Section } from '../../styles/GlobalComponents';
import HeroImage from '../heroImage/HeroImage';
import { AiFillGithub, AiFillMediumSquare, AiFillLinkedin, AiFillMail } from 'react-icons/ai';
import ThemeContext from '../../context/ThemeContext';

const Hero = ({ props }) => {
    const theme = useContext(ThemeContext);
    return (
        <Section hero nopadding>
            <Box>
                <Image
                    alt="user image"
                    src={new URL('../../../public/images/heroProfile.jpg', import.meta.url)}
                    width={200}
                    height={200}
                    borderRadius="100%"
                    objectFit="cover"
                />
                <TextContainer>
                    <HeaderText>
                        Quentin Fontenay
                    </HeaderText>
                    <SubText>
                        Développeur Full Stack
                    </SubText>
                    {/* <div> */}
                    <ul>
                        <SocialBlock>
                            <a href="https://github.com/QuentinFontenay">
                                <AiFillGithub size="3.5rem" color={theme.mode == 'dark' ? 'white' : 'black'} />
                            </a>
                        </SocialBlock>
                        <SocialBlock>
                            <a href="https://medium.com/@quentinfontenay">
                                <AiFillMediumSquare size="3.5rem" color={theme.mode == 'dark' ? 'white' : 'black'} />
                            </a>
                        </SocialBlock>
                        <SocialBlock>
                            <a href="https://www.linkedin.com/in/quentin-fontenay/">
                                <AiFillLinkedin size="3.5rem" color={theme.mode == 'dark' ? 'white' : 'black'} />
                            </a>
                        </SocialBlock>
                        <SocialBlock>
                            <a href="https://www.linkedin.com/in/quentin-fontenay/">
                                <AiFillMail size="3.5rem" color={theme.mode == 'dark' ? 'white' : 'black'} />
                            </a>
                        </SocialBlock>
                    </ul>
                    {/* </div> */}
                </TextContainer>
                <Scroll></Scroll>
            </Box>
        </Section>
    )
};

export default Hero;