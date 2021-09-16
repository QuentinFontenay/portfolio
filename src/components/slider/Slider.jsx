import React, { useState } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { TestimonialText, TestimonialsContainer, QuoteIconContainer, Name, Position, Image, Name2, Title } from './SliderStyles'
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { FaQuoteRight } from 'react-icons/fa';

const Slider = ({ testimonials }) => {
  // const [slideIndex, setSlideIndex] = useState(0)

  return (
    <Section nopadding>
      <SectionDivider />
      <SectionTitle main>Témoignages</SectionTitle>
      <TestimonialsContainer>
        <QuoteIconContainer>
          <FaQuoteRight size="6rem" />
        </QuoteIconContainer>
        {testimonials.map(testimonial => (
          <div style={{ paddingBottom: '3rem' }} key={testimonial.name}>
            <Image
              alt="user image"
              src={testimonial.avatar}
              width={200}
              height={200}
              borderRadius="100%"
              objectFit="cover"
            />
            <TestimonialText>{testimonial.text}</TestimonialText>
            <Name2>
              {testimonial.name}
              <Title>{testimonial.position}</Title>
            </Name2>
          </div>
        ))}
      </TestimonialsContainer>
    </Section>
  )
}

export default Slider;