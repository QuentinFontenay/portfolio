import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { LeftSection } from './HeroStyles';
import Button from '../../styles/GlobalComponents/Button';


const Hero = (props) => (
    <Section row nopadding>
        <LeftSection>
            <SectionTitle main center>
                Welcome to <br />
                Jett Portfolio
            </SectionTitle>

            <SectionText>
            I am a fresher frontend developer and have a year in learning and making side projects with React.JS and multiple UI frameworks.
            </SectionText>

            <Button>
                <a href="/Nguyen Thanh Trung CV.pdf" download="Nguyen Thanh Trung CV.pdf" style={{color: 'white'}}>
                    Download my CV
                </a>
            </Button>
        </LeftSection> 
    </Section>
);

export default Hero;