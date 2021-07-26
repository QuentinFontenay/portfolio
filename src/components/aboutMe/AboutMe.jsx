import React from 'react';
import { Section, SectionDivider, SectionTitle, SectionText, SectionSubText } from '../../styles/GlobalComponents';

const AboutMe = () => (
    <Section>
        <SectionDivider />
        <SectionTitle main>A propos de moi</SectionTitle>
        <SectionText>Salut, Je m'appelle Quentin Fontenay, Passionnée de Tech</SectionText>
        <SectionSubText>
            Nam blandit consequat leo, vel blandit elit malesuada in. Aliquam erat volutpat. Vestibulum egestas velit vestibulum tristique auctor. 
            Praesent aliquam imperdiet mauris sodales dignissim. Quisque eget elit laoreet neque maximus auctor ut nec lectus. 
            Aliquam a velit ut lectus scelerisque sodales. Fusce efficitur urna eget erat bibendum placerat. Proin at cursus eros. 
            Maecenas id erat rhoncus, auctor sem a, gravida leo. Phasellus tincidunt, nisl vitae aliquet euismod, metus quam congue arcu, 
            sit amet lobortis massa libero at tortor. Nam ullamcorper fringilla purus, vitae aliquet elit commodo et. 
            Cras elementum metus in massa feugiat, quis suscipit orci ultrices. 
            Pellentesque in nisi odio. Donec tortor magna, sodales ut elit sed, suscipit semper nisl.
        </SectionSubText>
    </Section>
);

export default AboutMe;