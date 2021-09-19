import React, { useState } from 'react'
import { TestimonialText, TestimonialsContainer, QuoteIconContainer, Image, Name2, Title, Next, Previous, GroupButton, BlockText, ArrowDown } from './TestimonialStyles'
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { FaQuoteRight } from 'react-icons/fa';
import { FiArrowLeftCircle, FiArrowRightCircle } from 'react-icons/fi';

const Testimonial = ({ testimonials }) => {
  const [slideIndex, setSlideIndex] = useState(1);
  const { name, avatar, position, text, id } = testimonials[slideIndex]

  const checkTestimonials = (number) => {
    if (number > testimonials.length - 1) {

      return 0;
    }
    if (number < 0) {

      return testimonials.length - 1;
    }

    return number;
  };

  const nextTestimonials = () => {
    setSlideIndex((index) => {
      let newIndex = index + 1;
      return checkTestimonials(newIndex)
    });
  }

  const previousTestimonials = () => {
    setSlideIndex((index) => {
      let newIndex = index - 1;
      return checkTestimonials(newIndex)
    });
  }
  return (
    <Section nopadding>
      <SectionDivider />
      <SectionTitle main>Témoignages</SectionTitle>
      <TestimonialsContainer>
        <QuoteIconContainer>
          <FaQuoteRight size="6rem" />
        </QuoteIconContainer>
        <div key={id}>
          <Image
            alt="user image"
            src={avatar}
            width={200}
            height={200}
            borderRadius="100%"
            objectFit="cover"
          />
          <Name2>
            {name}
            <Title>{position}</Title>
          </Name2>
          <ArrowDown></ArrowDown>
          <BlockText>
            <ArrowDown></ArrowDown>
            <TestimonialText>{text}</TestimonialText>
          </BlockText>
        </div>
      </TestimonialsContainer>
      <GroupButton>
        <Previous onClick={previousTestimonials}>
          <FiArrowLeftCircle size="3rem"></FiArrowLeftCircle>
        </Previous>
        <Next onClick={nextTestimonials}>
          <FiArrowRightCircle size="3rem"></FiArrowRightCircle>
        </Next>
      </GroupButton>
    </Section>
  )
}

export default Testimonial;