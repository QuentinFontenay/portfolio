import styled from "styled-components"

export const Wrapper = styled.section`
  display: flex;
  padding: 4em 1rem 0;
  flex-direction: column;
  align-self: center;
  justify-content: center;
`;

export const Text = styled.p`
  text-align: ${props => props.align || 'initial'};
  font-size: ${props => props.size || '100%'};
  font-weight: ${props => props.weight || 'normal'};
  letter-spacing: ${props => props.spacing || 'normal'};
  margin: ${props => props.margin || 0};
  padding: ${props => props.padding || 0};
`;

export const Card = styled.div`
  background: ${({ theme }) => theme.backgroundCard};
  border-radius: 0.5rem;
  margin: 3rem 1rem;
  padding: 2rem;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(1, 1fr);
  grid-column-gap: 1rem;
  grid-row-gap: 2rem;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
  & > .experience {
    grid-area: 1 / 1 / 2 / 2;
    /* margin-top: 0; */
    @media (max-width: 768px) {
      grid-area: 1 / 1 / 3 / 2;
    }
  }
  & > .education {
    /* margin-top: 0; */
    grid-area: 1 / 2 / 2 / 3;
    @media (max-width: 768px) {
      grid-area: 1 / 1 / 1 / 2;
    }
  }
`;

export const CardDescription = styled.div`
  border-left: 0.1rem dashed;
  padding-left: 1rem;
`;