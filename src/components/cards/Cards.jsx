import React from 'react';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, BoxNum, BoxText, Boxes } from './CardsWithImageStyles';

const Cards = (props) => {
    return (
        <Section>
            <SectionDivider />
            <SectionTitle main>{props.titlePart}</SectionTitle>

            <Boxes>
                {
                    props.data.map((card, index) => (
                        <Box key={index}>
                            <BoxNum>{card.icon}</BoxNum>

                            <BoxText>{card.text}</BoxText>
                        </Box>
                    ))
                }
            </Boxes>
        </Section>
    )
};

export default Cards;