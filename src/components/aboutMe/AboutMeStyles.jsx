import styled from 'styled-components';

export const Image = styled.img`
  object-fit: ${props => props.objectFit || 'contain'};
  margin: ${props => props.margin || 0};
  padding: ${props => props.padding || 0};
  border-radius: ${props => props.borderRadius || 0};
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.backgroundText};
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
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(1, 1fr);
  grid-column-gap: 1rem;
  grid-row-gap: 2rem;
  & > .image-profile {
    justify-self: center;
    align-self: center;
    grid-area: 1 / 1 / 2 / 2;
    @media (max-width: 425px) {
      display: none;
    }
  }
  & > .about {
    grid-area: 1 / 2 / 2 / 5;
    @media (max-width: 425px) {
      grid-area: 1 / 1 / 1 / 5;
    }
  }
  & > .info {
    grid-area: 2 / 1 / 3 / 5;
    display: flex;
    align-items: start;
    justify-content: space-between;
    height: auto;
    @media (max-width: 425px) {
      flex-wrap: wrap;
      justify-content: center;
    }
  }
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: row;
  & > svg {
    float: left;
    margin-right: 15px;
  }
  @media (max-width: 425px) {
    padding-top: 1rem;
  }
`;

export const BlocButton = styled.div`
  display: flex;
  justify-content: flex-end;
`