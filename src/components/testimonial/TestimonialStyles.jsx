import styled from 'styled-components'

export const TestimonialsContainer = styled.div`
  position: relative;
  text-align: center;
`;

export const Avatar = styled.span`
  background: #ddd;
  border-radius: 50%;
  display: inline-block;
  height: 6rem;
  margin-top: 1em;
  width: 6rem;
`;

export const TestimonialText = styled.p`
  font-size: 2em;
  margin-bottom: 2em;
  margin-top: 2em;
`;

export const Name = styled.h3`
  font-family: ${({ theme }) => theme.fonts.title};
  margin-bottom: 0.1em;
`;

export const Position = styled.h4`
  margin-top: 0;
`;

export const QuoteIconContainer = styled.div`
  font-size: 3rem;
  opacity: 0.3;
`;

export const Image = styled.img`
  margin-top: 1.5em;
  object-fit: ${props => props.objectFit || 'contain'};
  padding: ${props => props.padding || 0};
  border-radius: ${props => props.borderRadius || 0};
`;

export const Name2 = styled.p`
  font-weight: 700;
  font-size: '1.55rem';
  line-height: '2.375rem';
  @media(max-width: 1050px) {
    font-size: 0.9375rem;
    line-height: 1.25rem;
  }
`

export const Title = styled.span`
  font-weight: 500;
  color: #B9B9CE;
  margin-left: 0.625rem;
`