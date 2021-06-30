import React from 'react';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText, BoxTitle, BoxTitle1, BoxTitle2 } from './FormContactStyles';

const FormContact = () => (
    <Section>
        <SectionDivider />
        <SectionTitle main>Formulaire de contact</SectionTitle>
        <Boxes>
            <Box>
                <BoxTitle>
                    <BoxTitle1>Status</BoxTitle1>
                    <br/>
                    <BoxTitle2>Disponible</BoxTitle2>
                </BoxTitle>
            </Box>
        </Boxes>
    </Section>
);

export default FormContact;