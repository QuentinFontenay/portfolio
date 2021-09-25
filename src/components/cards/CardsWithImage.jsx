import React from 'react';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { CardDesc, CardIcon, CardTitle, CardWrapper, Boxes } from './CardsWithImageStyles';

const CardsWithImage = (props) => {
    return (
        <Section>
            <SectionTitle main>{props.titlePart}</SectionTitle>
            <SectionDivider />

            <Boxes>
                {
                    props.data.map((card, index) => (
                        <CardWrapper key={card.id}>
                            <CardIcon alt={card.alt} src={card.icon} />
                            <CardTitle>{card.title}</CardTitle>
                            <CardDesc>{card.desc}</CardDesc>
                        </CardWrapper>
                    ))
                }
            </Boxes>
        </Section>
    )
};

export default CardsWithImage;