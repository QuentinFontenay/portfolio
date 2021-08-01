import React from 'react';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './CardsStyles';

const Cards = (props) => {
    const sizeElement = props.data.length;
    return (
        <Section>
            <SectionDivider />
            <SectionTitle main>{props.titlePart}</SectionTitle>

            <Boxes nbDisplay={sizeElement}>
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