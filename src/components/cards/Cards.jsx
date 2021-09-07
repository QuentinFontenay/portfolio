import React from 'react';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { CardDesc, CardIcon, CardTitle, CardWrapper, Boxes } from './CardsStyles';

const Cards = (props) => {
    return (
        <Section>
            <SectionDivider />
            <SectionTitle main>{props.titlePart}</SectionTitle>

            <Boxes>
                {
                    props.data.map((card, index) => (
                        <CardWrapper>
                            <CardIcon src={card.icon} />
                            <CardTitle>{card.title}</CardTitle>
                            <CardDesc>{card.desc}</CardDesc>
                        </CardWrapper>
                        // <Box key={index}>
                        //     <BoxNum>{card.icon}</BoxNum>

                        //     <BoxText>{card.text}</BoxText>
                        // </Box>
                    ))
                }
            </Boxes>
        </Section>
    )
};

export default Cards;