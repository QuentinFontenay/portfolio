import React from "react"

import { Box, TextContainer, HeaderText, SubText } from "./HeroStyles"
import Scroll from "./ScrollSvg";

const Hero = ({ props }) => {

    return (
        <Box>
            <TextContainer>
                <SubText>
                    Bonjour, je m'appelle
                </SubText>
                <HeaderText>
                    Quentin Fontenay
                </HeaderText>
                <SubText>
                Développeur Full Stack et Mobile, actuellement situé à Nantes, en France.
                A la recherche de ma première opportunité dans le développement web.
                </SubText>
            </TextContainer>
            <Scroll></Scroll>
        </Box>
    )
};

export default Hero;