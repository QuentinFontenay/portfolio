import React from 'react';
import PropTypes from 'prop-types';
import {
  Section,
  SectionDivider,
  SectionTitle,
} from '../../styles/GlobalComponents';
import {
  CardDesc,
  CardIcon,
  CardTitle,
  CardWrapper,
  Boxes,
} from './CardsWithImageStyles';

function CardsWithImage({ titlePart, data }) {
  return (
    <Section>
      <SectionTitle main>{titlePart}</SectionTitle>
      <SectionDivider />

      <Boxes>
        {data.map((card) => (
          <CardWrapper key={card.id}>
            <CardIcon alt={card.alt} src={card.icon} />
            <CardTitle>{card.title}</CardTitle>
            <CardDesc>{card.desc}</CardDesc>
          </CardWrapper>
        ))}
      </Boxes>
    </Section>
  );
}

CardsWithImage.propTypes = {
  titlePart: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      text: PropTypes.string,
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default CardsWithImage;
