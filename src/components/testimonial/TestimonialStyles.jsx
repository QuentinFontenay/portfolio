import styled from 'styled-components';

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
  font-size: 1.3em;
  margin-bottom: 2em;
  color: ${({ theme }) => theme.backgroundText};
  padding-left: 4%;
  padding-right: 4%;
  margin-top: 1.2em;
  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: 1em;
  }
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
  object-fit: ${(props) => props.objectFit || 'contain'};
  padding: ${(props) => props.padding || 0};
  border-radius: ${(props) => props.borderRadius || 0};
  @media ${({ theme }) => theme.breakpoints.sm} {
    width: 50%;
    height: 50%;
  }
`;

export const Name2 = styled.p`
  font-weight: 700;
  font-size: '1.55rem';
  line-height: '2.375rem';
  margin-top: 3rem;
  @media (max-width: 1050px) {
    font-size: 0.9375rem;
    line-height: 1.25rem;
  }
`;

export const Title = styled.span`
  font-weight: 500;
  color: #b9b9ce;
  margin-left: 0.625rem;
`;

export const Previous = styled.button`
  font-weight: 500;
  color: #b9b9ce;
`;

export const Next = styled.button`
  font-weight: 500;
  color: #4949cf;
  margin-left: 2rem;
`;

export const GroupButton = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 5vh;
  justify-content: center;
  align-items: center;
`;

export const BlockText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.backgroundCard};
  border-radius: 10px;
  margin-bottom: 3rem;
  @media ${({ theme }) => theme.breakpoints.sm} {
    height: 17vh;
  }
`;

export const ArrowDown = styled.div`
  width: 0;
  height: 0;
  border-left: 25px solid transparent;
  border-right: 25px solid transparent;
  border-bottom: 20px solid ${({ theme }) => theme.backgroundCard};
  margin-left: auto;
  margin-right: auto;
  margin-top: 2rem;
`;

export const CarouselDot = styled.div`
  /* top: 50%; */
  /* transform: translateX(-50%); */
  .dot {
    background: #ccc;
    border: 0;
    border-radius: 50%;
    cursor: pointer;
    height: 2rem;
    margin: 0 0.3rem 0;
    outline: none;
    transform: scale(0.5);
    width: 2rem;

    &.active {
      background: ${({ theme }) => theme.dotTestimonial};
    }
  }
`;
