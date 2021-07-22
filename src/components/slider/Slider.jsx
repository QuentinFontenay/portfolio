import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import './CSSTransitions.css'
import { StyledSlider, Quote, Byline, Name, Title, Photo, Background } from './SliderStyles'
import SliderButtons from '../sliderButtons/SliderButtons'
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';

const Slider = ({ testimonials, large }) => {
  const [slideIndex, setSlideIndex] = useState(0)

  return (
    <Section nopadding>
      <SectionDivider />
      <SectionTitle main>Témoignages</SectionTitle>
      <Background large={large}>
        <SliderButtons
          slideIndex={slideIndex}
          setSlideIndex={setSlideIndex}
          slideCount={testimonials.length}
          large={large}
        />
        <TransitionGroup>
          <CSSTransition
            key={testimonials[slideIndex].id}
            timeout={400}
            classNames="slide"
          >
            <StyledSlider large={large}>
              <Photo src={testimonials[slideIndex].photo} large={large} alt={`profile photo of ${testimonials[slideIndex].name}`} />
              <Quote large={large}>{testimonials[slideIndex].quote}</Quote>
              <Byline large={large}>
                <Name large={large}>
                  {testimonials[slideIndex].name}
                  <Title large={large}>{testimonials[slideIndex].title}</Title>
                </Name>
              </Byline>
            </StyledSlider>
          </CSSTransition>
        </TransitionGroup>
      </Background>
    </Section>
  )
}

Slider.defaultProps = {
  large: false,
}

Slider.propTypes = {
  testimonials: PropTypes.arrayOf(PropTypes.shape({
    quote: PropTypes.string,
    name: PropTypes.string,
    title: PropTypes.string,
    photo: PropTypes.string,
    id: PropTypes.number.isREquired,
  })).isRequired,
  large: PropTypes.bool,
}

export default Slider