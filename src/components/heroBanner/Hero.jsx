import React, { useEffect, useState } from "react"

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { LeftSection } from './HeroStyles';
import { Box, TextContainer, HeaderText, SubText } from "./HeroStyles"
import Button from '../../styles/GlobalComponents/Button';
import { CSSTransition, TransitionGroup } from "react-transition-group"
import ReactTypingEffect from "react-typing-effect"
import HeroImage from "../heroImage/HeroImage";

const Hero = ({ props }) => {

    const stringTyping = ["Developpeur Full Stack", "Développeur Mobile", "un passionnée de nouvelle technologie"]

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
        </Box>
    )
};

export default Hero;