import React from 'react';
import PropTypes from 'prop-types';
import {
  Section,
  SectionDivider,
  SectionTitle,
} from '../../styles/GlobalComponents';
import { Box, BoxNum, BoxText, Boxes } from './CardsWithImageStyles';

function Cards({ titlePart, data }) {
  return (
    <Section>
      <SectionTitle main>{titlePart}</SectionTitle>
      <SectionDivider />
      <Boxes>
        {data.map((card) => (
          <Box key={card.id}>
            <BoxNum>{card.icon}</BoxNum>
            <BoxText>{card.text}</BoxText>
          </Box>
        ))}
      </Boxes>
    </Section>
  );
}

Cards.propTypes = {
  titlePart: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.func.isRequired,
      text: PropTypes.string,
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Cards;
