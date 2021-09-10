import React from 'react';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { CardDesc, CardIcon, CardTitle, CardWrapper, Boxes } from './CardsWithImageStyles';

const CardsWithImage = (props) => {
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
                    ))
                }
            </Boxes>
        </Section>
    )
};

export default CardsWithImage;