import React, { useState, useEffect, useCallback } from 'react'
import { TestimonialText, TestimonialsContainer, QuoteIconContainer, Image, Name2, Title, GroupButton, BlockText, ArrowDown, CarouselDot } from './TestimonialStyles'
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { FaQuoteRight } from 'react-icons/fa';

const Testimonial = ({ testimonials }) => {
  const [slideIndex, setSlideIndex] = useState(1);
  const { name, avatar, position, text, id, alt } = testimonials[slideIndex]
  const MINUTE_MS = 8000;

  const checkTestimonials = useCallback((number) => {
    if (number > testimonials.length - 1) {

      return 0;
    }
    if (number < 0) {

      return testimonials.length - 1;
    }

    return number;
  }, [testimonials]);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((index) => {
        let newIndex = index + 1;
        return checkTestimonials(newIndex)
      });
    }, MINUTE_MS);

    return () => clearInterval(interval);
  });

  const handleDotClick = (index) => {
    setSlideIndex(index);
  }
  return (
    <Section nopadding>
      <SectionTitle>Témoignages</SectionTitle>
      <SectionDivider />
      <TestimonialsContainer>
        <QuoteIconContainer>
          <FaQuoteRight size="6rem" />
        </QuoteIconContainer>
        <div key={id}>
          <Image
            alt={alt}
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
            <TestimonialText>{text}</TestimonialText>
          </BlockText>
        </div>
      </TestimonialsContainer>
      <GroupButton>
        <CarouselDot>
          {testimonials.slice(0, testimonials.length).map((pos, i) => (
            <button
              key={i}
              aria-label="Changer de témoignage"
              onClick={() => handleDotClick(i)}
              className={i === slideIndex ? 'dot active' : 'dot'}
            />
          ))}
        </CarouselDot>
      </GroupButton>
    </Section>
  )
}

export default Testimonial;