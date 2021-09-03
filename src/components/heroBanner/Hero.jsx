import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { LeftSection } from './HeroStyles';
import Button from '../../styles/GlobalComponents/Button';
import { CSSTransition, TransitionGroup } from "react-transition-group"
import ReactTypingEffect from "react-typing-effect"


const Hero = (props) => (
    <Section hero>
            <SectionTitle main>
                Bonjour, Je suis Quentin Fontenay, Développeur Mobile
            </SectionTitle>
            <SectionText>
            I am a fresher frontend developer and have a year in learning and making side projects with React.JS and multiple UI frameworks.
            </SectionText>
            {/* <Button>
                <a href="/Nguyen Thanh Trung CV.pdf" download="Nguyen Thanh Trung CV.pdf" style={{color: 'white'}}>
                    Télécharger mon CV
                </a>
            </Button> */}
    </Section>
);

export default Hero;