import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1280px;
    width: 100%;
    margin: auto;
`;

export const Copyright = styled.span`
  grid-row: 2;
  grid-column: 1/3;
  text-align: center;
  padding: 1em 0;
  width: 100%;
  border-top: 1px solid #242424;
  font-size: 0.9em;
  max-width: unset;
  @media(max-width: 600px) {
    grid-row: 3;
    grid-column: 1;
  }
`